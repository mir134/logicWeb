const fs = require('fs')
const path = require('path')
const LRU = require('lru-cache')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const favicon = require('serve-favicon')
const compression = require('compression')
const resolve = file => path.resolve(__dirname, file)
const { createBundleRenderer } = require('vue-server-renderer')
const Config = require('./config/options')

const isProd = process.env.NODE_ENV === 'production'
const app = express()
const port = process.env.PORT || Config.port
const templatePath = resolve('./public/index.template.html')
const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd
    ? 1000 * 60 * 60 * 24 * 30
    : 0
})

let renderer
let readyPromise

if (isProd) {
  const template = fs.readFileSync(templatePath, 'utf-8')
  const bundle = require('./dist/vue-ssr-server-bundle.json')
  const clientManifest = require('./dist/vue-ssr-client-manifest.json')
  renderer = createRenderer(bundle, {
    template,
    clientManifest
  })
} else {
  readyPromise = require('./build/setup-dev-server')(
    app,
    templatePath,
    (bundle, options) => {
      renderer = createRenderer(bundle, options)
    }
  )
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser(Config.auth_cookie_name));

app.use(compression({ threshold: 0 }))
// app.use(favicon('./public/logo-48.png'))
app.use('/dist', serve('./dist', true))
app.use('/public', serve('./public', true))
// app.use('/manifest.json', serve('./manifest.json', true))
app.use('/service-worker.js', serve('./dist/service-worker.js'))

/**
 * 本地相关路由
 */
app.use('/ns', (function() {
  const router = express.Router()

  /**
   * 存储token到cookie
   */
  router.post('/signin', (req, res) => {
    let accessToken = req.body.accessToken || null
    if (!accessToken) return res.send({ success: false })

    // let expires = req.body.expires
    res.cookie(Config.auth_cookie_name, accessToken, { path: '/', httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 30 })
    res.send({ success: true })
  })

  /**
   * 清除cookid
   */
  router.post('/signout', (req, res) => {
    res.clearCookie(Config.auth_cookie_name)
    res.send({ success: true })
  })



  return router
}()))

app.get('*', isProd
  ? render
  : (req, res) => {
    readyPromise.then(() => render(req, res))
  })

app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})

/**
 * 開發環境使用的渲染函數
 * @param bundle
 * @param options
 */
function createRenderer(bundle, options) {
  return createBundleRenderer(bundle, Object.assign(options, {
    cache: LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15
    }),
    basedir: resolve('./dist'),
    runInNewContext: false
  }))
}

/**
 * 生產環境使用的渲染函數
 * @param req
 * @param res
 */
function render(req, res) {
  const s = Date.now()
  const accessToken = req.cookies && req.cookies[Config.auth_cookie_name] || null
  const context = { title: '星卫睐-打造国内第一的泛家居物流平台', url: req.url, accessToken}

  const handleError = err => {
    if (err.url) {
      res.redirect(err.url)
    } else if (err.code === 404) {
      res.status(404).send('404 | Page Not Found')
    } else {
      res.status(500).send('500 | Internal Server Error')
      console.error(`error during render : ${req.url}`)
      console.error(err.stack)
    }
  }

  res.setHeader('Content-Type', 'text/html')

  renderer.renderToString(context, (err, html) => {
    if (err) {
      return handleError(err)
    }

    // html = html.replace('data-server-rendered="true"', '')

    res.send(html)
    if (!isProd) {
      console.log(`whole request: ${Date.now() - s}ms`)
    }
  })
}

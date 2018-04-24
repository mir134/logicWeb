import createApp from './modules/logis-web/app'

const isDev = process.env.NODE_ENV !== 'production'

/* eslint-disable consistent-return */
export default context => new Promise((resolve, reject) => {
  const s = isDev && Date.now()
  const { app, router, store } = createApp()

  const { url, accessToken} = context
  const { fullPath } = router.resolve(url).route

  if (fullPath !== url) {
    return reject({code: 404})
  }

  router.push(url)
  router.onReady(() => {
    const matchedComponents = router.getMatchedComponents()
    if (!matchedComponents.length) {
      reject({code: 404})
    }

    const aPromise = matchedComponents.map(({ asyncData }) => asyncData && asyncData({
      store,
      route: router.currentRoute,
      execBy: 'ssr',
      router,
      accessToken,
    }))
    // aPromise.push(store.dispatch('coreLogin/loadUserInfo', { accessToken }))

    Promise.all(aPromise).then(() => {
      isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)// eslint-disable-line no-unused-expressions
      context.state = store.state// eslint-disable-line no-param-reassign
      resolve(app)
    }).catch(reject)
  }, reject)
})
/* eslint-enable consistent-return */

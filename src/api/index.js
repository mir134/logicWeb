import qs from 'qs'
import Axios from 'axios'
import Config from '../../config/options'
import ErrorHandler from './error'

/**
 * axios实例
 * @type {AxiosInstance}
 */
const axiosWrap = Axios.create({
  baseURL: Config.api_url,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
})

/**
 * 请求拦截
 */
axiosWrap.interceptors.request.use((config) => {
  const iConfig = config

  iConfig.url = `${iConfig.url.indexOf('/ns/') === -1
    ? Config.api_version
    : ''}${config.url}`

  if (iConfig.method === 'post' && iConfig.headers && iConfig.headers['Content-Type'] && iConfig.headers['Content-Type'].indexOf('application/x-www-form-urlencoded') !== -1) {
    iConfig.data = qs.stringify(iConfig.data)
  }

  return iConfig
})

/**
 * 响应拦截
 */
axiosWrap.interceptors.response.use((res) => {
  if (res.data.success) {
    if (!res.data.page) {
      return res.data.data
    }
    return res.data
  }

  ErrorHandler.showMsg(res.data.error)
  return Promise.reject(ErrorHandler.format(res.data.error))
}, (result) => {
  const { response: { data } } = result

  ErrorHandler.showMsg(data.error)
  return Promise.reject(data)
})

export default axiosWrap

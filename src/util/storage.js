/**
 * 前缀
 * @type {string}
 */
const perfix = 'xx-'

/**
 * 获取浏览器缓存数据
 * @param key 关键字
 * @param defaultValue 默认数据
 * @param type 若不传，默认使用localStorage，若传'session'，则使用sessionStorage
 * @returns {*}
 */
function get(key, defaultValue, type) {
  let storage = window.localStorage

  if (type === 'session') {
    storage = window.sessionStorage
  }

  return typeof storage[perfix + key] === 'undefined'
    ? defaultValue
    : JSON.parse(storage[perfix + key])
}

/**
 * 设置浏览器缓存数据
 * @param key 关键字
 * @param value 数据
 * @param type 若不传，默认使用localStorage，若传'session'，则使用sessionStorage
 * @returns {*}
 */
function set(key, value, type) {
  let storage = window.localStorage

  if (type === 'session') {
    storage = window.sessionStorage
  }

  storage[perfix + key] = JSON.stringify(value)
}

export default {
  get,
  set,
}

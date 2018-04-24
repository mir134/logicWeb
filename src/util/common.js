/**
 * 根据字符串，获取对象中的属性
 * 若字符串中使用了点运算法，则逐层获取
 * @param obj
 * @param str
 * @returns {null}
 */
function getByDot(obj, str) {
  if (str && typeof str !== 'string') {
    throw TypeError('str is not a string in function getByDot!')
  }

  if (!obj || !str) {
    return null
  }

  const arr = str.split('.')
  let i = 0
  let result = obj
  let curStr

  while (arr.length) {
    curStr = arr[i]

    if (result[curStr]) {
      result = obj[curStr]
    } else {
      return null
    }

    i += 1
  }

  return result
}

/**
 * 格式化日期
 * @param value 日期：Date()|String('2017-7-14 12:00:00')
 * @param fmt 日期格式：yyyy-MM-dd hh:mm:ss
 * @returns {*}
 */
function formatDate(value, fmt) {
  if (value) {
    if (typeof value === 'string' && value.indexOf('T') === -1) {
      value = value.replace(/-/g, '/')
    }

    const da = new Date(value)
    const o = {
      'M+': da.getMonth() + 1, // 月份
      'd+': da.getDate(), // 日
      'h+': da.getHours(), // 小时
      'm+': da.getMinutes(), // 分
      's+': da.getSeconds(), // 秒
      'q+': Math.floor((da.getMonth() + 3) / 3), // 季度
      S: da.getMilliseconds(), // 毫秒
    }

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (da.getFullYear() + '').substr(4 - RegExp.$1.length))
    }

    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1)
          ? (o[k])
          : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }

    return fmt
  }
  return value
}

export {
  getByDot,
  formatDate,
}

/**
 *
 * @param vm
 * @returns {*}
 */
function getTitle(vm) {
  const { title } = vm.$options
  if (title) {
    return typeof title === 'function'
      ? title.call(vm)
      : title
  }
  return ''
}

/**
 * 服务器端渲染页面时，要混入的方法，用于设置页面标题
 * @type {{created(): void}}
 */
const serverTitleMixin = {
  created() {
    const title = getTitle(this)
    if (title) {
      this.$ssrContext.title = title
    }
  },
}

/**
 * 客户端渲染页面时，要混入的方法，用于设置页面标题
 * @type {{mounted(): void}}
 */
const clientTitleMixin = {
  mounted() {
    const title = getTitle(this)
    if (title) {
      document.title = title
    }
  },
}

export default process.env.VUE_ENV === 'server'
  ? serverTitleMixin
  : clientTitleMixin

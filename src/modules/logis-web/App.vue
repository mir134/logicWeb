<template>
  <div id="app">
   <web-header></web-header>
      <transition>
            <router-view></router-view>
      </transition>
   <web-footer></web-footer>
      <div class="copy">
		Copyright © 2015 Wliu Co.,Ltd.    沪ICP备00000000号    上海市浦东新区八嘎路2222号
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
import webHeader from './component/header.vue'
import webFooter from './component/footer.vue'


export default {
  components: {
    webHeader,
    webFooter,
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="stylus" >

</style>

<template>
 <footer>
      <div class="width1003">
       <ul v-for="item in menus" :key="item.name" v-if="item.sub.length>0">
        <li class="ft-title">{{item.name}}</li>
        <li  v-for="sub in item.sub" :key="sub.name">
            <router-link  :to="sub.url" v-if="sub.url != ''">
                {{sub.name}}
             </router-link>
        </li>
       </ul>
       <div class="footcontact">
        <h2 class="ft-title">联系我们</h2>
        <div class="fttext">
         总部地址：上海市普陀区怒江北路598号红星世贸大厦B座25楼<br />

        </div>
        <dl>
         <dt><img src="/public/images/weixin.jpg" width="90" height="91" /></dt>
         <dd>
          公司微信公众号平台，最新资讯，一扫了之！敬请关注!
         </dd>
         <div class="clearfix"></div>
        </dl>
       </div><!--footcontact/-->
       <div class="clearfix"></div>
      </div><!--width1003/-->
     </footer>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters(['menus'])
    }
}
</script>

<style lang="stylus" >

</style>

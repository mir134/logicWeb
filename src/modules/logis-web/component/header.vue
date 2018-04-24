<template>
    <div>
          <div class="header">
              <div class="width1003">
               <h1 class="logo"><router-link to="/"><img width="200px" src="/public/images/logo.png"></router-link></h1>
               <div class="topLink">
                <a href="#" class="tl1">联系我们</a>
                <a href="#" class="tl2">投诉建议</a>
                <a href="#" class="tl3">下载中心</a>
                <a href="#" class="tl4">人才招聘</a>
               </div><!--topLink/-->
               <div class="phones">
                <div><a href="javascript:;" onclick="AddFavorite(window.location,document.title)">加入收藏</a>&nbsp;
                <a href="javascript:;" onclick="SetHome(this,window.location)">设为首页</a></div>
                <p>服务热线：<strong>4001001199</strong></p>
               </div><!--phones/-->
               <div class="clears"></div>
              </div><!--width1003/-->
          </div><!--header/-->
          <div class="nav-toggle">
              <div class="nav-open"><span class="glyphicon glyphicon-th-list"></span></div>
              <div class="nav-close"><span class="glyphicon glyphicon-remove"></span></div>
             </div>
          <div class="clearfix"></div>
          <div class="nav">
              <ul class="width1003">
               <li v-if="menus" v-for="item in menus" :key="item.name">
                   <router-link :to="item.url" v-if="item.url != ''">
                            {{item.name}}
                   </router-link>
                   <div class="chilNav" v-if="item.sub.length>0">
                       <router-link v-for="sub in item.sub" :key="sub.name" :to="sub.url" v-if="sub.url != ''">
                            {{sub.name}}
                        </router-link>
                    </div>
               </li>

               <div class="clears"></div>
              </ul>
             </div><!--nav/-->
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return {

        }
    },
    computed: {
        ...mapGetters(['menus'])
    },
    methods: {},
}
</script>

<style lang="stylus" >

</style>

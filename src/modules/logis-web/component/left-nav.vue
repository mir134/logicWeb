<template>
    <div class="content-left">
        <h2 class="left-title">{{subMenus && subMenus.name}}</h2>
        <ul class="leftNav">
         <li v-for="item in subMenus.sub" :key="item.name"  :class="{'leftNavCur': curPath == item.url}">
            <router-link :to="item.url"  v-if="item.url != ''">
                            {{item.name}}
            </router-link>
         </li>
        </ul>
        <div class="lefticon">
         <a href="javascript:;"><img src="/public/images/icon1.jpg" /><br />联系</a>
         <a href="javascript:;"><img src="/public/images/icon2.jpg" /><br />投诉</a>
         <a href="javascript:;"><img src="/public/images/icon3.jpg" /><br />下载</a>
         <a href="javascript:;"><img src="/public/images/icon4.jpg" /><br />招聘</a>
        </div>
    </div><!--content-left/-->
</template>

<script type="text/ecmascript-6">
    import { mapGetters, mapActions } from 'vuex'
    export default {
        props: ['subMenus'],
        data () {
            return {}
        },
        computed:{
            curPath(){
              return this.$route.path
          }
        },
        watch: {},
        mounted () {
        },
        methods: {},
        components: {}
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" >

</style>

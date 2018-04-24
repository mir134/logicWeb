<template>
    <div>
        <div class="content">
      <div class="width1003">
       <left-nav :subMenus="menus[1]"></left-nav>
       <div class="content-right">
        <h2 class="right-title">企业文化</h2>
        <div class="Article">
            <vue-markdown :source="about"></vue-markdown>
        </div><!--Article/-->
       </div><!--content-right/-->
       <div class="clearfix"></div>
      </div><!--width1003/-->
     </div><!--content/-->
    </div>
</template>

<script type="text/ecmascript-6">
    import leftNav from '../component/left-nav.vue'
    import { mapGetters, mapActions } from 'vuex'
    import VueMarkdown from 'vue-markdown'
    import culture from '../../../../public/md-page/culture.md'
    export default {
        components: {leftNav,VueMarkdown},
        data () {
            return {
                msg: culture
            }
        },
        computed: {
            ...mapGetters(['menus'])
        },
        watch: {},
        asyncData ({store}) {
        
        },
        mounted () {
        
        },
        methods: {},

    }
</script>

<style rel="stylesheet/stylus" lang="stylus" >

</style>

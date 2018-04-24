<template>
    <div>
        <div class="content">
      <div class="width1003">

        <div class="Article">
            <vue-markdown :source="msg"></vue-markdown>
        </div><!--Article/-->

      </div><!--width1003/-->
     </div><!--content/-->
    </div>
</template>

<script type="text/ecmascript-6">
    import leftNav from '../component/left-nav.vue'
    import { mapGetters, mapActions } from 'vuex'
    import VueMarkdown from 'vue-markdown'
    import college from '../../../../public/md-page/college.md'
    export default {
        components: {leftNav,VueMarkdown},
        data () {
            return {
                msg: college
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

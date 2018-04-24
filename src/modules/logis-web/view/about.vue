<template>
    <div>
        <div class="content">
      <div class="width1003">
       <left-nav :subMenus="menus[1]"></left-nav>
       <div class="content-right">
        <h2 class="right-title">上海星卫睐供应链管理有限公司简介</h2>
        <div class="Article">
         <img src="/public/images/aboutimg.jpg" /><br /><br>

            上海星卫睐供应链管理有限公司是一家专注于满足现代家居物流需求的创新型互联网平台企业，由红星美凯龙集团公司投资并控股。我们以丰富的互联网基因及专业的家居物流行业知识和经验致力于打造国内第一大泛家居物流平台，为客户提供家居范畴的供应链管理服务及各类后市场增值服务，通过“互联网+家居物流”的模式，致力于用数据和服务引导协同，在厂家、商家、师傅及终端消费者之间建立广泛链接，并且改变家居物流行业服务现状，通过降低成本，提升效率，完善服务、推进标准、服务认证来提升家居物流服务水准，促进家居物流产业的集约化发展和升级，为市场提供一个更具竞争力、更便捷的家居物流服务网络。

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
    export default {
        components: {leftNav},
        data () {
            return {}
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

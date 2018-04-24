<template>
    <div>
     <!-- Swiper -->
        <div class="carousel-content">
            <el-carousel height="440px"  ref="carousel">
                <el-carousel-item  v-show="index == 0" v-for="(item ,index) in $store.getters.carouselList" :key="item.id" :name="index+''">
                    <div class="carousel-img">
                        <router-link :to="item.linkUrl" v-if="item.linkUrl != ''">
                            <img :src="item.imgPath">
                        </router-link>
                        <img :src="item.imgPath" v-else>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    <!-- Swiper JS -->
     <div class="content">
          <div class="width1003">
           <h2 class="title">产品与服务 <span>/ Proudct & Service</span></h2>
           <div class="index-pro">
            <dl>
             <a href="product.html">
              <dt><img src="/public/images/pcon1.png" width="100" height="100" /></dt>
              <dd>
               <h3>快运产品</h3>
               <p>运输快捷，经济实用</p>
              </dd>
             </a>
            </dl>
            <dl>
             <a href="product.html">
              <dt><img src="/public/images/pcon2.png" width="100" height="100" /></dt>
              <dd>
               <h3>定制产品</h3>
               <p>安全保价，放心托运</p>
              </dd>
             </a>
            </dl>
            <dl>
             <a href="product.html">
              <dt><img src="/public/images/pcon3.png" width="100" height="100" /></dt>
              <dd>
               <h3>增值服务</h3>
               <p>运输快捷，经济实用</p>
              </dd>
             </a>
            </dl>
            <dl>
             <a href="product.html">
              <dt><img src="/public/images/pcon4.png" width="100" height="100" /></dt>
              <dd>
               <h3>整车转运</h3>
               <p>专业打包，暖心服务</p>
              </dd>
             </a>
            </dl>
            <dl>
             <a href="product.html">
              <dt><img src="/public/images/pcon5.png" width="100" height="100" /></dt>
              <dd>
               <h3>仓储物流</h3>
               <p>定时定点，足不出户</p>
              </dd>
             </a>
            </dl>
            <div class="clearfix"></div>
           </div><!--index-pro/-->
          </div><!--width1003/-->
          <div class="index-search">
           <div class="width1003">
            <h2 class="title">自助查询 <span>/ Self Inquiry</span></h2>
            <div class="index-search-list">
             <div class="isl-box">
              <h2>运单查询</h2>
              <form action="#" method="get">
               <div class="islinput"><input type="text" placeholder="请输入运单号" /></div>
               <div class="islsub"><input type="submit" value="查询" /></div>
              </form>
             </div>
            </div><!--index-search-list/-->
            <div class="index-search-list">
             <div class="isl-box">
              <h2>网点查询</h2>
              <form action="#" method="get">
               <div class="islinput"><input type="text" placeholder="请输入市区" /></div><br>

               <div class="islinput"><input type="text" placeholder="街道名称" /></div>
               <div class="islsub"><input type="submit" value="查询" /></div>
              </form>
             </div>
            </div><!--index-search-list/-->
            <div class="index-search-list">
             <div class="isl-box">
              <h2>订单查询</h2>
              <form action="#" method="get">
               <div class="islinput"><input type="text" placeholder="请输入订单号" /></div>
               <div class="islsub"><input type="submit" value="查询" /></div>
              </form>
             </div>
            </div><!--index-search-list/-->
            <div class="clearfix"></div>
           </div><!--index-search/-->
          </div><!--index-search/-->
          <div class="width1003">
           <h2 class="title">新闻快讯 <span>/ News</span></h2>
           <div class="index-new">
            <ul class="new fl">
             <li><a href="newinfo.html">习近平会见奥巴马:中美应坚持不冲突不对抗</a><span>2015-11-30</span></li>
             <li><a href="newinfo.html">传统出租公司加速进军专车市场 逆袭</a><span>2015-11-30</span></li>
             <li><a href="newinfo.html">中纪委秒杀8“虎”：从抓到通报最</a><span>2015-11-30</span></li>
             <li><a href="newinfo.html">村民阻运煤专线施工被关铁笼 官方：自</a><span>2015-11-30</span></li>
             <li><a href="newinfo.html">山东邹平工厂煤气泄致17人中毒 目前已</a><span>2015-11-30</span></li>
             <li><a href="newinfo.html">分期乐CEO肖文杰：做理性的创业者绝不</a><span>2015-11-30</span></li>
             <li><a href="newinfo.html">桑兰晒赴美面签申请自证清白 称未申请政治</a><span>2015-11-30</span></li>
            </ul>
            <div class="inde-new-img fr">
             <img src="/public/images/n1.png" />
            </div>
            <div class="clearfix"></div>
           </div><!--index-new/-->
          </div><!--width1003/-->
          <div class="links">
           <div class="width1003">
            <h2 class="title">合作伙伴 <span>/ Partners</span></h2>
            <ul>
             <li><a href="javascript:;"><img src="/public/images/link1.jpg" /></a></li>
             <li><a href="javascript:;"><img src="/public/images/link2.jpg" /></a></li>
             <li><a href="javascript:;"><img src="/public/images/link3.jpg" /></a></li>
             <li><a href="javascript:;"><img src="/public/images/link4.jpg" /></a></li>
             <li><a href="javascript:;"><img src="/public/images/link5.jpg" /></a></li>
             <li><a href="javascript:;"><img src="/public/images/link6.jpg" /></a></li>
             <li><a href="javascript:;"><img src="/public/images/link7.jpg" /></a></li>
             <li><a href="javascript:;"><img src="/public/images/link8.jpg" /></a></li>
             <li><a href="javascript:;"><img src="/public/images/link9.jpg" /></a></li>
             <li><a href="javascript:;"><img src="/public/images/link1.jpg" /></a></li>
             <div class="clearfix"></div>
            </ul>
           </div><!--width1003/-->
          </div><!--links/-->
         </div><!--content/-->
        </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return {}
        },
        computed: {},
        watch: {},

        mounted () {
        
        },
        methods: {},
        components: {}
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" >
/*轮播图*/
.carousel-content
    position: relative
    width: 100%
    .el-carousel__button
        width: 10px
        height: 10px
        border-radius: 10px
    .el-carousel__indicator.is-active .el-carousel__button
        width: 30px
    .carousel-img img
        position: absolute
        min-width: 1003px
        left: 50%
        height: 440px
        width: 1600px
        margin-left: -800px
</style>

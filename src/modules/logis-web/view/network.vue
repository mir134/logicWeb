<template>
    <div class="content" id="map" style="height: 440px">

    </div>
</template>

<script type="text/ecmascript-6">
    import {MP, getPointsdata} from '../../../util/map'
    export default {
        data () {
            return {}
        },
        computed: {},
        watch: {},

        mounted () {
            let _this = this
            this.$nextTick(() => {
                MP('PZN65MMs5biSIPxZWjI3xDmt').then( BMap => {
//                    console.log('加载地图开始');
                    var map = null
                   function  GetElement(lng, lat) {
//                        console.log(' 传入参数：' + lng + ',' + lat);
                        var data = getPointsdata();
                        for (var i = 0; i < data.length; i++) {
                            //console.log('数组元素' + i + ':' + data[i][0] + ',' + data[i][1]);
                            if (data[i][0] == lng && data[i][1] == lat) {
                                return data[i];
                            }
                        }
                        return [lng, lat, "坐标未找到！"];

                    }
                    if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
                        var data = getPointsdata();
//                        console.log(data);
                        var points = [];  // 添加海量点数据
                        for (var i = 0; i < data.length; i++) {
                            points.push(new BMap.Point(data[i][0], data[i][1]));
                        }

                        var myIcon = new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/fox.gif", new BMap.Size(300, 157));
                        if (window.screen.width < 619) {
                            map = new BMap.Map("map", { minZoom: 4, maxZoom: 10 });  // 创建Map实例
                            map.centerAndZoom(new BMap.Point(105.000, 38.000), 4);     // 初始化地图,设置中心点坐标和地图级别
                            map.enableScrollWheelZoom();//启用滚轮放大缩小
                            map.disableAutoResize();
                            map.disableDoubleClickZoom();
                            map.disableInertialDragging();
                            var options = {
                                size: BMAP_POINT_SIZE_BIG,
                                shape: BMAP_POINT_SHAPE_WATERDROP,//BMAP_POINT_SHAPE_STAR//BMAP_POINT_SHAPE_CIRCLE
                                color: '#FF0000'
                            }
                        } else {
                            map = new BMap.Map("map", { minZoom: 5, maxZoom: 10 });  // 创建Map实例
                            map.centerAndZoom(new BMap.Point(105.000, 38.000), 5);     // 初始化地图,设置中心点坐标和地图级别
                            map.enableScrollWheelZoom();//启用滚轮放大缩小
                            var options = {
                                size: BMAP_POINT_SIZE_BIG,
                                shape: BMAP_POINT_SHAPE_WATERDROP,
                                color: '#FF0000'
                            }
                        }
                        //var marker = new BMap.Marker(points, { icon: myIcon });  // 创建标注
                        //map.addOverlay(marker);

                        var pointCollection = new BMap.PointCollection(points, options);  // 初始化PointCollection
                        map.addOverlay(pointCollection);  // 添加Overlay
                        if (window.screen.width < 619) {
                            pointCollection.addEventListener('click', function (e) {
                                var element = GetElement(e.point.lng, e.point.lat)
                                //console.log('移动终端：' + element[2]);
                                //提示层

//                                _this.$message(element[2] + ' 有我们的安装师傅了！')
                                _this.$notify({
                                    title: '星仓网点',
                                    message: element[2] + ' 有我们的星仓网点了！'
                                });
//                                initLayer().then(layer=>layer.msg(element[2] + ' 有我们的安装师傅了！'))
                            });
                        } else {
                            pointCollection.addEventListener('onmouseover', function (e) {
                                var element = GetElement(e.point.lng, e.point.lat)
                               // console.log('电脑终端：' + element[2]);
                                //提示层
                                //_this.$message(element[2] + ' 有我们的安装师傅了！')
                                _this.$notify({
                                    title: '星仓网点',
                                    message: element[2] + ' 有我们的星仓网点了！'
                                });
//                                initLayer().then(layer=>layer.msg(element[2] + ' 有我们的安装师傅了！'))
                            });
                        }

                    } else {
                        alert('请在chrome、safari、IE8+以上浏览器查看本网页');
                    }
                    console.log('加载地图结束');
                })
            })
        },
        methods: {

        },
        components: {}
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" >

</style>

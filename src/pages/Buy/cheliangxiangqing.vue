<template>
  <!-- 页面盒子 -->
  <div class="page flex-col">
    <!-- 组盒子-放置背景图 -->
    <div class="group flex-col">
      <!-- 图象包1 -->
      <div class="image-wrapper_1 flex-row">
        <div class="img1 ">
          <img class="img1-0" src="../../assets/pages/Buy/cheliangxiangqing/feature_icons1.png" @click="this.$router.go(-1)">
          <img class="img1-1" src="../../assets/pages/Buy/cheliangxiangqing/feature_icons2.png">
          <img class="img1-2" src="../../assets/pages/Buy/cheliangxiangqing/feature_icons3.png">
          <img class="img1-3" src="../../assets/pages/Buy/cheliangxiangqing/elliptical1.png">
        </div>
        <div class="img2 " style="display: flex;">
          <div class="box_1">
            <img class="img2-1" src="../../assets/pages/Buy/cheliangxiangqing/feature_icons4.png">
            <p class="img2-p1">参数配置</p>
          </div>
          <div>
            <p class="img2-p2">2/16</p>
          </div>

        </div>
      </div>
      <div class="group-2 flex-col">
        <div class="group-3 flex-row">
          <span>588ku. 2016款 2.0T 自动尊享型 带天窗</span>
        </div>
        <div class="group-4 " style="display: flex;">
          <p class="group4-1">金牌认证</p>
          <p class="group4-2">性价比超高</p>
        </div>
        <div class="group-5 flex-col" style="display: flex;">
          <div class="group-6 flex-row" style="display: flex;">
            <p class="group6-1">¥</p>
            <p class="group6-2">5.2</p>
            <p class="group6-1">万</p>
          </div>
          <div class="group-7 flex-row" style="display: flex;">
            <p>首付：0.89万</p>
            <p class="group7-1">月供2203元</p>
          </div>
        </div>
      </div>
      <div class="group-8 flex-col">
        <div class="files1 ">
          <span>车辆档案</span>
        </div>
      </div>
      <div class="group-9 flex-col">
        <div class="group9-1">
          <p class="group9-2">2016年03月上映</p>
          <p class="group9-3">3年4个月</p>
        </div>
        <div class="group9-4">
          <p class="group9-2">表显里程</p>
          <p class="group9-3">3.6万公里</p>
        </div>
        <div class="group9-4">
          <p class="group9-2">排放标准</p>
          <p class="group9-3">国5</p>
        </div>
      </div>
      <div class="group-10 flex-col" style="display: flex;">
        <div class="group9-1">
          <p class="group9-2">颜色</p>
          <p class="group9-3">白色</p>
        </div>
        <div class="group10-1">
          <p class="group9-2">自然吸气</p>
          <p class="group9-3">2.0L</p>
        </div>
        <div class="group10-2">
          <p class="group9-2">提车时间</p>
          <p class="group9-3">5-7天</p>
        </div>
      </div>
      <div class="group-11 flex-col">
        <div class="files1 ">
          <span>购车服务</span>
        </div>
      </div>
      <div class="group-12" style="display: flex;">
        <p class="group12-1">认证服务</p>
        <p class="group12-2">315项检测 无重大事故 无水泡 无火烧</p>
      </div>

    </div>
    <div class="shield"></div>
    <div class="bottom">
      <div class="image_div" v-for="item in box_list">
        <img class="label_3" referrerpolicy="no-referrer"
             src="../../assets/pages/Buy/cheliangxiangqing/pk_icons.png" />
        <span class="text-group_9">对比</span>
      </div>
      <div class="image_div" v-for="item in box_list">
        <img class="label_3" referrerpolicy="no-referrer"
             src="../../assets/pages/Buy/cheliangxiangqing/favorite_icons.png" />
        <span class="text-group_9">收藏</span>
      </div>
      <div class="image_div1" v-for="item in box_list">
        <span class="text-group_10">电话咨询</span>
      </div>
      <div class="image_div2" v-for="item in box_list">
        <span class="text-group_10">在线咨询</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cheliangxiangqing"
};
</script>

<style scoped>
/*公共样式*/
* {
  /*初始化外边距*/
  margin: 0;
  /*初始化内边距*/
  padding: 0;
  /*盒子模型宽高内减操作*/
  box-sizing: border-box;
}

html {
  font-size: 2.1333vw;
}

ul,
li {
  /*去除列表的样式符号*/
  list-style: none;
}

input {
  /*去除input的边框*/
  border: none;
}

a {
  /*去除下划线*/
  text-decoration: none;
}

body {
  margin: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}

.page {
  position: relative;
  width: 100vw;
  height: 177.8667vw;
  overflow-x: hidden;
}

.group {
  position: relative;
  width: 100%;
  height: 66.6667vw;
  background: url(../../assets/pages/Buy/cheliangxiangqing/background_image.png) 100% no-repeat;
  background-size: 100% 100%;
}

.image-wrapper_1 {
  width: 100.4667vw;
  height: 8.7333vw;

}

.img1 {
  /* width: 5.7333vw; */
  height: 5.7333vw;
  padding-top: 6.6667vw;
  margin-left: 5.3333vw;
}

.img1-0 {
  width: 6vw;
}

.img1-1 {
  width: 4vw;
  margin-left: 72vw;
}

.img1-2 {
  width: 4vw;
  margin-left: 3.3333vw;
}

.img1-3 {
  width: 0.8vw;
  margin-left: -1.8vw;
  margin-bottom: 3.5vw;
}

.img2 {
  margin: 40vw 0 0 5.3333vw;
}

.box_1 {
  width: 16vw;
  margin-left: 2vw;
}

.img2-1 {
  width: 6vw;
}

.img2-p1 {
  color: rgb(250, 250, 250);
  margin-left: -4vw;
  margin-top: -0.1333vw;
  font-size: xx-small;
  transform: scale(0.8);
}

.img2-p2 {
  color: rgb(250, 250, 250);
  margin-left: 64.3333vw;
  margin-top: 7.1333vw;
  font-size: xx-small;
}

.img3 {
  width: 3.7333vw;
  height: 4.1333vw;
  margin: 0.8vw 0 0 2.5333vw;
}

.group-2 {
  background: url(../../assets/pages/Buy/cheliangxiangqing/background_frame2.png);
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 2.6667vw;
  height: 73.3333vw;
  width: 93vw;
  position: absolute;
  left: 3.9333vw;
  top: 59.3333vw;
}

.group-3 {
  overflow-wrap: break-word;
  color: rgba(40, 40, 40, 1);
  font-size: 3.6vw;
  font-family: Adobe Heiti Std R;
  font-weight: bold;
  text-align: left;
  white-space: nowrap;
  line-height: 6.5333vw;
  margin-left: 3.9vw;
  margin-top: 5vw;
}

.group4-1 {
  background-color: rgb(221, 221, 221);
  width: 22vw;
  height: 4.8vw;
  font-size: x-small;
  text-align: center;
  margin-left: 2.5vw;
  margin-top: 2.3vw;
  border-radius: 3vw;
  transform: scale(0.8);
}

.group4-2 {
  background-color: rgb(221, 221, 221);
  width: 22vw;
  height: 4.8vw;
  font-size: x-small;
  text-align: center;
  margin-left: 0vw;
  margin-top: 2.3vw;
  border-radius: 3vw;
  transform: scale(0.8);
}

.group-5 {
  width: 89vw;
  height: 20vw;
  margin-left: 4vw;
  margin-top: 7vw;
}

.group-6 {
  color: #fd0000;
  width: 16vw;
}

.group-7 {
  font-size: 1vw;
  margin-left: 26vw;
}

.group6-1 {
  font-size: 1vw;
  margin-top: 1vw
}

.group6-2 {
  font-size: 5vw;
  margin-top: -0.8vw;
}

.group7-1 {
  margin-left: 4vw;
}

.group-8 {
  border-top: 1.3vw solid rgb(227 230 233);
  border-bottom: 0.5vw solid rgb(245 245 245);
  margin-top: 90vw;
  height: 9vw;
}

.files1 {
  margin-left: 4vw;
  font-weight: bold;
  margin-top: 1.4vw;
}

.group-9 {
  width: 100vw;
  display: flex;
}

.group9-1 {
  margin-top: 3vw;
  margin-left: 4vw;
}

.group9-2 {
  font-size: 1vw;
}

.group9-3 {
  font-weight: bold;
  margin-top: 2vw;
  font-size: 4.5vw;
}

.group9-4 {
  margin-top: 3vw;
  margin-left: 15vw;
}

.group-10 {
  margin-top: 1vw;
}

.group10-1 {
  margin-left: 29vw;
  margin-top: 3vw;
}

.group10-2 {
  margin-left: 24vw;
  margin-top: 3vw;
}

.group-11 {
  border-top: 1.3vw solid rgb(227 230 233);
  border-bottom: 0.5vw solid rgb(245 245 245);
  height: 9vw;
  margin-top: 4vw;
}

.group-12 {
  display: flex;
  margin-top: 5vw;
  margin-left: 4vw;

}

.group12-1 {
  margin-top: 0vw;
  font-size: 3vw;
}

.group12-2 {
  margin-left: 10vw;
  margin-top: 0vw;
  font-size: 1vw
}

/*底部导航栏防覆盖*/
.shield {
  margin-bottom: 12.6667vw
}

/*底部导航栏*/
.bottom {
  background-color: rgba(255, 255, 255, 1);
  left: 0;
  /*position: absolute;*/
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 12.6667vw;
  border: 0.1333vw solid rgba(229, 229, 229, 1);

  display: flex;
  justify-content: space-around;
}

/*底部导航栏图片盒*/
.bottom .image_div {
  width: 6.1333vw;
  height: 9.8667vw;
  margin-top: 1.2vw;
}

/*底部导航栏图片*/
.bottom .image_label {
  width: 5.0667vw;
  height: 4.5333vw;
  margin-left: 0.5333vw;
}

/*导航名*/
.bottom .text-group {
  height: 3.2vw;
  overflow-wrap: break-word;
  color: rgba(30, 30, 30, 1);
  font-size: 3.2vw;
  text-align: center;
  white-space: nowrap;
  line-height: 6.5333vw;
  margin-top: 2.1333vw;
}

.label_3 {
  width: 5.0667vw;
  height: 4.5333vw;
  margin-left: 0.5333vw;
}

.text-group_9 {
  width: 6.1333vw;
  height: 3.2vw;
  overflow-wrap: break-word;
  color: rgba(30, 30, 30, 1);
  font-size: 3.2vw;
  font-family: SourceHanSansCN-Regular;
  font-weight: bold;
  text-align: left;
  white-space: nowrap;
  margin-top: 0.6667vw;
}

.bottom .image_div1 {
  width: 20.1333vw;
  height: 7.8667vw;
  margin-top: 2.4vw;
  background: url(../../assets/pages/Buy/cheliangxiangqing/telephone_consultation.png);
  background-size: contain;
  /* position: absolute; */
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 19vw;
}

.bottom .image_div2 {
  width: 20.1333vw;
  height: 7.8667vw;
  margin-top: 2.4vw;
  background: url(../../assets/pages/Buy/cheliangxiangqing/online_consultation.png);
  background-size: contain;
  /* position: absolute; */
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -5vw;
}

.text-group_10 {
  font-size: 4vw;
  font-family: "SourceHanSansCN";
  color: rgb(255, 255, 255);
  line-height: 1.642;
  position: absolute;
  /* left: 357.33px; */
  /* top: 1312.9px; */
  z-index: 54;
}

</style>

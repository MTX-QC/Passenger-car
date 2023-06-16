<template>

<img src="../assets/pages/Sell/index/BJ1.png" class="BJ1" type="">
  <div class="box-1-1">
    <img src="../assets/pages/Sell/index/JX1.png" class="JX1">
    <span class="text-1">我要卖车</span>
    <img src="../assets/pages/Sell/index/JX2.png" class="JX2">
  </div>


  <div class="box-2">
    <div class="box-2-1">
      <span class="SZ1">256235</span>
      <span class="text-2">车辆已成功卖出</span>
    </div>
    <div class="JX3"><span class="text-2-1">预约卖车</span></div>
    <div class="box-2-2 ">
      <div class="JX4"><span class="text-2-2"  @click="this.$router.push({ name:'dialogue'})">免费咨询</span></div>
      <div class="JX5"><span class="text-2-2" @click="this.$router.push({ name:'evaluate'})">爱车估价</span></div>
    </div>
  </div>

  <span class="text-3">卖出高价</span>

  <div class="JX6"></div>

  <div class="box-3">
    <span>优质客源销售</span>
    <br>
    <span>帮您多卖25%</span>
  </div>

  <div class="box-4">

    <div class="box-5">
      <span class="tx-1">近期成交 张先生</span>
      <div class="box-4-1">
        <img src="../assets/pages/Sell/index/BJ2.png" class="BJ2">
        <div class="box-4-1-1">
          <span class="tx-3">A车/2016款&nbsp;&nbsp;2.0T&nbsp;自动舒适</span>
          <span class="tx-3">带天窗型</span>
          <span class="tx-4">2016年 2.63万公里</span>
        </div>
      </div>
    </div>

    <div class="box-5">
      <span class="tx-1">近期成交 张先生</span>
      <div class="box-4-1">
        <img src="../assets/pages/Sell/index/BJ2.png" class="BJ2">
        <div class="box-4-1-1">
          <span class="tx-3">A车/2016款&nbsp;&nbsp;2.0T&nbsp;自动舒适</span>
          <span class="tx-3">带天窗型</span>
          <span class="tx-4">2016年 2.63万公里</span>
        </div>
      </div>
    </div>

    <div class="box-5">
      <span class="tx-1">近期成交 张先生</span>
      <div class="box-4-1">
        <img src="../assets/pages/Sell/index/BJ2.png" class="BJ2">
        <div class="box-4-1-1">
          <span class="tx-3">A车/2016款&nbsp;&nbsp;2.0T&nbsp;自动舒适</span>
          <span class="tx-3">带天窗型</span>
          <span class="tx-4">2016年 2.63万公里</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RentView"
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: blue;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
ul, ol {
  list-style-type: none;
}
html, body {
  width: 100%;
  margin: 0;
  padding: 0;
}

.BJ1{
  width: 100vw;
  height: 59.8667vw;
}
.box-1-1{
  display: flex;
  top: 12.8vw;
  left: 4vw;
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 92.3333vw;
  height: 5.6vw;
}

.JX1{
  width: 10.5333vw;
  height: 3.4667vw;

}
.JX2{
  width: 4.8333vw;
  height: 4.4667vw;
}
.box-1-1 .text-1{
  color: white;
}
.box-2{
  width: 92vw;
  position: absolute;
  left: 3.8667vw;
  top: 52.9333vw;
  background-color: hsl(0, 0%, 98%);
  border-radius: 2.6667vw;
  border: 0.1333vw solid #e9ebfa;
}


.SZ1{
  overflow-wrap: break-word;
  color: rgba(255, 117, 12, 1);
  font-size: 6.4vw;
  margin-left: 5vw;
  margin-top: 10vw;
  line-height: 16.5333vw;
}
.text-2{
  color: rgba(46, 46, 46, 1);
  font-size: 4vw;
  margin-left: 1vw;
}

.JX3{
  width: 85.7333vw;
  height: 10.9333vw;
  background-color: #2c80ff;
  margin-left: 4vw;
  margin-top: 2vw;
  border-radius: 8%;
}
.text-2-1{
  color: rgba(255, 255, 255, 1);
  font-size: 4.2667vw;
  font-weight: NaN;
  margin: 0 0 0 34.5333vw;
  line-height: 10vw;
}
.box-2-2{
  display: flex;
  justify-content: space-between;
  padding-top: 2vw;
  padding-left: 4vw;
  padding-right: 2vw;
  margin-bottom: 6vw;
}


.JX4{
  width: 39.8667vw;
  height: 10.9333vw;
  border-radius: 8%;
  border: 0.1333vw solid #2745f4;
  padding-bottom: 0.6667vw;
}
.JX5{
  width: 39.8667vw;
  height: 10.9333vw;
  border-radius: 5%;
  border: 0.1333vw solid #2745f4;
}
.text-2-2{
  color: rgba(57, 139, 238, 1);
  font-size: 4.2667vw;
  margin: 0vw 0vw 0vw 11.6vw;
  line-height: 9.5333vw;
}

.text-3{
  position: relative;
  left: 3.7333vw;
  top: 51.4vw;

}
.JX6{
  width: 2.9333vw;
  height: 0.6667vw;
  left: 3.7333vw;
  top: 119.6vw;
  position: absolute;
  background-color: #2c80ff;
}


.box-3{
  position: absolute;
  top: 123.8667vw;
  left: 3.7333vw;
  color: rgba(48, 48, 48, 1);
}


.JX7{
  position: relative;
  width: 92vw;
  height: 41.4vw;
  left: 3.8667vw;
  top: 71.4667vw;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2.6667vw;
  border: 0.1333vw solid rgba(229, 229, 229, 1);
}


.box-4{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 73.4667vw;
  padding-left: 3.8667vw;
}

.box-5{
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2.6667vw;
  height: 35.4vw;
  border: 0.1333vw solid rgba(229, 229, 229, 1);
  width: 92vw;
  padding-left: 2vw;
}

.tx-1{
  color: rgba(255, 96, 40, 1);
  font-size: 2.9333vw;
  font-family: SourceHanSansCN-Regular;
}
.tx-3{
  color: rgba(45, 45, 45, 1);
  font-size: 3.2vw;
  font-family: Adobe Heiti Std R;
  word-wrap: break-word;
  width: 47vw;
  margin-left: 2vw;
}
.tx-4{
  color: rgba(102, 102, 102, 1);
  font-size: 2.9333vw;
  font-family: SourceHanSansCN-Regular;
  margin-left: 2vw;
}


.box-4-1{
  width: 92vw;
  height: 40.4vw;
  display: flex;
  justify-content: space-between;
  padding-top: 3vw;
  padding-right: 13vw;
}

.BJ2{
  width: 34.9333vw;
  height: 20.5333vw;
}


.box-4-1-1{
  display: flex;
  flex-direction: column;
}
.box-4-1-1 span{
  padding-top: 2vw;
}



/*底部导航栏防覆盖*/
.shield{
  margin-bottom:12.6667vw
}

/*底部导航栏*/
.bottom {
  background-color: rgba(255, 255, 255, 1);
  left: 0;
  /*position: absolute;*/
  position: fixed;
  bottom: 0vw;
  width: 100%;
  height: 16.6667vw;
  border-top: 0.1333vw solid rgba(229, 229, 229, 1);

  display: flex;
  justify-content: space-around;
}

/*底部导航栏图片盒*/
.bottom .image_div {
  width: 6.1333vw;
  height: 9.8667vw;
  margin-top: 1.7333vw;
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
.bottom .text-group1 {
  width: 6.1333vw;
  height: 3.2vw;
  overflow-wrap: break-word;
  color: rgb(8, 58, 238);
  font-size: 3.2vw;
  text-align: left;
  white-space: nowrap;
  line-height: 6.5333vw;
  margin-top: 2.1333vw;
}
</style>

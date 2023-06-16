<template>
  <div class="page flex-col">
    <div class="group flex-col">
      <div class="group1 flex-row" style="display: flex;">
        <p class="group1-1">国内租车</p>
        <p class="group1-1">分时租</p>
        <p class="group1-1">长租</p>
        <p class="group1-1">国际租车</p>
      </div>
    </div>
    <div class="group2 flex-row" id="app">
      <div class="group2-1">
        <select  class="SelectList1 width7" v-model="xueli">
          <option value="深圳">深圳</option>
          <option value="上海">上海</option>
        </select>
        <div class="group2-3">
          <p class="group2-4-1">{{xueli}}大厦自助点</p>
          <p class="group2-5">该门店仅支持自助取车</p>
        </div>
      </div>
      <div class="group2-1-1" id="app">
        <div class="group2-2">
          <select  class="SelectList width7" v-model="xueli2">
            <option value="深圳">深圳</option>
            <option value="上海">上海</option>
          </select>
        </div>
        <div class="group2-3">
          <p class="group2-4">{{xueli2}}金融大厦网点</p>
        </div>
        <div class="group2-6">
          <!--          <div class="group2-9">-->
          <!--            <p class="group2-7">上门</p>-->
          <!--          </div>-->
          <!--          <div class="group2-10">-->
          <!--            <p class="group2-8">到店</p>-->
          <!--          </div>-->
<!--          <el-switch-->
<!--              v-model="value1"-->
<!--              active-text="按月付费"-->
<!--              inactive-text="按年付费">-->
<!--          </el-switch>-->
<!--          <el-switch-->
<!--              v-model="value5"-->
<!--              class="ml-2"-->
<!--              inline-prompt-->
<!--              style="&#45;&#45;el-switch-on-color: #13ce66; &#45;&#45;el-switch-off-color: #ff4949"-->
<!--              active-text="完整展示多个内容"-->
<!--              inactive-text="多个内容"-->
<!--          />-->

          <el-switch
              v-model="value1"
              class="ml-2"
              width="60"
              inline-prompt
              active-text="上门"
              inactive-text="到店"
          />
        </div>
      </div>
      <div class="group2-14">
        <div class="group2-11">
          <p class="group2-15">2019-08-10</p>
          <p class="group2-16">08:00</p>
        </div>
        <div class="group2-12">
          <p class="group2-17">1天</p>
          <img src="../assets/pages/Rent/index/direction_keys1.png">
        </div>
        <div class="group2-13">
          <p class="group2-15">2019-08-11</p>
          <p class="group2-16">08:00</p>
        </div>
      </div>
      <div class="group3 ">
        <div class="group3-1">
          <p class="group3-2">立即选车</p>
        </div>
      </div>
    </div>
    <div class="group4 flex-row">
      <p class="group4-1">顺风车推荐</p>
      <p class="group4-2">查看全部</p>
      <img src="../assets/pages/Rent/index/extended_keys2.png">
    </div>
    <div>
      <div class="group5">
        <img src="../assets/pages/Rent/index/car_diagram.png">
      </div>
      <div>
        <div>
          <div class="group4-3">
            <div class="group4-4">
              <p class="group4-5">深圳</p>
              <p class="group4-6">2019-08-10</p>
            </div>
            <div class="group4-7">
              <img src="../assets/pages/Rent/index/direction_keys2.png">
            </div>
            <div class="group4-8">
              <p class="group4-5">上海</p>
              <p class="group4-6">2019-08-10</p>
            </div>
          </div>
        </div>
        <div class="group4-9">
          <p class="group4-10">A车/5座/2.0T</p>
          <p class="group4-11">¥100</p>
        </div>
      </div>
    </div>
    <div>
      <div class="group5">
        <img src="../assets/pages/Rent/index/car_diagram.png">
      </div>
      <div>
        <div>
          <div class="group4-3">
            <div class="group4-4">
              <p class="group4-5">深圳</p>
              <p class="group4-6">2019-08-10</p>
            </div>
            <div class="group4-7">
              <img src="../assets/pages/Rent/index/direction_keys2.png">
            </div>
            <div class="group4-8">
              <p class="group4-5">上海</p>
              <p class="group4-6">2019-08-10</p>
            </div>
          </div>
        </div>
        <div class="group4-9">
          <p class="group4-10">A车/5座/2.0T</p>
          <p class="group4-11">¥100</p>
        </div>
      </div>
    </div>
    <div>
      <div class="group5">
        <img src="../assets/pages/Rent/index/car_diagram.png">
      </div>
      <div>
        <div>
          <div class="group4-3">
            <div class="group4-4">
              <p class="group4-5">深圳</p>
              <p class="group4-6">2019-08-10</p>
            </div>
            <div class="group4-7">
              <img src="../assets/pages/Rent/index/direction_keys2.png">
            </div>
            <div class="group4-8">
              <p class="group4-5">上海</p>
              <p class="group4-6">2019-08-10</p>
            </div>
          </div>
        </div>
        <div class="group4-9">
          <p class="group4-10">A车/5座/2.0T</p>
          <p class="group4-11">¥100</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "RentView",
  el:'#app',
  data() {
    return {
      value1:true,
      xueli:"深圳",
      xueli2:"深圳"
    }
  }
}

</script>

<style scoped>
body {
  overflow-x: hidden;
  margin: 0;
}

.page {
  position: relative;
  width: 100vw;
  height: 100%;
  overflow: hidden
}

.group {
  position: relative;
  width: 111vw;
  height: 55.6667vw;
  background: url(../assets/pages/Rent/index/background.png) 100% no-repeat;
  background-size: 100% 100%;
  margin-top: -5vw;
}

.group1-1 {
  width: 25vw;
  height: 9vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 11vw;
  color: rgb(255, 255, 255);
  font-size: 1vw;
}

.group2 {
  background: url(../assets/pages/Rent/index/background_box.png);
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 2.6667vw;
  height: 94.3333vw;
  width: 91vw;
  position: absolute;
  left: 4.5333vw;
  top: 17.3333vw;
}

.group2-1 {
  width: 82vw;
  height: 19vw;
  display: flex;
  align-items: center;
  margin-left: 4vw;
  margin-top: 3vw;
  border-bottom: 0.2vw solid #e5e5e5;
}
.group2-1-1{
  width: 82vw;
  height: 19vw;
  display: flex;
  align-items: center;
  margin-left: 4vw;
  margin-top: 3vw;
  border-bottom: 0.2vw solid #e5e5e5;
}

.group2-2 {
  display: flex;
  margin-left: 4vw;
}

.group2-2 p {
  font-weight: bold;
}

.group2-2 img {
  margin-left: 2vw;
  width: 2.3vw;
  height: 2vw;
  margin-top: 1vw;
}

.group2-3 {
  margin-left: 5vw;
  font-size: 1vw;
}

.group2-4 {
  margin: 0vw;
}
.group2-4-1{
  margin-left: 4vw;
}

.group2-5 {
  background-color: #dbf0ff;
  color: #5397ff;
  width: 36vw;
  height: 4.8vw;
  font-size: x-small;
  text-align: center;
  margin: 1.3vw 0px 0px 11px;
  border-radius: 3vw;
}

/* .group3{
    width: 82vw;
    height: 19vw;
    display: flex;
    align-items: center;
    margin-left: 4vw;
    margin-top: 3vw;
    border-bottom: 0.2vw solid #e5e5e5;
} */
.group2-6 {
  display: flex;
  margin-left: 18vw;
  font-size: 1vw;
}

.group2-7 {
  font-size: x-small;
  text-align: center;
  transform: scale(0.8);
  margin-top: 0.8vw;
  margin-left: -4vw;
}

.group2-8 {
  font-size: x-small;
  text-align: center;
  transform: scale(0.8);
  margin-top: 0.8vw;
  margin-left: 0vw;
}

.group2-9 {
  background-color: #e9e9e9;
  width: 14vw;
  height: 5.8vw;
  margin-left: -2vw;
  margin-top: 1.3vw;
  border-radius: 3vw;

}

.group2-10 {
  background-color: #cae9ff;
  width: 11vw;
  height: 5.8vw;
  margin-left: -5vw;
  margin-top: 1.3vw;
  border-radius: 3vw;

}

.group2-14 {
  width: 82vw;
  height: 19vw;
  display: flex;
  align-items: center;
  margin-left: 4vw;
  margin-top: 3vw;
}

.group2-11 {
  text-align: center;
  margin-left: 2vw;
}

.group2-12 {
  text-align: center;
  margin-left: 5vw;
}

.group2-15 {
  font-size: 4vw;
  font-weight: bold;
}

.group2-16 {
  font-size: 1vw;
}

.group2-17 {
  margin-left: -2vw;
  margin-bottom: -2vw;
  margin-top: 0vw;
  font-size: 3vw;
}

.group2-12 img {
  width: 22vw;
}

.group2-13 {
  text-align: center;
  margin-left: 5vw;
}

.group3 {
  width: 82vw;
  height: 19vw;
  display: flex;
  align-items: center;
  margin-left: 4.7vw;
  margin-top: 3vw;
}

.group3-1 {
  background: url(../assets/pages/Rent/index/button.png);
  height: 19.3333vw;
  width: 82vw;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
}

.group3-2 {
  text-align: center;
  margin-top: 1.8vw;
  color: #ffffff;
}

.group4-1 {
  font-weight: bold;
  display: flex;
  margin-left: 4vw;
  font-size:4vw ;
}

.group4-2 {
  color: #6c6c6c;
  margin-left: 57vw;
  font-size: 3vw;
  margin-top: 0.4vw;
}

.group4 {
  width: 97vw;
  height: 10vw;
  margin-top: 61vw;
  display: flex;

}

.group4 img {
  margin-top: 1.6vw;
  height: 2vw;
  margin-left: 1vw;
}

.group4-3 {
  width: 61vw;
  height: 16vw;
  display: flex;
  align-items: center;
  margin-left: 33vw;
  margin-top: -19vw;
  border-bottom: 0.2vw solid #e5e5e5;
}

.group4-4 {
  text-align: left;
  margin-left: 2vw;
}

.group4-5 {
  font-size: 4vw;
}

.group4-6 {
  margin-top: 5vw;
  font-size: 1vw;
  color: #898989;
}

.group4-7 {
  text-align: center;
  margin-left: -1vw;
}

.group4-8 {
  text-align: right;
  margin-left: 7vw;
}

.group5 {
  margin-top:11vw;
  margin-left: 4vw;
  display: flex;

}

.group5 img{
  height: 10vw;
}
.group5 embed {
  width: 20vw;
  margin-top: 8vw;
}

.group4-7 img {
  width: 10vw;
  margin-left: 7vw;
}

.group4-9 {
  display: flex;
  margin-left: 34vw;
}

.group4-10 {
  font-size: 1vw;
  color: #898989;
  margin-top: 2.4vw;
  margin-left: 1vw;
}

.group4-11 {
  margin-top: 1.5vw;
  margin-left: 31vw;
  color: #ff7b7b;
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
.SelectList
{
  position: relative;
  background-color: transparent;
  TOP:   -2px;
  left:-2px;
  border-width: 0px;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  border-bottom-style: none;
  display:block;
  height: 32px;
  line-height: 32px;
  overflow:hidden;
  font-weight: bold;
}
.SelectList1{
  position: relative;
  background-color: transparent;
  TOP:   -2px;
  left:11px;
  border-width: 0px;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  border-bottom-style: none;
  display:block;
  height: 32px;
  line-height: 32px;
  overflow:hidden;
  font-weight: bold;
}
.btn-on{
  width: 60px;
  height: 25px;
  margin: 0 3px;
  border-radius: 25px;
  font-size: 14px;
}
.btn-on{
  cursor: pointer;
  position: relative;
  border: 1px solid white;
  background-color: #12B090;
}
.btn-on-circle{
  position: absolute;
  width: 15px;
  height: 15px;
  top: 5px;
  left: 5px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  box-shadow: 0 0 10px white;
  transition: all .5s;
}
.btn-on-text{
  position: absolute;
  right: 10px;
  line-height: 25px;
  color: white;
  transition: all .5s;
}
</style>

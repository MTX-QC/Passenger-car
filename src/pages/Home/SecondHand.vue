<template>
  <div>
    <div class="top" style="">
      <div class="title">
        <span class="left" @click="back_page"><img src="../../assets/icon/retret_icon.png" alt=""></span>
        <span class="title_text">二手车</span>
        <img class="right" src="../../assets/icon/info_active_icon.png" alt="" @click='this.$router.push({ name: "dialogue" })'>
      </div>
    </div>
    <div class="car_list">
      <div class="car_div" v-for="(car,index) in car_list" @click="skip_car">
        <div class="img_div">
          <img v-show="index===0" class="label_img" src="../../assets/pages/Home/secondHand/label_one.png"
               alt="">
          <img v-show="index===1" class="label_img" src="../../assets/pages/Home/secondHand/label_two.png"
               alt="">
          <img v-show="index===2" class="label_img"
               src="../../assets/pages/Home/secondHand/label_three.png" alt="">
          <img class="car_img" :src="car.img_path" alt="">
        </div>
        <div class="msg_div">
          <p class="label_1">
            <span v-for="msg in car.car_msg">{{ msg }}</span>
          </p>
          <p class="label_2">{{ car.car_type }}</p>
          <p class="label_3">
            <span v-for="label in car.labels">{{ label }}</span>
          </p>
          <p class="label_4">{{ car.price }}万</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "SecondHand",
  data() {
    return {
      car_list: [
        {
          car_msg: ["A系", "558ku", "2017款", "2.0T"],
          car_type: "运动尊享版四驱",
          labels: ["准新车", "一成购"],
          price: 13.65,
          img_path: require("../../assets/pages/Home/secondHand/car1.png")
        }, {
          car_msg: ["A系", "558ku", "2017款", "2.0T"],
          car_type: "运动尊享版四驱",
          labels: ["准新车", "一成购"],
          price: 13.65,
          img_path: require("../../assets/pages/Home/secondHand/car2.png")
        }, {
          car_msg: ["A系", "558ku", "2017款", "2.0T"],
          car_type: "运动尊享版四驱",
          labels: ["准新车", "一成购"],
          price: 13.65,
          img_path: require("../../assets/pages/Home/secondHand/car3.png")
        }, {
          car_msg: ["A系", "558ku", "2017款", "2.0T"],
          car_type: "运动尊享版四驱",
          labels: ["准新车", "一成购"],
          price: 13.65,
          img_path:require("../../assets/pages/Home/secondHand/car4.png")
        }, {
          car_msg: ["A系", "558ku", "2017款", "2.0T"],
          car_type: "运动尊享版四驱",
          labels: ["准新车", "一成购"],
          price: 13.65,
          img_path:require("../../assets/pages/Home/secondHand/car5.png")
        },
      ]
    }
  },
  methods:{
    // 返回上一页
    back_page(){
      this.$router.go(-1)
    },
    skip_car(){
      this.$router.push({ name:'cheliangxiangqing'})
    }
  }
};
</script>

<style scoped>

/*顶部导航栏*/
.top {
  height: 20vw;
  background: linear-gradient(180deg, #4481EB 0%, #04BEFE 100%);
}

/*顶部导航栏标题栏*/
.top .title {
  width: 100%;
  padding-top: 11.2vw;
  display: flex;
  justify-content: space-between;
}

/*左侧*/
.top .left {
  margin-left: 4.1333vw;
}

.top .left img {
  width: 2vw;
  height: 3.6vw;
}

/*中侧文本*/
.top .title_text {
  height: 4vw;
  font-size: 4.2667vw;
  font-weight: 500;
  color: #FFFFFF;

}

/*右侧*/
.top .right {
  width: 4.5333vw;
  height: 4.9333vw;
  margin-right: 4.4vw;
}


/*设置渐变色背景*/
#secondHand_app {
  background: linear-gradient(180deg, #4481EB 0%, rgba(4, 190, 254, 0) 59.4667vw);
}

/*车辆展示列表*/
.car_list {
  margin-right: 4.1333vw;
  margin-left: 3.8667vw;
}

/*车辆展示栏*/
.car_div {
  display: flex;
  width: 92vw;
  height: 32.1333vw;
  background: #FFFFFF;
  border-radius: 2.6667vw;
  box-shadow: 0vw 0vw 0.2vw 0.2vw #88C5F0;
  margin-bottom: 4.1333vw;
}

/*图片盒*/
.car_div .img_div {
  width: 37.4667vw;
  height: 32.1333vw;

  position: relative;
  overflow: hidden;
}

/*前三车辆标签*/
.car_div .img_div .label_img {
  position: absolute;
  width: 5.0667vw;
  height: 5.2vw;
  margin-left: 2.6667vw;
}

/*车辆图片*/
.car_div .img_div .car_img {
  width: 37.4667vw;
  height: 32.1333vw;
  /* 左上角 */
  border-top-left-radius: 2.6667vw;
  /* 左下角 */
  border-bottom-left-radius: 2.6667vw;
}

/*信息盒*/
.car_div .msg_div {
  width: 54.5333vw;
  height: 32.1333vw;
  margin-left: 3.3333vw;
}

.msg_div .label_1 {
  font-size: 3.7333vw;
  margin-top: 3.3333vw;

}

.msg_div .label_1 span {
  margin-right: 1vw;
}

.msg_div .label_2 {
  font-size: 3.7333vw;
  margin-bottom: 3.4vw;
}

.msg_div .label_3 {
  font-size: 3.2vw;
  color: #6E6E6E;
  margin-bottom: 3.8vw;
}

.msg_div .label_3 span {
  margin-right: 5.4667vw;
}

.msg_div .label_4 {
  font-size: 4.8vw;
  color: #FF3D4D;
  margin-bottom: 2.2667vw;
}

</style>

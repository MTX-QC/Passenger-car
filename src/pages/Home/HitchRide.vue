<template>
  <div id="detail_app">
    <div class="top">
      <div class="title">
        <span class="left" @click="back_page"><img src="../../assets/icon/retret_icon.png" alt=""></span>
        <span class="title_text">顺风车</span>
        <img class="right" src="../../assets/icon/info_active_icon.png" alt="" @click='this.$router.push({ name: "dialogue" })'>
      </div>
    </div>
    <div class="select_div">
      <div class="select_body" @click="select_hitch_ride">
        <div class="select_mass">
          <select name="" class="" v-model="select_form.select_sc">
            <option value="">出发城市</option>
            <option :value="city" v-for="city in start_city">{{ city }}</option>
          </select></div>
        <div class="select_mass">
          <select name="" v-model="select_form.select_ec">
            <option value="">目的城市</option>
            <option :value="city" v-for="city in end_city">{{ city }}</option>
          </select></div>
        <div class="select_mass">
          <select name="" v-model="select_form.select_at">
            <option value="">到达时间</option>
            <option :value="time" v-for="time in arrive_time">{{ time }}</option>
          </select></div>
      </div>
    </div>

    <div>
      <div v-for="car in use_list"  @click='this.$router.push({ name: "cheliangxiangqing" })'>
        <div class="separate"></div>
        <div class="display_car_div">
          <div class="up">
            <div class="up_body">
              <div>
                <img :src="car.imgPath" alt="">
              </div>
              <div>
                <p>{{ car.s_city }}</p>
                <span>{{ car.s_date.date }}</span>
                <span>{{ car.s_date.week }}</span>
              </div>
              <div class="circle2_line">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div>
                <p>{{ car.e_city }}</p>
                <span>{{ car.e_date.date }}</span>
                <span>{{ car.e_date.week }}</span>
              </div>
            </div>
          </div>
          <hr />
          <div class="down">
            <div class="down_up">
              <p>车辆信息</p>
            </div>
            <div class="down_down">
              <span><span v-for="label in car.car_message.labels">{{ label }}</span></span>
              <span>{{ car.car_message.seat }}座</span>
              <span>{{ car.car_message.side }}厢</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "HitchRide",
  data() {
    return {
      select_form: {
        select_sc: "",
        select_ec: "",
        select_at: ""
      },

      start_city: ["北京", "上海", "广州", "深圳"],
      end_city: ["北京", "上海", "广州", "深圳"],
      arrive_time: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],


      hitch_ride_list: [
        {
          imgPath: require("../../assets/pages/Home/hitchRide/car1.png"),
          s_city: "北京",
          e_city: "上海",
          a_time: "8:00",
          s_date: {
            date: "08-12",
            week: "周一"
          },
          e_date: {
            date: "08-13",
            week: "周二"
          },
          car_message: {
            labels: ["A", "588KU", "手动档"],
            seat: "5",
            side: "三"
          }
        }, {
          imgPath: require("../../assets/pages/Home/hitchRide/car2.jpg"),
          s_city: "上海",
          e_city: "广州",
          a_time: "10:00",
          s_date: {
            date: "08-13",
            week: "周二"
          },
          e_date: {
            date: "08-14",
            week: "周三"
          },
          car_message: {
            labels: ["B", "799KU", "自动尊享"],
            seat: "5",
            side: "三"
          }
        }, {
          imgPath: require("../../assets/pages/Home/hitchRide/car3.jpg"),
          s_city: "广州",
          e_city: "深圳",
          a_time: "12:00",
          s_date: {
            date: "08-14",
            week: "周三"
          },
          e_date: {
            date: "08-15",
            week: "周四"
          },
          car_message: {
            labels: ["E", "514KU", "自动尊享"],
            seat: "5",
            side: "三"
          }
        }, {
          imgPath: require("../../assets/pages/Home/hitchRide/car4.jpg"),
          s_city: "深圳",
          e_city: "北京",
          a_time: "14:00",
          s_date: {
            date: "08-15",
            week: "周四"
          },
          e_date: {
            date: "08-16",
            week: "周五"
          },
          car_message: {
            labels: ["T", "422KU", "手动档"],
            seat: "5",
            side: "三"
          }
        },
        {
          imgPath: require("../../assets/pages/Home/hitchRide/car1.png"),
          s_city: "北京",
          e_city: "深圳",
          a_time: "16:00",
          s_date: {
            date: "08-12",
            week: "周一"
          },
          e_date: {
            date: "08-13",
            week: "周二"
          },
          car_message: {
            labels: ["A", "588KU", "手动档"],
            seat: "5",
            side: "三"
          }
        }, {
          imgPath: require("../../assets/pages/Home/hitchRide/car2.jpg"),
          s_city: "上海",
          e_city: "北京",
          a_time: "10:00",
          s_date: {
            date: "08-13",
            week: "周二"
          },
          e_date: {
            date: "08-14",
            week: "周三"
          },
          car_message: {
            labels: ["B", "799KU", "自动尊享"],
            seat: "5",
            side: "三"
          }
        }, {
          imgPath: require("../../assets/pages/Home/hitchRide/car3.jpg"),
          s_city: "深圳",
          e_city: "广州",
          a_time: "20:00",
          s_date: {
            date: "08-14",
            week: "周三"
          },
          e_date: {
            date: "08-15",
            week: "周四"
          },
          car_message: {
            labels: ["E", "514KU", "自动尊享"],
            seat: "5",
            side: "三"
          }
        }, {
          imgPath: require("../../assets/pages/Home/hitchRide/car4.jpg"),
          s_city: "深圳",
          e_city: "上海",
          a_time: "14:00",
          s_date: {
            date: "08-15",
            week: "周四"
          },
          e_date: {
            date: "08-16",
            week: "周五"
          },
          car_message: {
            labels: ["T", "422KU", "手动档"],
            seat: "5",
            side: "三"
          }
        }, {
          imgPath: require("../../assets/pages/Home/hitchRide/car1.png"),
          s_city: "北京",
          e_city: "上海",
          a_time: "8:00",
          s_date: {
            date: "08-12",
            week: "周一"
          },
          e_date: {
            date: "08-13",
            week: "周二"
          },
          car_message: {
            labels: ["A", "588KU", "手动档"],
            seat: "5",
            side: "三"
          }
        }, {
          imgPath: require("../../assets/pages/Home/hitchRide/car2.jpg"),
          s_city: "上海",
          e_city: "广州",
          a_time: "10:00",
          s_date: {
            date: "08-13",
            week: "周二"
          },
          e_date: {
            date: "08-14",
            week: "周三"
          },
          car_message: {
            labels: ["B", "799KU", "自动尊享"],
            seat: "5",
            side: "三"
          }
        }, {
          imgPath: require("../../assets/pages/Home/hitchRide/car3.jpg"),
          s_city: "广州",
          e_city: "深圳",
          a_time: "12:00",
          s_date: {
            date: "08-14",
            week: "周三"
          },
          e_date: {
            date: "08-15",
            week: "周四"
          },
          car_message: {
            labels: ["E", "514KU", "自动尊享"],
            seat: "5",
            side: "三"
          }
        }, {
          imgPath: require("../../assets/pages/Home/hitchRide/car4.jpg"),
          s_city: "深圳",
          e_city: "北京",
          a_time: "14:00",
          s_date: {
            date: "08-15",
            week: "周四"
          },
          e_date: {
            date: "08-16",
            week: "周五"
          },
          car_message: {
            labels: ["T", "422KU", "手动档"],
            seat: "5",
            side: "三"
          }
        }
      ],
      use_list: []
    };
  },
  methods: {
    // 返回上一页
    back_page() {
      this.$router.go(-1);
    },
    // 寻找满足条件的顺风车
    select_hitch_ride() {
      let new_list = [];
      for (const index in this.hitch_ride_list) {
        const hitch_ride = this.hitch_ride_list[index];
        if (hitch_ride.s_city.includes(this.select_form.select_sc)
          && hitch_ride.e_city.includes(this.select_form.select_ec)
          && hitch_ride.a_time.includes(this.select_form.select_at)
        ) {
          new_list.push(hitch_ride);
        }
      }
      this.use_list = new_list;
    }
  },
  created() {
    this.use_list = this.hitch_ride_list;
  }
};
</script>

<style scoped>
/*顶部栏修正*/
.top {
  background: none;
  margin-bottom: 5.2044vw;
}

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

/*选择栏*/
.select_div {
  padding-top: 3.6vw;
  height: 10.5333vw;
  padding-right: 2.2vw;
}

/*选择项框体*/
.select_div .select_body {
  padding-right: 4.4vw;
  padding-left: 4.2667vw;
  display: flex;
  justify-content: space-between;
}

/*选择项块*/
.select_div .select_mass {
  width: 15.4667vw;
  height: 3.8667vw;
  line-height: 6.5333vw;
}

/*当前选择项*/
.select_div .select_mass select {
  border: none;
  box-shadow: none;
  font-size: 3.5vw;
}

/*可选项*/
.select_div .select_mass option {
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  border: 0;
  font-size: 1vw;
}

/*顺风车展示盒子*/
.display_car_div {
  margin-top: 4.5333vw;
}

/*车辆信息上部分*/
.display_car_div .up {
  height: 21.4667vw;
}

/*上部分主体*/
.display_car_div .up_body {
  padding-top: 4.5333vw;
  padding-left: 4.5333vw;
  display: flex;
  justify-content: space-between;

  padding-right: 3.3333vw;
}

/*上部分图片*/
.display_car_div .up img {
  height: 11.6vw;
  width: 24.9333vw;
  margin-right: 5.2vw;
}

/*上部分城市名*/
.display_car_div .up p {
  height: 4vw;
  font-size: 4.2667vw;
  font-weight: 500;

  margin-bottom: 3.3333vw;
}

/*上部分时间信息*/
.display_car_div .up span {
  height: 2.9333vw;
  font-size: 3.2vw;
  color: #626262;

}

/*圆点线段*/
.circle2_line {
  flex: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: 0.8vw;
  margin-right: 0.8vw;
}

.circle2_line span:nth-child(odd) {
  display: block;
  width: 0.5333vw;
  height: 0.5333vw;
  border-radius: 50%;
  background-color: #d2d2d2;
}

.circle2_line span:nth-child(even) {
  display: block;
  width: 100%;
  height: 0.1333vw;
  background-color: #e5e5e5;
}

/*车辆信息下部分*/
.display_car_div .down {
  height: 14.2667vw;
  padding-left: 3.8667vw;
}

/*下部分上层*/
.display_car_div .down .down_up {
  height: 3.2vw;
  font-size: 3.2vw;
  line-height: 6.5333vw;

  margin-top: 2.5333vw;
}

/*下部分下层*/
.display_car_div .down .down_down {
  display: flex;
  justify-content: space-between;
  width: 74.5333vw;
  height: 3.2vw;
  margin-top: 2.9333vw;
}

.display_car_div .down .down_down span {
  font-size: 3.2vw;
  color: #858585;
  line-height: 6.5333vw;
}

.display_car_div .down .down_down span span {
  margin-right: 1.2vw;
}
</style>

<template>

  <div class="box_5 flex-col">

    <div class="image-wrapper_1 flex-row">
      <img
        class="label_8"
        src="../assets/pages/Mine/index/GN-03@2x.png"
      />
    </div>
    <div class="text-wrapper_1 flex-row">
      <span class="text_1">Hi，下午好</span>
    </div>

    <div class="box_1 flex-col">
      <div class="image-text_9 flex-row justify-between">
        <img class="image-1"
             src="../assets/pages/Mine/index/GN-04@2x.png"
        />
        <span class="text-group_9" v-if="this.$store.state.login_user.photo!==''">{{ this.$store.state.login_user.photo }}</span>
        <span class="text-group_9" v-if="this.$store.state.login_user.photo===''" @click="this.$router.push({ name:'register_login'})">登陆/注册</span>

      </div>
      <div class="list_1 flex-row">

        <div class="text-wrapper_2-0 flex-col justify-between">
          <span class="text_2-0">0</span>
          <span class="text_3-0">我的咨询</span>
        </div>

        <div class="text-wrapper_2-0 flex-col justify-between">
          <span class="text_2-0">0</span>
          <span class="text_3-0">我的卡券</span>
        </div>

        <div class="text-wrapper_2-0 flex-col justify-between">
          <span class="text_2-0">0</span>
          <span class="text_3-0">浏览历史</span>
        </div>

      </div>
    </div>
  </div>
  <div class="box2">
    <div class="box_2 flex-col">
      <div class="box_2_1 flex-row justify-between">
        <div class="box_2_1_1 flex-row justify-between">
          <img
            class="GN"
            src="../assets/pages/Mine/index/GN-10@2x.png"
          />
          <span class="text-1">我的预约</span>

          <img
            class="JX_1"
            src="../assets/pages/Mine/index/JX@2x.png"
          />
        </div>
      </div>

      <img
        class="HX_1"
        src="../assets/pages/Mine/index/HX@2x.png"
      />

      <div class="box_2_2 flex-row justify-between">
        <div class="box_2_1_1 flex-row justify-between">
          <img
            class="GN"
            src="../assets/pages/Mine/index/GN-11@2x.png"
          />
          <span class="text-1">我的订单</span>

          <img
            class="JX_1"
            src="../assets/pages/Mine/index/JX@2x.png"
          />
        </div>
      </div>

      <img
        class="HX_1"
        src="../assets/pages/Mine/index/HX@2x.png"
      />

      <div class="group_4 flex-row justify-between">
        <div class="box_2_1_1 flex-row justify-between">
          <img
            class="GN"
            src="../assets/pages/Mine/index/GN-12@2x.png"
          />
          <span class="text-1">我的分期</span>

          <img
            class="JX_1"
            src="../assets/pages/Mine/index/JX@2x.png"
          />
        </div>
      </div>

      <img
        class="HX_1"
        src="../assets/pages/Mine/index/HX@2x.png"
      />

      <div class="group_5 flex-row justify-between">
        <div class="box_2_1_1 flex-row justify-between">
          <img
            class="GN"
            src="../assets/pages/Mine/index/GN-13@2x.png"
          />
          <span class="text-1">我的优惠</span>

          <img
            class="JX_1"
            src="../assets/pages/Mine/index/JX@2x.png"
          />
        </div>
      </div>
    </div>

    <div class="box_3 flex-col">

      <!-- flex-row 用于在 flex 容器中水平地排列 flex 子项 -->
      <!-- justify-between 用于在 flex 容器中对 flex 项目进行对齐 -->
      <div class="box_2_1 flex-row justify-between">
        <div class="box_2_1_1 flex-row justify-between">
          <img
            class="GN"
            src="../assets/pages/Mine/index/GN-14@2x.png"
          />
          <span class="text-1">常用工具</span>

          <img
            class="JX_1"
            src="../assets/pages/Mine/index/JX@2x.png"
          />
        </div>
      </div>

      <img
        class="HX_1"
        src="../assets/pages/Mine/index/HX@2x.png"
      />
      <div class="box_2_1 flex-row justify-between">
        <div class="box_2_1_1 flex-row justify-between">
          <img
            class="GN"
            src="../assets/pages/Mine/index/GN-15@2x.png"
          />
          <span class="text-1">我的活动</span>

          <img
            class="JX_1"
            src="../assets/pages/Mine/index/JX@2x.png"
          />
        </div>
      </div>
    </div>
    <div class="box_4 flex-col">

      <!-- flex-row 用于在 flex 容器中水平地排列 flex 子项 -->
      <!-- justify-between 用于在 flex 容器中对 flex 项目进行对齐 -->
      <div class="box_2_1 flex-row justify-between">
        <div class="box_2_1_1 flex-row justify-between">
          <img
            class="GN"
            src="../assets/pages/Mine/index/GN-16.png"
          />
          <span class="text-1">我的咨询</span>

          <img
            class="JX_1"
            src="../assets/pages/Mine/index/JX@2x.png"
          />
        </div>
      </div>

      <img
        class="HX_1"
        src="../assets/pages/Mine/index/HX@2x.png"
      />
      <div class="box_2_1 flex-row justify-between">
        <div class="box_2_1_1 flex-row justify-between">
          <img
            class="GN"
            src="../assets/pages/Mine/index/GN-17.png"
          />
          <span class="text-1">帮助中心</span>

          <img
            class="JX_1"
            src="../assets/pages/Mine/index/JX@2x.png"
          />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "MineView"
};
</script>

<style scoped>
body {
  overflow-x: hidden;
}

.box_5 {
  height: 56.8vw;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;

  background-image: -webkit-linear-gradient(-90deg, rgb(68, 129, 235) 0%, rgba(4, 190, 254, 0) 100%);

}

.image-wrapper_1 {
  width: 5.0667vw;
  height: 5.8667vw;
  margin: 11.0667vw 0 0 90.6667vw;
}

.label_8 {
  width: 5.0667vw;
  height: 5.8667vw;
}

.text-wrapper_1 {
  width: 31.4667vw;
  height: 6.2667vw;
  margin: 0.2667vw 0 33.3333vw 4.1333vw;
}

.text_1 {
  width: 31.4667vw;
  height: 6.2667vw;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 6.4vw;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 6.5333vw;
}


.box_1 {
  box-shadow: 0vw 1.3333vw 1.3333vw 0vw rgba(139, 171, 200, 0.3);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2.6667vw;
  position: absolute;
  left: 3.8667vw;
  top: 27.8667vw;
  width: 92vw;
  height: 36.2667vw;


}

.image-text_9 {
    margin: 7.6vw 0 0 2.5333vw;
    display: flex;
    align-items: center;
}

.image-1 {
  width: 8vw;
  height: 7.7333vw;
}

.text-group_9 {
  color: rgba(79, 79, 79, 1);
    font-size: 4vw;
    margin-left: 2vw;
}


.list_1 {
  width: 79.4667vw;
  height: 8.8vw;
  justify-content: space-between;
  margin: 5.6vw 0 4.5333vw 6.2667vw;
  display: flex;
}

.text-wrapper_2-0 {
  width: 12.5333vw;
  height: 8.8vw;
  margin-right: 20.9333vw;
}

.text_2-0 {
  width: 2vw;
  height: 2.9333vw;
  overflow-wrap: break-word;
  color: rgba(42, 42, 42, 1);
  font-size: 3.8667vw;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 6.4vw;
  margin-left: 5.3333vw;
}

.text_3-0 {
  width: 12.6667vw;
  height: 3.0667vw;
  overflow-wrap: break-word;
  color: rgba(78, 78, 78, 1);
  font-size: 3.0667vw;
  font-family: SourceHanSansCN-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 6.4vw;
  margin-top: 2.8vw;
}

.box2 {
  /* margin-top: 50vw; */
  padding-top: 69vw;
}


.box_2 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2.6667vw;
  width: 92vw;
  /* height: 41.8667vw; */
  padding-top: 1vw;
  padding-bottom: 3vw;
  border: 0.1333vw solid rgba(229, 229, 229, 1);

  margin: 0 0 0 3.8667vw;
  padding-left: 3.8667vw;
  display: flex;
  flex-direction: column;
  /* margin-top: auto; */
  /* position: absolute;
  top: 70.1333vw;
  left: 0.6667vw; */

}

.box_2_1 {
  display: flex;
  flex-direction: row;
}

.JX_1 {
  width: 1.3333vw;
  height: 2.4vw;
  margin-left: 55.1333vw;

}

.HX_1 {
  width: 77.8vw;
  height: 0.1333vw;
  margin: 2.9333vw 0 0 1.6vw;
  display: flex;
  flex-direction: row;
}

.text-1 {
  padding-left: 2.6667vw;
  padding-top: 4.4vw;
  font-size: 3.6vw;
  font-family: SourceHanSansCN-Regular;
}

.GN {
  width: 3.2vw;
  height: 3.2vw;
  left: 6.4vw;
  top: 70.1333vw;
  /* position: absolute; */
  /* padding-left: 2.5333vw;
  padding-top: 4.5333vw; */
}

.box_2_1_1 {
  padding-top: 2vw;

}

.box_3 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2.6667vw;
  width: 92vw;
  /* height: 21.8667vw; */
  border: 0.1333vw solid rgba(229, 229, 229, 1);

  margin: 4vw 0 0 3.8667vw;
  padding-left: 3.8667vw;
  /* padding-top: 2vw; */
  padding-bottom: 2vw;
  display: flex;
  flex-direction: column;
  /* margin-top: auto; */
  /* position: absolute;
  top: 109.7333vw;
  left: 0.6667vw; */

}

.box_4 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2.6667vw;
  width: 92vw;
  /* height: 21.8667vw; */
  border: 0.1333vw solid rgba(229, 229, 229, 1);
  /* 13.3333vw */
  margin: 4vw 0 0 3.8667vw;
  padding-left: 3.8667vw;
  display: flex;
  flex-direction: column;
  /* margin-top: auto; */
  /* position: absolute;
  top: 145.3333vw;
  left: 0.6667vw; */
  margin-bottom: 20vw;
  padding-bottom: 2vw;

}


</style>

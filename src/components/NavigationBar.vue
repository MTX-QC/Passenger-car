<template>
  <div>
    <div class="shield"></div>
    <div class="bottom">
      <div class="image_div" v-for="(item,index) in box_list" @click="click_icon(item.router_path,index)">
        <img v-if="this.$store.state.select_icon!==index" class="image_label" :src="item.imgPath" />
        <img v-if="this.$store.state.select_icon===index" class="image_label" :src="item.imgActivePath" />
        <span class="text-group">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      box_list: [
        {
          name: "首页",
          imgPath:
            require("../assets/icon/home_icon.png"),
          imgActivePath:
            require("../assets/icon/home_active_icon.png"),
          router_path: "/"
        },
        {
          name: "买车",
          imgPath:
            require("../assets/icon/buyCars_icon.png"),
          imgActivePath:
            require("../assets/icon/buyCars_active_icon.png"),
          router_path: "/buy"
        },
        {
          name: "租车",
          imgPath:
            require("../assets/icon/rentCar_icon.png"),
          imgActivePath:
            require("../assets/icon/rentCar_active_icon.png"),
          router_path: "/rent"
        },
        {
          name: "卖车",
          imgPath:
            require("../assets/icon/sellCar_icon.png"),
          imgActivePath:
            require("../assets/icon/sellCar_active_icon.png"),
          router_path: "/sell"
        },
        {
          name: "我的",
          imgPath:
            require("../assets/icon/my_icon.png"),
          imgActivePath:
            require("../assets/icon/my_active_icon.png"),
          router_path: "/mine"
        }
      ]
    };
  },
  methods: {
    click_icon(router_path, index) {
      this.$store.state.select_icon = index;
      this.$router.push({ path: router_path });
    }
  }
};
</script>
<style scoped>
/*底部导航栏防覆盖*/
.shield {
  margin-bottom: 12.6667vw;
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
</style>

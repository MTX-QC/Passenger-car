<template>
  <div class="page flex-col">
    <div class="section_3 flex-col">
      <div class="block_9 flex-col">
        <div class="list_2 flex-row">
          <div class="image-text_14-0 flex-col justify-between" @click="this.$router.push({ name:'dianpuxinxi'})">
            <img class="image_1-0" referrerpolicy="no-referrer"
                 src="../assets/pages/Buy/index/functions_icon1.png"/>
            <span class="text-group_1-0">超值好车</span>
          </div>
          <div class="image-text_14-1 flex-col justify-between">
            <img class="image_1-1" referrerpolicy="no-referrer"
                 src="../assets/pages/Buy/index/functions_icon2.png"/>
            <span class="text-group_1-1">VR看车</span>
          </div>
          <div class="image-text_14-2 flex-col justify-between">
            <img class="image_1-2" referrerpolicy="no-referrer"
                 src="../assets/pages/Buy/index/functions_icon3.png"/>
            <span class="text-group_1-2">热销SUV</span>
          </div>
          <div class="image-text_14-3 flex-col justify-between">
            <img class="image_1-3" referrerpolicy="no-referrer"
                 src="../assets/pages/Buy/index/functions_icon4.png"/>
            <span class="text-group_1-3">计算器</span>
          </div>
        </div>
        <img class="image_2" referrerpolicy="no-referrer"
             src="../assets/pages/Buy/index/divider.png"/>
        <div class="box_8 flex-row">
          <div class="image-text_15 flex-row justify-between">
            <select  class="SelectList1 width7">
              <option >智能排序</option>
              <option >价格优先</option>
              <option >销量优先</option>
              <option >口碑优先</option>
            </select>
          </div>
          <div class="image-text_16 flex-row justify-between">
            <select  class="SelectList2 width7">
              <option >品牌</option>
              <option >奔驰</option>
              <option >宝马</option>
              <option >劳斯莱斯</option>
              <option >马自达</option>
            </select>
          </div>
          <div class="image-text_17 flex-row justify-between">
            <select  class="SelectList2 width7">
              <option >车价</option>
              <option >3-5万</option>
              <option >5-20万</option>
              <option >20-100万</option>
              <option >100万以上</option>
            </select>
          </div>
          <div class="image-text_18 flex-row justify-between">
            <select  class="SelectList2 width7">
              <option >筛选</option>
              <option >小轿车</option>
              <option >越野车</option>
              <option >跑车</option>
              <option >货车</option>
            </select>
          </div>
        </div>
        <img class="image_3" referrerpolicy="no-referrer"
             src="../assets/pages/Buy/index/divider2.png"/>
        <div class="box_9 flex-row justify-between">
          <div class="group_1 flex-col justify-end">
            <img class="image_4" referrerpolicy="no-referrer"
                 src="../assets/pages/Buy/index/horizontal_view1.png"/>
            <div class="text-wrapper_1 flex-col">
              <span class="text_1">三厢轿车</span>
            </div>
          </div>
          <div class="group_2 flex-col justify-end">
            <img class="image_5" referrerpolicy="no-referrer"
                 src="../assets/pages/Buy/index/horizontal_view2.png"/>
            <div class="text-wrapper_2 flex-col">
              <span class="text_2">两厢轿车</span>
            </div>
          </div>
          <div class="group_3 flex-col justify-end">
            <img class="image_6" referrerpolicy="no-referrer"
                 src="../assets/pages/Buy/index/horizontal_view3.png"/>
            <div class="text-wrapper_3 flex-col">
              <span class="text_3">SUV</span>
            </div>
          </div>

        </div>
        <div class="image-text_19 flex-row justify-between" @click="this.$router.push({ name:'cheliangxiangqing'})">
          <div class="group_4 flex-col"><img src="../assets/pages/Buy/index/vertical_view1.png" alt="">
          </div>
          <div class="text-group_14 flex-col justify-between">
            <span class="paragraph_1">
              588ku&nbsp;2019款&nbsp;&nbsp;3.0T&nbsp;&nbsp;自动
              <br/>
              天窗版
            </span>
            <span class="text_4">厂商指导价：13.05万</span>
            <div class="text-wrapper_4">
              <span class="text_5">首付</span>
              <span class="text_6">5000</span>
              <span class="text_7">元</span>
            </div>
          </div>
        </div>
        <img class="image_8" referrerpolicy="no-referrer"
             src="../assets/pages/Buy/index/divider2.png"/>
        <div class="image-text_20 flex-row justify-between">
          <img class="group_5" referrerpolicy="no-referrer"
               src="../assets/pages/Buy/index/vertical_view2.png"/>
          <div class="text-group_15 flex-col justify-between">
            <span class="text-group_7">
              588ku&nbsp;2019款&nbsp;&nbsp;3.0T&nbsp;&nbsp;自动
              <br/>
              天窗版
            </span>
            <span class="text_11">厂商指导价：13.05万</span>
          </div>
        </div>
      </div>
      <div class="box_2 flex-row">
        <!--        <div class="group_6 flex-row">-->
        <!--          <img class="label_1" referrerpolicy="no-referrer"-->
        <!--               src="../assets/pages/Buy/index/search.png" />-->
        <!--          <input class="text_8" placeholder="搜索车型" style="width: 94px; height: 24px" />-->
        <!--        </div>-->
        <!--        <img class="label_2" referrerpolicy="no-referrer"-->
        <!--             src="../assets/pages/Buy/index/prompt_key.png" />-->
        <!--        <div class="group_7 flex-col">-->
        <!--          <img class="thumbnail_5" referrerpolicy="no-referrer"-->
        <!--               src="../assets/pages/Buy/index/rotation_chart.png" />-->
        <!--        </div>-->
        <div class="top">
          <div class="top_body">
            <div class="search">
              <input type="text" placeholder="搜索车型">
            </div>
            <div @click="this.$router.push({ name:'dialogue'})">
              <img class="info" src="../assets/icon/info_icon.png" >
            </div>
          </div>
        </div>
        <div class="lunbo" @mouseover="overHd" @mouseout="auto">
          <div class="slideshow" v-for="(item,ind) in gallery"
               v-show="ind===index">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="thumbs">
			<span class="thumb" :class="{'active' :item===index+1}" v-for="item in 3" :key="item"
            @click="index=item-1"></span>
          </div>

        </div>
        <div class="group_8 flex-row justify-between">
          <div class="block_2 flex-col"></div>
          <div class="block_3 flex-col"></div>
          <div class="block_4 flex-col"></div>
          <div class="block_5 flex-col"></div>
          <div class="block_6 flex-col"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuyView",
  data() {
    return {
      gallery: [
        {
          imgUrl: require("../assets/pages/Buy/index/rotation_chart.png")
        }, {
          imgUrl: require("../assets/pages/Buy/index/tu1.png")
        }, {
          imgUrl: require("../assets/pages/Buy/index/tu2.png")
        }
      ],
      index: 0,
      stopID: null
    };
  },
  created() {
    this.auto();
  },

  methods: {
    //鼠标一开  auto自动执行
    auto() {
      this.stopID = setInterval(() => {
        this.index++;
        this.check();
      }, 1000);
    },
    overHd() {
      clearInterval(this.stopID);

    },
    //检查边界
    check() {
      if (this.index === this.gallery.length) {
        this.index = 0;
      }
    }
  }
};
</script>

<style scoped>
.top {
  display: flex;
  justify-content: center;
}

.top .top_body {
  display: flex;
  margin-top: 5.6vw;
  margin-left: 5vw
}
.info{
  margin-top: 1.6vw;
  margin-left: 2.5vw;

}
/*搜索框*/
.search {
  margin-bottom: 3.2vw;
}

.search input {
  background: #E5E5E5 url("../assets/icon/search_icon.png") no-repeat 3.6vw 2.1333vw;
  background-size: 4.8vw 4.8vw;
  text-indent: 10vw;
  border: none;

  width: 83.4667vw;
  height: 9.2vw;
  border-radius: 2.6667vw;
}

/*轮播图*/
.slideshow {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 18vw 0vw 0vw -60.8vw;
}

.slideshow img {
  height: 40.2667vw;
  width: 90vw;
  border-radius: 2.6667vw;
  margin: 0 auto;
}

/*轮播图下方栏*/
.thumbs {
  text-align: center;
  margin-top: 0.6vw;
  margin-bottom: 3.2vw;
}

/*子栏*/
.thumb {
  width: 1.3333vw;
  height: 1.3333vw;
  display: inline-block;
  border-radius: 2vw;
  margin: 0 0.6667vw;
  background-color: #fff;
}

/*激活的子栏*/
.active {
  background-color: #f70;
}


/*分类标签块*/
.classify {
  display: flex;
  flex-direction: column;
  height: 34.2667vw;
  text-align: center;
}

input {
  background-color: transparent;
  border: 0;
}

button {
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
  background-color: transparent;
}

button:active {
  opacity: 0.6;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}


.justify-end {
  display: flex;
  justify-content: flex-end;
}


.justify-between {
  display: flex;
}


.page {
  position: relative;
  width: 100vw;
  height: 177.8667vw;
  overflow: hidden;
}

.section_3 {
  height: 177.8667vw;
  background: url(../assets/pages/Buy/index/background.png) 100% no-repeat;
  background-size: 100% 100%;
  width: 100vw;
  position: relative;
}

.block_9 {
  width: 100vw;
  height: 130.4vw;
  margin-top: 47.6vw;
}

.list_2 {
  width: 94.4667vw;
  height: 16.0667vw;
  justify-content: space-between;
  margin: 18.2vw 0 0 5vw;
}

.image-text_14-0 {
  width: 12.6667vw;
  height: 16.5333vw;
  margin: 0.5333vw 12.8vw 0 0;
}

.image_1-0 {
  width: 12vw;
  height: 11.0667vw;
  margin-left: 0.4vw;
}

.text-group_1-0 {
  width: 12.6667vw;
  overflow-wrap: break-word;
  color: rgba(41, 41, 41, 1);
  font-size: 3.2vw;
  font-family: SourceHanSansCN-Regular;
  text-align: left;
  white-space: nowrap;
  margin-top: 1.2vw;
}

.image-text_14-1 {
  width: 12.6667vw;
  height: 16.5333vw;
  margin: 0.5333vw 12.8vw 0 0;
}

.image_1-1 {
  width: 12vw;
  height: 11.0667vw;
  margin-left: 0.4vw;
}

.text-group_1-1 {
  width: 12.6667vw;
  overflow-wrap: break-word;
  color: rgba(41, 41, 41, 1);
  font-size: 3.2vw;
  font-family: SourceHanSansCN-Regular;
  text-align: left;
  white-space: nowrap;
  margin-top: 1.2vw;
}

.image-text_14-2 {
  width: 12.6667vw;
  height: 16.5333vw;
  margin: 0.5333vw 12.8vw 0 0;
}

.image_1-2 {
  width: 12vw;
  height: 11.0667vw;
  margin-left: 0.4vw;
}

.text-group_1-2 {
  width: 12.6667vw;
  overflow-wrap: break-word;
  color: rgba(41, 41, 41, 1);
  font-size: 3.2vw;
  font-family: SourceHanSansCN-Regular;
  text-align: left;
  white-space: nowrap;
  margin-top: 1.2vw;
}

.image-text_14-3 {
  width: 12.6667vw;
  height: 16.5333vw;
  margin: 0.5333vw 12.8vw 0 0;
}

.image_1-3 {
  width: 12vw;
  height: 11.0667vw;
  margin-left: 0.4vw;
}

.text-group_1-3 {
  width: 12.6667vw;
  overflow-wrap: break-word;
  color: rgba(41, 41, 41, 1);
  font-size: 3.2vw;
  font-family: SourceHanSansCN-Regular;
  text-align: left;
  white-space: nowrap;
  margin-top: 1.2vw;
  margin-left: 1.6vw;
}

.image_2 {
  width: 100vw;
  height: 1.0667vw;
  margin-top: 7.2vw;
}

.box_8 {
  width: 91.4667vw;
  height: 3.6vw;
  margin: 2.6667vw 0 0 3.6667vw;
}

.image-text_15 {
  width: 17.7333vw;
  height: 3.6vw;
}

.text-group_2 {
  width: 14.6667vw;
  height: 3.6vw;
  overflow-wrap: break-word;
  color: rgba(41, 41, 41, 1);
  font-size: 3.3333vw;
  font-family: SourceHanSansCN-Regular;
  /* font-weight: bold; */
  text-align: left;
  white-space: nowrap;

}

.thumbnail_1 {
  width: 2.4vw;
  height: 1.6vw;
  margin-top: 1.4667vw;
}

.image-text_16 {
  width: 10.2667vw;
  height: 3.6vw;
  margin-left: 14.6667vw;
}

.text-group_3 {
  width: 14.6667vw;
  height: 3.6vw;
  overflow-wrap: break-word;
  color: rgba(41, 41, 41, 1);
  font-size: 3.3333vw;
  font-family: SourceHanSansCN-Regular;
  /* font-weight: bold; */
  text-align: left;
  white-space: nowrap;
}

.thumbnail_2 {
  width: 2.4vw;
  height: 1.6vw;
  margin-top: 1.4667vw;
  margin-left: -6.6667vw;
}

.image-text_17 {
  width: 10.2667vw;
  height: 3.6vw;
  margin-left: 14.6667vw;
}

.text-group_4 {
  width: 14.6667vw;
  height: 3.6vw;
  overflow-wrap: break-word;
  color: rgba(41, 41, 41, 1);
  font-size: 3.3333vw;
  font-family: SourceHanSansCN-Regular;
  /* font-weight: bold; */
  text-align: left;
  white-space: nowrap;
}

.thumbnail_3 {
  width: 2.4vw;
  height: 1.6vw;
  margin-top: 1.4667vw;
  margin-left: -6.6667vw;
}

.image-text_18 {
  width: 10.2667vw;
  height: 3.4667vw;
  margin-left: 14.6667vw;
}

.text-group_5 {
  width: 14.6667vw;
  height: 3.6vw;
  overflow-wrap: break-word;
  color: rgba(41, 41, 41, 1);
  font-size: 3.3333vw;
  font-family: SourceHanSansCN-Regular;
  /* font-weight: bold; */
  text-align: left;
  white-space: nowrap;
}

.thumbnail_4 {
  width: 2.4vw;
  height: 1.6vw;
  margin-top: 1.4667vw;
  margin-left: -6.6667vw;
}

.image_3 {
  width: 100vw;
  height: 0.1333vw;
  margin-top: 3.7333vw;
}

.box_9 {
  width: 96vw;
  height: 20.6667vw;
  margin: 2.5333vw 0 0 4vw;
}

.group_1 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2.6667vw;
  width: 27.2vw;
  height: 20.6667vw;
  border: 0.1333vw solid rgba(229, 229, 229, 1);
}

.image_4 {
  width: 19.4667vw;
  height: 5.7333vw;
  margin: 4.9333vw 0 0 3.2vw;
}

.text-wrapper_1 {
  height: 5.4667vw;
  background: url(../assets/pages/Buy/index/background1.png) 100% no-repeat;
  background-size: 100% 100%;
  margin-top: 4.5333vw;
  width: 27.2vw;
}

.text_1 {
  width: 12.5333vw;
  height: 3.0667vw;
  overflow-wrap: break-word;
  color: rgba(41, 41, 41, 1);
  font-size: 2.6667vw;
  font-family: SourceHanSansCN-Regular;
  font-weight: bold;
  text-align: left;
  white-space: nowrap;
  line-height: 9.6vw;
  margin: -2.1333vw 0 0 7.7333vw;
}

.group_2 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2.6667vw;
  width: 27.2vw;
  height: 20.6667vw;
  border: 0.1333vw solid rgba(229, 229, 229, 1);
  margin-left: 3.3333vw;
}

.image_5 {
  width: 16.9333vw;
  height: 7.8667vw;
  margin: 3.8667vw 0 0 5.2vw;
}

.text-wrapper_2 {
  height: 5.4667vw;
  background: url(../assets/pages/Buy/index/background1.png) 100% no-repeat;
  background-size: 100% 100%;
  margin-top: 3.4667vw;
  width: 27.2vw;
}

.text_2 {
  width: 12.5333vw;
  height: 3.0667vw;
  overflow-wrap: break-word;
  color: rgba(41, 41, 41, 1);
  font-size: 2.6667vw;
  font-family: SourceHanSansCN-Regular;
  font-weight: bold;
  text-align: left;
  white-space: nowrap;
  line-height: 9.6vw;
  margin: -2.1333vw 0 0 7.7333vw;
}

.group_3 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2.6667vw;
  width: 27.2vw;
  height: 20.6667vw;
  border: 0.1333vw solid rgba(229, 229, 229, 1);
  margin-left: 3.4667vw;
}

.image_6 {
  width: 14.6667vw;
  height: 9.0667vw;
  margin: 3.2vw 0 0 6.2667vw;
}

.text-wrapper_3 {
  height: 5.4667vw;
  background: url(../assets/pages/Buy/index/background1.png) 100% no-repeat;
  background-size: 100% 100%;
  margin-top: 2.9333vw;
  width: 27.2vw;
}

.text_3 {
  width: 12.5333vw;
  height: 3.0667vw;
  overflow-wrap: break-word;
  color: rgba(41, 41, 41, 1);
  font-size: 2.6667vw;
  font-family: SourceHanSansCN-Regular;
  font-weight: bold;
  text-align: left;
  white-space: nowrap;
  line-height: 9.6vw;
  margin: -2.1333vw 0 0 9.8667vw;
}

.image_7 {
  width: 4.2667vw;
  height: 20.6667vw;
  margin-left: 3.3333vw;
}

.image-text_19 {
  width: 77.0667vw;
  height: 23.3333vw;
  margin: 5.8667vw 0 0 4vw;
}

.group_4 {
  background-color: rgba(84, 98, 114, 1);
  border-radius: 2.6667vw;
  width: 33.2vw;
  height: 22.4vw;
}

.text-group_14 {
  width: 41.2vw;
  height: 21.7333vw;
  margin-top: 1.6vw;
}

.paragraph_1 {
  width: 46.4667vw;
  height: 10vw;
  overflow-wrap: break-word;
  color: rgba(41, 41, 41, 1);
  font-size: 3.7333vw;
  font-family: Adobe Heiti Std R;
  font-weight: bold;
  text-align: left;
  line-height: 6.4vw;
  margin-left: 2.6667vw;
  margin-top: -2.6667vw;
}

.text_4 {
  width: 27.7333vw;
  height: 2.8vw;
  overflow-wrap: break-word;
  color: rgba(108, 108, 108, 1);
  font-size: 2.9333vw;
  font-family: SourceHanSansCN-Regular;
  font-weight: bold;
  text-align: left;
  white-space: nowrap;
  margin-top: 3.7333vw;
  margin-left: 2.6667vw;
}

.text-wrapper_4 {
  width: 18.2667vw;
  height: 3.2vw;
  overflow-wrap: break-word;
  font-size: 0;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 6.4vw;
  margin: 1.0667vw 0 0 2.6667vw;
}

.text_5 {
  width: 18.2667vw;
  height: 3.2vw;
  overflow-wrap: break-word;
  color: rgba(255, 42, 57, 1);
  font-size: 2.9333vw;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 6.4vw;
}

.text_6 {
  width: 18.2667vw;
  height: 3.2vw;
  overflow-wrap: break-word;
  color: rgba(255, 42, 57, 1);
  font-size: 4vw;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 6.4vw;
}

.text_7 {
  width: 18.2667vw;
  height: 3.2vw;
  overflow-wrap: break-word;
  color: rgba(255, 42, 57, 1);
  font-size: 2.9333vw;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 6.4vw;
}

.image_8 {
  width: 100vw;
  height: 0.1333vw;
  margin-top: 2.9333vw;
}

.image-text_20 {
  width: 77.0667vw;
  height: 16.4vw;
  margin: 2.9333vw 0 0.1333vw 4vw;
}

.group_5 {
  width: 33.2vw;
  height: 20vw;
}

.text-group_15 {
  width: 41.2vw;
  height: 14.8vw;
  margin-top: 1.6vw;
}

.text-group_7 {
  width: 46.4667vw;
  height: 10vw;
  overflow-wrap: break-word;
  color: rgba(41, 41, 41, 1);
  font-size: 3.7333vw;
  font-family: Adobe Heiti Std R;
  font-weight: bold;
  text-align: left;
  line-height: 6.4vw;
  margin-left: 2.6667vw;
  margin-top: -2.6667vw;
}

.text_11 {
  width: 27.7333vw;
  height: 2.8vw;
  overflow-wrap: break-word;
  color: rgba(108, 108, 108, 1);
  font-size: 2.9333vw;
  font-family: SourceHanSansCN-Regular;
  font-weight: bold;
  text-align: left;
  white-space: nowrap;
  margin-top: 3.7333vw;
  margin-left: 2.6667vw;
}

.box_2 {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 47.6vw;
  background: url(../assets/pages/Buy/index/background2.png) -0.6667vw -1.2vw no-repeat;
  background-size: 101.4667vw 48.8vw;
}

.group_6 {
  background-color: rgba(229, 229, 229, 1);
  border-radius: 2.6667vw;
  width: 83.4667vw;
  height: 9.2vw;
  margin: 10.5333vw 0 0 4.1333vw;
}

.label_1 {
  width: 4.8vw;
  height: 4.8vw;
  margin: 2.2667vw 0 0 3.6vw;
}

.text_8 {
  width: 12.5333vw;
  height: 3.2vw;
  overflow-wrap: break-word;
  color: rgba(87, 86, 86, 1);
  font-size: 2.9333vw;
  font-family: SourceHanSansCN-Regular;
  font-weight: bold;
  text-align: left;
  white-space: nowrap;
  line-height: 6.5333vw;
  margin: 3.0667vw 56vw 0 2.4vw;
  margin-top: 1vw;
}

.label_2 {
  width: 5.2vw;
  height: 5.4667vw;
  margin: 12.4vw 4.5333vw 0 2.6667vw;
}

.group_7 {

  border-radius: 2.6667vw;
  position: absolute;
  left: 3.8667vw;
  top: 24.4vw;
  width: 92vw;
  height: 37.7333vw;
}


.thumbnail_5 {
  width: 92vw;
  height: 37.7333vw;
  margin-top: 0.8vw;
}

.group_8 {
  width: 6.9333vw;
  height: 1.0667vw;
  margin: 2.9333vw 0 1.7333vw 42.5333vw;
}

.block_2 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  width: 1.0667vw;
  height: 1.0667vw;
}

.block_3 {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  width: 1.0667vw;
  height: 1.0667vw;
  margin-left: 0.4vw;
}

.block_4 {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  width: 1.0667vw;
  height: 1.0667vw;
  margin-left: 0.4vw;
}

.block_5 {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  width: 1.0667vw;
  height: 1.0667vw;
  margin-left: 0.4vw;
}

.block_6 {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  width: 1.0667vw;
  height: 1.0667vw;
  margin-left: 0.4vw;
}
.SelectList1
{
  position: relative;
  background-color: transparent;
  TOP: -6px;
  left: -5px;
  border-width: 0px;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  border-bottom-style: none;
  display: block;
  height: 28px;
  width: 19vw;
  line-height: 20px;
}
.SelectList2
{
  position: relative;
  background-color: transparent;
  TOP: -6px;
  left: -5px;
  border-width: 0px;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  border-bottom-style: none;
  display: block;
  height: 28px;
  width:  13vw;;
  line-height: 20px;
}
</style>

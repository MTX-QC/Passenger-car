<template>
  <img src="../../assets/pages/Sell/Evaluate/BJ1.png" class="BJ1" />
  <img src="../../assets/pages/Sell/Evaluate/JX1.png" class="JX1" @click="this.$router.go(-1)"/>
  <span class="Text1">为您估价</span>
  <img src="../../assets/pages/Sell/Evaluate/JX2.png" class="JX2" />
  <div class="box-1">
    <div class="box-1-1">
      <span class="Text2">卖车地点</span>
      <div class="image-wrapper2">
        <img
          id="image"
          src="../../assets/pages/Sell/Evaluate/JX3.png"
          class="JX3"
        />
      </div>
      <div id="selected-city"></div>
      <div class="popup-wrapper2">
        <div id="city-selector">
          <ul>
            <li>北京</li>
            <li>上海</li>
            <li>广州</li>
            <li>深圳</li>
            <li>武汉</li>
            <li>杭州</li>
            <li>长沙</li>
            <li>西安</li>
          </ul>
        </div>
      </div>

      <!-- </div> -->
    </div>
    <div class="HX1"></div>

    <div class="box-1-1">
      <span class="Text2">车型</span>
      <div class="image-wrapper3">
        <img src="../../assets/pages/Sell/Evaluate/JX3.png" class="JX3" />
        <div class="text-output"></div>
      </div>
      <div class="popup-wrapper3">
        <div class="popup">
          <input type="text" id="input-text" placeholder="请输入您的车型" />
          <button id="submit-button">确定</button>
        </div>
      </div>
    </div>
    <div class="HX1"></div>

    <div class="box-1-1">
      <span class="Text2">上牌时间</span>
      <!-- <VueDatePicker v-model="date"></VueDatePicker>
      {{ new Date(date).toLocaleDateString()  }} -->

      <div class="image-wrapper6">
        <img src="../../assets/pages/Sell/Evaluate/JX3.png" class="JX3" />
        <div class="text-output6"></div>
      </div>
      <div class="popup-wrapper6">
        <div class="popup6">
          <input
            type="text"
            id="input-text6"
            placeholder="上牌时间（xx-xx-xx）"
          />
          <button id="submit-button6">确定</button>
        </div>
      </div>
    </div>
    <div class="HX1"></div>

    <div class="box-1-1">
      <span class="Text2">行驶里程(万公里)</span>
      <div class="image-wrapper4">
        <img
          src="../../assets/pages/Sell/Evaluate/JX3.png"
          class="JX3"
          alt="Image"
        />
        <div class="text-output4"></div>
      </div>
      <div class="popup-wrapper4">
        <div class="popup">
          <input
            type="text"
            id="input-text4"
            placeholder="请输入行驶里程(万公里)"
          />
          <button id="submit-button4">确定</button>
        </div>
      </div>
    </div>
    <div class="HX1"></div>

    <div class="box-1-1">
      <span class="Text2">联系方式</span>
      <div class="image-wrapper5">
        <img
          src="../../assets/pages/Sell/Evaluate/JX3.png"
          class="JX3"
          alt="Image"
        />
        <div class="text-output5"></div>
      </div>
      <div class="popup-wrapper5">
        <div class="popup">
          <input
            type="text"
            id="input-text5"
            placeholder="请输入您的电话号码"
          />
          <button id="submit-button5">确定</button>
        </div>
      </div>
    </div>
    <div class="HX1"></div>

    <div class="box-1-1">
      <span class="Text2">卖车意向</span>
      <div class="image-wrapper1">
        <img src="../../assets/pages/Sell/Evaluate/JX3.png" class="JX3" />
        <span class="selected-option1"></span>
      </div>
      <div class="popup-wrapper1">
        <div class="popup-content1">
          <h6>请选择</h6>
          <div class="options">
            <label>
              <input type="radio" name="option" value="是" />
              是
            </label>
            <label>
              <input type="radio" name="option" value="否" />
              否
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="JX4"><span>开始估价</span></div>
  <div class="JX5"><span>*&nbsp;您的爱车每天约贬值0.03%</span></div>
</template>

<script>
// import VueDatePicker from "@vuepic/vue-datepicker";
// import "@vuepic/vue-datepicker/dist/main.css";

export default {
  name: "Evaluate",
  // components: { VueDatePicker },
  // data() {
  //   return {
  //     date: null,
  //   };
  // },
  mounted() {
    const imageWrapper6 = document.querySelector(".image-wrapper6");
    const popupWrapper6 = document.querySelector(".popup-wrapper6");
    const inputTextElement6 = document.querySelector("#input-text6");
    const textOutputElement6 = document.querySelector(".text-output6");

    imageWrapper6.addEventListener("click", function () {
      popupWrapper6.style.display = "block";
    });

    document
      .querySelector("#submit-button6")
      .addEventListener("click", function () {
        textOutputElement6.textContent = inputTextElement6.value;
        popupWrapper6.style.display = "none";
      });

    // 获取元素
    const image = document.getElementById("image");
    const selectedCity = document.getElementById("selected-city");
    const citySelector = document.getElementById("city-selector");
    const cityList = citySelector.getElementsByTagName("li");
    // const imageWrapper2 = document.querySelector(".image-wrapper2");
    const popupWrapper2 = document.querySelector(".popup-wrapper2");

    // 点击图片显示城市选择器
    image.addEventListener("click", function () {
      citySelector.style.display = "block";
      popupWrapper2.style.display = "block";
    });

    // 选择城市并显示在图片左侧
    for (let i = 0; i < cityList.length; i++) {
      cityList[i].addEventListener("click", function () {
        const city = this.innerText;
        selectedCity.innerText = city;
        citySelector.style.display = "none";
        popupWrapper2.style.display = "none";
      });
    }

    // 车型
    const imageWrapper3 = document.querySelector(".image-wrapper3");
    const popupWrapper3 = document.querySelector(".popup-wrapper3");
    const inputTextElement = document.querySelector("#input-text");
    const textOutputElement = document.querySelector(".text-output");

    imageWrapper3.addEventListener("click", function () {
      popupWrapper3.style.display = "block";
    });

    document
      .querySelector("#submit-button")
      .addEventListener("click", function () {
        textOutputElement.textContent = inputTextElement.value;
        popupWrapper3.style.display = "none";
      });

    //联系方式
    const imageWrapper5 = document.querySelector(".image-wrapper5");
    const popupWrapper5 = document.querySelector(".popup-wrapper5");
    const inputTextElement2 = document.querySelector("#input-text5");
    const textOutputElement2 = document.querySelector(".text-output5");

    imageWrapper5.addEventListener("click", function () {
      popupWrapper5.style.display = "block";
    });

    document
      .querySelector("#submit-button5")
      .addEventListener("click", function () {
        textOutputElement2.textContent = inputTextElement2.value;
        popupWrapper5.style.display = "none";
      });

    // 卖车意向
    const imageWrapper1 = document.querySelector(".image-wrapper1");
    const popupWrapper1 = document.querySelector(".popup-wrapper1");
    const options1 = document.getElementsByName("option");
    const selectedOptionElement1 = document.querySelector(".selected-option1");

    imageWrapper1.addEventListener("click", function () {
      popupWrapper1.style.display = "flex";
      popupWrapper1.style.display = "block";
    });

    for (let i = 0; i < options1.length; i++) {
      options1[i].addEventListener("change", function (event) {
        selectedOptionElement1.textContent = event.target.value;
        popupWrapper1.style.display = "none";
      });
    }

    //行驶里程
    const imageWrapper4 = document.querySelector(".image-wrapper4");
    const popupWrapper4 = document.querySelector(".popup-wrapper4");
    const inputTextElement1 = document.querySelector("#input-text4");
    const textOutputElement1 = document.querySelector(".text-output4");
    imageWrapper4.addEventListener("click", function () {
      popupWrapper4.style.display = "block";
    });
    document
      .querySelector("#submit-button4")
      .addEventListener("click", function () {
        textOutputElement1.textContent = inputTextElement1.value;
        popupWrapper4.style.display = "none";
      });
    const imageWrappers = document.querySelectorAll(".image-wrapper");
    const popupWrappers = document.querySelector(".popup-wrapper");
    for (let index = 0; index < imageWrappers.length; index++) {
      imageWrappers[index].addEventListener("click", function () {
        popupWrappers.style.display = "flex";
      });
    }
  },
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

ul,
ol {
  list-style-type: none;
}

html,
body {
  width: 100%;
  margin: 0;
  padding: 0;
}

/* 卖车意向 */

.selected-option1 {
  position: absolute;
  top: 91%;
  left: 86%;
  transform: translate(-50%, -50%);
  font-size: 3.6667vw;
}

.popup-wrapper1 {
  position: fixed;
  top: 0%;
  left: 0%;
  display: none;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.popup-content1 {
  width: 49vw;
  height: 26.6667vw;
  background-color: #fff;
  padding: 2.6667vw;
  text-align: center;
  border-radius: 0.6667vw;
  margin-top: 65%;
  margin-left: 25%;
}

.options1 {
  margin-top: 4vw;
}

label {
  display: inline-block;
  margin-right: 2.6667vw;
  margin-top: 5vw;
}

input[type="radio"] {
  margin-right: 0.6667vw;
}

/* 车型 */

.image-wrapper3 img {
  max-width: 100%;
  max-height: 100%;
}

.popup-wrapper3 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 9999;
}

.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 53.3333vw;
  background-color: #fff;
  padding: 2.6667vw;
}

.popup input[type="text"] {
  width: 100%;
  padding: 1.3333vw;
  margin-bottom: 2.3333vw;
  box-sizing: border-box;
}

.popup button {
  background-color: #1c80f2;
  color: white;
  padding: 1.3333vw;
  border: none;
  cursor: pointer;
  width: 100%;
}

.text-output {
  position: absolute;
  right: 9vw;
  top: 22vw;
}

/* 形式里程 */

.image-wrapper4 img {
  max-width: 100%;
  max-height: 100%;
}

.popup-wrapper4 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 9999;
}

.text-output4 {
  position: absolute;
  right: 9vw;
  top: 55vw;
}

/* 联系方式 */
.image-wrapper5 img {
  max-width: 100%;
  max-height: 100%;
}

.popup-wrapper5 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 9999;
}

.text-output5 {
  position: absolute;
  right: 9vw;
  top: 71vw;
}

.BJ1 {
  width: 100vw;
  height: 46.4vw;
}

.JX1 {
  width: 1.6667vw;
  height: 2.9467vw;
  /* background-color: rebeccapurple; */
  position: absolute;
  left: 4.2933vw;
  top: 11.52vw;
}

.Text1 {
  width: 16.8vw;
  height: 4vw;
  position: absolute;
  left: 41.6vw;
  top: 10.9333vw;
  color: rgba(255, 255, 255, 1);
  white-space: nowrap;
}

.JX2 {
  width: 4.5333vw;
  height: 4.6667vw;
  position: absolute;
  left: 91.3333vw;
  top: 10.6667vw;
}

.box-1 {
  background-color: rgb(255, 249, 249);
  border-radius: 2.6667vw;
  position: absolute;
  left: 3.8667vw;
  top: 22.9333vw;
  width: 92vw;
  height: 98.4667vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 5.9vw;
  padding-top: 5.9vw;
  padding-bottom: 5.9vw;
  padding-right: 5.9vw;
}

.box-1-1 {
  display: flex; /* 将该容器设置为 flex 容器 */
  justify-content: space-between; /* 控制元素在 flex 容器内的水平位置 */
}

.JX3 {
  width: 1.6933vw;
  height: 3.0133vw;
  padding-right: 0;
}

.HX1 {
  width: 85.2vw;
  height: 0.1333vw;
  background-color: rgb(241, 229, 229);
}

.JX4 {
  width: 85vw;
  height: 11.0667vw;
  padding-left: 33.8667vw;
  padding-top: 2.5vw;
  background-color: rgb(52, 129, 253);
  margin-top: 99vw;
  margin-left: 7vw;
  border-radius: 5%;
}

.JX5 {
  color: rgba(128, 128, 128, 1);
  font-size: 3.2vw;
  white-space: nowrap;
  margin: 3.2vw 0 3.7333vw 29.8667vw;
}

#city-selector {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  padding: 2.6667vw;
  background-color: white;
  border: 0.1333vw solid black;
  width: 69vw;
}

#city-selector ul {
  list-style: none;
  text-align: center;
  align-items: center;
  gap: 1.3333vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#city-selector ul li {
  padding: 1.3333vw;
  cursor: pointer;
}

#selected-city {
  position: absolute;
  /* top: 4.9vw; */
  font-size: 3.2vw;
  margin-left: 69vw;
}

.popup-wrapper2 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 9999;
}

.image-wrapper6 img {
  max-width: 100%;
  max-height: 100%;
}

.popup-wrapper6 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 9999;
}

.popup6 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 53.3333vw;
  background-color: #fff;
  padding: 2.6667vw;
}

.popup6 input[type="text"] {
  width: 100%;
  padding: 1.3333vw;
  margin-bottom: 2.3333vw;
  box-sizing: border-box;
}

.popup6 button {
  background-color: #1c80f2;
  color: white;
  padding: 1.3333vw;
  border: none;
  cursor: pointer;
  width: 100%;
}

.text-output6 {
  position: absolute;
  right: 9vw;
  top: 38.5vw;
}
</style>

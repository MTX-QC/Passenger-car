<template>
  <div id="register_login_app">
    <div class="top">
      <div class="title">
        <span class="left" @click="back_page"><img src="../../assets/icon/retret_icon.png" alt=""></span>
        <span class="title_text">注册登陆</span>
        <img class="right" src="../../assets/icon/service_icon.png" alt="" @click='this.$router.push({ name: "dialogue" })'>
      </div>
      <div class="intro">
        <p>顺风车行</p>
        <p>一路向西</p>
      </div>
    </div>
    <div class="login_from">
      <div class="from_user">
        <p class="photo">+86</p>
        <p class="long_string"></p>
        <label>
          <input type="text" placeholder="输入手机号码" v-model="login_form.p_number">
        </label>
      </div>
      <div class="from_verify">
        <label>
          <input type="text" placeholder="输入验证码" v-model="login_form.v_code">
        </label>
        <button @click="v_get">获取验证码</button>
      </div>
      <button class="log_btn" @click="login">立即登录</button>
      <p class="log_msg">首次登陆用户验证后自动登陆</p>
    </div>
    <div class="other_login">
      <p class="t_label">其他登录方式</p>
      <div class="icon_items">
        <div>
          <img src="../../assets/icon/wechat_icon.png" alt="">
        </div>
        <div>
          <img src="../../assets/icon/qq_icon.png" alt="">
        </div>
        <div>
          <img src="../../assets/icon/microblog_icon.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register_login",
  data() {
    return {
      login_form: {
        p_number: "",
        v_code: ""
      },
      checkCode: 123456
    };
  },
  computed: {
    // 表单验证属性
    verify: function() {
      if (!this.login_form.p_number) {
        return { "flag": false, "msg": "未填写手机号码" };
      }
      if (!this.login_form.v_code) {
        return { "flag": false, "msg": "未填写验证码" };
      }
      if (!/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(this.login_form.p_number)) {
        return { "flag": false, "msg": "请填写有效的手机号码" };
      }
      if (this.login_form.v_code !== this.checkCode) {
        return { "flag": false, "msg": "验证码不匹配" };
      }
      return { "flag": true, "msg": "ok" };
    }
  },
  methods: {
    // 登陆方法
    login() {
      if (!this.verify.flag) {
        alert(this.verify.msg);
      } else {
        alert(this.verify.msg);
        this.$store.state.login_user.photo = this.login_form.p_number;
        console.log(this.$store.state.login_user)
        this.$router.push({ name:'mine'});
      }
    },
    // 获取验证码方法
    v_get() {
      if (!/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(this.login_form.p_number)) {
        alert("请填写有效的手机号码");
      } else {
        this.random_v();
        alert(`${this.login_form.p_number}收到的验证码是${this.checkCode}`);
      }
    },
    // 生成随机验证码方法
    random_v() {
      let code = "";
      const codeLength = 4;
      const random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
      ];
      for (let i = 0; i < codeLength; i++) {
        let index = Math.floor(Math.random() * 36);
        code += random[index];
      }
      this.checkCode = code;
    },
    // 返回上一页
    back_page() {
      this.$router.go(-1);
    }

  }

};
</script>

<style>
/*顶部导航栏*/
.top {
  margin-bottom: 5.2044vw;
  background: none;
  height: auto;
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


/*设置渐变色与图片背景*/
#register_login_app {
  background: url("../../assets/pages/Mine/register_login/top_background.png") no-repeat,
  linear-gradient(180deg, #4481EB 0%, rgba(4, 190, 254, 0) 104.8vw);
  background-size: 100%;
}

/*简介字体*/
.intro {
  height: 15.6vw;
  font-size: 6.4vw;
  font-weight: normal;
  color: #FFFFFF;
  line-height: 9.6vw;

  margin-top: 4.4vw;
  margin-bottom: 11.4667vw;
  margin-left: 4.4vw;
}

.intro p:nth-child(2) {
  padding-top: 1.3333vw;
  padding-left: 7.3333vw;
}

/*登陆注册表单盒*/
.login_from {
  width: 92vw;
  height: 83.7333vw;
  background: #FFFFFF;
  border-radius: 2.6667vw;

  margin: 0 auto;
  box-shadow: #D0DADE 0 0 0.6667vw 0.6667vw;

  display: flex;
  flex-direction: column;
}

/*表单用户名子盒*/
.login_from .from_user {
  width: 85.0667vw;
  height: 12.8vw;
  line-height: 12.8vw;
  background: #EBEAEA;
  border-radius: 6.6667vw;

  display: flex;
  margin: 8.8vw auto 0;
}

/*手机类别文字*/
.login_from .photo {
  font-size: 4.8vw;
  color: #232323;
  width: 16.4vw;
  text-align: center;
}

/*竖线样式修正*/
.long_string {
  margin-top: 2.6667vw;
  /*margin-right: 4.4vw;*/
}

/*信息输入框*/
.login_from input {
  background: none;
  outline: none;
  border: none;

  text-indent: 4.9333vw;

  font-size: 4.2667vw;
  color: #535353;
  line-height: 6.4vw;
}

/*按钮样式*/
.login_from button {
  width: 24.1333vw;
  height: 12.8vw;
  border-style: none;
  border-radius: 6.6667vw;
  background: linear-gradient(0deg, #4481EB, #04BEFE);
  font-size: 3.7333vw;
  color: #F6F6F6;
}

/*表单验证子盒*/
.login_from .from_verify {
  width: 85.0667vw;
  height: 12.8vw;
  line-height: 12.8vw;
  background: #EBEAEA;
  border-radius: 6.6667vw;
  margin: 10.2667vw auto 0;

  display: flex;
  justify-content: space-between;
}

/*立即登录*/
.login_from .log_btn {
  width: 85.0667vw;
  height: 12.8vw;
  margin: 15.8667vw auto 0;
}

/*立即登录说明*/
.login_from .log_msg {
  color: #767676;
  line-height: 6.4vw;
  text-align: center;
  margin-top: 4.6667vw;
  font-size: 3.2vw;
  margin-bottom: 2.5333vw;
}


/*其他登录方式盒*/
.other_login {
  height: 20.48vw;
  margin: 20.4vw auto 0;
}

/*其他登录方式标签*/
.other_login .t_label {
  height: 3.6vw;
  font-size: 3.7333vw;
  color: #595959;
  text-align: center;
}

/*其他登录方式图标盒*/
.other_login .icon_items {
  width: 68.56vw;
  display: flex;
  justify-content: space-between;

  margin: 7.2vw auto 0;
  padding-bottom: 8.1333vw;
}

/*登陆图标盒*/
.other_login .icon_items div {
  display: inline-block;
  width: 9.6vw;
  height: 9.7333vw;
  background: #E5E5E5;
  border-radius: 50%;
}

/*登陆图表*/
.other_login .icon_items img {
  width: 5.8667vw;
  height: 4.8vw;
  opacity: 0.9;
  margin-top: 2.5333vw;
  margin-left: 1.8vw;
}

</style>


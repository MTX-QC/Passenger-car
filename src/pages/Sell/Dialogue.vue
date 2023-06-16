<template>
  <img src="../../assets/pages/Sell/Dialogue/BJ1.png" class="BJ1" />

  <div class="box-1-1">
    <img
      src="../../assets/pages/Sell/Dialogue/JX1.png"
      class="JX1"
      @click="this.$router.go(-1)"
    />
    <span class="TX1">小艾</span>
    <img src="../../assets/pages/Sell/Dialogue/JX2.png" class="JX2" />
  </div>

  <div class="chat-container">
    <div class="chat-messages">
      <div class="chat-message" v-for="message in messages" :key="message.id">
        <div class="chat-content">
          <div class="chat-text">{{ message.text }}</div>
        </div>

        <div class="chat-avatar">
          <img :src="message.avatar" alt="avatar" />
        </div>
      </div>
    </div>
    <div class="chat-input">
      <form @submit.prevent="sendMessage">
        <input
          class="input1"
          type="text"
          v-model="newMessage"
          placeholder="请输入信息..."
        />
        <button class="button1" type="submit">发送</button>
      </form>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
// import axios from "axios";

export default {
  name: "Dialogue",
  data() {
    return {
      messages: [
        {
          id: 1,
          text: "Hello!",
          avatar: "https://via.placeholder.com/50x50.png?text=Me",
        },
      ],
      newMessage: "",
    };
  },
  methods: {
    sendMessage() {
      this.messages.push({
        id: this.messages.length + 1,
        text: this.newMessage,
        avatar: "https://via.placeholder.com/50x50.png?text=You",
      });

      this.newMessage = "";

      this.$nextTick(() => {
        this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight;
      });
    },
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

.BJ1 {
  width: 100vw;
  height: 20vw;
}

.box-1-1 {
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding-left: 4vw;
  padding-top: 2vw;
  padding-right: 4vw;
  top: 5vw;
  width: 100vw;
}

.JX1 {
  width: 1.96vw;
  height: 3.5333vw;
}

.TX1 {
  width: 8.1333vw;
  height: 3.8667vw;
  color: rgba(255, 255, 255, 1);
  white-space: nowrap;
}

.JX2 {
  width: 4.5333vw;
  height: 4.6667vw;
}

.chat-container {
  display: flex;
  flex-direction: column;
  height: 71vh;
}

.chat-messages {
  flex: 1;
  overflow-y: scroll;
  padding: 1.3333vw;
}

.chat-message {
  display: flex;
  margin-bottom: 1.3333vw;
  padding-top: 2vw;
}

.chat-avatar {
  width: 6.6667vw;
  margin-right: 1.3333vw;
}

.chat-avatar img {
  width: 100%;
  border-radius: 50%;
}

.chat-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.chat-text {
  padding: 1.3333vw;
  background-color: #eee;
  border-radius: 1.3333vw;
  max-width: 50%;
  margin-left: 31vw;
  word-break: break-all;
}
.chat-input {
  padding-left: 3vw;
  position: fixed;
  top: 148vw;
  background-color: white;
  width: 100%;
}

.input1 {
  height: 9.5vw;
  width: 71vw;
  border: 1px solid #ccc;
  padding-left: 2vw;
}
.button1 {
  height: 9.5vw;
  margin: 3vw;
  width: 20vw;
}
</style>

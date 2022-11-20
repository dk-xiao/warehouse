<template>
  <div id="login-page">
    <div id="login-box">
      <label>
        <input class="userInfo" type="text" v-model="username" placeholder="请输入用户名">
      </label>
      <label>
        <input class="userInfo" type="password" v-model="password" placeholder="密码">
      </label>
      <label>
        <input id="submit" type="button" value="登录" @click="a">
      </label>
      <div>
        <a href="javaScript:void(0)" @click="messageFun">
          注册账户
        </a>
        <a href="javaScript:void(0)" @click="message.success({
          message: 'this is success message'
        })">
          找回密码
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import message from "../common/message"
import myMessage from "../common/message/myMessage"

  let username = ref('')
  let password = ref('')
  const a = () => {
    console.log(username.value)
    console.log(password.value)
  };
  const messageFun = () => {
    message({
      type: 'error',
      message: 'this is success message'
    })
  }
</script>

<style scoped>
#login-page {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, #0ef802, #34722e 50%, #662385 50%, #bd00ff 100%);

}
#login-box {
  background: rgba(255,255,255, 0.2);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  box-shadow: 10px 10px 10px rgba(0,0,0,0.2);
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1rem 2rem 1rem;
}
#login-box label {
  display: flex;
  justify-content: center;
  width: 100%;
}
#login-box input {
  width: 100%;
  padding: 10px 10px 10px 10px;
}
.userInfo {
  border: 0;
  color: white;
  border-bottom: 1px solid gray;
  background-color: transparent;
  margin: 1rem 0 1rem 0;
  outline: none;
}
.userInfo::placeholder {
  color: #b7b7b7;
}
.userInfo:hover {
  border-bottom: 1px solid #b7b7b7;
}
#submit {
  background: linear-gradient(to left, #ff0059, #cccccc, #ffe000, #07ff00, #00e7ff, #8c00ff, #ff0059);
  background-size: 500%;
  border-radius: 1rem;
  box-shadow: 2px 2px #4f4f4f;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
}
#submit:hover {
  /*opacity: 0.8;*/
  animation: animate 7s linear infinite;
}

@keyframes animate {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 500%;
  }
}

@media screen and (max-width: 400px) {
  #login-box {
    background: rgba(255,255,255, 0.2);
    border-radius: 1rem;
    backdrop-filter: blur(20px);
    box-shadow: 10px 10px 10px rgba(0,0,0,0.2);
    width: calc(90% - 1rem);
  }
}

</style>
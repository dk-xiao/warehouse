<template>
<div id="login">
<div class="div1"></div>
<div class="div2"></div>
<div class="div3"></div>
<div class="div4"></div>
<div class="div5"></div>
<div class="div6"></div>
<div class="div7"></div>
<div class="div8"></div>
<div class="div9"></div>
</div>
</template>

<script>
export default {
  name: "loginPage",
}
</script>

<style scoped>
#login {
  width: 100%;
  height: 100%;
  position: relative;
}
.div1 {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  clip-path: polygon(0 0,29% 0,43% 33%,33% 43%,0 29%);
}

.div2 {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: red;
  /*shape-outside: polygon(0 0,29% 0,43% 33.3%,33.3% 43%,0 29%);*/
  clip-path: polygon(29% 0,71% 0,57% 33%,43% 33%);
}
.div3 {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: yellow;
  /*shape-outside: polygon(0 0,29% 0,43% 33.3%,33.3% 43%,0 29%);*/
  clip-path: polygon(71% 0,100% 0%, 100% 29%,66% 43%,57% 33%);
}
.div4 {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: green;
  /*shape-outside: polygon(0 0,29% 0,43% 33.3%,33.3% 43%,0 29%);*/
  clip-path: polygon(100% 29%,100% 71%, 66% 57%,66% 43%);
}
.div5 {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: purple;
  /*shape-outside: polygon(0 0,29% 0,43% 33.3%,33.3% 43%,0 29%);*/
  clip-path: polygon(100% 71%, 100% 100%,71% 100%,57% 66%,66% 57%);
}
.div6 {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: blue;
  /*shape-outside: polygon(0 0,29% 0,43% 33.3%,33.3% 43%,0 29%);*/
  clip-path: polygon(71% 100%,29% 100%,43% 66%,57% 66%);
}
.div7 {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: orange;
  /*shape-outside: polygon(0 0,29% 0,43% 33.3%,33.3% 43%,0 29%);*/
  clip-path: polygon(29% 100%,0 100%,0 71%,33% 57%,43% 66%);
}
.div8 {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: gray;
  /*shape-outside: polygon(0 0,29% 0,43% 33.3%,33.3% 43%,0 29%);*/
  clip-path: polygon(0 71%,0 29%,33% 43%,33% 57%);
}
.div9 {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  /*shape-outside: polygon(0 0,29% 0,43% 33.3%,33.3% 43%,0 29%);*/
  clip-path: polygon(43% 33%,57% 33%,66% 43%, 66% 57%,57% 66%,43% 66%,33% 57%,33% 43%);
}
</style>
<template>
<div id="login">
<div class="div1"></div>
<div class="div2"></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
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
}

.div1 {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 10px black solid;
  clip-path: polygon(0 0,29% 0,43% 33.3%,33.3% 43%,0 29%);
}
.div1:hover {
  box-shadow: inset 10px 10px 6px rgb(35 173 255);
}
.div2 {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: red;
  /*shape-outside: polygon(0 0,29% 0,43% 33.3%,33.3% 43%,0 29%);*/
  clip-path: polygon(29% 0,71% 0,57% 33.3%,43% 33.3%);
}
</style>
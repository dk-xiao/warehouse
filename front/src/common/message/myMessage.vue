<template>
<transition name="my-message-fade">
  <div
      :class="boxStyle"
      v-show="visible"
      :style="{
        top: top + 'px',
      }"
  >
    {{ message }}
  </div>
</transition>
</template>

<script setup>

import {computed, reactive, toRefs} from "vue";
import types from "./types"

const state = reactive({
  visible: false,
  top: 0,
  height: 25,
  margin: 20,
})
let timer = null;

const { visible, top, height, margin } = toRefs(state);

const props = defineProps({
  type: {
    type: String,
    default: types.MESSAGE,
    validator(value) {
      return Object.values(types).includes(value);
    }
  },
  message: {
    type: String,
    default: types.MESSAGE,
  }
})

const setVisible = (isVisible) => {
  return new Promise(resolve => {
    state.visible = isVisible;
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      resolve('');
    }, 300)
  })

}

const setTop = (top) => {
  state.top = top
}

defineExpose({
  setVisible,
  setTop,
  height: 45,
  margin,
})

const boxStyle = computed(() => ['my-message', props.type])
</script>

<style lang="scss" scoped>
$success: #E1F3D8FF;
$success-text: #67C23A;
$warning: #FAECD8FF;
$warning-text: #E6A23C;
$message: #E9E9EBFF;
$message-text: #909399;
$error: #FDE2E2FF;
$error-text: #F56C6C;

.my-message{
  position: fixed;
  width: auto;
  height: 25px;
  line-height: 25px;
  padding: 10px 20px 10px 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  text-align: center;
  border-radius: 5px;
  font-size: 1rem;
  transition: top .3s ease-out;

  &.success {
    background-color: $success;
    color: $success-text;
  }
  &.warning {
    background-color: $warning;
    color: $warning-text;
  }
  &.message {
    background-color: $message;
    color: $message-text;
  }
  &.error {
    background-color: $error;
    color: $error-text;
  }
}

.my-message-fade-enter-active {
  transition: all .3s ease-in;
}

.my-message-fade-leave-active {
  transition: all .3s ease-out;
}

.my-message-fade-enter-from,
.my-message-fade-leave-to {
  transform: translateY(-20px) translateX(-50%);
  opacity: 0;
}

</style>
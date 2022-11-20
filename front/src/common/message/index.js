import types from "./types"
import messageComponent from "./myMessage"
import {createApp, ref, watch} from "vue";

const messageArr = ref([]);

const message = (options) => {
    const messageApp = createApp(messageComponent, options);
    showMessage(messageApp, options);
}

Object.values(types).forEach((type => {
    message[type] = (options) => {
        options.type = type;
        return message(options);
    }
}))

function showMessage (app, { duration }) {
    const fragment = document.createDocumentFragment();
    const vm = app.mount(fragment);
    messageArr.value.push(vm);
    document.body.appendChild(fragment);
    setTop(vm);
    vm.setVisible(true);
    watch(messageArr, () => setTop(vm))
    hideMessage(app, vm, duration);
}

function hideMessage (app, vm, duration) {
    vm.timer = setTimeout(async () => {
        await vm.setVisible(false);
        app.unmount();
        messageArr.value = messageArr.value.filter(item => item !== vm);
        clearTimeout(vm.timer);
        vm.timer = null;
    }, duration || 3000);

}

function setTop (vm) {
    const { setTop, height, margin } = vm;
    const index = messageArr.value.findIndex(item => item === vm);
    setTop(margin * (index + 1) + height * index);
}

export {
    types
}
export default message;
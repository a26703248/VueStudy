import { createApp } from "../vue/vue.esm-browser.js";

const app = {
  data() {
    return {
      title:"生命週期",
      table:{
        vue2:"Hooks 名稱 (Vue 2.x/3.x)",
        vue3:"Hooks 名稱 (對應 Vue 3.0 Composition API)",
        text:"說明"
      },
      VueDifferenceList:[
        {vue2:"beforeCreate", vue3:"setup", text:"Vue 實體被建立，狀態與事件都尚未初始化"},
        {vue2:"created", vue3:"setup", text:"Vue 實體已建立，狀態與事件已初始化完成(prop、data、computed 等屬性已建立，vm.$el 屬性無法使用 )"},
        {vue2:"beforeMount", vue3:"onBeforeMonut", text:"Vue 實體尚未與模板 (DOM 節點) 綁定"},
        {vue2:"mounted", vue3:"onMounted", text:""},
        {vue2:"beforeUpdate", vue3:"onBeforeUpdate", text:"當狀態被變動時，畫面同步更新前"},
        {vue2:"updated", vue3:"onUpdated", text:"當狀態被變動時，畫面已同步更新完成"},
        {vue2:"beforeDestroy(2.X)", vue3:"onBeforeUnmount", text:"Vue 實體物件被銷毀前"},
        {vue2:"beforeUnmount(3.0)", vue3:"onBeforeUnmount", text:"Vue 實體物件被銷毀前"},
        {vue2:"destroyed(2.x)", vue3:"onUnmounted", text:"Vue 實體物件被銷毀完畢"},
        {vue2:"unmounted(3.0)", vue3:"onUnmounted", text:"Vue 實體物件被銷毀完畢"},
        {vue2:"errorCaptured", vue3:"onErrorCaptured", text:"子/孫代元件的錯誤被捕獲時觸發"},
        {vue2:"activated", vue3:"---", text:"Vue 元件被啟動時觸發，搭配 keep-alive 使用"},
        {vue2:"deactivated", vue3:"---", text:"Vue 元件被解除時觸發，搭配 keep-alive 使用"},
      ]
    };
  },
  setup(){
    console.log("")
  }
};
createApp(app).mount("#contain");

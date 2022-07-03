import { createApp } from "../vue/vue.esm-browser.js";

createApp({
  data() {
    return {
      options1: [
        { value: null, text: "-請選擇-" },
        { value: "new_taipei", text: "新北市" },
        { value: "taoyuan", text: "桃園市" },
        { value: "taipei", text: "台北市" },
      ],
      child_township1: {
        new_taipei: [
          { value: "A", text: "A" },
          { value: "B", text: "B" },
          { value: "C", text: "C" },
        ],
        taoyuan: [
          { value: "D", text: "D" },
          { value: "E", text: "E" },
          { value: "F", text: "F" },
        ],
        taipei: [
          { value: "G", text: "G" },
          { value: "H", text: "H" },
          { value: "I", text: "I" },
        ],
      },
      options2: [
        { value: null, text: "-請選擇-" },
        { value: "new_taipei", text: "新北市" },
        { value: "taoyuan", text: "桃園市" },
        { value: "taipei", text: "台北市" },
      ],
      child_township2: {
        new_taipei: [
          { value: "A", text: "A" },
          { value: "B", text: "B" },
          { value: "C", text: "C" },
        ],
        taoyuan: [
          { value: "D", text: "D" },
          { value: "E", text: "E" },
          { value: "F", text: "F" },
        ],
        taipei: [
          { value: "G", text: "G" },
          { value: "H", text: "H" },
          { value: "I", text: "I" },
        ],
      },
      city1: null,
      township1: null,
      city2: null,
      township2: null,
      toggle: false,
    };
  },
  watch: {
    toggle(v) {
      if (v) {
        this.city2 = this.city1;
        this.township2 = this.township1;
      } else {
        this.city2 = null;
        this.township2 = null;
      }
    },
    // 深度監聽
    someObject: {
      handler(newValue, oldValue) {
        // 注意：在嵌套的變更中，
        // 只要沒有替換對象本身，
        // 那麼这里的 `newValue` 和 `oldValue` 相同
      },
      deep: true,
    },
    // 即時回調的監聽器
    question: {
      handler(newQuestion) {
        // 在组件實例創建時會立即調用
      },
      // 強制立即執行回調
      immediate: true,
    },
    // 回調的刷新時機
    key: {
      handler() {},
      flush: "post",
    },
  },
}).mount("#contain");

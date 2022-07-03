import { createApp } from "../vue/vue.esm-browser.js";

const app = {
  data() {
    return {
      title: "Hello World",
      description:"HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello",
      trigger:false,
      number:0,
      firstName:"John",
      lastName:"Doe",
      buttonClickEvent1:true,
    };
  },
  computed:{
    addNumber(item){
      return `${this.number} 個`
    },
    // 可修改計算屬性
    fullName:{
      get(){
        return this.firstName + " " + this.lastName;
      },
      set(newValue){
        [this.firstName, this.lastName] = newValue.split(' ');
      }
    }
  },
  methods:{
  }
};


createApp(app).mount("#contain");


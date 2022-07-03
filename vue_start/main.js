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
      bookList:{
        "Java":"500 TWD",
        "Python":"30 US",
        "Javascript":"20 EUR",
        "R":"780 TWD",
      },
      carList:[
        {"name":"保時捷", "price": "500K"},
        {"name":"法拉利", "price": "3000K"},
        {"name":"捷報", "price": "450K"},
        {"name":"瑪莎拉蒂", "price": "300K"},
      ],
      bindForm:{
        bindInput:"Input",
        bindArea:"TextArea",
        bindCheckbox:false,
        bindMultiCheckbox:[],
        bindPicked:"One",
        bindSelect:null,
        bindMultiSelect:[],
        bindLazy:"lazy",
        bindNumber:0,
        bindTrim:"trim",
        bindNotTrim:"not trim",
      },
      onNumber1:0,
      onNumber2:0,
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
    addNumber2(){
      this.onNumber2++;
    }
  }
};


createApp(app).mount("#contain");


import Vue from 'vue';
import App from './App.vue';
import alertMessages from './functionContainer';
import { message1, message2 } from './messageContainer';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

alertMessages([message1, message2]);

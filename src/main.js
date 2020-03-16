import Vue from 'vue'
import App from './App.vue'
import {Button, Dropdown, DropdownMenu, DropdownItem, Pagination, Radio, RadioGroup, Checkbox} from 'element-ui';
import '../src/assets/css/reset.css'
import router from '../src/assets/js/router'
import { post, get } from '../src/assets/js/api';

Vue.config.productionTip = false
Vue.prototype.get=get;
Vue.prototype.post = post;
Vue.use(Button);
Vue.use(Dropdown);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Pagination);
Vue.use(Checkbox);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

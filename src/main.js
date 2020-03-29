import Vue from 'vue'
import App from './App.vue'
import '../src/assets/css/reset.css'
import router from '../src/assets/js/router'
import globalFun from '../src/assets/js/global'
import { post, get } from '../src/assets/js/api';
import {Button, Dropdown, DropdownMenu, DropdownItem,
  Pagination, Radio, RadioGroup, Checkbox,CheckboxGroup,
  MessageBox, Message} from 'element-ui';

Vue.config.productionTip = false
Vue.use(globalFun);
Vue.prototype.get=get;
Vue.prototype.post = post;
Vue.use(Button);
Vue.use(Radio);
Vue.use(Dropdown);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(RadioGroup);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Pagination);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

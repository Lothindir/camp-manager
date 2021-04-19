import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import SvgIcon from 'vue-svgicon';

import 'typeface-quicksand';

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(SvgIcon, {
    tagName: 'svgicon',
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
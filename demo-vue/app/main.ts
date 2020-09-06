import Vue from 'nativescript-vue';

import CollectionView from '@nativescript-community/ui-collectionview/vue';
import install from '@nativescript-community/ui-collectionview-waterfall';
install();
Vue.use(CollectionView);
Vue.config.silent = true;

import Home from './views/App.vue';
new Vue({
    render: h => h('frame', [h(Home)])
}).$start();

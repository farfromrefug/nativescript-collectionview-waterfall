import Vue from 'nativescript-vue';

import CollectionView from 'nativescript-collectionview/vue';
// import install from 'nativescript-collectionview-waterfall';
Vue.use(CollectionView);
Vue.config.silent = true;

import Home from './views/App.vue';
new Vue({
    render: h => h('frame', [h(Home)])
}).$start();

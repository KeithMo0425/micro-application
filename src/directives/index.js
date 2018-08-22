import Vue from 'vue';
import loadmore from './loadmore';

const directives = {
  loadmore,
};

Object.keys(directives).forEach(key => Vue.directive(key, directives[key]));

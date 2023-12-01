import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './plugins/pinia'
// import i18n from "./i18n";

import '@/assets/style/normal.css'
import '@/assets/style/tailwind.css'
import '@/assets/style/output.css'
// import FastClick from 'fastclick';
// FastClick.attach(document.body);
import { createI18n } from 'vue-i18n';
import * as  tw from './config/lang/tw.js';
import * as  en from './config/lang/en.js';
import * as  cn from './config/lang/cn.js';

const messages = {
      'tw': tw.default,
      'en': en.default,
      'cn': cn.default,
};
// console.log('messages:', messages);
// console.log(navigator.language)

const savedLocaleData = localStorage.getItem('locale');
const lang = savedLocaleData ? JSON.parse(savedLocaleData) : null;

const i18n = createI18n({
  legacy: false,
  locale: lang?.locale || 'en', // 使用 lang.locale 如果存在，否則默認為 'en'
  fallbackLocale: 'en',
  messages,
  globalInjection: true,
  silentFallbackWarn: true
});

// console.log(i18n.locale)

createApp(App).use(router).use(pinia).use(i18n).mount('#app')

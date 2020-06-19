import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA3R9cwT8FTEiXOUKwZzsk7HJEW1yfrDzY",
  authDomain: "my-vue-kdapp.firebaseapp.com",
  databaseURL: "https://my-vue-kdapp.firebaseio.com",
  projectId: "my-vue-kdapp",
  storageBucket: "my-vue-kdapp.appspot.com",
  messagingSenderId: "1011578347954",
  appId: "1:1011578347954:web:e2e5e42857be60c75384ab",
  measurementId: "G-DR4G1B0KS3"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

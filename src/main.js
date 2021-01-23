import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(firestorePlugin)
firebase.initializeApp({
  projectId: 'odinndagur-dddeb',
  databaseURL: 'https://odinndagur-dddeb.firebaseio.com'
})
export const db = firebase.firestore()


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.2.4/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyD3Yb6zOXwUGGVNQimvV4LLBhVwfnQ_lQ8",
//     authDomain: "odinndagur-dddeb.firebaseapp.com",
//     databaseURL: "https://odinndagur-dddeb.firebaseio.com",
//     projectId: "odinndagur-dddeb",
//     storageBucket: "odinndagur-dddeb.appspot.com",
//     messagingSenderId: "455940925341",
//     appId: "1:455940925341:web:b3453b215ca465c7f7b174",
//     measurementId: "G-L4FWVYTC97"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBTjsRk_iRqHw3ZFIXd0IyjDSUsZXVh1J4",
    authDomain: "sae204-festival.firebaseapp.com",
    projectId: "sae204-festival",
    storageBucket: "sae204-festival.appspot.com",
    messagingSenderId: "196160560317",
    appId: "1:196160560317:web:cc3f4ba789255f22fb2bd4"
  };

  // Initialize Firebase
  const appFirebase = initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')

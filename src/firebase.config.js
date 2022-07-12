import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCbfzoRBcn9LAV08P1pYL73NzxPNn2skWE",
    authDomain: "restautantapp-efc06.firebaseapp.com",
    databaseURL: "https://restautantapp-efc06-default-rtdb.firebaseio.com",
    projectId: "restautantapp-efc06",
    storageBucket: "restautantapp-efc06.appspot.com",
    messagingSenderId: "715484481924",
    appId: "1:715484481924:web:7ac541dc938b3c5be3b5d1"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage };
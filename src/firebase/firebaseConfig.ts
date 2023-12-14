//import//
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

type FirebaseSDK = {
    apiKey: string
    authDomain: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
    measurementId: string
}

const firebaseConfig: FirebaseSDK = {
    apiKey: "AIzaSyBnP_b6al5djTmRp1LZp12_k8xA4yAvkfc",
    authDomain: "carddraw-890e8.firebaseapp.com",
    projectId: "carddraw-890e8",
    storageBucket: "carddraw-890e8.appspot.com",
    messagingSenderId: "514661854650",
    appId: "1:514661854650:web:ac99034f9aaf5df0360183",
    measurementId: "G-5ZDCN3JKRV"
  };

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app)
export const db = getFirestore(app)
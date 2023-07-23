import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCt1hfq_LWc7cu6g0eyIZ7i8BhJlmOs_Ls",
    authDomain: "twitter-clone-udemy-be501.firebaseapp.com",
    projectId: "twitter-clone-udemy-be501",
    storageBucket: "twitter-clone-udemy-be501.appspot.com",
    messagingSenderId: "448080299406",
    appId: "1:448080299406:web:2e45299a181443400dd0df"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
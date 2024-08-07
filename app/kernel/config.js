// src/firebase/config.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(firebaseApp);

/** @type  import("react-toastify/dist/types").ToastContainerProps */
const toastNotificationsOptions = {
	position: "top-right",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: false,
	newestOnTop: false,
	rtl: false,
	pauseOnFocusLoss: true,
	draggable: true,
	pauseOnHover: true,
	limit: 10,
};

export { auth, toastNotificationsOptions };

// src/firebase/auth/signup.js
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export const signUp = async (email, password) => {
	try {
		const result = await createUserWithEmailAndPassword(auth, email, password);
		return { result };
	} catch (error) {
		return { error };
	}
};

export const signIn = async (email, password) => {
	try {
		const result = await signInWithEmailAndPassword(auth, email, password);
		return { result };
	} catch (error) {
		return { error };
	}
};

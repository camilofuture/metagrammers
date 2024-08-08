"use client";

import { createContext, useContext, useEffect, useState } from "react";
//import { onAuthStateChanged } from "firebase/auth";
//import { auth } from "../kernel/config";
//import { getUserFromLocalStorage, saveUserToLocalStorage } from "../kernel/localStorage";
//import { getUserByID } from "../[locale]/actions/user";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	/*useEffect(() => {
		const storedUser = getUserFromLocalStorage();
		if (storedUser) {
			setUser(storedUser);
			setLoading(false);
			return;
		}

		const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
			if (firebaseUser) {
				const userData = await getUserByID(firebaseUser.uid);
				const fullUserData = { ...firebaseUser, ...userData };
				setUser(fullUserData);
				saveUserToLocalStorage(fullUserData);
			} else {
				setUser(null);
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);*/

	return <AuthContext.Provider value={{ user, setUser, loading }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

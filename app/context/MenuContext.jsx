"use client";

import { createContext, useContext, useState, useEffect } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
	const [selectedMenu, setSelectedMenu] = useState(1000);
	const [expandedMenus, setExpandedMenus] = useState({});

	// Load state from local storage
	useEffect(() => {
		const savedSelectedMenu = localStorage.getItem("selectedMenu");
		const savedExpandedMenus = localStorage.getItem("expandedMenus");

		if (savedSelectedMenu) {
			setSelectedMenu(Number(savedSelectedMenu));
		}
		if (savedExpandedMenus) {
			setExpandedMenus(JSON.parse(savedExpandedMenus));
		}
	}, []);

	// Save state to local storage
	useEffect(() => {
		localStorage.setItem("selectedMenu", selectedMenu);
		localStorage.setItem("expandedMenus", JSON.stringify(expandedMenus));
	}, [selectedMenu, expandedMenus]);

	return (
		<MenuContext.Provider value={{ selectedMenu, setSelectedMenu, expandedMenus, setExpandedMenus }}>
			{children}
		</MenuContext.Provider>
	);
};

export const useMenu = () => useContext(MenuContext);

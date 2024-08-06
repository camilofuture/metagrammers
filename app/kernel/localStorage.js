// src/utils/localStorage.js
export const saveUserToLocalStorage = (user) => {
	const timestamp = new Date().getTime();
	const userData = { ...user, timestamp };
	localStorage.setItem("mguser", JSON.stringify(userData));
};

export const getUserFromLocalStorage = () => {
	const userData = localStorage.getItem("mguser");
	if (!userData) return null;

	const parsedUserData = JSON.parse(userData);
	const currentTime = new Date().getTime();
	const fifteenMinutes = 15 * 60 * 1000;

	if (currentTime - parsedUserData.timestamp > fifteenMinutes) {
		localStorage.removeItem("mguser");
		return null;
	}

	return parsedUserData;
};

export const saveMenuStateToLocalStorage = (selectedMenu, expandedMenus) => {
	if (typeof window !== "undefined") {
		localStorage.setItem("selectedMenu", selectedMenu);
		localStorage.setItem("expandedMenus", JSON.stringify(expandedMenus));
	}
};

export const getMenuStateFromLocalStorage = () => {
	if (typeof window !== "undefined") {
		const savedSelectedMenu = localStorage.getItem("selectedMenu");
		const savedExpandedMenus = localStorage.getItem("expandedMenus");

		return {
			selectedMenu: savedSelectedMenu ? Number(savedSelectedMenu) : 1000,
			expandedMenus: savedExpandedMenus ? JSON.parse(savedExpandedMenus) : {},
		};
	}

	return {
		selectedMenu: 1000,
		expandedMenus: {},
	};
};

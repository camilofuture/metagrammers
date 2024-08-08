// Description: Core configuration file for the application.

import profile0 from "../../public/images/profileImages/0.png";
import profile1 from "../../public/images/profileImages/1.png";
import profile2 from "../../public/images/profileImages/2.png";
import profile3 from "../../public/images/profileImages/3.png";
import profile4 from "../../public/images/profileImages/4.png";
import profile5 from "../../public/images/profileImages/5.png";

export const capitalizeInitials = (text) => {
	return text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
};

export const zeroFill = (number, width) => {
	width -= number.toString().length;
	if (width > 0) {
		return new Array(width + (/\./.test(number) ? 2 : 1)).join("0") + number;
	}
	return number + ""; // always return a string
};

export const getStringRarity = (rarity) => {
	switch (rarity) {
		case 0:
			return "UnRanked";
		case 1:
			return "Common";
		case 2:
			return "Special";
		case 3:
			return "Rare";
		case 4:
			return "Epic";
		case 5:
			return "Legendary";

		default:
			return "??????";
	}
};

export const getProfileImgRarity = (rarity) => {
	switch (rarity) {
		case 0:
			return profile0.src;
		case 1:
			return profile1.src;
		case 2:
			return profile2.src;
		case 3:
			return profile3.src;
		case 4:
			return profile4.src;
		case 5:
			return profile5.src;

		default:
			return "";
	}
};

import { globalText } from "./font";

const COLOR_1 = "#ffffff";

/**  @type {import("@mui/material").SxProps} */
export const NotFoundTextStyles = {
	color: "#fff",
	fontFamily: `${globalText.style.fontFamily}`,
	fontWeight: 300,
	fontSize: "1.2rem",
	textAlign: "center",
};

/**  @type {import("@mui/material").SxProps} */
export const NotFoundRootStyles = {
	fontFamily: `${globalText.style.fontFamily}`,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	width: "100%",
	height: "100%",
	gap: 3,
	background: "transparent",
};

/**  @type {import("@mui/material").SxProps} */
export const Button3 = {
	fontFamily: `${globalText.style.fontFamily}`,
	width: "100%",
	background: `#93f9b940`,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	border: `.5px solid #93f9b9DD`,
	paddingTop: 1,
	color: "#fff",
	fontWeight: 500,
	borderRadius: 3,
	display: "flex",
	gap: 1,
	height: "fit-content",
	fontSize: 15,

	":hover": {
		background: `#93f9b960`,
	},
};

/**  @type {import("@mui/material").SxProps} */
export const Button4 = {
	fontFamily: `${globalText.style.fontFamily}`,
	width: "100%",
	background: "transparent",
	border: `.5px solid ${COLOR_1}DD`,
	color: COLOR_1,
	borderRadius: 3,
	paddingTop: 1,
	fontWeight: 500,
	display: "flex",
	gap: 1,
	height: "fit-content",
	fontSize: 15,
	":hover": {
		background: `${COLOR_1}10`,
	},
};

/**  @type {import("@mui/material").SxProps} */
export const TextField1 = {
	fontWeight: 300,

	"& label": {
		fontSize: 18,
		color: "#FFFFFFAA",
		fontWeight: 600,
		marginTop: -10,
		fontFamily: `${globalText.style.fontFamily}`,
	},

	"& .MuiSvgIcon-root": {
		color: "#FFFFFFCC",
	},

	"& label.Mui-focused": {
		color: "#FFF",
	},

	"& .MuiOutlinedInput-root": {
		fontFamily: `${globalText.style.fontFamily}`,
		height: 40,
		borderRadius: 3,
		background: "#00000030",
		color: "#fff",

		"& fieldset": {
			height: 40,
			borderColor: "transparent",
			border: "none",
		},

		// Color del borde en modo hover
		"&:hover fieldset": {
			borderColor: "transparent",
			borderRadius: 3,
		},
		// Color del borde en modo focused
		"&.Mui-focused fieldset": {
			borderColor: "transparent",
			borderRadius: 3,
		},
	},

	"& .MuiInputLabel-shrink": {
		//color: theme.textField.color[xvariant].textColor,

		marginTop: -1.5, //2,
		marginLeft: -1,
		fontWeight: 600,
		//	fontSize: theme.textField.size[xsize].labelFontSize,
	},
};

/**  @type {import("@mui/material").SxProps} */
export const MenuItem1 = {
	fontFamily: `${globalText.style.fontFamily}`,
	fontWeight: 400,
	textTransform: "capitalize",
	maxWidth: "100%", // Limita el ancho al 100% del contenedor padre (el selector)
	whiteSpace: "normal", // Permite que el texto se rompa en nuevas líneas
	wordWrap: "break-word", // Rompe palabras largas si es necesariofontWeight: 300,
};

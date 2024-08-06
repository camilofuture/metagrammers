import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { globalText } from "@/app/font";

// =================================================================
export const Separator = styled("div")(({ theme }) => ({
	height: 0.3,
	margin: "0px 10px",
	backgroundColor: "rgba(255,255,255, 0.1)",
}));
// =================================================================
export const CasualSeparator = styled("div")(({ theme }) => ({
	height: 0.8,
	margin: "20px 10px",
	backgroundColor: "rgba(255,255,255, 0.1)",
}));
// =================================================================
export const XList = styled(List)(({ theme }) => ({
	fontFamily: `${globalText.style.fontFamily}`,
	marginLeft: 9,
	marginRight: 6,
}));
// =================================================================
export const XListCollapse = styled(List)(({ theme }) => ({
	borderRadius: 10,
	background: "rgba(73,192,135, .05)",
	padding: 3,
	marginRight: 5,
	marginTop: 1,
}));
// =================================================================
export const XListItemButton = styled(ListItemButton)(({ theme }) => ({
	width: "100%",
	marginTop: 2,
	marginBottom: 2,
	color: "rgba(255,255,255, .6)",
	borderRadius: 10,
	height: 36,
	":hover": {
		background: "rgba(73,192,135, .15)",
	},
	"&.Mui-selected": {
		color: "rgba(255,255,255, .9)",
		background: "rgba(73,192,135, .1)",
		":hover": {
			background: "rgba(73,192,135, .15)",
		},
	},
}));
// =================================================================
export const XListItemButtonNoSelectable = styled(ListItemButton)(({ theme }) => ({
	width: "100%",
	marginTop: 2,
	marginBottom: 2,
	borderRadius: 10,
	color: "rgba(255,255,255, .6)",
	height: 36,
	":hover": {
		background: "rgba(73,192,135, .15)",
	},
	"&.Mui-selected": {
		color: "rgba(255,255,255, .9)",
		background: "rgba(73,192,135, .1)",
		":hover": {
			background: "rgba(73,192,135, .15)",
		},
	},
}));
// =================================================================
export const XListItemIcon = styled(ListItemIcon)(({ theme }) => ({
	color: "inherit",
	marginLeft: 3,
}));
// =================================================================
export const XListItemText = styled(ListItemText)(({ theme }) => ({
	color: "inherit",
	fontWeight: 400,
	marginLeft: -23,
}));
// =================================================================
export const Text = styled("div")(({ theme }) => ({
	color: "inherit",
	fontWeight: 400,
	fontFamily: `${globalText.style.fontFamily}`,
	fontSize: 17,
	//fontSize: 12,
}));
// =================================================================
export const TextSeparator = styled("div")(({ theme }) => ({
	fontFamily: `${globalText.style.fontFamily}`,
	color: "#ffffff99",
	fontWeight: 600,
	display: "flex",
	alignItems: "center",
	marginTop: 5,
	marginBottom: 5,
	marginLeft: 3,
	background: "rgba(255,255,255, .02)",
	borderRadius: 5,
	padding: "1px 5px",
	width: "fit-content",
	//justifyContent: "flex-end",
}));
// =================================================================
export const NewMenuTag = styled("div")(({ theme }) => ({
	position: "absolute",
	color: "#FFF",
	top: -3,
	right: -3,
	background: "#CB4335",
	borderRadius: 10,
	fontSize: 9,
	paddingLeft: 5,
	paddingRight: 5,
}));
// =================================================================
export const LogoContainer = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	justifyItems: "center",
	minHeight: 50,
	height: 75,
	marginLeft: 1,
}));
// =================================================================
export const LoaderContainer = styled("div")(({ theme }) => ({
	display: "flex",
	alignContent: "center",
	justifyContent: "center",
	height: "100%",
}));

import { AppBar, Avatar, Badge, Drawer, Paper } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import { globalText, orbitron } from "./font";
import Countdown from "react-countdown";

const EX_COLOR = "#18181e";

const MF_RARITY_0 = "linear-gradient(to bottom, #11998e, #38ef7d)";
const MF_RARITY_1 = "linear-gradient(to right, #8e9eab, #eef2f3)";
const MF_RARITY_2 = "linear-gradient(to right, #1d976c, #93f9b9)";
const MF_RARITY_3 = "linear-gradient(to right, #00b4db, #0083b0)";
const MF_RARITY_4 = "linear-gradient(to right, #9d50bb, #6e48aa)";
const MF_RARITY_5 = "linear-gradient(to right, #f46b45, #eea849)";

const MF_RARITY_EXPORT_BG_1 =
	"linear-gradient(to right top, #686868, #828282, #9e9e9e, #bababa, #d7d7d7, #dedede, #e4e4e4, #ebebeb, #dcdcdc, #cecece, #bfbfbf, #b1b1b1)";
const MF_RARITY_EXPORT_BG_2 =
	"linear-gradient(to right top, #93f9b9, #76d59d, #5bb382, #409167, #26714e, #26714e, #26714e, #26714e, #409167, #5bb382, #76d59d, #93f9b9)";
const MF_RARITY_EXPORT_BG_3 =
	"linear-gradient(to right top, #00bdfe, #00a3d8, #008ab3, #007190, #00596f, #00596f, #00596f, #00596f, #007190, #008ab3, #00a4d8, #00beff)";
const MF_RARITY_EXPORT_BG_4 =
	"linear-gradient(to right top, #9d50bb, #8942ad, #75349f, #612792, #4d1984, #4d1984, #4d1984, #4d1984, #612792, #75349f, #8942ad, #9d50bb)";
const MF_RARITY_EXPORT_BG_5 =
	"linear-gradient(to right top, #ffcd00, #f6ae00, #e98f00, #da7000, #c85200, #c85300, #c95300, #c95400, #db7400, #eb9300, #f7b400, #ffd500)";

const floatAnimation = keyframes`	0% {
	transform: translatey(0px);
  }
  50% {
	transform: translatey(-10px);
  }
  100% {
	transform: translatey(0px);
  }`;

export const MAppBar = styled(AppBar)(({ theme, permanentdrawer }) => ({
	display: "flex",
	justifyContent: "center",
	minHeight: 70,
	maxHeight: 70,
	borderRadius: 10,
	marginTop: 10,
	width: `calc(100% - ${80}px)`,
	marginRight: 10,
	background: EX_COLOR,
	zIndex: 0,
	fontFamily: `${globalText.style.fontFamily}`,
	color: "#fff",

	transition: "all 0.2s linear",
	...(permanentdrawer && {
		width: `calc(100% - ${280}px)`,
	}),
	[theme.breakpoints.down("md")]: {
		width: `calc(100% - ${20}px)`,
	},
}));

export const MInvisibleDrawer = styled(Drawer)(({ theme, permanentdrawer }) => ({
	transition: "all 0.2s linear",
	background: "blue",
	background: "transparent",
	[theme.breakpoints.down("md")]: {
		display: "none",
	},

	...(permanentdrawer
		? {
				width: 260,
		  }
		: {
				width: 60,
		  }),
}));

export const MDrawer = styled(Drawer)(({ theme, permanentdrawer, openeddrawer }) => ({
	"& .MuiDrawer-paper": {
		//	border: `0.5 solid #000`,
		width: 260,
		whiteSpace: "nowrap",
		overflow: "hidden",
		position: "fixed",
		background: EX_COLOR,
		transition: "all 0.2s linear",
		display: "flex",
		alignItems: "center",

		...(!permanentdrawer &&
			openeddrawer && {
				// background: theme.drawer.casualOpen,
				width: 260,
				zIndex: 1200,
			}),
		...(!permanentdrawer &&
			!openeddrawer && {
				// background: theme.drawer.casualClose,
				zIndex: 1200,
				width: 60,
			}),
		...(permanentdrawer &&
			openeddrawer && {
				// background: theme.drawer.permanentOpen,
				width: 260,
				[theme.breakpoints.only("xs")]: {
					//This is for make the drawer not to move all when it appears in xs devices
					zIndex: 1200,
				},
			}),
		...(permanentdrawer &&
			!openeddrawer &&
			{
				// background: theme.drawer.permanentClose,
			}),

		[theme.breakpoints.down("md")]: {
			...(openeddrawer
				? {
						width: 260,
				  }
				: {
						width: 0,
				  }),
		},
	},
}));

export const MGMain = styled("main")(({ theme, permanentdrawer, openeddrawer }) => ({
	display: "flex",
	justifyContent: "center",
	marginTop: 90,
	width: "calc(100vw - 100px)",
	//minWidth: "100vw",
	height: "calc(100vh - 92px)",
	//marginLeft: 0,
	transition: "all 0.2s linear",

	...(permanentdrawer &&
		openeddrawer && {
			width: `calc(100vw - ${300}px)`,
		}),
}));

export const CustomAvatar = styled(Avatar)(({ theme }) => ({
	width: 50,
	height: 50,
	boxShadow: `0 2px 2px 0px #ffffff40`,
}));

export const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		backgroundColor: "#11998e",
		color: "#38ef7d",
		boxShadow: `0 0 0 2px #2f2f3f`,
		"&::after": {
			position: "absolute",
			width: "100%",
			height: "100%",
			borderRadius: "50%",
			animation: "ripple 1.2s infinite ease-in-out",
			border: "1px solid currentColor",
			content: '""',
		},
	},
	"@keyframes ripple": {
		"0%": {
			transform: "scale(.8)",
			opacity: 1,
		},
		"100%": {
			transform: "scale(2.4)",
			opacity: 0,
		},
	},
}));

export const Logo = styled("div")(({ theme }) => ({
	color: "#38ef7d",
	width: 50,
	display: "flex",
	borderRadius: 7,
	padding: "4px 0px",
	marginTop: 18,
	justifyContent: "center",
}));

export const WordLogo = styled("div")(({ theme }) => ({
	fontFamily: `${globalText.style.fontFamily}`,
	fontSize: 32,
	fontWeight: 700,
	marginTop: 1,
	background: "linear-gradient(to bottom, #11998e, #38ef7d)",
	WebkitBackgroundClip: "text",
	WebkitTextFillColor: "transparent",
	minHeight: 49,
}));

export const HomeText1 = styled("div")(({ theme }) => ({
	fontFamily: `${globalText.style.fontFamily}`,
	fontSize: 19,
	fontWeight: 400,
	color: "#ffffffdd",
	textAlign: "justify",
}));

export const FloatingContainer = styled("div")(({ theme }) => ({
	animation: `3s infinite ${floatAnimation}`,
}));

export const IDCardContainer = styled("div")(({ theme, background }) => ({
	width: 330,
	height: 570,
	borderRadius: "5px 50px",
	backdropFilter: "blur(4px)",
	boxShadow: "12px 12px 2px 1px rgba(0, 0, 0, .2)",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	...(background === 0 && {
		background: MF_RARITY_0,
	}),
	...(background === 1 && {
		background: MF_RARITY_EXPORT_BG_1,
	}),

	...(background === 2 && {
		background: MF_RARITY_EXPORT_BG_2,
	}),

	...(background === 3 && {
		background: MF_RARITY_EXPORT_BG_3,
	}),

	...(background === 4 && {
		background: MF_RARITY_EXPORT_BG_4,
	}),
	...(background === 5 && {
		background: MF_RARITY_EXPORT_BG_5,
	}),

	...(background === "ne" && {
		background: "rgba(0,0,0, .1)",
		backdropFilter: "blur(4px)",
		color: "rgba(255,255,255, .3)",
	}),
}));

export const ProfileImgContainer = styled("div")(({ theme, background, width, height }) => ({
	marginTop: 10,
	width: width,
	height: height,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	borderRadius: "50%",
	position: "relative",

	...(!background && {
		background: "rgba(0, 0, 0, 0.6)",
	}),

	...(background === 0 && {
		background: MF_RARITY_0,
	}),
	...(background === 1 && {
		background: MF_RARITY_EXPORT_BG_1,
	}),

	...(background === 2 && {
		background: MF_RARITY_EXPORT_BG_2,
	}),

	...(background === 3 && {
		background: MF_RARITY_EXPORT_BG_3,
	}),

	...(background === 4 && {
		background: MF_RARITY_EXPORT_BG_4,
	}),
	...(background === 5 && {
		background: MF_RARITY_EXPORT_BG_5,
	}),
}));

export const Rarity = styled(Paper)(({ theme, background }) => ({
	fontSize: 14,
	fontWeight: 700,
	color: "#2D2A4B",
	borderRadius: 5,
	position: "relative",

	...(background === 0 && {
		background: MF_RARITY_0,
	}),

	...(background === 1 && {
		background: MF_RARITY_1,
	}),

	...(background === 2 && {
		background: MF_RARITY_2,
	}),

	...(background === 3 && {
		background: MF_RARITY_3,
	}),

	...(background === 4 && {
		background: MF_RARITY_4,
	}),
	...(background === 5 && {
		background: MF_RARITY_5,
	}),

	paddingTop: 2,
	paddingBottom: 2,
	paddingLeft: 5,
	paddingRight: 5,
}));

export const MetaKeyContainer = styled(Paper)(({ theme, background }) => ({
	...(background === 0 && {
		background: MF_RARITY_0,
	}),

	...(background === 1 && {
		background: MF_RARITY_1,
	}),

	...(background === 2 && {
		background: MF_RARITY_2,
	}),

	...(background === 3 && {
		background: MF_RARITY_3,
	}),

	...(background === 4 && {
		background: MF_RARITY_4,
	}),
	...(background === 5 && {
		background: MF_RARITY_5,
	}),
	width: 380,
	height: 490,
	borderRadius: 20,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	fontFamily: `${orbitron.style.fontFamily}`,
}));

export const MetaKeySubContainer = styled(Paper)(({ theme }) => ({
	background: "#201e31",
	width: 360,
	height: 470,
	borderRadius: 20,
}));

export const MetaKeyTitle = styled("div")(({ theme }) => ({
	fontSize: 50,
	color: "#ffffffaa",
	fontWeight: 700,
	textAlign: "center",
}));

export const MetaKeyText = styled("div")(({ theme, background }) => ({
	...(background === 0 && {
		background: MF_RARITY_0,
	}),

	...(background === 1 && {
		background: MF_RARITY_1,
	}),

	...(background === 2 && {
		background: MF_RARITY_2,
	}),

	...(background === 3 && {
		background: MF_RARITY_3,
	}),

	...(background === 4 && {
		background: MF_RARITY_4,
	}),
	...(background === 5 && {
		background: MF_RARITY_5,
	}),

	WebkitBackgroundClip: "text",
	WebkitTextFillColor: "transparent",

	fontSize: 17,
	fontWeight: 600,
	textAlign: "center",
}));

export const MFCountdown = styled(Countdown)(({ theme }) => ({
	fontSize: 70,
	fontFamily: `${orbitron.style.fontFamily}`,
	background: MF_RARITY_0,
	WebkitBackgroundClip: "text",
	WebkitTextFillColor: "transparent",
	[theme.breakpoints.only("xs")]: {
		fontSize: 56,
	},
	[theme.breakpoints.only("md")]: {
		fontSize: 68,
	},
}));

export const MFCountdownContainer = styled("div")(({ theme }) => ({
	position: "relative",
	background: "rgba(0,0,0, .18)",
	borderRadius: 20,
	paddingLeft: 10,
	paddingRight: 10,
	marginTop: 10,
	display: "flex",
	justifyContent: "center",
	width: "100%",
}));

export const SignupFormTitle = styled("div")(({ theme }) => ({
	fontFamily: `${globalText.style.fontFamily}`,
	fontSize: 30,
	fontWeight: 600,
	color: "#ffffffee",
	marginBottom: 15,
	display: "flex",
	alignContent: "center",
	gap: 15,
}));

export const ChallengeText = styled("div")(({ theme }) => ({
	fontFamily: `${globalText.style.fontFamily}`,
	fontSize: 16,
	fontWeight: 600,
	padding: 20,
	borderRadius: 10,
	color: "#38ef7d",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	minHeight: 350,
}));

export const ChallengeTitle = styled("div")(({ theme }) => ({
	fontFamily: `${globalText.style.fontFamily}`,
	fontSize: 30,
	fontWeight: 700,
	color: "#ffffffee",
	marginBottom: 15,
	paddingLeft: 10,
	display: "flex",
	alignItems: "center",
	gap: 14,
}));

export const ChallengeDescription = styled("div")(({ theme }) => ({
	fontFamily: `${globalText.style.fontFamily}`,
	fontSize: 18,
	fontWeight: 400,
	color: "#ffffffcc",
	marginBottom: 15,
	paddingLeft: 10,
}));

export const PlaceholderForMenuOption = styled("div")(({ theme }) => ({
	fontFamily: `${globalText.style.fontFamily}`,
	fontWeight: 600,
	color: "#ffffffdd",
}));

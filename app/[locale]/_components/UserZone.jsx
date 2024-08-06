import { useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

import { capitalizeInitials } from "@/app/kernel/core";
import { CustomAvatar, StyledBadge } from "@/app/styledComponents";
import { globalText } from "@/app/font";
import { useAuth } from "@/app/context/AuthContex";
import MBackdrop from "./MBackdrop";

const UserZoneContainer = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-end",
	justifyContent: "center",
	marginLeft: 15,
	color: "inherit",
	[theme.breakpoints.down("md")]: {
		display: "none",
	},
}));

const UserName = styled("div")(({ theme, exist }) => ({
	fontFamily: `${globalText.style.fontFamily}`,
	fontSize: 16.5,
	fontWeight: 700,
	lineHeight: 1.3,
	textTransform: "initial",
	background: exist ? "linear-gradient(to bottom, #11998e, #38ef7d)" : "linear-gradient(to right, #ff416c, #ff4b2b)",
	"-webkit-background-clip": "text",
	"-webkit-text-fill-color": "transparent",
}));

const UserEmail = styled("div")(({ theme }) => ({
	fontFamily: `${globalText.style.fontFamily}`,
	fontSize: 14.8,
	fontWeight: 600,
	lineHeight: 1.3,
	color: "#4D4D66",
}));

const Root = styled("div")(({ theme }) => ({
	display: "none",
	[theme.breakpoints.up("xs")]: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
}));

const UserMenuIconButton = styled(IconButton)(({ theme }) => ({
	borderRadius: 10,
	padding: 5,
	height: 45,

	[theme.breakpoints.only("xs")]: {
		display: "none",
	},
}));

const UserZone = ({ opensignup }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const { user } = useAuth(); // Obtener el usuario del contexto de autenticación

	const isMenuOpen = Boolean(anchorEl);

	const handleProfileMenuOpen = (event) => {
		if (user) {
			setAnchorEl(event.currentTarget);
		} else {
			opensignup();
		}
	};

	const handleSignOut = async () => {
		setAnchorEl(null);
	};

	return (
		<>
			{/*<UserMenu anchorEl={anchorEl} isOpen={isMenuOpen} setAnchorEl={setAnchorEl} handleSignOut={handleSignOut} />*/}

			<Root>
				{/*<div
					style={{
						marginRight: 15,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<GridLoader color="#0b2444" size={8} />
				</div>*/}

				{/*<UserMenuIconButton aria-label="show 4 new mails" color="primary" size="medium">
					a
				</UserMenuIconButton>
				<UserMenuIconButton color="primary" size="medium">
					<Badge badgeContent={0} color="error" variant="standards">
						b
					</Badge>
				</UserMenuIconButton>

				<UserMenuIconButton color="primary" size="medium">
					<Badge badgeContent={0} color="error" variant="standards">
						c
					</Badge>
				</UserMenuIconButton>*/}

				<UserZoneContainer>
					<UserName exist={user?.name}>{user?.name ? capitalizeInitials(user.name) : "NotFound"}</UserName>
					<UserEmail>{user?.tag ? `@${user.tag}` : "@tagNotFound"}</UserEmail>
				</UserZoneContainer>

				<IconButton
					edge="end"
					aria-label="cuenta de usuario"
					aria-haspopup="true"
					onClick={handleProfileMenuOpen}
					color="primary"
					size="large"
					style={{
						borderRadius: "50%",
						padding: 2,
						marginLeft: 12,
					}}
				>
					<StyledBadge
						overlap="circular"
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "right",
						}}
						variant="dot"
					>
						<CustomAvatar alt="Remy Sharp" src={user?.avatarUrl || ""} variant="circular" />
					</StyledBadge>
				</IconButton>
			</Root>
		</>
	);
};

export default UserZone;

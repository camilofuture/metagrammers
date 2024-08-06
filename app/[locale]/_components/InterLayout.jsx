"use client";

import { Suspense, useState } from "react";
import { Fade, Grow, IconButton, Toolbar } from "@mui/material";
import { Logo, MAppBar, MDrawer, MGMain, MInvisibleDrawer, WordLogo } from "../../styledComponents";
import { LuMenu } from "react-icons/lu";
import UserZone from "./UserZone";
import MetaGrammerProfile from "../../../public/images/vector/mg.svg";
import XMenu from "../_menu/XMenu";
import MScroll from "./MScroll";
import MParticles from "./MParticles";
import MBackdrop from "./MBackdrop";

const InterLayout = ({ children }) => {
	const [openedDrawer, setOpenedDrawer] = useState(false);
	const [permanentDrawer, setPermanentDrawer] = useState(false);
	const [openSignUp, setOpenSignUp] = useState(false);

	const openSignup = () => {
		setOpenSignUp(true);
	};

	const closesignup = () => {
		setOpenSignUp(false);
	};

	const handleDrawerEntering = () => {
		if (permanentDrawer === false) setOpenedDrawer(true);
	};

	const handleDrawerLeaving = () => {
		if (permanentDrawer === false) setOpenedDrawer(false);
	};

	const handleExternalClick = () => {
		setOpenedDrawer(false);
	};

	const handleDrawerSwitch = () => {
		setPermanentDrawer(!permanentDrawer);
		setOpenedDrawer(!openedDrawer);
	};

	return (
		<Fade in={true} timeout={500}>
			<div style={{ display: "flex" }}>
				<MBackdrop space="signup" isOpen={openSignUp} close={closesignup} />

				<MAppBar elevation={0} position="fixed" permanentdrawer={permanentDrawer ? 1 : 0}>
					<Toolbar>
						<IconButton
							style={{ marginLeft: -3, borderRadius: 5, padding: 5 }}
							onClick={handleDrawerSwitch}
							permanentdrawer={permanentDrawer ? 1 : 0}
						>
							<LuMenu color="#fff" />
						</IconButton>

						<div style={{ flexGrow: 1 }} />

						<UserZone opensignup={openSignup} />
					</Toolbar>
				</MAppBar>

				<MInvisibleDrawer variant="permanent" permanentdrawer={permanentDrawer ? 1 : 0} />

				<MDrawer
					onMouseEnter={handleDrawerEntering}
					onMouseLeave={handleDrawerLeaving}
					//!onClose={handleExternalClick}
					open={openedDrawer}
					variant="permanent"
					openeddrawer={openedDrawer ? 1 : 0}
					permanentdrawer={permanentDrawer ? 1 : 0}
				>
					<Logo>
						{openedDrawer ? (
							<Grow in timeout={700}>
								<WordLogo>Metagrammers</WordLogo>
							</Grow>
						) : (
							<Fade in timeout={700}>
								<img src={MetaGrammerProfile.src} alt="MetaGrammerProfile" style={{ width: 50, height: 50 }} />
							</Fade>
						)}
					</Logo>
					<MScroll>
						<Suspense fallback={<div>Loading</div>}>
							<XMenu openeddrawer={openedDrawer} />
						</Suspense>
					</MScroll>
				</MDrawer>

				<MGMain permanentdrawer={permanentDrawer} openeddrawer={openedDrawer}>
					<MParticles op={0} />
					<MScroll>
						<Suspense fallback={<div>Loading</div>}>{children}</Suspense>
					</MScroll>
				</MGMain>
			</div>
		</Fade>
	);
};

export default InterLayout;

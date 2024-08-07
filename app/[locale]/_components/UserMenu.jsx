import { memo } from "react";
import { Divider, styled } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
	AiOutlineHome,
	AiOutlineAlert,
	AiOutlineCloudSync,
	AiOutlineBranches,
	AiOutlineCloudServer,
	AiOutlineLogout,
	AiOutlineLock,
} from "react-icons/ai";
import { globalText } from "@/app/font";
import { simpleNotify } from "./notificationCenter";

const StyledMenu = styled(Menu)(({ theme }) => ({
	"& .MuiMenu-paper": {
		borderRadius: 10,
		width: 220,
		background: "#21212c",
		color: "#fff",
	},
}));

const AuxMenuItem = styled(MenuItem)(({ theme }) => ({
	fontFamily: `${globalText.style.fontFamily}`,
	fontSize: 14,
	fontWeight: 400,
}));

const UserMenu = ({ anchorEl, isOpen, setAnchorEl, mapChanges, handleSignOut }) => {
	/*const handleSignOut = async () => {
		setAnchorEl(null);

		asyncNotify(
			50012,
			async () => {
				const auth = getAuth();
				await signOut();
				await fireBaseSignOut(auth);
				dispatch(unSetUser());
				dispatch(unSetSettings());
				dispatch(unSetCompany());
				dispatch(unSetMultiXen());
				clearIDF();
			},
			"layout/utils/UserMenu%/handleSignOut()"
		);
	};*/

	return (
		<StyledMenu
			anchorEl={anchorEl}
			keepMounted
			elevation={9}
			transformOrigin={{ vertical: -15, horizontal: 0 }}
			marginThreshold={10}
			transitionDuration={220}
			open={isOpen}
			style={{ borderRadius: 10 }}
			onClose={() => setAnchorEl(null)}
		>
			<AuxMenuItem
				onClick={() => {
					simpleNotify();
					setAnchorEl(null);
				}}
			>
				<AiOutlineHome style={{ height: 20, width: 20, marginRight: 7 }} />
				Inicio
			</AuxMenuItem>
			<Divider />
			<AuxMenuItem>
				<AiOutlineBranches style={{ height: 20, width: 20, marginRight: 7 }} />
				Solicitar Funcionalidad
			</AuxMenuItem>
			<AuxMenuItem>
				<AiOutlineCloudServer style={{ height: 20, width: 20, marginRight: 7 }} />
				Estados del Servicio
			</AuxMenuItem>
			<AuxMenuItem>
				<AiOutlineAlert style={{ height: 20, width: 20, marginRight: 7 }} />
				Soporte
			</AuxMenuItem>

			<AuxMenuItem onClick={mapChanges}>
				<AiOutlineCloudSync style={{ height: 20, width: 20, marginRight: 7 }} />
				Modo Xen
			</AuxMenuItem>
			<Divider />
			<AuxMenuItem onClick={handleSignOut}>
				<AiOutlineLock style={{ height: 20, width: 20, marginRight: 7 }} />
				Bloquear
			</AuxMenuItem>
			<AuxMenuItem onClick={handleSignOut}>
				<AiOutlineLogout style={{ height: 20, width: 20, marginRight: 7 }} />
				Cerrar Sesión
			</AuxMenuItem>
		</StyledMenu>
	);
};

export default memo(UserMenu);

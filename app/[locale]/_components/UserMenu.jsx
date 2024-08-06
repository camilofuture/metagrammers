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
import { useDispatch, useSelector } from "react-redux";
import { sound } from "../../system/utils/sound";
import { unSetUser } from "../../system/redux/features/userSlice";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { setTheme, unSetSettings } from "../../system/redux/features/settingsSlice";
import { addSettingsTab, setSelectedTabIndex, unSetMultiXen } from "../../system/redux/features/multiXenSlice";
import { signOut as fireBaseSignOut, getAuth } from "firebase/auth";
import { signOut } from "../../system/api/access";
import { asyncNotify } from "../../system/utils/notificationCenter";
import { RiSettingsLine } from "react-icons/ri";
import { clearIDF } from "../../system/utils/storage";
import { unSetCompany } from "../../system/redux/features/companySlice";

const StyledMenu = styled(Menu)(({ theme }) => ({
	"& .MuiMenu-paper": {
		borderRadius: 10,
		width: 220,
		background: theme.userMenu.background,
		color: theme.text.color,
	},
}));

const AuxMenuItem = styled(MenuItem)(({ theme }) => ({
	fontFamily: theme.fontFamily,
	fontSize: 14,
	fontWeight: 400,
}));

const UserMenu = ({ anchorEl, isOpen, setAnchorEl, mapChanges }) => {
	const dispatch = useDispatch();

	const theme = useSelector((state) => state.settings.system.theme);

	const handleSignOut = async () => {
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
	};

	return (
		<StyledMenu
			anchorEl={anchorEl}
			keepMounted
			elevation={8}
			transformOrigin={{ vertical: -15, horizontal: 0 }}
			marginThreshold={10}
			transitionDuration={220}
			open={isOpen}
			style={{ borderRadius: 10 }}
			onClose={() => setAnchorEl(null)}
		>
			<AuxMenuItem
				onClick={() => {
					dispatch(setSelectedTabIndex(0));
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
			<AuxMenuItem
				// disabled
				onClick={() => {
					dispatch(setTheme(theme === "light" ? "dark" : "light"));
					setAnchorEl(null);
				}}
			>
				{theme === "light" ? (
					<>
						<MdOutlineDarkMode style={{ height: 20, width: 20, marginRight: 7 }} />
						Descanso Visual
					</>
				) : (
					<>
						<MdOutlineLightMode style={{ height: 20, width: 20, marginRight: 7 }} />
						Agudeza Visual
					</>
				)}
			</AuxMenuItem>
			<AuxMenuItem
				onClick={() => {
					sound("menu");
					dispatch(addSettingsTab());
					setAnchorEl(null);
				}}
			>
				<RiSettingsLine style={{ height: 20, width: 20, marginRight: 7 }} />
				Preferencias
			</AuxMenuItem>
			<AuxMenuItem onClick={mapChanges}>
				<AiOutlineCloudSync style={{ height: 20, width: 20, marginRight: 7 }} />
				Mapear Cambios
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

"use client";

import { useTranslations } from "next-intl";
import { Typography, Paper, Fade } from "@mui/material";
import { NotFoundRootStyles, NotFoundTextStyles } from "../styles";
import { HiOutlineSignalSlash } from "react-icons/hi2";
import { useMenu } from "../context/MenuContext";
import { useRouter } from "next/navigation";

// not-found.tsx
export default function NotFound() {
	const t = useTranslations("notfound");
	const { setSelectedMenu } = useMenu();
	const router = useRouter();

	const handleRedirectHome = () => {
		setSelectedMenu(1000); // Ajusta esta clave según tu menú
		router.push("/");
	};

	return (
		<Fade in timeout={300}>
			<Paper elevation={0} component={"div"} sx={NotFoundRootStyles}>
				<HiOutlineSignalSlash color="#FFFFFFaa" size={120} />
				<Typography variant="p" component="p" sx={NotFoundTextStyles}>
					{t("text1")}
				</Typography>

				<div
					onClick={handleRedirectHome}
					style={{
						textDecoration: "none",
						color: "#FFFFFFaa",
						fontWeight: 500,
						border: "0.5px solid #FFFFFFaa",
						padding: "8px 10px",
						borderRadius: 7,
						cursor: "pointer",
					}}
				>
					{t("btntext")}
				</div>
			</Paper>
		</Fade>
	);
}

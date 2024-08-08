import { BackDropContainer1, ChallengeDescription, ChallengeTitle } from "@/app/styledComponents";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import MScroll from "../MScroll";
import { SiKeycloak } from "react-icons/si";
import { useTranslations } from "next-intl";
import { Button } from "@mui/material";
import { Button3 } from "@/app/styles";

import {
	GiBeastEye,
	GiBehold,
	GiBubbles,
	GiButterfly,
	GiFeather,
	GiMoebiusTriangle,
	GiSpellBook,
	GiTripleLock,
	GiTrojanHorse,
	GiWarhammer,
} from "react-icons/gi";

const ChallengeGen = ({ close }) => {
	const t = useTranslations("mglevels");

	const iconSize = 28;

	const levels = [
		{
			id: 1,
			name: t("lvl1"),
			icon: GiButterfly,
			color: "#7FFF00",
		},
		{
			id: 2,
			name: t("lvl2"),
			icon: GiTrojanHorse,
			color: "#ADFF2F",
		},
		{
			id: 3,
			name: t("lvl3"),
			icon: GiFeather,
			color: "#FFD700",
		},
		{
			id: 4,
			name: t("lvl4"),
			icon: GiWarhammer,
			color: "#FFA500",
		},
		{
			id: 5,
			name: t("lvl5"),
			icon: GiMoebiusTriangle,
			color: "#FF8C00",
		},
		{
			id: 6,
			name: t("lvl6"),
			icon: GiSpellBook,
			color: "#FF4500",
		},
		{
			id: 7,
			name: t("lvl7"),
			icon: GiBehold,
			color: "#FF0000",
		},
		{
			id: 8,
			name: t("lvl8"),
			icon: GiBubbles,
			color: "#DC143C",
		},
		{
			id: 9,
			name: t("lvl9"),
			icon: GiBeastEye,
			color: "#B22222",
		},
		{
			id: 10,
			name: t("lvl10"),
			icon: GiTripleLock,
			color: "#8B0000",
		},
	];

	return (
		<BackDropContainer1 container spacing={0} onClick={(e) => e.stopPropagation()}>
			<MScroll style={{ height: "100%", width: "100%" }}>
				<Grid xs={12} style={{ padding: "20px 20px" }}>
					<ChallengeTitle>
						<SiKeycloak size={36} />
						<div>La Llave al metaverso</div>
					</ChallengeTitle>

					<ChallengeDescription>
						Más que un simple desafío, resolver este problema es tu llave de entrada al metaverso. ¡Desbloquea un mundo
						de posibilidades infinitas!
						<br />
						<br />
						Al aceptar este reto, estás dando el primer paso hacia la obtención de una Metakey, un fragmento valioso y
						codiciado del metaverso. La Metakey no solo es una puerta a este vasto universo digital, sino también un
						símbolo de tu habilidad y dedicación como usuario.
						<br />
						<br />
						Este desafío no es solo una prueba de tu capacidad para resolver códigos complejos; es una aventura en la
						que cada elección que hagas influirá en el tipo de Metakey que puedes obtener. Dependiendo del nivel de
						dificultad que elijas, tendrás más o menos probabilidades de obtener una Metakey de alto rango.
						<br />
						<br />
						{levels.map((level) => (
							<div
								key={level.id}
								style={{
									color: level.color,
									display: "flex",
									alignItems: "center",
									gap: 10,
									fontWeight: 600,
									marginBottom: 10,
								}}
							>
								<level.icon size={iconSize} style={{ background: "#ffffff15", padding: 5, borderRadius: 5 }} />
								{level.name}
							</div>
						))}
						<br />
						<br />
						Recuerda, cada desafío que superes no solo te acerca más a la obtención de una Metakey, sino que también te
						prepara para los retos futuros que el metaverso tiene reservados. ¿Estás listo para demostrar tu habilidad y
						reclamar tu lugar en el metaverso?
						<br />
						<br />
						¡El futuro del metaverso está en tus manos!
						<br />
						<br />
					</ChallengeDescription>
				</Grid>
				<Grid xs={12} style={{ padding: "20px 20px" }}>
					<Button sx={Button3} onClick={close}>
						<div>ACEPTAR CONOCIMIENTO</div>
					</Button>
				</Grid>
			</MScroll>
		</BackDropContainer1>
	);
};

export default ChallengeGen;

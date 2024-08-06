"use client";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { HomeText1, MFCountdown, MFCountdownContainer, WordLogo } from "../styledComponents";
import { Fade } from "@mui/material";
import MetaKey from "./_components/MetaKey";
import GlitchClip from "react-glitch-effect/core/GlitchClip";

const Page = () => {
	return (
		<Fade in timeout={400}>
			<Grid container spacing={0} style={{ height: "100%" }}>
				<Grid
					xs={12}
					sm={7}
					md={6}
					style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0px 40px" }}
				>
					<GlitchClip duration={2000}>
						<WordLogo style={{ fontSize: 75, textAlign: "center" }}>METAGRAMMERS</WordLogo>
					</GlitchClip>
					<HomeText1>
						En un universo donde la tecnología es el nuevo campo de batalla, los Metagrammers se levantan como los
						valientes forjadores del mañana. No somos simples programadores; somos los guerreros del código,
						transformando cada línea en poderosas armas que moldean un metaverso lleno de maravillas y desafíos
						infinitos.
						<br />
						<br />
						Únete a nuestra hermandad de visionarios intrépidos. En Metagrammers, cada pixel es un territorio por
						conquistar y cada algoritmo una leyenda por escribir. Aquí, tu creatividad no tiene límites y juntos,
						navegamos, exploramos y dominamos el vasto océano digital.
						<br />
						<br />
						Obtén tu Metakey superando la prueba de entrada al metaverso. Tienes hasta el 1727784720 para demostrar tu
						valía y desbloquear un clúster con tu Metakey. ¡No pierdas la oportunidad de ser parte de esta épica
						aventura!
					</HomeText1>
					<MFCountdownContainer>
						<MFCountdown date={"2024-10-01T12:00:00"} />
					</MFCountdownContainer>
				</Grid>

				<Grid xs={12} sm={5} md={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
					<MetaKey rarity={5} />
				</Grid>
			</Grid>
		</Fade>
	);
};

export default Page;

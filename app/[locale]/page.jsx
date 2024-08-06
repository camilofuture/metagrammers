"use client";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
	HomeContainer,
	HomeSubContainer2,
	HomeText1,
	MFCountdown,
	MFCountdownContainer,
	WordLogo,
	WordLogo2,
} from "../styledComponents";
import { Fade } from "@mui/material";
import MetaKey from "./_components/MetaKey";
import GlitchClip from "react-glitch-effect/core/GlitchClip";

const Page = () => {
	return (
		<Fade in timeout={400}>
			<Grid container spacing={0} style={{ height: "100%" }}>
				<HomeContainer xs={12} sm={12} md={6}>
					<GlitchClip duration={2000}>
						<WordLogo2 style={{ textAlign: "center" }}>METAGRAMMERS</WordLogo2>
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
				</HomeContainer>

				<HomeSubContainer2 xs={0} sm={0} md={6}>
					<MetaKey rarity={5} />
				</HomeSubContainer2>
			</Grid>
		</Fade>
	);
};

export default Page;

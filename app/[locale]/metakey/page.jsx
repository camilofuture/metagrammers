"use client";

import React, { useEffect, useState } from "react";
import MCodeEditor from "../_components/MCodeEditor";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { generateChallenge } from "../actions/ai";
import { ChallengeDescription, ChallengeText, ChallengeTitle } from "@/app/styledComponents";
import MScroll from "../_components/MScroll";
import { PuffLoader } from "react-spinners";
import { SiKeycloak } from "react-icons/si";
import { FaCodeBranch } from "react-icons/fa";
import GlitchClip from "react-glitch-effect/core/GlitchClip";
import { Button, Fade, Grow } from "@mui/material";
import { Button3, Button4 } from "@/app/styles";
import MSelector from "../_components/MSelector";
import { useImmer } from "use-immer";

const MetaKeyPage = () => {
	const [code, setCode] = useState("// Escribe tu código aquí");

	const [challenge, setChallenge] = useState("");

	const [loading, setLoading] = useState(false);

	const [state, setState] = useImmer({
		lang: "javascript",
		level: "5",
	});

	const handleChangeLang = (event) => {
		setState((draft) => {
			draft.lang = event.target.value;
		});
	};

	const handleChangeLevel = (event) => {
		setState((draft) => {
			draft.level = event.target.value;
		});
	};

	const generate = async () => {
		try {
			setLoading(true);
			const text = await generateChallenge(state.level, state.lang);
			setChallenge(text);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.error(error);
		}
	};

	return (
		<Fade in timeout={400}>
			<Grid container spacing={3}>
				<Grid container xs={12} sm={4} md={6}>
					<Grid xs={12}>
						<ChallengeTitle>
							<SiKeycloak size={36} />
							<div>La Llave al metaverso</div>
						</ChallengeTitle>

						<ChallengeDescription>
							Más que un simple desafío, resolver este problema es tu llave de entrada al metaverso. ¡Desbloquea un
							mundo de posibilidades infinitas!
						</ChallengeDescription>

						<MScroll
							style={{
								height: 400,
								maxHeight: 400,
								color: "#ffffffee",
								background: "#ffffff10",
								borderRadius: 20,
							}}
						>
							<ChallengeText>
								{challenge ? (
									<Fade in timeout={1500}>
										<div dangerouslySetInnerHTML={{ __html: challenge }} />
									</Fade>
								) : loading ? (
									<PuffLoader size={180} color="#38ef7d" />
								) : (
									<GlitchClip duration={2000}>
										<div style={{ fontSize: 20 }}>Esperando por el desafío...</div>
									</GlitchClip>
								)}
							</ChallengeText>
						</MScroll>
					</Grid>

					<Grid xs={4}>
						<MSelector
							value={state.lang}
							setValue={handleChangeLang}
							label="Lenguaje de Programacion"
							placeholder="Escoge tu lenguaje"
							displaymode="text"
							options={["javascript", "python"]}
						/>
					</Grid>

					<Grid xs={2}>
						<MSelector
							value={state.level}
							setValue={handleChangeLevel}
							label="Dificultad"
							placeholder="Escoge tu Dificultad"
							displaymode="text"
							options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
						/>
					</Grid>

					<Grid xs={6}>
						<Button onClick={generate} sx={Button4} disabled={loading}>
							<div>GENERAR DESAFIO</div>
						</Button>
					</Grid>
				</Grid>

				<Grid container xs={12} sm={8} md={6}>
					<Grid xs={12}>
						<ChallengeTitle>
							<FaCodeBranch size={36} />
							<div>El Codigo maestro</div>
						</ChallengeTitle>

						<ChallengeDescription>
							Este es el código de un verdadero maestro, una obra de arte digital que refleja habilidad, ingenio.
							¡Muéstranos de lo que eres capaz!
						</ChallengeDescription>
						<MCodeEditor language={state.lang} value={code} onChange={(newValue) => setCode(newValue)} />
					</Grid>

					<Grid xs={12}>
						<Button sx={Button3} disabled={loading}>
							<div>ENVIAR EL CODIGO</div>
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Fade>
	);
};

export default MetaKeyPage;

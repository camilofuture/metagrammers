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
import { Button, Fade, Grow, IconButton } from "@mui/material";
import { Button3, Button4 } from "@/app/styles";
import MSelector from "../_components/MSelector";
import { useImmer } from "use-immer";
import MBackdrop from "../_components/MBackdrop";
import { FaEye } from "react-icons/fa";
import { useTranslations } from "next-intl";
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

const MetaKeyPage = () => {
	const [code, setCode] = useState("");

	const t = useTranslations("mglevels");

	const [challenge, setChallenge] = useState("");

	const [loading, setLoading] = useState(false);

	const [openBackDrop, setOpenBackDrop] = useImmer({
		open: false,
		space: "",
	});

	const openBackdropChallengeGen = () => {
		setOpenBackDrop((draft) => {
			draft.open = true;
			draft.space = "challengegen";
		});
	};

	const openBackdropCodeSend = () => {
		setOpenBackDrop((draft) => {
			draft.open = true;
			draft.space = "codesend";
		});
	};

	const closeBackdrop = () => {
		setOpenBackDrop((draft) => {
			draft.open = false;
		});
	};

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

	const iconSize = 22;

	const levels = [
		{
			id: 1,
			name: <div style={{ color: "#7FFF00" }}>{t("lvl1")}</div>,
			icon: <GiButterfly size={iconSize} color="#7FFF00" />,
		},
		{
			id: 2,
			name: <div style={{ color: "#ADFF2F" }}>{t("lvl2")}</div>,
			icon: <GiTrojanHorse size={iconSize} color="#ADFF2F" />,
		},
		{
			id: 3,
			name: <div style={{ color: "#FFD700" }}>{t("lvl3")}</div>,
			icon: <GiFeather size={iconSize} color="#FFD700" />,
		},
		{
			id: 4,
			name: <div style={{ color: "#FFA500" }}>{t("lvl4")}</div>,
			icon: <GiWarhammer size={iconSize} color="#FFA500" />,
		},
		{
			id: 5,
			name: <div style={{ color: "#FF8C00" }}>{t("lvl5")}</div>,
			icon: <GiMoebiusTriangle size={iconSize} color="#FF8C00" />,
		},
		{
			id: 6,
			name: <div style={{ color: "#FF4500" }}>{t("lvl6")}</div>,
			icon: <GiSpellBook size={iconSize} color="#FF4500" />,
		},
		{
			id: 7,
			name: <div style={{ color: "#FF0000" }}>{t("lvl7")}</div>,
			icon: <GiBehold size={iconSize} color="#FF0000" />,
		},
		{
			id: 8,
			name: <div style={{ color: "#DC143C" }}>{t("lvl8")}</div>,
			icon: <GiBubbles size={iconSize} color="#DC143C" />,
		},
		{
			id: 9,
			name: <div style={{ color: "#B22222" }}>{t("lvl9")}</div>,
			icon: <GiBeastEye size={iconSize} color="#B22222" />,
		},
		{
			id: 10,
			name: <div style={{ color: "#8B0000" }}>{t("lvl10")}</div>,
			icon: <GiTripleLock size={iconSize} color="#8B0000" />,
		},
	];

	return (
		<Fade in timeout={400}>
			<Grid container spacing={3}>
				<MBackdrop space={openBackDrop.space} isOpen={openBackDrop.open} close={closeBackdrop} />

				<Grid container xs={12} sm={4} md={6}>
					<Grid xs={12} style={{ marginBottom: 20 }}>
						<ChallengeTitle>
							<SiKeycloak size={36} />
							<div>La Llave al metaverso</div>
							<IconButton onClick={openBackdropChallengeGen}>
								<FaEye
									style={{ background: "#ffffff10", borderRadius: 5, padding: "2px 7px" }}
									color="#fff"
									size={20}
								/>
							</IconButton>
						</ChallengeTitle>

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

					<Grid xs={5}>
						<MSelector
							value={state.lang}
							setValue={handleChangeLang}
							label="Lenguaje de Programacion"
							placeholder="Escoge tu lenguaje"
							displaymode="text"
							options={["javascript", "python"]}
						/>
					</Grid>

					<Grid xs={7}>
						<MSelector
							value={state.level}
							setValue={handleChangeLevel}
							label="Dificultad"
							placeholder="Escoge tu Dificultad"
							displaymode="twokeys"
							key1="icon"
							key2="name"
							valueKey="id"
							options={levels}
						/>
					</Grid>

					<Grid xs={12}>
						<Button onClick={generate} sx={Button4} disabled={loading}>
							<div>GENERAR DESAFIO</div>
						</Button>
					</Grid>
				</Grid>

				<Grid container xs={12} sm={8} md={6}>
					<Grid xs={12} style={{ marginBottom: 20 }}>
						<ChallengeTitle>
							<FaCodeBranch size={36} />
							<div>El Codigo maestro</div>
							<IconButton onClick={openBackdropCodeSend}>
								<FaEye
									style={{ background: "#ffffff10", borderRadius: 5, padding: "2px 7px" }}
									color="#fff"
									size={20}
								/>
							</IconButton>
						</ChallengeTitle>

						{/*<ChallengeDescription>
							Este es el código de un verdadero maestro, una obra de arte digital que refleja habilidad, ingenio.
							¡Muéstranos de lo que eres capaz!
						</ChallengeDescription>*/}
						<MCodeEditor language={state.lang} value={code} onChange={(newValue) => setCode(newValue)} />
					</Grid>

					<Grid xs={12}>
						<Button sx={Button3} disabled={loading} aria-hidden={false}>
							<div>ENVIAR EL CODIGO</div>
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Fade>
	);
};

export default MetaKeyPage;

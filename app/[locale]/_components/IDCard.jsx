// @ts-nocheck
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FloatingContainer, IDCardContainer, ProfileImgContainer, Rarity } from "../../styledComponents";
import Tilt from "react-parallax-tilt";
import kernel1 from "../../../public/kernels/Rarity1.svg";
import kernel2 from "../../../public/kernels/Rarity2.svg";
import kernel3 from "../../../public/kernels/Rarity3.svg";
import kernel4 from "../../../public/kernels/Rarity4.svg";
import kernel5 from "../../../public/kernels/Rarity5.svg";
import { getProfileImgRarity, getStringRarity, zeroFill } from "../../kernel/core";
import QR from "qr-code-styling";

const IDCard = ({ metacodex, bio, chip, rarity }) => {
	const [qrImage, setQrImage] = useState("");

	const bgs = {
		0: {
			kernel: "",
			offsets: [
				{ offset: 0, color: "#11998e" },
				{ offset: 1, color: "#38ef7d" },
			],
		},
		1: {
			kernel: kernel1,
			offsets: [
				{ offset: 0, color: "#8e9eab" },
				{ offset: 1, color: "#eef2f3" },
			],
		},
		2: {
			kernel: kernel2,
			offsets: [
				{ offset: 0, color: "#1d976c" },
				{ offset: 1, color: "#93f9b9" },
			],
		},
		3: {
			kernel: kernel3,
			offsets: [
				{ offset: 0, color: "#00b4db" },
				{ offset: 1, color: "#0083b0" },
			],
		},
		4: {
			kernel: kernel4,
			offsets: [
				{ offset: 0, color: "#9d50bb" },
				{ offset: 1, color: "#6e48aa" },
			],
		},
		5: {
			kernel: kernel5,
			offsets: [
				{ offset: 0, color: "#f46b45" },
				{ offset: 1, color: "#eea849" },
			],
		},
	};

	const TITLE_COLORS = "#FFFFFF90";

	const generateQR = async (color) => {
		const qrCode = new QR({
			width: 82,
			height: 82,
			type: "svg",
			data: `https://metagrammers.com/${metacodex}`,
			image: bgs[rarity].kernel,
			dotsOptions: {
				color: "rgba(255,255,255, .7)",
				type: "extra-rounded",
				gradient: {
					type: "linear",
					rotation: 0,
					colorStops: bgs[rarity].offsets,
				},
			},
			backgroundOptions: {
				color: "transparent",
			},
			imageOptions: {
				crossOrigin: "anonymous",
				margin: 2,
			},
		});

		let data = await qrCode.getRawData("png");

		let auxData = URL.createObjectURL(data);

		setQrImage(auxData);
	};

	useEffect(() => {
		generateQR("#00ff00");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<FloatingContainer>
			<Tilt
				glareEnable={true}
				glareMaxOpacity={0.9}
				glareColor="lightblue"
				glarePosition="all"
				scale={1.02}
				perspective={500}
				glareBorderRadius="5px 50px"
				tiltAngleXInitial={4}
				tiltAngleYInitial={4}
			>
				<IDCardContainer background={rarity}>
					<div
						style={{
							width: 315,
							height: 555,
							display: "flex",
							flexDirection: "column",
							background: "#201e31",
							borderRadius: "5px 50px",
							alignItems: "center",
						}}
					>
						<div
							style={{
								marginTop: 10,
								fontFamily: "Orbitron",
								fontSize: 24,
								color: TITLE_COLORS,
								fontWeight: 700,
							}}
						>
							MetaGrammer
						</div>
						<ProfileImgContainer background={rarity} width={130} height={130}>
							<Avatar
								alt="MetaGrammer"
								src={getProfileImgRarity(rarity)}
								style={{
									width: 120,
									height: 120,
								}}
							/>
						</ProfileImgContainer>

						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-start",
								alignItems: "flex-start",
								width: "100%",
								marginTop: 10,
								paddingLeft: 20,
							}}
						>
							<div
								style={{
									color: TITLE_COLORS,
									fontWeight: 700,
									fontFamily: "Orbitron",
								}}
							>
								MetaCodex
							</div>
							<div
								style={{
									color: "rgba(255,255,255, .9)",
									paddingLeft: 5,
									fontFamily: "Orbitron",
								}}
							>
								{metacodex.trim() === "" ? "*****************" : metacodex}
							</div>
						</div>

						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-start",
								alignItems: "flex-start",
								width: "100%",
								//  background: "green",
								marginTop: 10,
								paddingLeft: 40,
								paddingRight: 20,
							}}
						>
							<div
								style={{
									color: TITLE_COLORS,
									fontWeight: 700,
									fontFamily: "Orbitron",
								}}
							>
								Bio
							</div>

							<div
								style={{
									color: "rgba(255,255,255, .9)",
									paddingLeft: 5,
									textAlign: "justify",
									fontFamily: "Orbitron",
									fontSize: 12,
									minHeight: 55,
									height: 55,
									maxHeight: 55,
									padding: 2,
									borderRadius: 5,
								}}
							>
								{bio.trim() === ""
									? "**** ******** **** **** **** ******** **** ******** **** ******** **** **** ******** **** **** ******** ************ ****"
									: bio}
							</div>
						</div>

						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-start",
								alignItems: "flex-start",
								width: "100%",
								//  background: "green",
								marginTop: 10,
								paddingLeft: 20,
								paddingRight: 20,
							}}
						>
							<div
								style={{
									color: TITLE_COLORS,
									fontWeight: 700,
									fontFamily: "Orbitron",
								}}
							>
								Location
							</div>
							<div
								style={{
									color: "rgba(255,255,255, .9)",
									paddingLeft: 5,
									textAlign: "justify",
									fontFamily: "Orbitron",
									fontSize: 14,
									padding: 2,
									borderRadius: 5,
								}}
							>
								Metaverse
							</div>
						</div>

						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-start",
								alignItems: "flex-start",
								width: "100%",
								marginTop: 10,
								paddingLeft: 20,
							}}
						>
							<div
								style={{
									color: "rgba(255,255,255, .3)",
									fontWeight: 700,
									fontFamily: "Orbitron",
								}}
							>
								Rank
							</div>
							<div
								style={{
									color: "rgba(255,255,255, .9)",
									paddingLeft: 5,
									fontFamily: "Orbitron",
								}}
							>
								<Rarity elevation={5} background={rarity}>
									{getStringRarity(rarity)} Class Division
								</Rarity>
							</div>
						</div>

						<div
							style={{
								display: "flex",
								//   flexDirection: "column",
								justifyContent: "space-between",
								alignItems: "center",
								width: "100%",
								//  background: "green",
								marginTop: 10,
								paddingLeft: 20,
								paddingRight: 20,
							}}
						>
							<img alt="img" style={{ background: "transparent" }} src={qrImage} />

							<div>
								<div
									style={{
										color: "rgba(255,255,255, .3)",
										fontWeight: 700,
										fontFamily: "Orbitron",
									}}
								>
									Chip
								</div>
								<div
									style={{
										color: "rgba(255,255,255, .9)",
										paddingLeft: 5,
										fontFamily: "Orbitron",
									}}
								>
									{chip || chip === 0 ? `#${zeroFill(chip, 8)}` : "????????"}
								</div>
							</div>
						</div>
					</div>
				</IDCardContainer>
			</Tilt>
		</FloatingContainer>
	);
};

export default IDCard;

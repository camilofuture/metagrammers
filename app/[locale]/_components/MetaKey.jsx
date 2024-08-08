"use client";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
	FloatingContainer,
	MetaKeyContainer,
	MetaKeySubContainer,
	MetaKeyText,
	MetaKeyTitle,
} from "@/app/styledComponents";
import Tilt from "react-parallax-tilt";
import kernel1 from "../../../public/kernels/Rarity1.svg";
import kernel2 from "../../../public/kernels/Rarity2.svg";
import kernel3 from "../../../public/kernels/Rarity3.svg";
import kernel4 from "../../../public/kernels/Rarity4.svg";
import kernel5 from "../../../public/kernels/Rarity5.svg";
import { useTranslations } from "next-intl";
import { useQRCode } from "next-qrcode";

const MetaKey = ({ rarity, tag }) => {
	const [qrImage, setQrImage] = useState("");
	//const [qrCode, setQrCode] = useState(null);
	const t = useTranslations("metakey");

	const { SVG } = useQRCode();

	/*const bgs = {
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

	useEffect(() => {
		if (QRCodeStyling && !qrCode) {
			const qr = new QRCodeStyling({
				width: 225,
				height: 225,
				type: "svg",
				data: `https://metagrammers.com/${tag}`,
				image: bgs[rarity].kernel.src,
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
					width: 225,
					height: 225,
				},
			});

			setQrCode(qr);

			const generateQR = async () => {
				qr.append(document.getElementById("qr-container"));

				const dataUrl = await new Promise((resolve) => {
					setTimeout(() => {
						qr.getRawData("png").then((blob) => {
							const url = URL.createObjectURL(blob);
							resolve(url);
						});
					}, 100);
				});

				setQrImage(dataUrl);
			};

			generateQR();
		}
	}, [QRCodeStyling, tag, rarity, qrCode]);*/

	const [props, setProps] = useState({
		color: "",
		kernel: "",
	});

	useEffect(() => {
		if (rarity === 1) {
			setProps({
				color: "#eef2f3",
				kernel: kernel1.src,
			});
		} else if (rarity === 2) {
			setProps({
				color: "#93f9b9",
				kernel: kernel2.src,
			});
		} else if (rarity === 3) {
			setProps({
				color: "#0083b0",
				kernel: kernel3.src,
			});
		} else if (rarity === 4) {
			setProps({
				color: "#6e48aa",
				kernel: kernel4.src,
			});
		} else if (rarity === 5) {
			setProps({
				color: "#eea849",
				kernel: kernel5.src,
			});
		}
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
				glareBorderRadius="20px"
				tiltAngleXInitial={4}
				tiltAngleYInitial={4}
				gyroscope={true}
			>
				<MetaKeyContainer background={rarity}>
					<MetaKeySubContainer>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								alignContent: "center",
								justifyItems: "center",
								height: "100%",
								gap: 15,
							}}
						>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									background: "#00000040",
									padding: "10px 5px",
									borderRadius: 10,
								}}
							>
								{<img src={props.kernel} width={40} />}
							</div>

							<MetaKeyTitle>MetaKey</MetaKeyTitle>

							<SVG
								text={`https://metagrammers.com/mg/${tag}`}
								options={{
									margin: 2,
									width: 200,
									color: {
										dark: props.color,
										light: "#201e3100",
									},
								}}
							/>
							<MetaKeyText background={rarity}>{t(`legend${rarity}`)}</MetaKeyText>
						</div>
					</MetaKeySubContainer>
				</MetaKeyContainer>
			</Tilt>
		</FloatingContainer>
	);
};

MetaKey.propTypes = {
	rarity: PropTypes.number.isRequired,
	tag: PropTypes.string.isRequired,
};

export default MetaKey;

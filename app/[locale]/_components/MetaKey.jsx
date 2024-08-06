import {
	FloatingContainer,
	MetaKeyContainer,
	MetaKeySubContainer,
	MetaKeyText,
	MetaKeyTitle,
} from "@/app/styledComponents";
import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import QR from "qr-code-styling";
import kernel1 from "../../../public/kernels/Rarity1.svg";
import kernel2 from "../../../public/kernels/Rarity2.svg";
import kernel3 from "../../../public/kernels/Rarity3.svg";
import kernel4 from "../../../public/kernels/Rarity4.svg";
import kernel5 from "../../../public/kernels/Rarity5.svg";
import { useTranslations } from "next-intl";

const MetaKey = ({ rarity, tag }) => {
	const [qrImage, setQrImage] = useState("");

	const t = useTranslations("metakey");

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

	const generateQR = async (color) => {
		const qrCode = new QR({
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
				glareBorderRadius="20px"
				tiltAngleXInitial={4}
				tiltAngleYInitial={4}
				gyroscope={true}
			>
				<MetaKeyContainer background={rarity}>
					<MetaKeySubContainer>
						<div
							style={{
								//padding: "15px 10px",
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
							<MetaKeyTitle>MetaKey</MetaKeyTitle>

							{qrImage && <img alt="QR Code" style={{ background: "transparent" }} src={qrImage} />}
							<MetaKeyText background={rarity}>{/*t(`legend${rarity}`)*/} This is a Legendary MetaKey</MetaKeyText>
						</div>
					</MetaKeySubContainer>
				</MetaKeyContainer>
			</Tilt>
		</FloatingContainer>
	);
};

export default MetaKey;

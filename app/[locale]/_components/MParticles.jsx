import { useEffect, useMemo, useState, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the

const AuxParticles = ({ op, color, sizeMax, sizeMin }) => {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const options = useMemo(
		() => [
			// 0
			{
				fullScreen: true,
				background: {
					color: {
						value: "transparent",
					},
					// position: "50% 50%",
					repeat: "no-repeat",
					//size: "",
				},
				interactivity: {
					events: {
						onClick: {
							enable: false,
							mode: "push",
						},
						onHover: {
							mode: "repulse",
						},
					},
					modes: {
						push: {
							default: true,
							groups: ["z5000", "z7500", "z2500", "z1000"],
							quantity: 4,
						},
						remove: {
							quantity: 2,
						},
					},
				},
				particles: {
					color: {
						value: "#DDE6FF",
						animation: {
							h: {
								speed: 20,
							},
						},
					},
					groups: {
						z5000: {
							opacity: {
								value: 0.2,
							},
							number: {
								value: 70,
							},
							zIndex: {
								value: 50,
							},
						},
						z7500: {
							opacity: {
								value: 0.5,
							},
							number: {
								value: 30,
							},
							zIndex: {
								value: 75,
							},
						},
						z2500: {
							opacity: {
								value: 0.25,
							},
							number: {
								value: 50,
							},
							zIndex: {
								value: 25,
							},
						},
						z1000: {
							opacity: {
								value: 0.8,
							},
							number: {
								value: 40,
							},
							zIndex: {
								value: 10,
							},
						},
					},
					move: {
						angle: {
							value: 10,
						},
						attract: {
							rotate: {
								x: 600,
								y: 1200,
							},
						},
						direction: "right",
						enable: true,
						outModes: {
							bottom: "out",
							left: "out",
							right: "out",
							top: "out",
						},
						speed: 1,
					},
					number: {
						value: 130,
					},

					opacity: {
						animation: {
							speed: 3,
							minimumValue: 0.1,
						},
					},
					zIndex: {
						value: 5,
						opacityRate: 0.5,
					},
					life: {
						count: 0,
						delay: {
							random: {
								enable: false,
								minimumValue: 0,
							},
							value: 0,
							sync: false,
						},
						duration: {
							random: {
								enable: false,
								minimumValue: 0.0001,
							},
							value: 0,
							sync: false,
						},
					},
					roll: {
						darken: {
							enable: false,
							value: 0,
						},
						enable: false,
						enlighten: {
							enable: false,
							value: 0,
						},
						mode: "vertical",
						speed: 25,
					},
					tilt: {
						random: {
							enable: false,
							minimumValue: 0,
						},
						value: 0,
						animation: {
							enable: false,
							speed: 0,
							decay: 0,
							sync: false,
						},
						direction: "clockwise",
						enable: false,
					},
					twinkle: {
						lines: {
							enable: false,
							frequency: 0.05,
							opacity: 1,
						},
						particles: {
							enable: false,
							frequency: 0.05,
							opacity: 1,
						},
					},
					wobble: {
						distance: 5,
						enable: false,
						speed: {
							angle: 50,
							move: 10,
						},
					},
					orbit: {
						animation: {
							count: 0,
							enable: false,
							speed: 1,
							decay: 0,
							sync: false,
						},
						enable: false,
						opacity: 1,
						rotation: {
							random: {
								enable: false,
								minimumValue: 0,
							},
							value: 45,
						},
						width: 1,
					},
					links: {
						blink: false,
						color: {
							value: "#ffffff",
						},
						consent: false,
						distance: 100,
						enable: false,
						frequency: 1,
						opacity: 0.4,
						shadow: {
							blur: 5,
							color: {
								value: "#000",
							},
							enable: false,
						},
						triangles: {
							enable: false,
							frequency: 1,
						},
						width: 1,
						warp: false,
					},
					repulse: {
						random: {
							enable: false,
							minimumValue: 0,
						},
						value: 0,
						enabled: false,
						distance: 1,
						duration: 1,
						factor: 1,
						speed: 1,
					},
				},
			},
		],
		[]
	);

	return init ? (
		<Particles
			style={{
				position: "absolute",
				zIndex: 5,
				width: "100%",
				height: "100%",
				top: 0,
				left: 0,
				borderRadius: 5,
			}}
			id="mparticles"
			options={options[op]}
		/>
	) : (
		<></>
	);
};

export default memo(AuxParticles);

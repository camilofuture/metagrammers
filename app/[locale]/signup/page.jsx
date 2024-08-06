"use client";

import { SignUpContainer, SignupFormTitle } from "@/app/styledComponents";
import { Button, Grow } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import MTextField from "../_components/MTextField";
import dayjs from "dayjs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useTranslations } from "next-intl";
import { Button3, Button4 } from "@/app/styles";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Importar Firebase Auth
import { createUser } from "../actions/user";
import { isEmail, isLength } from "validator";
import { PuffLoader } from "react-spinners";
import { useAuth } from "@/app/context/AuthContex";

const SignUp = ({ close }) => {
	const t = useTranslations("signup");
	const { setUser } = useAuth(); // Obtener el setter del usuario desde el contexto
	const [loading, setLoading] = useState(false);

	const [state, setState] = useState({
		name: "",
		email: "",
		tag: "",
		password: "",
		birthDate: dayjs(),
		terms: false,
	});

	const handleChange = (field) => (event) => {
		setState((prevState) => ({
			...prevState,
			[field]: event.target.value,
		}));
	};

	const handleSignUp = async () => {
		try {
			// Validaciones
			if (!isLength(state.name, { max: 100 })) {
				throw new Error("El nombre no debe tener más de 100 caracteres.");
			}

			if (!isEmail(state.email)) {
				throw new Error("El correo electrónico no es válido.");
			}

			if (!isLength(state.password, { min: 6, max: 20 })) {
				throw new Error("La contraseña debe tener entre 6 y 20 caracteres.");
			}

			if (!isLength(state.tag, { min: 4, max: 16 })) {
				throw new Error("La etiqueta debe tener entre 4 y 16 caracteres.");
			}

			setLoading(true);

			const auth = getAuth();
			const userCredential = await createUserWithEmailAndPassword(auth, state.email, state.password);
			const firebaseUser = userCredential.user;
			const uid = firebaseUser.uid;

			const newUser = {
				uid,
				name: state.name,
				tag: state.tag,
				email: state.email,
				password: state.password,
			};

			const response = await createUser(newUser);

			if (response && response.insertedId) {
				const fullUserData = { ...firebaseUser, ...newUser }; // Combinar datos de Firebase y MongoDB
				setUser(fullUserData); // Guardar el usuario en el contexto
				localStorage.setItem("mguser", JSON.stringify(fullUserData)); // Guardar en localStorage
				setLoading(false);
				close(); // Cerrar el formulario
			}
		} catch (error) {
			setLoading(false);
			console.error("Error during sign up:", error);
			// Aquí puedes mostrar el error al usuario de la manera que prefieras, por ejemplo:
			alert(error.message);
		}
	};

	return (
		<Grow in timeout={400}>
			<SignUpContainer container spacing={4} onClick={(e) => e.stopPropagation()}>
				<Grid xs={12}>
					<SignupFormTitle>
						<div>Registro de Metagrammer</div>
						<PuffLoader size={30} color="#38ef7d" loading={loading} />
					</SignupFormTitle>
				</Grid>

				<Grid xs={12}>
					<MTextField value={state.name} setValue={handleChange("name")} label={t("label1")} placeholder={t("ph1")} />
				</Grid>

				<Grid xs={12}>
					<MTextField
						value={state.tag}
						setValue={handleChange("tag")}
						label={t("label2")}
						placeholder={t("ph2")}
						adornment={<MdOutlineAlternateEmail color="#ffffff60" size={25} style={{ marginRight: 5 }} />}
					/>
				</Grid>

				<Grid xs={12}>
					<MTextField value={state.email} setValue={handleChange("email")} label={t("label3")} placeholder={t("ph3")} />
				</Grid>

				<Grid xs={12}>
					<MTextField
						value={state.password}
						setValue={handleChange("password")}
						label={t("label4")}
						placeholder={t("ph4")}
						type="password"
					/>
				</Grid>

				<Grid xs={5}>
					<Button onClick={close} sx={Button4} disabled={loading}>
						<div>CANCELAR</div>
					</Button>
				</Grid>

				<Grid xs={7}>
					<Button onClick={handleSignUp} sx={Button3} disabled={loading}>
						<div>REGISTRARME</div>
					</Button>
				</Grid>
			</SignUpContainer>
		</Grow>
	);
};

export default SignUp;

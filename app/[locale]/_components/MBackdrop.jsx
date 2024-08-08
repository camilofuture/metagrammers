import { Backdrop } from "@mui/material";
import React, { lazy, Suspense } from "react";
import { PuffLoader } from "react-spinners";

const SignUp = lazy(() => import("./BackDropComps/Signup"));
const ChallengeGen = lazy(() => import("./BackDropComps/ChallengeGen"));
const CodeSend = lazy(() => import("./BackDropComps/CodeSend"));

const MBackdrop = ({ isOpen, close, space }) => {
	return (
		<Backdrop
			aria-hidden={false}
			open={isOpen}
			onClick={close}
			style={{
				zIndex: 99999999999,
				background: "#000000cd",
			}}
		>
			<Suspense
				fallback={
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							width: "100%",
							height: "100%",
						}}
					>
						<PuffLoader size={120} color="#2d314b" />
					</div>
				}
			>
				{space === "signup" && <SignUp close={close} />}
				{space === "challengegen" && <ChallengeGen close={close} />}
				{space === "codesend" && <CodeSend close={close} />}
			</Suspense>
		</Backdrop>
	);
};

export default MBackdrop;

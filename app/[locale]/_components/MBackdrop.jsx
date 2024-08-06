import { Backdrop } from "@mui/material";
import React, { lazy, Suspense } from "react";
import { PuffLoader } from "react-spinners";

const SignUp = lazy(() => import("../signup/page"));

const MBackdrop = ({ isOpen, close, space }) => {
	return (
		<Backdrop
			open={isOpen}
			onClick={close}
			style={{
				zIndex: 99999999999,
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
			</Suspense>
		</Backdrop>
	);
};

export default MBackdrop;

import React from "react";
import Scrollbars from "react-custom-scrollbars";

const MScroll = ({ children, style }) => {
	return (
		<Scrollbars
			universal
			autoHide
			autoHideTimeout={1000}
			autoHideDuration={200}
			renderView={(props) => (
				<div
					{...props}
					style={{
						position: "absolute",
						inset: 0,
						overflow: "scroll",
						marginRight: -9,
						marginBottom: -9,
						overflowX: "hidden",
					}}
				/>
			)}
			renderTrackHorizontal={(props) => (
				<div {...props} style={{ display: "none !important" }} className="track-horizontal" />
			)}
			style={{
				width: "100%",
				height: "calc(100vh - 92px)",
				maxHeight: "calc(100vh - 92px)",
				...style,
			}}
		>
			{children}
		</Scrollbars>
	);
};

export default MScroll;

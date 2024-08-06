import { globalText } from "@/app/font";
import { TextField } from "@mui/material";
import React from "react";

const MTextField = ({ value, placeholder, label, multiline, setValue, adornment, endAdornment, type }) => {
	return (
		<TextField
			multiline={multiline}
			maxRows={5}
			minRows={5}
			variant="outlined"
			sx={{
				fontWeight: 300,

				"& label": {
					fontSize: 18,
					color: "#FFFFFFAA",
					fontWeight: 600,
					marginTop: -10,
					fontFamily: `${globalText.style.fontFamily}`,
				},

				"& label.Mui-focused": {
					color: "#FFF",
				},

				"& .MuiOutlinedInput-root": {
					fontFamily: `${globalText.style.fontFamily}`,
					height: !multiline && 40,
					borderRadius: 3,
					background: "#00000030",
					color: "#fff",

					"& fieldset": {
						height: !multiline && 40,
						borderColor: "transparent",
						border: "none",
					},

					// Color del borde en modo hover
					"&:hover fieldset": {
						borderColor: "transparent",
						borderRadius: 3,
					},
					// Color del borde en modo focused
					"&.Mui-focused fieldset": {
						borderColor: "transparent",
						borderRadius: 3,
					},
				},

				"& .MuiInputLabel-shrink": {
					//color: theme.textField.color[xvariant].textColor,

					marginTop: -1.5, //2,
					marginLeft: -1,
					fontWeight: 600,
					//	fontSize: theme.textField.size[xsize].labelFontSize,
				},
			}}
			label={label}
			value={value}
			placeholder={placeholder}
			fullWidth
			onChange={(e) => {
				setValue ? setValue(e) : e.stopPropagation();
			}}
			InputLabelProps={{
				shrink: true,
			}}
			InputProps={{
				type: type,
				startAdornment: adornment && adornment,
				endAdornment: endAdornment && endAdornment,
			}}
		/>
	);
};

export default MTextField;

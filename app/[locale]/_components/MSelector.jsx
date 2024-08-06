import { useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import { MenuItem1, TextField1 } from "@/app/styles";
import { PlaceholderForMenuOption } from "@/app/styledComponents";

const MenuOptions = (displaymode, key1, key2, valueKey, options, disabled, open) => {
	if (displaymode === "text")
		return options.map((op) => (
			<MenuItem sx={MenuItem1} key={op} value={op} onClick={op.action ? op.action : () => {}}>
				{op}
			</MenuItem>
		));
	else if (displaymode === "onekey")
		return options.map((op, i) => (
			<MenuItem
				sx={MenuItem1}
				key={i}
				value={op[valueKey]}
				style={{ fontWeight: 300 }}
				onClick={op.action ? op.action : () => {}}
			>
				{op[key1]}
			</MenuItem>
		));
	else if (displaymode === "twokeys")
		return options.map((op, i) => (
			<MenuItem sx={MenuItem1} key={i} value={op[valueKey]} onClick={op.action ? op.action : () => {}}>
				{`${op[key1].toUpperCase()} - ${op[key2].toUpperCase()}`}
			</MenuItem>
		));
	else if (displaymode === "custom1")
		return options.map((op, i) => (
			<MenuItem
				sx={MenuItem1}
				key={i}
				value={op[valueKey]}
				style={{ fontWeight: 300 }}
				onClick={op.action ? op.action : () => {}}
			>
				{open ? (
					<>
						{op[key1]}
						<br />
						hola 1
						<br />
						hola 2
					</>
				) : (
					op[key1]
				)}
				<br />
			</MenuItem>
		));
	else if (displaymode === "keysymbol")
		return options.map((op, i) => (
			<MenuItem sx={MenuItem1} key={i} value={op[valueKey]} onClick={op.action ? op.action : () => {}}>
				<span style={{ marginRight: 5 }}>{`${op[key1].toUpperCase()}`}</span> {op[key2]}
			</MenuItem>
		));
};

const MSelector = ({
	params,
	disabled,
	setValue,
	value,
	error,
	helpertext,
	adornment,
	label,
	options,
	displaymode,
	key1,
	key2,
	valueKey,
	width,
	insidetextfield,
	id,
	placeholder,
	manyitems,
}) => {
	const [open, setOpen] = useState(false);

	return (
		<TextField
			sx={TextField1}
			placeholder={placeholder}
			id={id}
			name={id}
			{...params}
			disabled={disabled}
			width={width}
			select
			label={label}
			fullWidth
			key1={key1}
			key2={key2}
			value={value}
			manyitems={manyitems}
			onChange={(e) => {
				setValue ? setValue(e) : e.stopPropagation();
			}}
			SelectProps={{
				MenuProps: {
					sx: {
						maxWidth: width,
						maxHeight: 400,
						"& .MuiMenu-paper": { backgroundColor: "#101015", color: "#fff" },
					},
				},
				id: id + "select",
				onOpen: () => setOpen(true),
				onClose: () => setOpen(false),
			}}
			InputLabelProps={{
				htmlFor: id,
				shrink: true,
			}}
			variant="outlined"
			error={error}
			helperText={helpertext}
			InputProps={{
				startAdornment: adornment && adornment,
				id: id,
			}}
			insidetextfield={insidetextfield}
		>
			<MenuItem sx={MenuItem1} value="" disabled>
				<PlaceholderForMenuOption>{placeholder}</PlaceholderForMenuOption>
			</MenuItem>
			{MenuOptions(displaymode, key1, key2, valueKey, options, disabled, open)}
		</TextField>
	);
};

export default MSelector;

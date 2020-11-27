import React, { useContext, useState } from 'react';
import { Button, TextField, Grid, LinearProgress } from '@material-ui/core';
import emailjs from 'emailjs-com';
import AppContext from '../AppContext';

const styles = {
	form: {
		display: "flex",
		flexDirection: "column",
		minWidth: "70%",
	}
};

export default function Form() {
	const context = useContext(AppContext);

	const [openLinear, setOpenLinear] = useState(false);

	const [formData, setFormData] = useState({
		name: "",
		message: ""
	});

	const handleOnChange = (e) => {
		console.log(e.target.name, e.target.value)

		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setOpenLinear(true);

		emailjs.send('gmail', 'gmail_ID', formData, 'user_Sh3DIijVkb9WcVD8fiYIS')
			.then(res => {
				setOpenLinear(false);
				context.handleOpenSnackbar(true, 'success', '¡Thanks for email me! I `ll get in touch as soon as posible')
				setFormData({
					...formData,
					name: "",
					message: ""
				});
			})
			.catch(err => {
				setOpenLinear(false);
				context.handleOpenSnackbar(true, 'error', 'Failed. Please, try again');
			})
	}
	return (
		<Grid item xs={12} sm={6} xl={6} style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: 20, paddingTop: 20 }}>
			<form onSubmit={handleSubmit} style={styles.form}>
				<TextField
					name="name"
					onChange={handleOnChange}
					value={formData.name}
					label="Your email"
					fullWidth
					variant="filled"
					required
					style={{ backgroundColor: "#f5f5f5" }}
				/>
				<br />
				<TextField
					name="message"
					onChange={handleOnChange}
					value={formData.message}
					label="Leave me a message"
					multiline
					rows={8}
					fullWidth
					variant="filled"
					required
					color="primary"
					style={{ backgroundColor: "#f5f5f5" }}
				/>
				<br />
				<Button type="submit" variant="contained" fullWidth color="secondary">Send</Button>
				{
					openLinear ? (
						<LinearProgress color="secondary" />
					) : null
				}
			</form>
		</Grid>
	)
}
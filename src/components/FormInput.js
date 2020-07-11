import React, { Component } from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikField from "./FormikField";

const useStyles = makeStyles({
	root: {
		background:
			"linear-gradient(15deg, hsl(154, 59%, 51%) 30%, hsl(164, 59%, 60%) 80%)",
		borderRadius: 3,
		border: 0,
		color: "white",
		height: 48,
		padding: "0 30px",
		boxShadow: "0 3px 5px 2px hsla(154, 59%, 51%, 0.2)",
		marginTop: "0.5em",
	},
	label: {
		color: "white",
	},
});

const SignupSchema = Yup.object().shape({
	firstName: Yup.string().min(2, "Too short!").required("Cannot be empty!"),
	lastName: Yup.string().min(2, "Too short!").required("Cannot be empty!"),
	email: Yup.string().email("Invalid email!").required("Cannot be empty!"),
	password: Yup.string().required("Cannot be empty!"),
});

class FormInput extends Component {
	state = {
		test: false,
	};
	render() {
		return (
			<Formik
				initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
				onSubmit={() => {
					setTimeout(() => {
						alert("FREE TRIAL");
					}, 1000);
				}}
				validationSchema={SignupSchema}
			>
				{({ dirty, isValid, errors, touched, handleReset }) => {
					const classes = useStyles();
					return (
						<Form className="Form">
							<FormikField
								name="firstName"
								label="First Name"
								error={touched.firstName && errors.firstName !== undefined}
							/>
							<FormikField
								name="lastName"
								label="Last Name"
								error={touched.lastName && errors.lastName !== undefined}
							/>
							<FormikField
								name="email"
								label="Email Address"
								error={touched.email && errors.email !== undefined}
							/>
							<FormikField
								name="password"
								label="Password"
								type="password"
								error={touched.password && errors.password !== undefined}
							/>
							<Button
								variant="contained"
								disabled={!dirty || !isValid}
								type="submit"
								fullWidth
								onClick={() =>
									setTimeout(() => {
										handleReset();
									}, 1100)
								}
								classes={{
									root: classes.root,
									label: classes.label,
								}}
							>
								CLAIM YOUR FREE TRIAL
							</Button>
						</Form>
					);
				}}
			</Formik>
		);
	}
}

export default FormInput;

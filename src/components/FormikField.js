import React, { Component } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import { ErrorMessage, Field } from "formik";
import { ReactComponent as IconError } from "../icon-error.svg";

class FormikField extends Component {
	render() {
		return (
			<div>
				<Field
					as={TextField}
					variant="outlined"
					name={this.props.name}
					label={this.props.label}
					helperText={<ErrorMessage name={this.props.name} />}
					error={this.props.error}
					type={this.props.type}
					fullWidth
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								{this.props.error ? <IconError /> : ""}
							</InputAdornment>
						),
					}}
					style={{ margin: "0.5em 0", color: "red" }}
				/>
			</div>
		);
	}
}

export default FormikField;

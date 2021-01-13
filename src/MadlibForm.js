import React from "react";
import "./MadlibForm.css";

const MadlibForm = ({ handleChange, handleSubmit, formData, isVisible }) => {
	return (
		<form
			className="MadlibForm"
			onSubmit={handleSubmit}
			style={isVisible ? { display: "block" } : { display: "none" }}
		>
			<input
				id="noun"
				name="noun"
				type="text"
				placeholder="noun"
				onChange={handleChange}
				value={formData.noun}
			></input>
			<input
				id="noun2"
				name="noun2"
				type="text"
				placeholder="noun2"
				onChange={handleChange}
				value={formData.noun2}
			></input>
			<input
				id="adjective"
				name="adjective"
				type="text"
				placeholder="adjective"
				onChange={handleChange}
				value={formData.adjective}
			></input>
			<input
				id="color"
				name="color"
				type="text"
				placeholder="color"
				onChange={handleChange}
				value={formData.color}
			></input>
			<button>Get Story</button>
		</form>
	);
};

export default MadlibForm;

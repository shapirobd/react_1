import React, { useEffect } from "react";
import useToggle from "./hooks/useToggle";
import "./MadlibForm.css";

const MadlibForm = ({ handleChange, handleSubmit, formData, isVisible }) => {
	const [submitBtnEnabled, toggleSubmitBtnEnabled] = useToggle(false);

	// whenever formData is updated, check to see if all form values are filled. if not, keep/make submit button disabled - if so, keep/make submit button enabled
	useEffect(() => {
		for (let partOfSpeech in formData) {
			if (formData[partOfSpeech] === "") {
				if (submitBtnEnabled) {
					toggleSubmitBtnEnabled();
				}
				return;
			}
		}
		if (!submitBtnEnabled) {
			toggleSubmitBtnEnabled();
		}
	}, [formData]);

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
			{submitBtnEnabled && <button type="submit">Get Story</button>}
			{!submitBtnEnabled && (
				<button type="submit" disabled>
					Get Story
				</button>
			)}
		</form>
	);
};

export default MadlibForm;

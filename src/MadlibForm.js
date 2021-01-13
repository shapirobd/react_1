import React, { useEffect } from "react";
import MadlibStoryPicker from "./MadlibStoryPicker";
import useToggle from "./hooks/useToggle";
import uuid from "uuid";
import "./MadlibForm.css";

// component that renders a form for selecting a madlib story, filling in your chosen words to fill the story with, and submitting the form to display the final story
const MadlibForm = ({
	handleChange,
	handleSubmit,
	formData,
	isVisible,
	stories,
	setFormData,
	setStoryText,
	chosenStory,
	setChosenStory,
	storyIdx,
	setStoryIdx,
}) => {
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
	}, [formData, submitBtnEnabled, toggleSubmitBtnEnabled]);

	return (
		<form
			className="MadlibForm"
			onSubmit={handleSubmit}
			style={isVisible ? { display: "block" } : { display: "none" }}
		>
			<MadlibStoryPicker
				stories={stories}
				setFormData={setFormData}
				setStoryText={setStoryText}
				chosenStory={chosenStory}
				setChosenStory={setChosenStory}
				storyIdx={storyIdx}
				setStoryIdx={setStoryIdx}
			/>
			{Object.entries(formData).map(([key, value]) => {
				return (
					<input
						id={key}
						name={key}
						type="text"
						placeholder={key}
						onChange={handleChange}
						value={value}
						key={uuid()}
					></input>
				);
			})}
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

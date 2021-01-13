import React, { useState } from "react";
import MadlibForm from "./MadlibForm";
import MadlibStory from "./MadlibStory";
import useToggle from "./hooks/useToggle";
import "./Madlib.css";

const Madlib = () => {
	// possible madlib stories for a user to choose from
	const stories = [
		"There was a [color] [noun] who loved a [adjective] [noun2].",
		"The [noun] jumped over the [adjective] [noun2].",
	];

	// represents initial state of text inputs from the madlib form
	const INITIAL_FORM_STATE = {
		noun: "",
		noun2: "",
		adjective: "",
		color: "",
	};

	const INITIAL_STORY_STATE = stories[0];
	const [formData, setFormData] = useState(INITIAL_FORM_STATE);
	const [storyText, setStoryText] = useState(INITIAL_STORY_STATE);
	const [isFormVisible, toggleIsFormVisible] = useToggle(true);
	const [isStoryVisible, toggleIsStoryVisible] = useToggle(false);

	// updates formData (this is triggered whenver a text input is updated using the onChange property on the input)
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((data) => ({
			...data,
			[name]: value,
		}));
	};

	// places the words inputted by the user into their correct spot within the story string
	const fillInStory = () => {
		let newStoryText = storyText;
		for (let partOfSpeech in formData) {
			if (newStoryText.includes(`${partOfSpeech}`)) {
				const word = formData[partOfSpeech];
				newStoryText = newStoryText.replace(`[${partOfSpeech}]`, word);
			}
		}
		setStoryText((storyText) => newStoryText);
	};

	// 1. fills in the madlib story with the words inputted by the user,
	// 2. toggles isFormVisible (if submitting form, toggle it to false. if resetting game, toggle it to true)
	// 3. toggles isStoryVisible (if submitting form, toggle it to true. if resetting game, toggle it to false)
	// 4. reset form data to initial empty state
	const handleSubmit = (e) => {
		e.preventDefault();
		fillInStory();
		toggleIsFormVisible();
		toggleIsStoryVisible();
		setFormData((formData) => INITIAL_FORM_STATE);
	};

	// if game is being reset, perform all actions from handleSubmit AS WELL AS resetting storyText back to its initial state
	const handleReset = (e) => {
		handleSubmit(e);
		setStoryText(INITIAL_STORY_STATE);
	};

	return (
		<div className="Madlib">
			<h1>Madlibs!</h1>
			<MadlibForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				formData={formData}
				isVisible={isFormVisible}
			/>
			<MadlibStory
				handleReset={handleReset}
				storyText={storyText}
				isVisible={isStoryVisible}
			/>
		</div>
	);
};

export default Madlib;

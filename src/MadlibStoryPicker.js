import React, { useEffect, useState } from "react";
import $ from "jquery";
import uuid from "uuid";

const MadlibStoryPicker = ({
	stories,
	setFormData,
	setStoryText,
	chosenStory,
	setChosenStory,
	storyIdx,
	setStoryIdx,
}) => {
	// represents initial state of text inputs from the madlib form
	const MAX_FORM_VALUES = {
		noun: "",
		noun2: "",
		noun3: "",
		adjective: "",
		adjective2: "",
		adjective3: "",
		verb: "",
		verb2: "",
		verb3: "",
		adverb: "",
		adverb2: "",
		adverb3: "",
		color: "",
		color2: "",
		color3: "",
	};
	const handleStorySwitch = (e) => {
		if ($("#stories-select").val()) {
			setStoryIdx((storyIdx) => $("#stories-select").val());
		}
	};

	useEffect(() => {
		setChosenStory((chosenStory) => stories[storyIdx]);
	}, [storyIdx]);

	useEffect(() => {
		console.log(chosenStory);
		const initialFormData = {};
		for (let partOfSpeech in MAX_FORM_VALUES) {
			if (chosenStory.includes(`${partOfSpeech}`)) {
				initialFormData[partOfSpeech] = "";
			}
		}
		setFormData((formData) => initialFormData);
		setStoryText((storyText) => chosenStory);
	}, [chosenStory]);

	return (
		<div className="StoryPicker">
			<select
				name="stories-select"
				id="stories-select"
				onChange={handleStorySwitch}
				value={storyIdx}
			>
				{stories.map((story) => {
					let idx = stories.indexOf(story);
					let string = `Story #${idx + 1}`;
					return (
						<option value={idx} key={uuid()}>
							{string}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default MadlibStoryPicker;

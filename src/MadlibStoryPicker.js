import React from "react";
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
	// whenever a different button is selected from the select element, updated storyIdx to match the selected story
	const handleStorySwitch = (e) => {
		if ($("#stories-select").val()) {
			setStoryIdx((storyIdx) => $("#stories-select").val());
		}
	};

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

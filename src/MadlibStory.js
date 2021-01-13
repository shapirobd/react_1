import React from "react";

// component that renders the text that should appear when you have submitted the madlib form
const MadlibStory = ({ handleReset, storyText, isVisible }) => {
	return (
		<div style={isVisible ? { display: "block" } : { display: "none" }}>
			<p>{storyText}</p>
			<button onClick={handleReset}>Reset</button>
		</div>
	);
};

export default MadlibStory;

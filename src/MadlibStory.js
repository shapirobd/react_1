import React from "react";

const MadlibStory = ({ handleReset, storyText, isVisible }) => {
	return (
		<div style={isVisible ? { display: "block" } : { display: "none" }}>
			<p>{storyText}</p>
			<button onClick={handleReset}>Reset</button>
		</div>
	);
};

export default MadlibStory;

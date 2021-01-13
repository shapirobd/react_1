import React, { useState } from "react";

const useToggle = (initialValue = true) => {
	const [state, setState] = useState(initialValue);

	const toggleState = () => {
		setState((state) => !state);
	};

	return [state, toggleState];
};

export default useToggle;

### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    - React is a front-end frame work.
    - When to use: when you are building an application that implements reusable components
    - 	Why use: it can make creating apps much simpler

- What is Babel?
	- Babel is a JavaScript transpiler that converts alternate forms of JavaScript (e.g., JSX) into regular JavaScript.

- What is JSX?
    - JavaScript XML - makes it easier to write/add/return HTML within React.

- How is a Component created in React?
	- We can creating functional components using JSX. For example, if we are creating a card component, we import react, create a function called Card that uses JSX to return the html for a component, and then export Card to be so it can be used by a different file.

- What are some difference between state and props?
	- Key difference - props are immutable while state can (and is designed to) change
	- Props are moved down while state is typically moved up

- What does "downward data flow" refer to in React?
	- We can continue to pass down props further and further down from component to component.

- What is a controlled component?
	- A component whose state is controlled by React state.

- What is an uncontrolled component?
	- A component that maintains its own state without using React state.

- What is the purpose of the `key` prop when rendering a list of components?
	- The 'key' prop essentially gives each component in the list a unique id.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
	- Items may be added, removed or moved around within an array, causing the key prop to become a poor source of reference.

- Describe useEffect.  What use cases is it used for in React components?
	- useEffect is a hook built in to React that allows us to work with side-effects such as starting a timer, or some sort of triggered event. Its first argument is a callback that performs the side-effect we want to take place. Its second argument is an array containing dependencies, which are values/variables that, when they change, are the only cause for the side-effect to take place (other than perhaps the initial rendering of the page). 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
	- useRef allows you to store a value within the component that will persist through re-renders. A change to a ref value does not cause a rerender.

- When would you use a ref? When wouldn't you use one?
	- You would want to use a ref for a value that you want to persist through re-renders and that you can't find a way to presist without useRef.
	- You wouldn't want to use a ref for a vlue that will frequently be changing, such as the time on a timer.
	
- What is a custom hook in React? When would you want to write one?
	- A custom hook is a mechanism to reuse stateful logic. You would want to use a custom hook when you find you are performing similar stateful logic in different functions/components (e.g., flipping a card over and toggling a switch both require similar logic, so we could make a custom hook that works for both.)

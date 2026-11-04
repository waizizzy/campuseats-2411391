# Week 1 reflection

Answer each question in 1–3 sentences, in your own words.

1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?

Imperative UI development means manually telling the browser how to create, update, and modify elements in the DOM. Declarative UI development in React means describing how the UI should look based on the current data or state, and React handles the updates.

2. Why must a component name start with a capital letter?

React uses capital letters to distinguish custom components from built-in HTML elements. For example, <Header /> is treated as a React component, while <header> is treated as a normal HTML element.

3. What does a fragment <>...</> do, and why not just use a <div>?

A fragment allows us to group multiple elements without adding an extra DOM element. It helps keep the HTML structure cleaner when we don't need an additional <div> wrapper.

4. Name one benefit of splitting the UI into small components.

Splitting the UI into smaller components makes the code easier to maintain and reuse. For example, we can create a VendorCard component and reuse it to display multiple vendors without repeating the same code.

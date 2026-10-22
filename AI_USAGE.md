# Week 1 reflection

1. What is the difference between building a UI imperatively (plain DOM code) and
   declaratively (React)?

Imperative UI means we manually tell the browser how to change the UI using DOM code. Declarative UI in React means we describe what the UI should look like, and React updates it when the data changes.

2. Why must a component name start with a capital letter?

A React component must start with a capital letter so React can recognize it as a custom component instead of a normal HTML element.

3. What does a fragment <>...</> do, and why not just use a <div>?

A fragment allows us to group multiple elements without adding an extra DOM element. It keeps the HTML structure cleaner than using an unnecessary <div>.

4. Name one benefit of splitting the UI into small components.

Splitting the UI into small components makes the code easier to read, maintain, reuse, and debug.

## Week 3 — Forms, Lifted State and Effects

- **Tools used:** ChatGPT and VS Code.
- **What I asked:** I asked for help converting vendor data into JSON, fetching it with `useEffect`, implementing a cart with quantity controls, creating a checkout form with validation, and adding a category filter.
- **What I kept or changed:** I used the suggestions as a guide and adapted the code to my existing CampusEats project. I kept the vendor cards and menu layout, added quantity-based cart lines, implemented checkout validation, and added category buttons that filter the menu.
- **One thing the AI got wrong:** The initial `CartItem.jsx` code used CSS class names that did not match the supplied `index.css`. I corrected the class names to match the starter stylesheet.

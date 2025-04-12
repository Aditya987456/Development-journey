## Custom hook

Custom hooks in React are a powerful feature that allows you to encapsulate and reuse stateful logic across different components. They are essentially JavaScript functions that can use React hooks internally. By creating custom hooks, you can abstract away complex logic, making your components cleaner and more manageable.

#### Why Use Custom Hooks?
* Reusability: If you find yourself using the same logic in multiple components, a custom hook can help you avoid code duplication.

* Separation of Concerns: They allow you to separate business logic from UI logic, making your components more focused and easier to understand.


### Common Custom Hooks-
* useFetch()
* useFetch with re-fetching
* usePrev
* uselsOnline
* useDebounce


##

## ? when to use component vs custom hooks?

* Is this focused on UI rendering? If yes, use a React Component.

* Is this abstracting reusable logic? If yes, use a Custom Hook.



# 



# Custom Hook vs React Component

* Custom Hooks: These are functions that start with use (e.g., useFetch, useState, useEffect) and are not meant to be rendered as components. They are meant to encapsulate reusable logic and should only be called within React functional components or other custom hooks.

* React Components: These are functions (or classes) that return JSX and are intended to be rendered, like < MyComponent />.

# Custom hook

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


<br>
<br>




## Custom Hook vs React Component

* Custom Hooks: These are functions that start with use (e.g., useFetch, useState, useEffect) and are not meant to be rendered as components. They are meant to encapsulate reusable logic and should only be called within React functional components or other custom hooks.

* React Components: These are functions (or classes) that return JSX and are intended to be rendered, like < MyComponent />.


<br>
<br>
<br>



>### useFetch re-fetching - 

**Why setInterval Works Even When the Dependency Array is Empty**

setInterval is Native JavaScript:

* setInterval is not dependent on React or its lifecycle. It's a native JavaScript function that sets up a timer to repeatedly execute a callback function (getfetchdata() in this case) after a specified interval.

* Once the interval is created, it will continue running every retryTimeout seconds until it is cleared using clearInterval.

<br>
<br>
<br>

>### useDebounce hook- 

* The delay (e.g., 500ms) in the useDebounce hook ensures the backend API request is sent only after the user pauses typing.

* React's useEffect monitors changes to debouncedValue and executes the API call logic accordingly.

* This debounce mechanism optimizes performance and ensures better resource management both in the frontend and backend.


---
<br>

>usePrev -> important article... <br>
[usePrev hook better ](https://giacomocerquone.com/blog/life-death-useprevious-hook/)


> [hooks explore](https://usehooks.com/)








<br>
<br>
<br>
<br>

 ---

>## useIsOnline hook




```import { useEffect, useState } from 'react';

const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return isOnline;
};

export default useIsOnline;
```

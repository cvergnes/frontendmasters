# React

## React docs
React consider logic is coupled with UI. Instead of separating markup and logic in separate files, React use units called components that contain both.  
React doesn't require JSX, but most people find it useful as a visual aid.  
You can put any valid js expression inside curly braces in JSX. 
It is recommended to wrap jsx expressions with parentheses to avoid the automatic semicolon insertion.  
Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names. For example, class becomes className in JSX, and tabindex becomes tabIndex.  
JSX prevent injection attacks by escaping any value embedded in JSX. 

## Complete intro to React, v7
Frontend masters

## Renderer
Code in the renderer should be fast. It will be run at each rendering.  
No reference possible from a child to its parent in React.  

## npm, prettier and eslint
npm : for package management  
prettier : for formattting  
eslint : code analyzer  
parcel : idem webpack but without config  
```
npm init -y
npx prettier --write \"src/**/*.{js,jsx}\"
npx eslint src/App.js
parcel build .\src\index.html
npx serve dist
```

## jsx
import React is done by default when there is a jsx  
Class is called className in jsx because ther is a name collision with class in js  

In JSX you can use only js expression and cant use js statements.  

## React dev tools
\$r in the console give all properties of the last item selected  

## hooks

### useEffect
useEffect for side effect. It does something after render. 
React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. By default, it runs both after the first render and after every update
if useEffect( ..., []); it will be run only once  

### useParams and useState
useParams for Router params  
useState for state. React will preserve this state between re-renders  
Component re render each time you call setState  

## props
All React components must act like pure functions with respect to their props.  
“props” (which stands for properties) are object argument with data

## lifecycle
When component is rendered to the DOM for the first time. This is called “mounting” in React.  
When DOM produced by the component is removed. This is called “unmounting” in React.  
Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.  

To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument.    
When you call setState(), React merges the object you provide into the current state.  
A good rule of thumb is that elements inside the map() call need keys.  

## higher order component
Concretely, a higher-order component is a function that takes a component and returns a new component.  

## Class

## Error boundaries
Error mgt not possible with hooks. 

## Context
createContext is a function that returns an object with two React components in it: a Provider and a Consumer. A Provider is how you scope where a context goes. A context will only be available inside of the Provider. You only need to do this once.
In a separate file, context creation :  
```
const ThemeContext = createContext(["green", () => {}]);
```
Top of App, provider creation
```
// top of App function body
const theme = useState("darkblue");

// wrap the rest of the app
<ThemeContext.Provider value={theme}>[…]</ThemeContext.Provider>;
```

Set and use theme :  
```
// top of SearchParams function body
const [theme, setTheme] = useContext(ThemeContext);

<button style={{ backgroundColor: theme }}>Submit</button>;

// below the breed dropdown
<label htmlFor="theme">
  Theme
  <select
    value={theme}
    onChange={(e) => setTheme(e.target.value)}
    onBlur={(e) => setTheme(e.target.value)}
  >
    <option value="peru">Peru</option>
    <option value="darkblue">Dark Blue</option>
    <option value="chartreuse">Chartreuse</option>
    <option value="mediumorchid">Medium Orchid</option>
  </select>
</label>;
```

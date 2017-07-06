This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Why the app?

This is a simple application to highlight events in ReactJs. The event is passed down from the parent to the child as a prop. 

## What the app does

In the Parent component, the child component is called. It takes in the arguement onEvent which calls the perfomEvent function.

This function is called on the Child Component as a prop and passed in the onClick function i.e the onclick function calls the onEvent function which in turn calls the perfomEvent function.

// eslint-disable-next-line no-unused-vars
import React from 'react';

const Blog = () => {
  return (
    <div className='max-w mt-28 mb-20'>
      <div className='mt-4'>
        <h1 className='text-4xl font-bold mb-4'>Differences between uncontrolled and controlled components</h1>
        <p>Controlled and uncontrolled components are terms used to describe React components that render HTML form elements. The primary difference between them is how they handle their value.</p>
        <p>A <span className='font-bold'>controlled component</span> is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component controls it by handling the callback and managing its own state and passing the new values as props to the controlled component</p>
        <p>A <span className='font-bold'>uncontrolled component</span> is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML</p>
      </div>
      <div className='mt-8'>
        <h1 className='text-4xl font-bold mb-4'>Validate React props using PropTypes</h1>
        <p>React props are read-only attributes that are passed from a parent component to a child component. They can be used to send data such as numbers, strings, functions, objects, and arrays between components. However, if a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.</p>
        <p>To avoid this, you can use PropTypes to validate the type and structure of the props that your React components receive. PropTypes is a utility that exports a range of validators for configuring type definitions. You can use it to specify the required props, the default props, and the custom validators for your components</p>
        <p>To use PropTypes in React, you need to install the prop-types package using npm</p>
        <p>Then you need to define the propTypes property for your component</p>
      </div>
      <div className='mt-8'>
        <h1 className='text-4xl font-bold mb-4'>Difference between nodejs and express js</h1>
        <p>Node.js and Express.js are not exactly comparable, as they are different in terms of level of abstraction</p>
        <p><span className='font-bold'>Node.js</span> is a run-time environment for executing JavaScript code outside of a browser. It allows you to write and run server-side, event-driven, input-output applications using JavaScript123. Node.js is built on Google’s V8 engine and provides a set of core modules for common tasks such as file system access, networking, cryptography, etc</p>
        <p><span className='font-bold'>Express.js</span> is a framework for Node.js that simplifies its web server functionality and adds helpful new features. It makes it easier to organize your application’s functionality with middleware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTML pages with various templating engines123. Express.js is built on top of Node.js and uses its core modules and features</p>
      </div>
      <div className='mt-8'>
        <h1 className='text-4xl font-bold mb-4'>What is a custom hook, and why will you create a custom hook</h1>
        <p>A <span className='font-bold'>custom hook</span> is a function that starts with the word <span className='font-bold'>“use”</span> and may call other hooks. A custom hook allows you to reuse logic between components without repeating code or adding complexity</p>
        <p>You may create a custom hook when you have component logic that needs to be used by multiple components, or when you want to extract some complex or stateful logic from a component. For example, you may create a custom hook for fetching data, accessing local storage, managing authentication, or connecting to a chat room</p>
        <p>A custom hook follows the same rules as the built-in hooks, such as useState and useEffect. That means you can only call a custom hook at the top level of a function component or another custom hook, and not inside loops, conditions, or nested functions</p>
      </div>
    </div>
  );
};

export default Blog;

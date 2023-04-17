import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h1 className='blog'>Some Importance Question And Answer</h1>
            <div className='qa-container'>
                <h2>1.What is Context API? And When we use it?</h2>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p> <br />
                <p>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p> <br /><br />

                <h2>2.What is a custom hook? </h2>
                <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem. But what if there is no such library with hooks that can be used? This problem is solved by using custom React JS hooks.</p> <br /><br />

                <h2>3.What is useRef?</h2>
                <p>A hook is a special function which enables one use state and other React features without writing ES6 class components which are generally considered difficult to understand, use and master.
useRef hook is part of the React Hooks API. <br /> It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined. The code below illustrates how to invoke the useRef hook in functional components.</p> <br /><br />
                <h2>3.What is useMemo?</h2>
                <p>The useMemo is a hook used in the functional component of react that returns a memoized value. In Computer Science, memoization is a concept used in general when we don’t need to recompute the function with a given argument for the next time as it returns the cached result. <br /> A memoized function remembers the results of output for a given set of inputs. For example, if there is a function to add two numbers, and we give the parameter as 1 and 2 for the first time the function will add these two numbers and return 3, but if the same inputs come again then we will return the cached value i.e 3 and not compute with the add function again. In react also, we use this concept, whenever in the React component, the state and props do not change the component and the component does not re-render, it shows the same output. The useMemo hook is used to improve performance in our React application.</p>
            </div>
        </div>
    );
};

export default Blog;
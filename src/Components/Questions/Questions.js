import React from "react";

const Questions = () => {
  return (
    <div>
      <div className="questions-main p-8  md:px-8 lg:px-10 xl:px-28 ">
        <h1 className="font-mono font-bold text-xl mb-6">How react works?</h1>
        <p className="font-mono font-bold">
          React uses a declarative paradigm that makes it easier to reason about
          your application and aims to be both efficient and flexible. It
          designs simple views for each state in your application, and React
          will efficiently update and render just the right component when your
          data changes.
        </p>

        <h1 className="font-mono font-bold text-xl mb-6 mt-6">
          Difference between props and state in react
        </h1>
        <p className="font-mono font-bold">
          State is the local state of the component which cannot be accessed and
          modified outside of the component. It's equivalent to local variables
          in a function. Props, on the other hand, make components reusable by
          giving components the ability to receive data from their parent
          component in the form of props
        </p>

        <h1 className="font-mono font-bold text-xl mb-6 mt-6">
          uses of useeffect in react
        </h1>
        <p className="font-mono font-bold">
          By using this Hook, you tell React that your component needs to do
          something after render. React will remember the function you passed
          (we'll refer to it as our “effect”), and call it later after
          performing the DOM updates.
        </p>
      </div>
    </div>
  );
};

export default Questions;

import React from "react";

const FirstHome = props => {
  return (
    <div>
      <p>
        that's is the header is the place will be write a introduction of this
        application, is the place where the history begin you know a good story
        begin by the header
      </p>
      <p>My header is a {props.header}</p>
    </div>
  );
};

export default FirstHome;

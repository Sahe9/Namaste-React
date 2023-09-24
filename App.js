import React from "react";
import ReactDOM from "react-dom";


// JSX - HTML like syntax
const Title = () => (
<h1 className="head" tabIndex="5">
Namaste using JSK </h1>
);
const data = 1000;

const fn  =  () => true;
    const HeadingComponent = () => (<div id="container"> 
    <h1 className="head" tabIndex="5" > 
    namaste using t  {data};
    </h1>
    <Title/>
    <h1 className="heading">namaste react functional component</h1>
    </div>
   
);
const heading = React.createElement("h1", {id: "heading"}, "Namaste react");
const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
  

// react components 
//class based component - OLD
//Functional component - NEW 
// react function compnent
// component composition 
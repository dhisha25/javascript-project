import nature from "../images/nature.jpg";
import dog from "../images/dog.jpg";
import dog1 from "../images/dog1.jpg";
import "../project/project.css";


function Project () {
    return (
<div>
    <p className="java">javascript</p>
    <p className="java1">javascript is a programming language</p>
    <h1>hi good morning</h1>
    <h2>have a nice day</h2>
<div>

     <img className="nature" src={nature}></img>
     <img className="dog" src={dog}></img>
    <picture> <img className="dog1" src={dog1}></img>
    </picture>
</div>
</div>
    );
}
export default Project;
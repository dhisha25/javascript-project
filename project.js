import nature from "../images/nature.jpg";
import dog from "../images/dog.jpg";
import dog1 from "../images/dog1.jpg";
function Project () {
    return (
<div>
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
import nature from "../src/images/nature.jpg";
import dog from "../src/images/dog.jpg";
import dog1 from "../src/images/dog1.jpg";
function Project () {
    return (
<div>

     <img className="nature" src={nature}></img>
     <img className="dog" src={dog}></img>
    <picture> <img className="dog1" src={dog1}></img>
    </picture>

</div>
    );
}
export default Project;
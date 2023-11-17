import icon from "../images/react.jpg"
import "../project/dhisha.css";
function Vaishal (){
    const day=["Monday", " Tuesday", " wednesday", " Thursday", " Friday", " saturday", " Sunday"]
    return(
        <div>
            <img className="java2" src={icon}></img>
            <h2 className="java3">React js</h2>
            <a href="/project">React is a programming language</a>
            {day.length>0 &&
    <h1>total {day.length} days</h1>}
    
    <h2 className="blue">{day.map((a)=>(a))}</h2>
            




        </div>
    )
}
export default Vaishal;
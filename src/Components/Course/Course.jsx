import react from "react";
import './Course.css';


export default function Course({ img, name }) {
    return (
        <div className="card" style={{ width: '200px' }}>
            <img className="card-img-top" src={img} alt="Card image" />
            <hr />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, suscipit!</p>
                <a href="#" className="btn btn-primary"><button>Buy</button></a>
            </div>
        </div>
    );
}   
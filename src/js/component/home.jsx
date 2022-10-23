import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import {Card, FirstCard, Counter} from "./Card.jsx"

//create your first component
const Home = () => {
	return (<div className="container bg-dark">
			<Card />
		</div>
	
	);
};

export default Home;

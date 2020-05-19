import React from "react";
import Beer from "./Beer";
import "./Store.css";

const Store = ({ beers, addToOrder }) => {
	return (
		<div className="store">
			<div className="container">
				{Object.keys(beers).map((key) => (
					<Beer
						key={key}
						index={key}
						details={beers[key]}
						addToOrder={addToOrder}
					/>
				))}
			</div>
		</div>
	);
};

export default Store;

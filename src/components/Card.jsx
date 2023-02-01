import star from "../assets/star.png";


function Card(props) {
	let badgeText;
	if(props.openSpots === 0){
		badgeText="SOLD OUT";
	}else if(props.location === "Online"){
		badgeText="ONLINE";
	}else if (props.location !== "Online") {
        badgeText = "OFFLINE"
    }
    
	return(
		<div className="card--section">
			{/*{props.openSpots === 0 ? <div className="card--badge">SOLD OUT</div> : <div className="card--badge">ONLINE</div>}*/}
			{badgeText && <div className="card--badge">{badgeText}</div>}
			<img src={`./assets/${props.coverImg}`} alt="card-image" className="card--img"/>
			<div className="card--rate">
				<img src={star} alt="card--img--star" className="card--img--star"/>
	            <span>{props.stats.rating}</span>
	            <span className="gray">({props.stats.reviewCount}) • </span>
	            <span className="gray">{props.location}</span>
			</div>
			<span className="card--details">{props.title}</span>
			<p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
		</div>
	)
}

export default Card;
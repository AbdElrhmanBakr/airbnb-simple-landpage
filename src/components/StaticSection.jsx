import photogrid from "../assets/photo-grid.png";

function StaticSection() {
	return(
		<section className="static--section">
			<img src={photogrid} className="static--img"/>
			<h1 className="static--header">Online Experiences</h1>
			<p className="static--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
		</section>
	)
}

export default StaticSection;
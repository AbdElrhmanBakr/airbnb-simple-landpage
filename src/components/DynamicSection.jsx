import Card from './Card'
import data from './data'

function DynamicSection() {
    	const cards = data.map((itemsObj) => {
	        return (
	            <Card 
	            	key={itemsObj.id}
					//=> use in Card => props.
	            	{...itemsObj}

	            	//=> use in Card => props.
	            	// img={item.coverImg}   
	                // rating={item.stats.rating}
	                // reviewCount={item.stats.reviewCount}
	                // location={item.location}
	                // title={item.title}
	                // price={item.price}
	                // openSpots={item.openSpots}

	                //=> use in Card => props.itemsObjProps.
	                // itemsObjProps={itemsObj}
	            />
			)
		})
	return(
		<section className="dynamic--section">
			{cards}
		</section>
	)
}

export default DynamicSection;
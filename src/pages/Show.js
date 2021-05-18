function Show(props) {
    const id = props.match.params.id 
    const cheeses = props.cheeses
    const cheese = cheeses.find(c => c.id === id)

    return (
        <div className="cheese">
            <h1>{cheese.name}</h1>
            <h2>{cheese.countryOfOrigin}</h2>
            <img src={cheese.image} alt={cheese.name} />
        </div>
    )
}

export default Show
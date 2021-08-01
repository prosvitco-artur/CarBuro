const NessesaryPropduct = (props) => {
    return (
        <div className="nessesary container">
            <h2>Nessesary for every vehicle</h2>
            <div className="grid grid_columns_6 grid_gap_30 text_center rubik_regular">
                <div className="nessesary_item box_shadow_4 box_shadow_hover size_14">
                    <img src="img/nessesary/spark-plugs.png" alt="spark-plugs" />
                    <p>Spark plugs</p>
                </div>
                <div className="nessesary_item box_shadow_4 box_shadow_hover size_14">
                    <img src="img/nessesary/oil-filters.png" alt="oil-filters" />
                    <p>Oil filters</p>
                </div>
                <div className="nessesary_item box_shadow_4 box_shadow_hover size_14">
                    <img src="img/nessesary/car-bulbs.png" alt="car-bulbs" />
                    <p>Car bulbs</p>
                </div>
                <div className="nessesary_item box_shadow_4 box_shadow_hover size_14">
                    <img src="img/nessesary/engine-oils.png" alt="engine-oils" />
                    <p>Engine oils</p>
                </div>
                <div className="nessesary_item box_shadow_4 box_shadow_hover size_14">
                    <img src="img/nessesary/parts-for-service.png" alt="parts-for-service" />
                    <p>Parts for service</p>
                </div>
                <div className="nessesary_item box_shadow_4 box_shadow_hover size_14">
                    <img src="img/nessesary/brake-pads.png" alt="brake-pads" />
                    <p>Brake pads</p>
                </div>
            </div>
        </div>
    )
}

export default NessesaryPropduct;
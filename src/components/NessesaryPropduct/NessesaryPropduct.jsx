import React from "react";
import SparkPlugs from '../../common/img/nessesary/spark-plugs.png';
import CarBulbs from '../../common/img/nessesary/car-bulbs.png';
import OilFilters from '../../common/img/nessesary/oil-filters.png';
import EngineOils from '../../common/img/nessesary/engine-oils.png';
import PartsService from '../../common/img/nessesary/parts-for-service.png';
import BrakePads from '../../common/img/nessesary/brake-pads.png';

const NecessaryProducts = (props) => {
    return (
        <div className="nessesary container">
            <h2>Nessesary for every vehicle</h2>
            <div className="grid grid_columns_6 grid_gap_30 text_center rubik_regular">
                <div className="nessesary_item box_shadow_4 box_shadow_hover size_14">
                    <img src={SparkPlugs} alt="spark-plugs"/>
                    <p>Spark plugs</p>
                </div>
                <div className="nessesary_item box_shadow_4 box_shadow_hover size_14">
                    <img src={OilFilters} alt="oil-filters"/>
                    <p>Oil filters</p>
                </div>
                <div className="nessesary_item box_shadow_4 box_shadow_hover size_14">
                    <img src={CarBulbs} alt="car-bulbs"/>
                    <p>Car bulbs</p>
                </div>
                <div className="nessesary_item box_shadow_4 box_shadow_hover size_14">
                    <img src={EngineOils} alt="engine-oils"/>
                    <p>Engine oils</p>
                </div>
                <div className="nessesary_item box_shadow_4 box_shadow_hover size_14">
                    <img src={PartsService} alt="parts-for-service"/>
                    <p>Parts for service</p>
                </div>
                <div className="nessesary_item box_shadow_4 box_shadow_hover size_14">
                    <img src={BrakePads} alt="brake-pads"/>
                    <p>Brake pads</p>
                </div>
            </div>
        </div>
    )
}

export default NecessaryProducts;
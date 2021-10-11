import { NavLink } from 'react-router-dom';
import SparkPlugs from '../../common/img/nessesary/spark-plugs.png';

const CatalogCart = (props) => {
    return (
        <NavLink to="/catalog/test">
            <div className="nessesary_item box_shadow_4 box_shadow_hover size_14">
                <img src={props.image} alt="spark-plugs" />
                <p>{props.name}</p>
            </div>
        </NavLink>
    )
}

export default CatalogCart;
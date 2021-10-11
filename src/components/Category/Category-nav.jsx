import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProductCategory } from "../../redux/ProductReduser";

const CategoryNav = (props) => {
    return (
        <div>
            <div className="container category_menu rubik_regular background_white">
                {Object.keys(props.categories).map(key => <CategoryTitle key={key} name={key} />)}
            </div>
            <div className="container cat-list grid grid_columns_6 grid_gap_30_20 rubik_regular">
                <div className="item">
                    <img src="https://docs.google.com/presentation/d/1zZIJnYu-416-WB2HC27PtAa80-ha_LZh-48Oo-fK8eg/edit#slide=id.p1" alt={"Mirrors" + "test"} />
                    <p>Mirrors</p>
                </div>
            </div>
        </div>
    )
}

let CategoryTitle = (props) => {
    return (<NavLink to="/catalog">
        <span className="pointer_red">{props.name}</span>
    </NavLink>)
}
let mapStateToProps = (state) => {
    return { categories: state.product.category }
}

export default connect(mapStateToProps, null)(CategoryNav)
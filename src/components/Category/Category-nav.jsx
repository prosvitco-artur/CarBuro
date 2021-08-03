import {connect} from "react-redux";
import Mirror from  "../../common/img/category/Mirrors.jpg"

const CategoryNav = (props) => {
    console.log(props.categories.Interior);
    return (
        <div>
            <div className="container category_menu rubik_regular background_white">
                {Object.keys(props.categories).map(key => <CategoryTitle key={key} name={key}/>)}
            </div>
            <div className="container cat-list grid grid_columns_6 grid_gap_30_20 rubik_regular">
                <div className="item">
                    <img src={Mirror}/>
                    <p>Mirrors</p>
                </div>
            </div>
        </div>
    )
}

let CategoryTitle = (props) => {
    return <span className="pointer_red">{props.name}</span>
}
let mapStateToProps = (state) => {
    return {categories: state.product.category}
}

export default connect(mapStateToProps, null)(CategoryNav)
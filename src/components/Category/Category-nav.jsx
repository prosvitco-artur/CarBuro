import {connect} from "react-redux";

const CategoryNav = (props) => {
    debugger
    return (
        <div className="container category_menu rubik_regular background_white">
            {Object.keys(props.categories).map( key => <CategoryTitle key={key} name={key} /> )}
        </div>
    )
}

let CategoryTitle = (props) => {
    return <span className="pointer_red">{props.name}</span>
}
let mapStateToProps = (state) => {
    return {categories: state.product.category}
}

export default connect(mapStateToProps,null )(CategoryNav)
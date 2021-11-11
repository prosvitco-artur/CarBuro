import { ReactComponent as AutoBurotLogo } from '../../common/img/icon/Logo.svg';
import { ReactComponent as MenuLink } from '../../common/img/icon/menu.svg';
import { ReactComponent as SearchButton } from '../../common/img/icon/search.svg';
import { ReactComponent as SignInIcon } from '../../common/img/icon/signInIcon.svg';
import { ReactComponent as GarageIcon } from '../../common/img/icon/GarageIcon.svg';
import { ReactComponent as LikeItIcon } from '../../common/img/icon/LikeItProduct.svg';
import { ReactComponent as CartIcon } from '../../common/img/icon/CartIcon.svg';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setCurrentModal } from '../../redux/GlobalReducer';

const Sidebar = (props) => {

    const setSignInPopup = (type) => {
        props.setCurrentModal(type);
    }

    return (
        <div className="container side-bar">
            <div className="float_left">
                <NavLink to="/home">
                    <AutoBurotLogo />
                </NavLink>
            </div>
            <div className="float_left site_search">
                <button
                    className="background_white border_red radius_50 width_50 height_50 left top z_index_5 background_white">
                    <MenuLink />
                </button>
                <input className="box_shadow_4 radius_50 height_50 input" type="text"
                    placeholder="Search by part name, code, brand or vehicle" />
                <button className="background_red border_red radius_50 width_50 height_50 right top z_index_5">
                    <SearchButton />
                </button>
            </div>
            <div className="float_left account_bar text_center">
                <span onClick={() => setSignInPopup('login')} className="rubik_regular size_14 list pointer_red">
                    <SignInIcon />
                    <p>Sign in</p>
                </span>

                <NavLink to={'/'} className="rubik_regular size_14 list pointer_red">
                    <GarageIcon />
                    <p>Garage</p>
                </NavLink>

                <NavLink to={'/'} className="rubik_regular size_14 list pointer_red">
                    <LikeItIcon />
                    <p>$3042</p>
                </NavLink>
                <NavLink to={'/'} className="rubik_regular size_14 list pointer_red">
                    <CartIcon />
                    <p>$1010</p>
                </NavLink>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return { popup: state.global.popup }
}

export default connect(mapStateToProps, {setCurrentModal})(Sidebar)
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
import { setLogout } from '../../redux/UserReduser';
import LinckIcon from '../LinksButton/LinksIcon';
import { SignInBlock, LoginedBlock, GarageBlock } from '../LinksButton/OnhoverBlocks';

const Sidebar = (props) => {
    const setSignInPopup = (type) => {
        props.setCurrentModal(type);
    }

    const setUserLogout = () => {
        props.setLogout();
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
            <div className="float_right account_bar text_center">
                <LinckIcon icon={<SignInIcon />}
                    type={'button'}
                    linckAction={setSignInPopup}
                    title={"Sign in"}
                >
                    {props.user.isAuth ?
                        <LoginedBlock
                            setUserLogout={setUserLogout}
                            userName={props.user.userName}
                        /> :
                        <SignInBlock
                            setCurrentModal={setSignInPopup}
                        />}
                </LinckIcon>
                <LinckIcon icon={<GarageIcon />}
                    type={'button'}
                    linckAction={setSignInPopup}
                    title={"Garage"}
                >
                    <GarageBlock
                        setUserLogout={setUserLogout}
                        isAuth={props.user.isAuth}
                    />
                </LinckIcon>
                <LinckIcon icon={<LikeItIcon />} linckAction={'/'} type={'button'} title={"$3042"}>

                </LinckIcon>

                <LinckIcon icon={<CartIcon />} linckAction={'/'} type={'link'} title={"$1010"}>

                </LinckIcon>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        popup: state.global.popup,
        user: state.user
    }
}

export default connect(mapStateToProps, { setCurrentModal, setLogout })(Sidebar)
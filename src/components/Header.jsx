


const Header = (props) => {

    const navMenu = {
        margin: '40px',
        border: '5px solid pink',
        marginRight: '364px',
        marginTop: '11px',
      };

    return (
        <div className="box_shadow_4">
            <div className="container nav_menu">
                <div className="float_left" style={navMenu}>
                    <span className="rubik_regular size_14 info_list list">(302) 555-0120</span>
                    <span className="rubik_regular size_14 info_list list">(302) 555-0103</span>
                    <span className="rubik_regular size_14 info_list list">9:00 - 22:00</span>
                </div>
                <div style={{ marginRight: '23px', marginTop: '11px' }} className="float_left">
                    <span className="rubik_regular size_14 info_list list pointer_red">Home</span>
                    <span className="rubik_regular size_14 info_list list pointer_red">About</span>
                    <span className="rubik_regular size_14 info_list list pointer_red">Delivery</span>
                    <span className="rubik_regular size_14 info_list list pointer_red">Contacts</span>
                    <span className="rubik_regular size_14 info_list list pointer_red">Help</span>
                </div>
                <div className="float_left language">
                    <div className="rubik_regular size_14" style={{ marginLeft: '20px' }}>
                        EN
                        <img alt="language" src="img/icon/vector_language.svg" />
                    </div>
                    <ul className="box_shadow_4 background_white">
                        <li className="rubik_regular size_14 text_center language_list pointer_red">UA</li>
                        <li className="rubik_regular size_14 text_center language_list pointer_red">RU</li>
                        <li className="rubik_regular size_14 text_center language_list pointer_red">DE</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
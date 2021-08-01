import React from "react";
import {ReactComponent as AutoBurotLogo} from '../common/img/icon/Logo.svg';
import {ReactComponent as Instagram} from '../common/img/icon/instagram.svg';
import {ReactComponent as Twitter} from '../common/img/icon/twitter.svg';
import {ReactComponent as Facebook} from '../common/img/icon/facebook.svg';
import {ReactComponent as Mastercard} from '../common/img/icon/mastercard.svg';
import {ReactComponent as Paypal} from '../common/img/icon/paypal.svg';
import {ReactComponent as Visa} from '../common/img/icon/visa.svg';


const Footer = () => {
    return (
        <footer className="container rubik_regular size_14">
            <div className=" grid grid_columns_6 grid_gap_30">
                <div className="logo">
                    <a href="/">
                        <AutoBurotLogo />
                    </a>
                </div>
                <div>
                    <ul>
                        <li>Catalog</li>
                        <li className="pointer_red">Repair parts</li>
                        <li className="pointer_red">Body parts</li>
                        <li className="pointer_red">Oil & Fluids</li>
                        <li className="pointer_red">Wheels & Tires</li>
                        <li className="pointer_red">Lighting</li>
                        <li className="pointer_red">Electronics</li>
                        <li className="pointer_red">Interior</li>
                        <li className="pointer_red">Exterior</li>
                        <li className="pointer_red">Tools & Garage</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Shop by</li>
                        <li className="pointer_red">Categories</li>
                        <li className="pointer_red">Body</li>
                        <li className="pointer_red">Oil</li>
                    </ul>
                    <ul>
                        <li>About</li>
                        <li className="pointer_red">Company</li>
                        <li className="pointer_red">Reviews</li>
                        <li className="pointer_red">Career</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Help</li>
                        <li className="pointer_red">Warranty Policy</li>
                        <li className="pointer_red">Shipping Policy</li>
                        <li className="pointer_red">Easy Return Policy</li>
                        <li className="pointer_red">Terms & Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Contacts</li>
                        <li className="pointer_red">2972 Westheimer Rd. Santa Ana, Illinois 85486 </li>
                        <li className="pointer_red">(302) 555-0120</li>
                        <li className="pointer_red">(302) 555-0103</li>
                        <li className="pointer_red">autoburo@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Follow us</li>
                        <li>
                            <Instagram style={{ marginRight: '20px' }} />
                            <Twitter style={{ marginRight: '20px' }} />
                            <Facebook />
                        </li>
                    </ul>
                    <ul>
                        <li>Payment</li>
                        <li>
                            <Mastercard />
                            <Paypal />
                            <Visa />
                        </li>
                    </ul>
                </div>
            </div>
            <form className="float_right">
                <p>Be first to receive exclusive promotions, updates and product announcements</p>
                <input className="radius_50 background_grey" placeholder="Enter email address" />
                <button className="background_red radius_50 pointer_red right">SUBSCRIBE</button>
            </form>
        </footer>
    )
}

export default Footer;
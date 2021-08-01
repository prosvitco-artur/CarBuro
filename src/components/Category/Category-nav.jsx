const CategoryNav = (props) => {
    return (<div>
        <div className="container category_menu rubik_regular background_white">
            <span className="pointer_red">Repair parts</span>
            <span className="pointer_red">Body parts</span>
            <span className="pointer_red">Oils & Fluids</span>
            <span className="pointer_red">Wheels & Tires</span>
            <span className="pointer_red">Lighting</span>
            <span className="pointer_red">Electronics</span>
            <span className="pointer_red">Interior</span>
            <span className="pointer_red">Exterior</span>
            <span className="pointer_red">Tools & Garage</span>
        </div>
        <div className="container cat-list grid grid_columns_6 grid_gap_30_20 rubik_regular">
            <div className="item">
                <img alt="mirrors" src="img/category/Mirrors.jpg" />
                <p>Mirrors</p>
            </div>
            <div className="item">
                <img alt="doors" src="img/category/Doors.jpg" />
                <p>Doors</p>
            </div>
            <div className="item">
                <img alt="Bumpersandcomponents" src="img/category/Bumpersandcomponents.jpg" />
                <p>Bumpers and
                    components
                </p>
            </div>
            <div className="item">
                <img alt="Hoodsandcomponents" src="img/category/Hoodsandcomponents.jpg" />
                <p>Hoods and
                    components</p>
            </div>
            <div className="item">
                <img alt="Autoglass" src="img/category/Autoglass.jpg" />
                <p>Auto glass</p>
            </div>
            <div className="item">
                <img alt="Fendersandcomponents" src="img/category/Fendersandcomponents.jpg" />
                <p>Fenders and
                    components</p>
            </div>
            <div className="item">
                <img alt="Frontpanels" src="img/category/Frontpanels.jpg" />
                <p>Front panels</p>
            </div>
            <div className="item">
                <img alt="Fueltankscomponents" src="img/category/Fueltankscomponents.jpg" />
                <p>Fuel tanks
                    components </p>
            </div>
            <div className="item">
                <img alt="LiftgateandHatchcomponents" src="img/category/LiftgateandHatchcomponents.jpg" />
                <p>Liftgate
                    and Hatch
                    components</p>
            </div>
            <div className="item">
                <img alt="Radiatorsupportandcomponents" src="img/category/Radiatorsupportandcomponents.jpg" />
                <p>Radiator
                    support and
                    components</p>
            </div>
            <div className="item">
                <img alt="Headerpanels" src="img/category/Headerpanels.jpg" />
                <p>Header
                    panels</p>
            </div>
            <div className="item">
                <img alt="Lowerbodyandcarframe" src="img/category/Lowerbodyandcarframe.jpg" />
                <p>Lower body
                    and car frame</p>
            </div>
            <div className="item">
                <img alt="Trunksandtailgates" src="img/category/Trunksandtailgates.jpg" />
                <p>Trunks
                    and tailgates</p>
            </div>
            <div className="item">
                <img alt="Sidepanelscomponents" src="img/category/Sidepanelscomponents.jpg" />
                <p>Side panels
                    components</p>
            </div>
            <div className="item">
                <img alt="Sillsandlinins" src="img/category/Sillsandlinins.jpg" />
                <p>Sills
                    and linins</p>
            </div>
            <div className="item">
                <img alt="Gasspringstrunkhoodetc" src="img/category/Gasspringstrunkhoodetc.jpg" />
                <p>Gas springs
                    (trunk, hood,
                    etc.)</p>
            </div>
        </div>
    </div>
    )
}

export default CategoryNav
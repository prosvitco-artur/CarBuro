import { Button } from "../prototype/Button/Button"

const SubscribeBlock = () => {
    return (
        <div className="rubik_regular color_white callback">
            <div className="container">
                <div className="float_left">
                    <h3 className="color_white">Subscribe to our mailing list now!</h3>
                    <p className="size_18">Be first to receive exclusive promotions, updates and product announcements</p>
                </div>
                <form className="float_right">
                    <input className="radius_50" placeholder="Enter email address" />
                    <Button
                        title={'VIEW ALL'}
                        type={'red'}
                        classStyle={"right"}
                    />
                </form>
            </div>
        </div>
    )
}

export default SubscribeBlock
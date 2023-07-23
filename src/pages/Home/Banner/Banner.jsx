import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from '../../../assets/01.jpg'
import banner2 from '../../../assets/02.jpg'
import banner3 from '../../../assets/04.jpg'


const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={banner1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={banner2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={banner3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
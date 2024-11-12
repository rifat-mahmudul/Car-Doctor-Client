import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../assets/images/banner/1.jpg';
import img2 from '../assets/images/banner/2.jpg';
import img3 from '../assets/images/banner/3.jpg';
import img4 from '../assets/images/banner/4.jpg';
import img5 from '../assets/images/banner/5.jpg';
import img6 from '../assets/images/banner/6.jpg';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import './compo.css'


const Banner = () => {
    return (
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop = {Infinity}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper max-w-[90%] xl:max-w-[1200px] mx-auto mb-16 rounded-lg"
        >
            <SwiperSlide>
                <div>
                    <div
                        className="hero min-h-[calc(100vh-100px)]"
                        style={{
                            backgroundImage: `url(${img1})`,
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="mb-5">
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-outline ml-3 text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
            <div>
                    <div
                        className="hero min-h-[calc(100vh-100px)]"
                        style={{
                            backgroundImage: `url(${img2})`,
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="mb-5">
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-outline ml-3 text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
            <div>
                    <div
                        className="hero min-h-[calc(100vh-100px)]"
                        style={{
                            backgroundImage: `url(${img3})`,
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="mb-5">
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-outline ml-3 text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
            <div>
                    <div
                        className="hero min-h-[calc(100vh-100px)]"
                        style={{
                            backgroundImage: `url(${img4})`,
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="mb-5">
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-outline ml-3 text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
            <div>
                    <div
                        className="hero min-h-[calc(100vh-100px)]"
                        style={{
                            backgroundImage: `url(${img5})`,
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="mb-5">
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-outline ml-3 text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
            <div>
                    <div
                        className="hero min-h-[calc(100vh-100px)]"
                        style={{
                            backgroundImage: `url(${img6})`,
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="mb-5">
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-outline ml-3 text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Banner

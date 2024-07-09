import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverFlow, Pagination} from "swiper/modules";


import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "./img/1.jpeg"
import image2 from "./img/2.jpeg"
import image3 from "./img/3.jpeg"
import image4 from "./img/4.jpeg"
import image5 from "./img/5.jpeg"

const slides = [
    {
        title: "1 Series",
        images: image1,
    },
    {
        title: "2 Series",
        images: image2,
    },
    {
        title: "3 Series",
        images: image3,
    },
    {
        title: "4 Series",
        images: image4,
    },
    {
        title: "5 Series",
        images: image5,
    }
]

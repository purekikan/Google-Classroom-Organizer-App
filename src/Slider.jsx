import { useState } from 'react'
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import DateBox from './components/DateBox.jsx';

import './Slider.css';

function Slider(props) {
    const d4 = new Date();
    const [Date4, setDate4] = useState(d4);

    const d3 = new Date();
    d3.setDate(Date4.getDate() - 1);
    const [Date3, setDate3] = useState(d3);

    const d2 = new Date();
    d2.setDate(Date4.getDate() - 2);
    const [Date2, setDate2] = useState(d2);

    const d1 = new Date();
    d1.setDate(Date4.getDate() - 3);
    const [Date1, setDate1] = useState(d1);
    
    const d5 = new Date();
    d5.setDate(Date4.getDate() + 1);
    const [Date5, setDate5] = useState(d5);

    const d6 = new Date();
    d6.setDate(Date4.getDate() + 2);
    const [Date6, setDate6] = useState(d6);

    const d7 = new Date();
    d7.setDate(Date4.getDate() + 3);
    const [Date7, setDate7] = useState(d7);

    const [isActive, setIsActive] = useState(3)

    const Dates = [
        {
        Date: Date1,
        setDate: setDate1,
        id: "slide1"
        },
        {
        Date: Date2,
        setDate: setDate2,
        id: "slide2"
        },
        {
        Date: Date3,
        setDate: setDate3,
        id: "slide3"
        },
        {
        Date: Date4,
        setDate: setDate4,
        id: "slide4"
        },
        {
        Date: Date5,
        setDate: setDate5,
        id: "slide5"
        },
        {
        Date: Date6,
        setDate: setDate6,
        id: "slide6"
        },
        {
        Date: Date7,
        setDate: setDate7,
        id: "slide7"
        }
    ]

    function changeDate(date, setdate, right) {
        let ndate = new Date(date.getTime());
        let i = -7
        if (right) {
        i = 7
        }
        ndate.setDate(ndate.getDate() + i);
        setdate(ndate);
    }

    function changeSlide(swiper) {
        let leftSlide = JSON.stringify((swiper.realIndex + 3) % 7);
        let rightSlide = JSON.stringify((swiper.realIndex + 4) % 7);

        if (Dates[swiper.realIndex].Date.getTime() > Dates[isActive].Date.getTime()) {
        var name = Dates[leftSlide];
        changeDate(name.Date, name.setDate, true)
        }
        else if (Dates[swiper.realIndex].Date.getTime() < Dates[isActive].Date.getTime()) {
        var name = Dates[rightSlide];
        changeDate(name.Date, name.setDate, false)
        }
        setIsActive(swiper.realIndex)
    }

    const DateElements = Dates.map((values, index) => {
        let ID = JSON.stringify(index)
        return (
            <SwiperSlide id={Dates[ID].id}>
                <DateBox Date={Dates[ID].Date} />
            </SwiperSlide>
        );
    });
        
    <Swiper
        effect={'coverflow'}
        initialSlide="3"
        grabCursor={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
        rotate: 10,
        stretch: 20,
        depth: 50,
        slideShadows: false,
        modifier: 2.5,
        }}
        pagination={{ el: '.spider-pagination', clickable: true }}
        navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiperContainer'
        onActiveIndexChange={(swiper) => {changeSlide(swiper)
        }}
    >
        {DateElements}
        <div>
            <div className='swiper-button-next' class='mr-5'></div>
            <div className='swiper-button-prev' class='ml-5'></div>
        </div>
        <div className='swiper-pagination'></div>
    </Swiper>
}

export default Slider;
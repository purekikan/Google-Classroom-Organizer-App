import { useState } from 'react'
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import NavBar2 from './components/NavBar2.jsx';
import DateBox from './components/DateBox.jsx';

import './App.css';
import Slider from './Slider.jsx';

function App() {
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

  const DateElements = Dates.map((values, index) => {
    let ID = JSON.stringify(index)
    return (
      <SwiperSlide id={Dates[ID].id}>
        <DateBox Date={Dates[ID].Date} />
      </SwiperSlide>
    );
  })

  function changeDate(date, setdate, right) {
    let ndate = new Date(date.getTime());
    let i = -7
    if (right) {
      i = 7
    }
    ndate.setDate(ndate.getDate() + i);
    //console.log(ndate.toString());
    setdate(ndate);
  }
  
  function dateDiffInDays(a, b) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

  function changeSlide(swiper) {
    //console.log(swiper.touches.diff < 0);
    //console.log(swiper.realIndex);
    //console.log("and")
    //let leftSlide = JSON.stringify((swiper.realIndex + 3) % 7);
    //console.log(leftSlide);
    //console.log("and")
    //let rightSlide = JSON.stringify((swiper.realIndex + 4) % 7);
    //console.log(rightSlide);

    const diff = dateDiffInDays(Dates[swiper.realIndex].Date, Dates[isActive].Date);
    console.log('diff' + diff);
    if (diff < 0) {
      for (let i = diff; i < 0; i += 1) {
        var name = Dates[JSON.stringify((swiper.realIndex + 25 + i) % 7)];
        //console.log("change l from");
        //console.log(name.Date)
        //console.log("to")
        changeDate(name.Date, name.setDate, true)
      };
    }
    else if (diff > 0) {
      for (let i = diff; i > 0; i -= 1) {
        var name = Dates[JSON.stringify((swiper.realIndex + 24 + i) % 7)];
        //console.log("change r from");
        //console.log(name.Date)
        //console.log("to")
        changeDate(name.Date, name.setDate, false)
      }
    }
    setIsActive(swiper.realIndex)
  }
  return (
    <div className="App">
      
      <link
        href="https://fonts.googleapis.com/css?family=Inter&display=swap"
        rel="stylesheet"
      />
      <div class='mr-2'>
        <NavBar2 />
        <div class="flex min-h-screen max-w-screen">
          <div class="max-h-[2545px] w-screen mt-[15vh]">
            <div class="flex mt-8 px-5 justify-center items-top">
              <div
                class="relative bg-[#B8B8D2] w-8/12 py-4 px-5 text-black text-center rounded-2xl font-sans text-2xl font-bold"
              >
                Select Classes
              </div>
            </div>
            
            <div class="flex mt-[4%] h-full w-full">
              {/*<Slider />*/}
              {<Swiper
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
                <div className='swiper-pagination'></div>
                <div className='swiper-button-next'></div>
                <div className='swiper-button-prev'></div>
              </Swiper>}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
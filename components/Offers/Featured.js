import React, { useState, useEffect } from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';


import styles from "../../styles/Offers.module.css"
import Image from "next/image";
import Link from "next/link";

import MrZango from "../../assets/images/MrZango.svg";

export const Featured = () => {

    useEffect(() => {});

  return (
      <div className={`${styles.offers} text-white  pt-10 pb-10`}>
          <div
              className={`${styles.container} pl-5 pr-5 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 `}
          >
              <h2 className="text-2xl pb-8">Featured Vendors 🔥</h2>
              <Swiper
                  // install Swiper modules
                  style={{
                      "--swiper-pagination-bullet-size": "10px",
                  }}
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  breakpoints={{
                      // when window width is >= 576px
                      640: {
                          slidesPerView: 1,
                      },
                      // when window width is >= 768px
                      688: {
                          spaceBetween: 10,
                          slidesPerView: 2,
                      },
                      // when window width is >= 1024px
                      1024: {
                          spaceBetween: 13,
                          slidesPerView: 3,
                      },
                      1280: {
                          spaceBetween: 15,
                          slidesPerView: 4,
                      },
                  }}
                  navigation={true}
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
              >
                  <SwiperSlide className="border-cyan-400 border-2">
                      <div>
                          <Link href={{}}>
                              <Image
                                  src={MrZango}
                                  width={650}
                                  alt={""}
                                  as="image"
                                  priority={true}
                              />
                          </Link>
                      </div>
                  </SwiperSlide>

                  <SwiperSlide className="border-cyan-400 border-2">
                      <div>
                          <Link href={{}}>
                              <Image
                                  src={MrZango}
                                  width={650}
                                  alt={""}
                                  as="image"
                                  priority={true}
                              />
                          </Link>
                      </div>
                  </SwiperSlide>

                  <SwiperSlide className="border-cyan-400 border-2">
                      <div>
                          <Link href={{}}>
                              <Image
                                  src={MrZango}
                                  width={650}
                                  alt={""}
                                  as="image"
                                  priority={true}
                              />
                          </Link>
                      </div>
                  </SwiperSlide>

                  <SwiperSlide className="border-cyan-400 border-2">
                      <div>
                          <Link href={{}}>
                              <Image
                                  src={MrZango}
                                  width={650}
                                  alt={""}
                                  as="image"
                                  priority={true}
                              />
                          </Link>
                      </div>
                  </SwiperSlide>
              </Swiper>
          </div>
      </div>
  );
}

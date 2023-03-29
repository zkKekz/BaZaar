import React, { useState, useEffect } from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';


import styles from "../../styles/Offers.module.css"
import Image from "next/image";
import Link from "next/link";

import NoImage from "../../assets/images/No_image.svg";
import MrZango from "../../assets/images/MrZango.svg";

export const Featured = () => {

    const [vendorsLoading, setVendorsLoading] = useState(true);
    const [vendors, setVendors] = useState({})

    useEffect(() => {
        const fetchVendors = async () => {
            try {
                setVendorsLoading(true);
                await fetch("/api/vendors", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        setVendors(data.data);
                        setVendorsLoading(false);
                    })
                    .catch((error) => {
                        // eliminate this error
                        console.error("Error:", error);
                    });
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchVendors()
    }, []);

    // console.log(vendors);

  return (
      <div className={`${styles.offers} text-white  pt-10 pb-10`}>
          <div
              className={`${styles.container} pl-5 pr-5 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 `}
          >
              {vendorsLoading && (
                  <h2 className="text-2xl pb-8">No Vendors to show</h2>
              )}

              {!vendorsLoading && (
                  <>
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
                          {Object.entries(vendors).map((key, index) => {
                              return (
                                  <SwiperSlide
                                      key={key}
                                      className="border-cyan-400 border-2"
                                  >
                                      <div>
                                          {vendors[index].image == "" && (
                                              <Image
                                                  src={NoImage}
                                                  width={600}
                                                  height={600}
                                                  alt={""}
                                                  as="image"
                                                  priority={true}
                                              />
                                          )}
                                          {vendors[index].image != "" && (
                                              <Image
                                                  src={`https://ipfs.io/ipfs/${vendors[index].image}`}
                                                  width={600}
                                                  height={600}
                                                  alt={""}
                                                  as="image"
                                                  priority={true}
                                              />
                                          )}
                                      </div>
                                  </SwiperSlide>
                              );
                          })}
                      </Swiper>
                  </>
              )}
          </div>
      </div>
  );
}

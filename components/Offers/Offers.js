import React, {useEffect, useState} from "react";

import styles from "../../styles/Offers.module.css";

import Image from "next/image";

import Link from "next/link";

import { FaInfoCircle } from "react-icons/fa";

import NoImage from "../../assets/images/No_image.svg";

export const Offers = () => {

    const [offers, setOffers] = useState({})

    useEffect(() => {

        console.clear()

        const fetchOffers = async () => {
             try {
                 await fetch("/api/offers", {
                     method: "POST",
                     headers: {
                         "Content-Type": "application/json",
                     },
                     body: JSON.stringify({ answer: 42 }),
                 })
                     .then((response) => response.json())
                     .then((data) => {
                         setOffers(data.result.offers);
                     })
                     .catch((error) => {
                        // eliminate this error
                         console.error("Error:", error);
                     });
             } catch (error) {
                 console.error("Error:", error);
             }
        }

        fetchOffers()
    }, []);

    // console.log(offers)

    return (
        <div className={`${styles.offers} text-white  pt-10 pb-10`}>
            <div
                className={`${styles.container} pl-5 pr-5 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 `}
            >
                <h2 className="text-2xl">All On-Chain Offers ⛓</h2>
                <p className="text-xl">
                    All offers are pulled directly from the Zano Blockchain via
                    the Zano Markerplace API. There are no centralized offers.
                </p>
            </div>

            {!offers && (
                <div className="pl-5 pr-5 pt-8 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40">
                    <h2 className="text-2xl">No current offers</h2>
                </div>
            )}

            {offers && (
                <div className="pl-5 pr-5 pt-8 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40">
                    <div className={`${styles.cardContainer} grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 `}>

                        {Object.entries(offers).map((key, index) => {
                                return (
                                    <Link key={key} href={`/`}>
                                        <div
                                            className={`${styles.card} bg-gray-900 border-cyan-400 border-2`}
                                        >
                                            <div
                                                className={`${styles.cardHeader} flex grow justify-between bg-gray-800 p-3`}
                                            >
                                                <h3 className="text-2xl">
                                                    Item(s): #{offers[index].at}
                                                </h3>
                                                <FaInfoCircle className="text-3xl" />
                                            </div>
                                            <div
                                                className={`${styles.cardImage}`}
                                            >
                                                {offers[index].url == "" && (
                                                    <Image
                                                        src={NoImage}
                                                        width={600}
                                                        height={600}
                                                        alt={""}
                                                        as="image"
                                                        priority={true}
                                                    />
                                                )}
                                                {offers[index].url != "" && (
                                                    <Image
                                                        src={`https://ipfs.io/ipfs/${offers[index].url}`}
                                                        width={600}
                                                        height={600}
                                                        alt={""}
                                                        as="image"
                                                        priority={true}
                                                    />
                                                )}
                                            </div>
                                            <div
                                                className={`${styles.cardBody} p-3 bg-gray-900`}
                                            >
                                                <div className="">
                                                    <h2
                                                        className={`${{}} text-3xl pb-5`}
                                                    >
                                                        <b>{offers[index].t}</b>
                                                    </h2>
                                                </div>
                                                <div className="pb-5">
                                                    <p>{offers[index].com}</p>
                                                </div>
                                            </div>

                                            <div
                                                className={`${styles.cardFooter}`}
                                            ></div>
                                        </div>
                                    </Link>
                                );
                            })}


                    </div>
                </div>
            )}
        </div>
    );
};

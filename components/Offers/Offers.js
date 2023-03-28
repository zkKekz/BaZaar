import React, {useEffect, useState} from "react";

import styles from "../../styles/Offers.module.css";

import Image from "next/image";

import MrZango from "../../assets/images/MrZango.svg";

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

    console.log(offers)

    return (
        <div className={`${styles.offers} text-white  pt-10 pb-10`}>
            <div
                className={`${styles.container} pl-5 pr-5 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 `}
            >
                <h2 className="text-2xl">All On-Chain Offers ⛓</h2>
                <p>
                    All offers are pulled directly from the Zano Blockchain via
                    the Zano Markerplace API. There are no centralized offers!a
                </p>
            </div>

            {!offers && (
                <div className="pl-5 pr-5 pt-8 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40">
                    <h2 className="text-2xl">No current offers</h2>
                </div>
            )}

            {offers && (
                <div className="pl-5 pr-5 pt-8 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40">
                    <div
                        className={`${styles.cardContainer} grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4`}
                    >
                        <div
                            className={`${styles.card} bg-gray-800 border-cyan-400 border-2`}
                        >
                            <div className={`${styles.cardImage}`}>
                                <Image
                                    src={MrZango}
                                    width={550}
                                    alt={""}
                                    as="image"
                                    priority={true}
                                />
                            </div>
                            <div className={`${styles.cardContainer} p-3 bg-gray-900`}>
                                <h2 className={`${{}} text-2xl`}>
                                    <b>MrZango</b>
                                </h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Laborum aperiam velit quae
                                    illo!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

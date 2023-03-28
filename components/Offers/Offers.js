import React, {useEffect, useState} from "react";

import styles from "../../styles/Index.module.css";

export const Offers = () => {

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
                         console.log("Success:", data);
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

    return (
        <div className={`${styles.index} text-white  pt-10 pb-10`}>
            <div
                className={`${styles.container} pl-5 pr-5 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 `}
            >
                <h2 className="text-2xl">All On-Chain ⛓ BaZaar Offers</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia dolore sapiente ratione asperiores dignissimos
                    labore!
                </p>
            </div>
        </div>
    );
};

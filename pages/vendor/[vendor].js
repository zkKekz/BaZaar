/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Vendor.module.css";
import offersStyles from "../../styles/Offers.module.css";

import { FaInfoCircle } from "react-icons/fa";

import NoImage from "../../assets/images/No_image.svg";

import {
    FaTwitter,
    FaTelegramPlane,
    FaDiscord,
    FaGithub,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
MdEmail;

const Vendor = () => {
    const [vendorsLoading, setVendorsLoading] = useState(true);
    const [vendors, setVendors] = useState(false);

    const [offersLoading, setOffersLoading] = useState(true);
    const [offers, setOffers] = useState({});

    const router = useRouter();
    const { vendor } = router.query;

    useEffect(() => {
        console.clear();

        const fetchVendors = async () => {
            try {
                setVendorsLoading(true);
                await fetch("/api/vendor", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ url: vendor }),
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

        const fetchOffers = async () => {
            try {
                setOffersLoading(true);
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
                        setOffersLoading(false);
                    })
                    .catch((error) => {
                        // eliminate this error
                        console.error("Error:", error);
                    });
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchVendors();
        fetchOffers();
    }, [vendor]);

    console.log(vendors);
    console.log(offers);

    return (
        <div className={`${styles.vendors} bg-gray-900`}>
            <div
                className={`${styles.container} pl-5 pr-5 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40  `}
            >
                {vendorsLoading && (
                    <h1 className="text-3xl text-white">
                        Loading Vendor BaZaar..
                    </h1>
                )}

                {!vendorsLoading && vendors.length == 0 && (
                    <h1 className="text-3xl text-white">Invalid Vendor URL</h1>
                )}
            </div>

            {!vendorsLoading && vendors.length > 0 && (
                <div
                    className={`${styles.vendorIntro} text- border-b-2  border-b-indigo-500 `}
                >
                    <div
                        className={`${styles.vendorContent} grid justify-center md:grid-cols-2 gap-5 pl-5 pr-5 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 p-5 text-white`}
                    >
                        <div>
                            <Image
                                // className="border-2"
                                src={`https://ipfs.io/ipfs/${vendors[0].image}`}
                                width={400}
                                height={400}
                                alt={""}
                                as="image"
                                priority={true}
                            />
                        </div>
                        <div className={`${{}} text-center`}>
                            <h1 className="text-5xl pb-2">
                                <b>{vendors[0].title}</b>
                            </h1>
                            <p className="text-2xl">{vendors[0].description}</p>
                            <div>
                                <div className="flex pt-5 text-3xl text-center justify-center">
                                    {vendors[0].socials.twitter != "" && (
                                        <Link
                                            className="pl-2 pr-2"
                                            href={vendors[0].socials.twitter}
                                            target="_blank"
                                        >
                                            <FaTwitter />
                                        </Link>
                                    )}

                                    {vendors[0].socials.telegram != "" && (
                                        <Link
                                            className="pl-2 pr-2"
                                            href={vendors[0].socials.telegram}
                                            target="_blank"
                                        >
                                            <FaTelegramPlane />
                                        </Link>
                                    )}

                                    {vendors[0].socials.discord != "" && (
                                        <Link
                                            className="pl-2 pr-2"
                                            href={vendors[0].socials.discord}
                                            target="_blank"
                                        >
                                            <FaDiscord />
                                        </Link>
                                    )}

                                    {vendors[0].socials.github != "" && (
                                        <Link
                                            className="pl-2 pr-2"
                                            href={vendors[0].socials.github}
                                            target="_blank"
                                        >
                                            <FaGithub />
                                        </Link>
                                    )}

                                    {vendors[0].socials.email != "" && (
                                        <Link
                                            className="pl-2 pr-2"
                                            href={`mailto:${vendors[0].socials.email}`}
                                            target="_blank"
                                        >
                                            <MdEmail />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {!vendorsLoading && vendors.length > 0 && (
                <div className="pb-8 text-white pl-5 pr-5 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 pt-5">
                    <h2 className="text-2xl ">
                        {vendors[0].title}'s Offers 🔥
                    </h2>
                    <p className="text-xl">
                        All offers are pulled directly from the Zano Blockchain
                        via the Zano Markerplace API. There are no centralized
                        offers.
                    </p>

                    <div
                        className={`pt-8 ${{}} grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 `}
                    >
                        {Object.entries(offers).map((key, index) => {
                            if (
                                vendors[0].offers.includes(
                                    offers[index].tx_hash
                                )
                            ) {
                                return (
                                    <Link
                                        key={key}
                                        href={`zano:action=send&address=${offers[index].do}?amount=${offers[index].ap}&comment=${offers[index].t}&hide_sender=true&hide_receiver=true`}
                                    >
                                        <div
                                            className={`${offersStyles.card} bg-gray-900 border-cyan-400 border-2`}
                                        >
                                            <div
                                                className={`${offersStyles.cardHeader} flex grow justify-between bg-gray-800 p-3`}
                                            >
                                                <h3 className="text-2xl">
                                                    {offers[index].ap} $ZANO
                                                </h3>
                                                <FaInfoCircle className="text-3xl" />
                                            </div>
                                            <div
                                                className={`${offersStyles.cardImage}`}
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
                                                className={`${offersStyles.cardBody} p-3 bg-gray-900`}
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
                                                className={`${offersStyles.cardFooter}`}
                                            ></div>
                                        </div>
                                    </Link>
                                );
                            }
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Vendor;

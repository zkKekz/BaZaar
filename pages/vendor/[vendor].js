import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Vendor.module.css";

import NoImage from "../../assets/images/No_image.svg";

const Vendor = () => {
    const [vendorsLoading, setVendorsLoading] = useState(true);
    const [vendors, setVendors] = useState({});

    const router = useRouter();
    const { vendor } = router.query;

    useEffect(() => {
        console.clear();
        console.log(vendor);

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

        fetchVendors();
    }, [vendor]);

    console.log(vendors);

    return (
        <div className={`${styles.vendors} bg-gray-900 pt-10`}>
            <div
                className={`${styles.container} pl-5 pr-5 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 `}
            >
                {/* {Object.entries(vendors).map((key, index) => {})} */}
                {vendorsLoading && (
                    <h1 className="text-3xl text-white">
                        Loading Vendor BaZaar..
                    </h1>
                )}

                {!vendorsLoading && vendors.length == 0 && (
                    <h1 className="text-3xl text-white">Invalid Vendor URL</h1>
                )}

                {!vendorsLoading && vendors.length > 0 && (
                    <div>
                        {Object.entries(vendors).map((key, index) => {
                            return (
                                <div key={key}>
                                    {/* <div className="text-cyan-400 text-xl pt-5 pb-5">
                                        <p>
                                            https://zanobazaar.com/
                                            {vendors[index].url}
                                        </p>
                                    </div> */}
                                    <div
                                        className={`${styles.vendorHeader} bg-gray-900 grid gap-5 md:grid-cols-2 text-white border-violet-400 border-2`}
                                    >
                                        <div>
                                            {vendors[index].image == "" && (
                                                <Image
                                                    src={NoImage}
                                                    width={750}
                                                    height={750}
                                                    alt={""}
                                                    as="image"
                                                    priority={true}
                                                />
                                            )}
                                            {vendors[index].image != "" && (
                                                <Link
                                                    href={`vendor/${vendors[index].url}`}
                                                >
                                                    <Image
                                                        src={`https://ipfs.io/ipfs/${vendors[index].image}`}
                                                        width={750}
                                                        height={750}
                                                        alt={""}
                                                        as="image"
                                                        priority={true}
                                                    />
                                                </Link>
                                            )}
                                        </div>
                                        <div
                                            className={`${styles.headerContent} md:pt-8 pb-8 p-3`}
                                        >
                                            <h1 className="text-5xl pb-5">
                                                <b>{vendors[index].title}</b>
                                            </h1>
                                            <p className="text-2xl">
                                                {" "}
                                                {vendors[index].description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`${{}} vendorCards`}></div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Vendor;

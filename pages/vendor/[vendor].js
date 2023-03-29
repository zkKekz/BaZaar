import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import styles from "../../styles/Vendor.module.css";

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
        <div className={`${styles.vendors} bg-gray-900`}>
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
                                <h1 key={key} className="text-3xl text-white">
                                    Loaded: {vendors[0].title}
                                </h1>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Vendor;

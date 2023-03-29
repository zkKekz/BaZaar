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

        fetchVendors();
    }, []);

    // console.log(vendors);

    return (
        <div className={`${styles.vendors} bg-gray-900`}>
            <div
                className={`${styles.container} pl-5 pr-5 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 `}
            >
                <h1 className="text-3xl text-white">Vendor: {vendor}</h1>
            </div>
        </div>
    );
};

export default Vendor;

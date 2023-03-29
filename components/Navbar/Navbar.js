import React from "react";

import styles from "../../styles/Navbar.module.css";

import Image from "next/image";
import Link from "next/link";

import BazaarLogo from "../../assets/images/bazaar.svg";

export const Navbar = () => {
    return (
        <div className={`${styles.navbar} bg-gray-900 text-white  pt-4 pb-4`}>
            <div
                className={`${styles.container} pl-5 pr-5 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 `}
            >
                <Link href={"/"}>
                    <Image
                        src={BazaarLogo}
                        width={150}
                        alt={""}
                        as="image"
                        priority={true}
                    />
                </Link>
            </div>
        </div>
    );
};

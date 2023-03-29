/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

import styles from "../../styles/FooterLinks.module.css";

import Image from "next/image";

import BazaarLogo from "../../assets/images/bazaar.svg";

import {
    FaTelegramPlane,
    FaGithub,
    FaDiscord,
    FaTwitter,
} from "react-icons/fa";

export const Links = () => {
    return (
        <div
            className={`${styles.footerLinks} border-b-2  border-b-indigo-500`}
        >
            <div
                className={`${styles.container} pl-5 pr-5  md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 text-white pt-8 pb-8`}
            >
                <div>
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
                <div className={`${styles.socials} flex`}>
                    <a href="" className={styles.icon}>
                        <FaTwitter />
                    </a>
                    <a href="" className={styles.icon}>
                        <FaDiscord />
                    </a>
                    <a href="" className={styles.icon}>
                        <FaTelegramPlane />
                    </a>
                    <a href="" className={styles.icon}>
                        <FaGithub />
                    </a>
                </div>
            </div>
        </div>
    );
};

/* eslint-disable react/no-unescaped-entities */
import React from "react";

import Image from "next/image";

import styles from "../../styles/Utility.module.css";
// import styles from "../../styles/FooterLinks.module.css";

import RedactedZango from "../../assets/images/MrZangoRedacted.svg";

export const Utility = () => {
    return (
        <div
            className={`${styles.utility} border-b-2  border-b-indigo-500  border-t-indigo-500 border-t-2 `}
        >
            <div
                className={`${styles.utilityContent} grid justify-center md:grid-cols-2 gap-5 pl-5 pr-5  md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 text-white pt-8 pb-8`}
            >
                <div>
                    <Image
                        src={RedactedZango}
                        width={350}
                        alt={""}
                        as="image"
                        priority={true}
                    />
                </div>
                <div>
                    <h1 className="text-4xl pb-3">
                        <b>Privacy is Not Secrecy</b>
                    </h1>
                    <p className="text-xl">
                        Privacy is necessary for an open society in the
                        electronic age. Privacy is not secrecy. A private matter
                        is something one doesn't want the whole world to know,
                        but a secret matter is something one doesn't want
                        anybody to know. Privacy is the power to selectively
                        reveal oneself to the world. - A Cypherpunks Manifesto
                    </p>
                </div>
            </div>
        </div>
    );
};

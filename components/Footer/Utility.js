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
                    <h1 className="text-3xl">
                        <b>Privacy is Not Secrecy</b>
                    </h1>
                    <p className="text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore aut non tempora similique a alias nobis aperiam,
                        amet distinctio sed soluta cupiditate blanditiis quos
                        ratione!
                    </p>
                </div>
            </div>
        </div>
    );
};

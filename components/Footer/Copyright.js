import React from "react";

import styles from "../../styles/Copyright.module.css";

export const Copyright = () => {
    return (
        <div className={`${styles.copyright} bg-gray-900 text-white`}>
            <div className={`${styles.container} lg:ml-40 lg:mr-40 p-2`}>
                <p>Designed and Built by Kekzploit ⟁</p>
            </div>
        </div>
    );
};

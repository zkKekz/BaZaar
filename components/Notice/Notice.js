import React from 'react'

import styles from "../../styles/Notice.module.css"

export const Notice = () => {
  return (
      <div className={`${styles.notice}  text-white`}>
          <div className={`${styles.container} lg:ml-40 lg:mr-40 p-2`}>
              <p>Zano BaZaar, the Decentralized Marketplace</p>
          </div>
      </div>
  );
}

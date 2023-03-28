import React from 'react'

import styles from "../../styles/Utility.module.css"

export const Utility = () => {
  return (
      <div className={`${styles.utility}`}>
          <div
              className={`${styles.container} pl-5 pr-5 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40`}
          >
              <p>Utility</p>
          </div>
      </div>
  );
}

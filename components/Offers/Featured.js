import React from 'react'

import styles from "../../styles/Index.module.css"

export const Featured = () => {
  return (
      <div className={`${styles.index} text-white  pt-10 pb-10`}>
          <div
              className={`${styles.container} pl-5 pr-5 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 `}
          >
              <h2 className='text-2xl'>Featured Vendors 🔥</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolore sapiente ratione asperiores dignissimos labore!</p>
          </div>
      </div>
  );
}

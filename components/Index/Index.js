import React from 'react'

import styles from "../../styles/Index.module.css"

export const Index = () => {
  return (
      <div className={`${styles.index} text-white  pt-10 pb-10`}>
          <div className={`${styles.container} pl-5 pr-5 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 `}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sunt officia unde maxime ratione aut!</p>
          </div>
      </div>
  );
}

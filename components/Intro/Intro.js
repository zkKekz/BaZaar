import React from 'react'

import Image from "next/image";
import Link from 'next/link';

import styles from "../../styles/Intro.module.css"

import BazaarIntro from "../../assets/images/bazaar_intro.svg";

export const Intro = () => {
  return (
      <div
          className={`${styles.intro} text-white pt-12 pb-12 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40`}
      >
          <div
              className={`${styles.container} pl-8 pr-8 flex justify-center`}
          >
              <Image src={BazaarIntro} width={450} alt={""} />
          </div>
          <div className="text-center ">
              <h1 className="text-2xl p-6">
                  The Decentralized Marketplace powered by Zano, the
                  surveillance-proof Cryptocurrency.
              </h1>
              <Link href="/register">
                  <button className="bg-violet-500 rounded-md p-3 text-xl">
                      Sign up as a Vendor
                  </button>
              </Link>
          </div>
      </div>
  );
}

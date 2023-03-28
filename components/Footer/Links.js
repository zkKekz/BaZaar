import React from 'react'

import styles from "../../styles/FooterLinks.module.css";

import Image from "next/image";

import BazaarLogo from "../../assets/images/bazaar.svg";

import {
    FaTelegramPlane,
    FaGithub,
    FaDiscord,
    FaTwitter,
    FaStaylinked,
} from "react-icons/fa";

export const Links = () => {
  return (
      <div className={`${styles.footerLinks}`}>
          <div
              className={`${styles.container} pl-5 pr-5 grid md:grid-cols-2 gap-5 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 text-white pt-8 pb-8`}
          >
              <div>
                  <Image
                      src={BazaarLogo}
                      width={120}
                      alt={""}
                      className="pb-3"
                  />
                  <h2>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Neque mollitia impedit quibusdam sapiente corporis
                      excepturi.
                  </h2>
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
}

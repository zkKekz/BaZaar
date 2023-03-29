/* eslint-disable react/no-unescaped-entities */
import React from 'react'

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
      <div className={`${styles.footerLinks}`}>
          <div
              className={`${styles.container} pl-5 pr-5 grid md:grid-cols-2 gap-5 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 text-white pt-8 pb-8`}
          >
              <div>
                  <Image
                      src={BazaarLogo}
                      width={120}
                      alt={""}
                      as="image"
                      priority={true}
                      className="pb-3"
                  />
                  <p className="text-xl">
                      <i>
                          "Privacy is necessary for an open society in the
                          electronic age. Privacy is not secrecy. A private
                          matter is something one doesn't want the whole world
                          to know, but a secret matter is something one doesn't
                          want anybody to know. Privacy is the power to
                          selectively reveal oneself to the world." - A
                          Cypherpunks Manifesto
                      </i>
                  </p>
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

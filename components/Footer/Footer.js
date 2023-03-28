import React from 'react'

import { Copyright } from './Copyright';
import { Links } from './Links';
import { Utility } from './Utility';

import styles from "../../styles/Footer.module.css";

export const Footer = () => {
  return (
      <div className={`${styles.footer}`}>
          <div className={`${styles.container}`}>
              <Utility />
              <Links />
              <Copyright />
          </div>
      </div>
  );
}

import Head from "next/head";

import { useContext } from "react";
import { DefaultContext } from "../context/context";

import { Intro } from "@/components/Intro/Intro";
import { Featured } from "@/components/Offers/Featured";
import { Offers } from "@/components/Offers/Offers";

import styles from "../styles/Intro.module.css";

export default function Home() {
    const { value, setValue } = useContext(DefaultContext);

    return (
        <>
            <Head>
                <title>
                    Zano BaZaar - The decentralized, surveillance-proof
                    Marketplace built on Zano
                </title>
                <meta
                    name="description"
                    content="Buy and sell in private now on BaZaar, built on Zano, the surveillance-proof cryptocurrency"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.intro}`}>
                <Intro />
                <Featured />
                <Offers />
            </main>
        </>
    );
}

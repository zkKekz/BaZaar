import Script from "next/script";

import "@/styles/globals.css";
import "react-responsive-modal/styles.css";

import { ContextProvider } from "../context/context";

import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Script
                defer
                data-domain="zanobazaar.com"
                src="https://plausible.io/js/script.js"
            />

            <ContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ContextProvider>
        </>
    );
}

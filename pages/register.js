import React from "react";

import Head from "next/head";

import { useState } from "react";

const Register = () => {
    // console.clear()

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [secret, setSecret] = useState("");
    const [link, setLink] = useState("");

    const generateLink = (event) => {
        event.preventDefault();

        setLink(
            `${image.trim()};${name.trim()};${description.trim()};${secret.trim()}`
        );
    };

    return (
        <>
            <Head>
                <title>Zano Bazaar Vendor Registration</title>
                <meta
                    name="description"
                    content="Sign up as a vendor to be able to sell on the Bazaar decentralized marketplace"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-gray-900">
                <div className="text-white pl-5 pr-5 pt-12 pb-12 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40">
                    <h1 className=" text-3xl font-normal leading-normal">
                        Registry Link Generator
                    </h1>
                    <p>
                        Registering as a vendor is done using only onchain data,
                        minimizing linkability and the need for the vendor to
                        ever have to interact with the Markeplace if they dont
                        want to. To register as a vendor simply complete the
                        following form and copy/paste the generated link into
                        the comment section of a transaction to the marketplace
                        address. thats it!
                    </p>

                    <form className="pt-5">
                        <label htmlFor="tx">
                            <h3 className="text-xl">Vendor IPFS Image Link:</h3>
                        </label>
                        <input
                            className="border-2 bg-slate-800 rounded-sm p-1 text-xl"
                            type="text"
                            value={image}
                            onChange={(event) => {
                                setImage(event.target.value);
                            }}
                        />
                        <br />
                        <br />
                        <label htmlFor="tx">
                            <h3 className="text-xl">Vendor Name:</h3>
                        </label>
                        <input
                            className="border-2 bg-slate-800 rounded-sm p-1 text-xl"
                            type="text"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                        <br />
                        <br />
                        <label htmlFor="tx">
                            <h3 className="text-xl">Vendor Description:</h3>
                        </label>
                        <input
                            className="border-2 bg-slate-800 rounded-sm p-1 text-xl"
                            type="text"
                            value={description}
                            onChange={(event) => {
                                setDescription(event.target.value);
                            }}
                        />
                        <br />
                        <br />
                        <label htmlFor="tx">
                            <h3 className="text-xl">Vendor Secret:</h3>
                        </label>
                        <input
                            className="border-2 bg-slate-800 rounded-sm p-1 text-xl"
                            type="text"
                            value={secret}
                            onChange={(event) => {
                                setSecret(event.target.value);
                            }}
                        />
                        <br />
                        <br />
                        <button
                            onClick={(event) => {
                                generateLink(event);
                            }}
                            className="text-xl bg-violet-500 p-2 rounded-lg"
                        >
                            Generate Link
                        </button>
                    </form>

                    {link != "" && (
                        <div>
                            <h2 className="text-violet-500 text-3xl font-normal leading-normal pt-5">
                                Generated Link:
                            </h2>

                            <p className="text-2xl">
                                Copy and paste the following string into the
                                comment section of your transaction to the
                                bazaars address
                            </p>

                            <p className=" text-cyan-400 text-3xl pt-5">
                                {link}
                            </p>

                            <h2 className="text-green-200 text-1xl font-normal leading-normal pt-5">
                                {link.length} / 254 characters - do not exceed
                                254 characters
                            </h2>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Register;

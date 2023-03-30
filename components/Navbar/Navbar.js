import React from "react";

import { useState } from "react";

import styles from "../../styles/Navbar.module.css";
import modalStyles from "../../styles/Modal.module.css";

import Image from "next/image";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import BazaarLogo from "../../assets/images/bazaar.svg";
import Support from "../../assets/images/support.png";

// modal
import { Modal } from "react-responsive-modal";

export const Navbar = () => {
    const [menuState, setMenuState] = useState("hidden");

    const [vendors, setVendors] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const [mongoId, setMongoId] = useState("");

    const [txHashLogin, settxHashLogin] = useState("");
    const [secretLogin, setSecretLogin] = useState("");

    const [offerInput, setOfferInput] = useState("");

    // modal
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const addOffer = async (event) => {
        event.preventDefault();

        try {
            await fetch("/api/offer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    _id: mongoId,
                    tx: offerInput,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    // eliminate this error
                    console.error("Error:", error);
                });
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const logIn = async (event) => {
        event.preventDefault();

        // setVendorsLoading(true);
        await fetch("/api/vendors", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                for (let index = 0; index < data.data.length; index++) {
                    if (
                        txHashLogin == data.data[index].tx_hash &&
                        secretLogin == data.data[index].secret
                    ) {
                        setVendors(data.data[index]);
                        setLoggedIn(true);
                        setMongoId(data.data[index]._id);
                    }
                }
            })
            .catch((error) => {
                // eliminate this error
                console.error("Error:", error);
            });
    };

    // toggle menu, closed = true
    const toggleMenu = () => {
        if (menuState == "hidden") {
            setMenuState("grid");
        } else {
            setMenuState("hidden");
        }
    };
    return (
        <nav
            className={`${styles.nav} bg-gray-900 text-white  pt-4 pb-4 border-t-2  border-t-indigo-500 border-b-2  border-b-indigo-500 `}
        >
            <div
                className={`${styles.container} flex justify-between pl-5 pr-5 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 `}
            >
                <div>
                    <Link href={"/"}>
                        <Image
                            src={BazaarLogo}
                            width={150}
                            alt={""}
                            as="image"
                            priority={true}
                        />
                    </Link>
                </div>

                <div>
                    {menuState == "hidden" && (
                        <button
                            onClick={() => {
                                toggleMenu();
                            }}
                        >
                            <GiHamburgerMenu
                                className={`text-cyan-400 text-3xl`}
                            />
                        </button>
                    )}
                    {menuState == "grid" && (
                        <button
                            onClick={() => {
                                toggleMenu();
                            }}
                        >
                            <AiOutlineClose
                                className={`text-cyan-400 text-3xl`}
                            />
                        </button>
                    )}
                </div>
            </div>

            {!loggedIn && (
                <div
                    className={`${menuState} ${styles.loginNav} grid md:grid-cols-2 gap-14  pl-5 pr-5 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 pt-10 pb-10`}
                >
                    <div>
                        <form className="pt-5">
                            <label htmlFor="tx">
                                <h3 className="text-xl pb-3">
                                    OG Transaction Hash:
                                </h3>
                            </label>
                            <input
                                className="border-2 bg-slate-800 rounded-sm p-1 text-xl"
                                type="text"
                                value={txHashLogin}
                                onChange={(event) => {
                                    settxHashLogin(event.target.value);
                                }}
                            />
                            <br />
                            <br />
                            <label htmlFor="secret">
                                <h3 className="text-xl pb-3">Vendor Secret:</h3>
                            </label>
                            <input
                                className="border-2 bg-slate-800 rounded-sm p-1 text-xl"
                                type="password"
                                value={secretLogin}
                                onChange={(event) => {
                                    setSecretLogin(event.target.value);
                                }}
                            />
                            <br />
                            <br />
                            <button
                                onClick={(event) => {
                                    logIn(event);
                                }}
                                className="text-xl bg-violet-500 p-2 rounded-md pl-5 pr-5"
                            >
                                Log In
                            </button>
                        </form>
                    </div>

                    <div>
                        <Link href="/">
                            <Image
                                src={Support}
                                alt=""
                                // height={{}}
                                width={300}
                            ></Image>
                        </Link>
                    </div>
                </div>
            )}

            {loggedIn && vendors != null && (
                <div
                    className={`${menuState} ${{}} grid md:grid-cols-3 gap-10 pl-5 pr-5 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 pt-10 pb-10`}
                >
                    <div>
                        <div className="pb-5">
                            <h2 className="text-2xl pb-3">
                                <u>{vendors.title}</u>
                            </h2>
                            <h2 className="text-xl pb-1">Share BaZaar URL:</h2>
                            <p>https://zanobazaar.com/{vendors.url}</p>
                        </div>

                        <div>
                            <button
                                onClick={onOpenModal}
                                className=" bg-violet-500 p-1 rounded-md pl-1 pr-1"
                            >
                                Add Offer
                            </button>
                            <Modal
                                open={open}
                                onClose={onCloseModal}
                                center
                                classNames={{
                                    overlay: `${modalStyles.overlay}`,
                                    modal: `${modalStyles.modal}`,
                                }}
                            >
                                <div className="text-white">
                                    <div className="pb-3">
                                        <h2 className="text-2xl text-violet-600">
                                            Add offer to {vendors.title} BaZaar
                                        </h2>
                                        <p>
                                            Simply enter the Transaction hash of
                                            the on-chain offer to group it with
                                            your BaZaar.
                                        </p>
                                    </div>
                                    <div className="grid">
                                        <h3 className="text-xl pb-3">
                                            Offer Transaction Hash:
                                        </h3>
                                        <input
                                            className="border-2 bg-slate-800 rounded-sm p-1 text-xl"
                                            value={offerInput}
                                            onChange={(event) => {
                                                setOfferInput(
                                                    event.target.value.trim()
                                                );
                                            }}
                                            type="text"
                                        />
                                        <button
                                            onClick={(event) => {
                                                addOffer(event);
                                            }}
                                            className="text-xl bg-violet-500 p-2 rounded-md pl-5 pr-5 mt-3"
                                        >
                                            Add Offer
                                        </button>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>

                    <div>
                        <div className="pb-5">
                            <h2 key={{}} className="text-2xl">
                                <u>Update Details</u>
                            </h2>
                            <p>
                                Update details such as vendor name, description,
                                socials an URL.
                            </p>
                        </div>
                        <button
                            disabled={true}
                            onClick={(event) => {
                                console.log("update details button pressed");
                            }}
                            className="l bg-violet-500 p-1 rounded-md pl-1 pr-1"
                        >
                            Update Details (soon)
                        </button>
                    </div>
                    <div>
                        <div>
                            <h2 key={{}} className="text-2xl">
                                <u>Support Zano BaZaar</u>
                            </h2>
                            <p>
                                zAnons, click the image below to support BaZaar
                                with a contribution, any amount is a great help!
                            </p>
                        </div>
                        <div className="pt-5">
                            <Link href="/">
                                <Image
                                    src={Support}
                                    alt=""
                                    // height={{}}
                                    width={130}
                                ></Image>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

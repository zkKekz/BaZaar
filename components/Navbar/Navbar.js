import React from "react";

import { useState } from "react";

import styles from "../../styles/Navbar.module.css";

import Image from "next/image";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import BazaarLogo from "../../assets/images/bazaar.svg";

export const Navbar = () => {
    const [menuState, setMenuState] = useState("hidden");

    const [txHashLogin, settxHashLogin] = useState("");
    const [secretLogin, setSecretLogin] = useState("");

    const logIn = (event) => {
        event.preventDefault();

        // vendors.forEach((value, index) => {
        //     if (value.tx_hash == formTx && value.secret == formSecret) {
        //         // console.log(value.hash == formTx && value.secret == formSecret);
        //         setAllow(true);
        //         setMongoId(value._id);
        //         setCurrentImage(value.image);
        //         setCurrentTitle(value.title);
        //         setCurrentDescription(value.description);
        //         setCurrentTwitter(value.socials.twitter);
        //         setCurrentDiscord(value.socials.discord);
        //         setCurrentTelegram(value.socials.telegram);
        //         setCurrentGithub(value.socials.github);
        //         setCurrentEmail(value.socials.email);
        //     }
        // });
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
            <div
                className={`${menuState} ${{}} pl-5 pr-5 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 pt-10 pb-10`}
            >
                <form className="pt-5">
                    <label htmlFor="tx">
                        <h3 className="text-xl pb-3">OG Transaction Hash:</h3>
                    </label>
                    <input
                        className="border-2 bg-slate-800 rounded-sm p-1 text-xl"
                        type="text"
                        value={""}
                        onChange={(event) => {
                            console.log(event.target.value);
                        }}
                    />
                    <br />
                    <br />
                    <label htmlFor="secret">
                        <h3 className="text-xl pb-3">Vendor Secret:</h3>
                    </label>
                    <input
                        className="border-2 bg-slate-800 rounded-sm p-1 text-xl"
                        type="text"
                        value={""}
                        onChange={(event) => {
                            console.log(event.target.value);
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
        </nav>
    );
};

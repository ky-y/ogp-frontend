import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

import scss from "./index.module.scss";

const Header: FC = () => {
    const path = useRouter().pathname;

    return (
        <header className={ scss.header }>
            <div className="inner">
                <h1>
                    <span>ky-y.</span>
                    <span>OGP</span>
                </h1>

                <ul>
                    <li className={ path === "/" ? scss.current : "" }>
                        <Link href="/">
                            TOP
                        </Link>
                    </li>
                    <li className={ path === "/auth" ? scss.current : "" }>
                        <Link href="/auth">
                            Login / Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};
export default Header;
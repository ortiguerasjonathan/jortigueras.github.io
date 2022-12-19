import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="container light-bg flex justify-space">
            <span className="white">Copyright © {year} <Link href="/">Jonathan Ortigueras</Link> - All rights reserved.</span>
            <ul className="flex">
                <li>
                    <a href="https://www.linkedin.com/in/jonathan-ortigueras/" target="_blank" rel="noreferrer">
                        <Image src="/icons/linkedin.svg" width={24} height={24} alt="linkedin-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://ortiguerasjonathan.github.io/" target="_blank" rel="noreferrer">
                        <Image src="/icons/github.svg" width={24} height={24} alt="github-icon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}
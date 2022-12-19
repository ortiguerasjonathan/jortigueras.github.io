import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header className="container">
            <NavBar />
            <div className="header flex light-bg">
                <Image src="/images/jonathan-ortigueras.png" width={463} height={513} alt="Jonathan Ortigueras"  /> 
                <div>
                    <button>Senior Software Engineer</button>
                    <h1 className="white">Talk is cheap.</h1>
                    <h1 className="white">Show me the code!</h1>
                    <p className="gray">I code beautiful things, and I love what I do.</p>
                    <a className="green" href="mailto:ortiguerasjonathan@gmail.com">Let&#39;s chat!</a>
                </div>
            </div>
        </header>
    )
}
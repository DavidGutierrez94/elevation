'use client'
import Image from 'next/image'
import Hamburger from 'hamburger-react'
import { useState } from 'react'


const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <nav className="flex items-center justify-between px-4 bg-[#2e2e2e] text-white shadow lg:pl-8 h-[4.5rem]">
            <div className="flex w-40 items-center">
                <div className="hidden lg:block">
                    <Image
                        src="https://cdn.elevationchurch.org/images/ec.org/ElevationLogoWhite.svg"
                        alt="Elevation Church"
                        width={128}
                        height={32}
                    />
                </div>
            </div>

            <ul className="group hidden gap-4 uppercase lg:flex">
                <li className="flex">
                    <a
                        id="ec-central-nav-sermons"
                        target=""
                        className="text-content-small flex items-center capitalize transition duration-200 ease-in-out hover:!opacity-100 group-hover:opacity-60"
                        href="/sermons"
                    >
                        <span>Sermons</span>
                    </a>
                </li>
                <li className="flex">
                    <a
                        id="ec-central-nav-locations"
                        target=""
                        className="text-content-small flex items-center capitalize transition duration-200 ease-in-out hover:!opacity-100 group-hover:opacity-60"
                        href="/locations"
                    >
                        <span>Locations</span>
                    </a>
                </li>
                <li className="flex">
                    <a
                        id="ec-central-nav-about"
                        target=""
                        className="text-content-small flex items-center capitalize transition duration-200 ease-in-out hover:!opacity-100 group-hover:opacity-60"
                        href="https://elevationchurch.org/about/"
                    >
                        <span>About</span>
                    </a>
                </li>
                <li className="flex">
                    <a
                        id="ec-central-nav-get-involved"
                        target=""
                        className="text-content-small flex items-center capitalize transition duration-200 ease-in-out hover:!opacity-100 group-hover:opacity-60"
                        href="https://elevationchurch.org/get-involved/"
                    >
                        <span>Get Involved</span>
                    </a>
                </li>
                <li className="flex">
                    <a
                        id="ec-central-nav-store"
                        target="_blank"
                        className="text-content-small flex items-center capitalize transition duration-200 ease-in-out hover:!opacity-100 group-hover:opacity-60"
                        href="https://store.elevationchurch.org/"
                    >
                        <span>Store</span>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fal"
                            data-icon="arrow-up-right"
                            className="svg-inline--fa fa-arrow-up-right ml-[2px] h-4 w-4 pb-1 text-[#a3a3a3]"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                                fill="currentColor"
                                d="M336 96c8.8 0 16 7.2 16 16V336c0 8.8-7.2 16-16 16s-16-7.2-16-16V150.6L59.3 411.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L297.4 128H112c-8.8 0-16-7.2-16-16s7.2-16 16-16H336z"
                            ></path>
                        </svg>
                    </a>
                </li>
                <li className="flex">
                    <a
                        id="ec-central-nav-online"
                        target=""
                        className="text-content-small flex items-center capitalize transition duration-200 ease-in-out hover:!opacity-100 group-hover:opacity-60"
                        href="https://elevationchurch.org/online/"
                    >
                        <span>Online</span>
                    </a>
                </li>
                <li className="flex">
                    <a
                        id="ec-central-nav-giving"
                        target=""
                        className="text-content-small flex items-center capitalize transition duration-200 ease-in-out hover:!opacity-100 group-hover:opacity-60 text-orange-600"
                        href="https://elevationchurch.org/giving/"
                    >
                        <span>Giving</span>
                    </a>
                </li>
            </ul>
            <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color="#fff"
                size={20}
            />
        </nav>
    )
}

export default Navbar

const Footer = () => {
    return (
        <footer className="footer bg-white lg:py-8 flex min-h-screen flex-col items-center">
            <div className="mx-auto max-w-screen-xl">
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                        <h3 className="text-lg text-gray-600">About</h3>
                        <ul className="mt-2 text-gray-600 text-sm space-y-1">
                            <li className="text-black text-base">Beliefs</li>
                            <li className="text-black text-base">Values</li>
                            <li className="text-black text-base">Leadership</li>
                        </ul>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                        <h3 className="text-lg text-gray-600">Media</h3>
                        <ul className="mt-2 text-gray-600 text-sm space-y-1">
                            <li className="text-black text-base">Sermons</li>
                            <li className="text-black text-base">
                                Watch Online
                            </li>
                            <li className="text-black text-base">
                                Elevation Store
                            </li>
                            <li className="text-black text-base">Worship</li>
                            <li className="text-black text-base">Podcast</li>
                        </ul>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                        <h3 className="text-lg text-gray-600">Ministries</h3>
                        <ul className="mt-2 text-gray-600 text-sm space-y-1">
                            <li className="text-black text-base">eGroups</li>
                            <li className="text-black text-base">eKidz</li>
                            <li className="text-black text-base  after:content-['_↗']">
                                Outreach
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                        <h3 className="text-lg text-gray-600">Opportunities</h3>
                        <ul className="mt-2 text-gray-600 text-sm space-y-1">
                            <li className="text-black text-base">Jobs</li>
                            <li className="text-black text-base">
                                Internships
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                        <h3 className="text-lg text-gray-600">Join Us</h3>
                        <ul className="mt-2 text-gray-600 text-sm space-y-1">
                            <li className="text-black text-base">
                                Find a Location
                            </li>
                            <li className="text-black text-base">
                                Watch Parties
                            </li>
                            <li className="text-black text-base">Events</li>
                        </ul>
                        <h3 className="text-lg text-gray-600">Finance</h3>
                        <ul className="mt-2 text-gray-600 text-sm space-y-1">
                            <li className="text-black text-base">Giving</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap items-center px-1 mt-4 sm:mt-6">
                <p className="text-gray-600 text-lg ml-0">
                    11416 E. Independence Blvd, Suite N. Matthews, NC, 28105{' '}
                    <b>|</b>
                </p>

                <p className="text-orange-600 text-lg text-left">
                    (704) 246-0800
                </p>
            </div>
        </footer>
    )
}
export default Footer

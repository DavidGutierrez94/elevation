import Hero from '../components/Hero'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-16  bg-black ">
            <div className="mx-auto max-w-[1110px] sm:px-[15px] ">
                <Hero />
            </div>
            <div className="mx-auto flex w-screen max-w-[1110px] flex-row justify-between px-[15px] space-x-4">
                <div className="max-w-xl">
                    <h3 className="font-mulish text-2xl font-extrabold leading-8 text-white">
                        Navigating Not Enough
                    </h3>
                    <p className="font-mulish text-home-darkSecondary mb-4 text-[13px] font-extrabold leading-[15px] text-gray-600">
                        Pastor Steven Furtick • September 31, 2023
                    </p>
                    <p className="font-sans text-[13px] font-normal leading-[17px] text-white">
                        I am enough because He is enough. In “Navigating Not
                        Enough,” Pastor Steven Furtick reveals that if God put
                        you in it, then He’s given you what you need.
                    </p>
                </div>
                <div className="hidden max-w-sm shrink-0 md:block">
                    <div className="flex w-full min-w-[250px] flex-col items-center justify-start space-y-4 rounded-md bg-[#1C1C1E] p-8">
                        <p className=" text-center text-[20px] font-extrabold leading-6 md:text-[14px] md:leading-4 text-white">
                            Want to take what you learned from this sermon to
                            the next level?
                        </p>
                        <a
                            id="ec-egroups-sermon-discussion-navigating-not-enough-body-curriculum-page"
                            className="bg-white text-xs text-black rounded-sm font-extrabold px-4 py-3 text-center"
                            href="https://elevationchurch.org/egroups/studies/sermon-discussion/navigating-not-enough"
                        >
                            VIEW DISCUSSION QUESTIONS
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

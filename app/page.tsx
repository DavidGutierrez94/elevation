import Link from 'next/link'
import Hero from '../components/Hero'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    fas,
    faCircleDollarToSlot,
    faHeart,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { ImageData } from './Data/Data'
import ImageCard from '@/components/ImageCard'
import { Key } from 'react'

library.add(fab, fas, faCircleDollarToSlot, faHeart, faPaperPlane, faYoutube)
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-black ">
            <div className="container mx-auto w-screen max-w-[1110px] p-8">
                <div>
                    <Hero />
                </div>
            </div>

            <div className="mx-auto flex w-screen flex-wrap max-w-[1110px] flex-row justify-between  pt-8">
                <div className="max-w-xl mx-auto ">
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
                <div className="max-w-sm mx-auto">
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
            <div className="mx-auto flex w-screen max-w-[1110px] flex-row items-center justify-between p-8">
                <div className="flex h-full w-full flex-col items-center justify-end">
                    <Link rel="icon" href={'/give'}>
                        <FontAwesomeIcon
                            className="text-white group-hover:item-hidden group-active:item-hidden"
                            icon="circle-dollar-to-slot"
                            size="lg"
                        />
                    </Link>
                    <span className="text-white  text-[13px] text-extrabold capitalize group-hover:item-hidden group-active:item-hidden">
                        give now
                    </span>
                </div>
                <div className="flex h-full w-full flex-col items-center justify-end">
                    <Link rel="icon" href={'/give'}>
                        <FontAwesomeIcon
                            className="text-white hover:opacity-100 active:opacity-100"
                            icon={['fab', 'youtube']}
                            size="lg"
                        />
                    </Link>
                    <span className="text-white  text-[13px] text-extrabold capitalize group-hover:item-hidden group-active:item-hidden">
                        youtube
                    </span>
                </div>
                <div className="flex h-full w-full flex-col items-center justify-end">
                    <Link rel="icon" href={'/give'}>
                        <FontAwesomeIcon
                            className="text-white  h-5 w-5 group-hover:item-hidden group-active:item-hidden"
                            icon="heart"
                            size="lg"
                        />
                    </Link>
                    <span className="text-white  text-[13px] text-extrabold capitalize group-hover:item-hidden group-active:item-hidden">
                        follow us
                    </span>
                </div>
                <div className="flex h-full w-full flex-col items-center justify-end">
                    <Link rel="icon" href={'/give'}>
                        <FontAwesomeIcon
                            className="text-white  mr-1 h-5 w-5 group-hover:item-hidden group-active:item-hidden"
                            icon="paper-plane"
                            size="lg"
                        />
                    </Link>
                    <span className="text-white  text-[13px] text-extrabold capitalize  group-hover:item-hidden group-active:item-hidden">
                        share
                    </span>
                </div>
            </div>
            <div className="relative w-7/12 h-8">
                <h3 className="absolute left-0 text-2xl font-extrabold leading-8 text-white text-left">
                    Take your next step of fait
                </h3>
            </div>

            <div className="mx-auto flex overflow-x-auto flex-nowrap w-screen max-w-[1110px] flex-row items-center justify-between p-8">
                <div className="flex columns-4 gap-4 w-full">
                    {ImageData.map(
                        (data: {
                            id: Key | null | undefined
                            imageSrc: string
                            title: string
                            subtitle: string
                        }) => (
                            <ImageCard
                                key={data.id}
                                imageSrc={data.imageSrc}
                                title={data.title}
                                subtitle={data.subtitle}
                            />
                        )
                    )}
                </div>
            </div>
        </main>
    )
}

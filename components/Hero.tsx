'use client'

const Hero = () => {
    return (
        <div className="relative aspect-w-16 aspect-h-9">
            <iframe
                className=" w-full min-h-[240px] lg:h-[600px]"
                title="YouTube Video"
                src="https://www.youtube.com/embed/5DfYJP_osF0"
                allowFullScreen
                width={'100%'}
                height={'100%'}
            ></iframe>
        </div>
    )
}
export default Hero

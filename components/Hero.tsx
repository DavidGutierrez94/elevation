'use client'
import YouTube from 'react-youtube'

const Hero = () => {
    const opts = {
        height: '680',
        width: '1080',
    }
    return (
        <YouTube videoId="5DfYJP_osF0" opts={opts} className="w-full h-full" />
    )
}
export default Hero

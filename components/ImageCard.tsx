import React from 'react'

interface ImageCardProps {
    imageSrc: string
    title: string
    subtitle: string
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, title, subtitle }) => {
    return (
        <div className="relative rounded-lg overflow-hidden  min-w-[243px] min-h-[150px]">
            <img src={imageSrc} alt={title} className="w-full rounded-lg" />
            <div className="absolute inset-0 flex items-end justify-left bg-black bg-opacity-40 rounded-lg">
                <div className="text-white text-justify p-4">
                    <h2 className="text-xs">{subtitle}</h2>
                    <p className="text-sm font-bold">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default ImageCard

'use client'

import React, { FC } from 'react'
import Image, {StaticImageData} from 'next/image'
import useDevice from '../hooks/useDevice'

interface StarterImageProps {
  desktopImage: StaticImageData
  mobileImage:  StaticImageData
  alt?: string
  className?: string
  width?: number
  height?: number
}

const StarterImage: FC<StarterImageProps> = ({
  desktopImage,
  mobileImage,
  alt = 'starter_image',
  className = 'starter',
  width,
  height,
}) => {
  const isMobile = useDevice()
  const imageSrc = isMobile ? mobileImage : desktopImage

  return (
    <Image
      src={imageSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      priority
      sizes="(max-width: 768px) 100vw, 100vw"
    />
  )
}

export default StarterImage

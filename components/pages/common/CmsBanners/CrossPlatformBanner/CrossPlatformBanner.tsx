import React from 'react'
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'
import { CrossPlatformBannerData } from '../../../../../lib/cms'
import { Container } from "../../UI/Container"
import s from './CrossPlatformBanner.module.css'
import Image from 'next/image'

export type CrossPlatformBannerProps = {
  data: CrossPlatformBannerData
}

export const CrossPlatformBanner: React.FC<CrossPlatformBannerProps> = ({ data }) => {
  const { image, description, title } = data
  return (
    <Container>
      <div className='flex my-8 gap-8'>
        <div className='flex flex-col md:w-[50%]'>
          <div className='mb-5 text-2xl font-semibold'>{title}</div>
          <div className='block md:hidden'>
            <Image src={image?.url || ''} alt={image?.alternativeText || ''} width={image?.width} height={image?.height} />
          </div>
          <div className={s.desc}><ReactMarkdown rehypePlugins={[rehypeRaw]}>{description}</ReactMarkdown></div>
        </div>
        <div className='hidden md:block md:w-[50%]'>
          <Image src={image?.url || ''} alt={image?.alternativeText || ''} width={image?.width} height={image?.height} />
        </div>
      </div>
    </Container>
  )
}
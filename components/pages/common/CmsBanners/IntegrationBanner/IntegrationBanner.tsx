import Image from 'next/image'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { IntegrationBannerData } from '../../../../../lib/cms'
import { Container } from "../../UI/Container"
import s from './IntegrationBanner.module.css'

export type IntegrationBannerProps = {
  data: IntegrationBannerData
}

export const IntegrationBanner: React.FC<IntegrationBannerProps> = ({ data }) => {
  const { image, description, title } = data
  return (
    <Container>
      <div className='flex py-8 gap-8'>
        <div className='flex flex-col w-[50%]'>
          <div className='mb-5 text-text-primary font-semibold text-[1.75rem]'>{title}</div>
          <div className={s.desc}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{description}</ReactMarkdown>
          </div>
        </div>
        <div className='w-[50%]'>
          <Image src={image?.url || ''} alt={image?.alternativeText || ''} width={image?.width} height={image?.height} />
        </div>
      </div>
    </Container>
  )
}
import Image from 'next/image'
import React from 'react'
import { AboutBannerData } from '../../../../../lib/cms'
import { Container } from '../../UI/Container'
import s from './AboutBanner.module.css'
import cn from 'clsx'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

type AboutBannerProps = {
  data: AboutBannerData
}

export const AboutBanner: React.FC<AboutBannerProps> = ({ data }) => {
  const { items, description, image, isReversed, theme, title } = data

  const isDarkTheme = theme === 'dark'

  return (
    <Container>
      <div
        className={`flex flex-col md:${isReversed ? 'flex-row-reverse' : 'flex-row'} relative py-16 ${isReversed ? 'flex-row-reverse' : 'flex-row'} ${
          isDarkTheme ? 'bg-bg-primary' : 'bg-white'
        }`}
      >
        {isDarkTheme && <div className={s.bgBlock} />}
        <div className={cn(s.textBlock, `${isReversed && 'md:pl-36 pr-0 z-[3]'}`)}>
          <div
            className={`font-bold text-4xl md:text-[2.8rem] font-secondary mb-4 md:mb-8 ${
              isDarkTheme ? 'text-white' : 'text-[#000]'
            }`}
          >
            {title}
          </div>
          <div className="block md:hidden w-full">
            <Image src={image?.url || ''} alt={image?.alternativeText || ''} width={1440} height={306} />
          </div>
          <div className="text-heading pb-6">{description}</div>
          <div className="flex flex-wrap">
            {items.map(({ item }, index) => {
              return (
                <div
                  key={index}
                  className={cn(
                    s.textItem,
                    `${isDarkTheme ? 'text-white' : 'text-text-primary'} ${items.length > 1 && 'w-[45%] md:w-[50%]'}`
                  )}
                >
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>{item}</ReactMarkdown>
                </div>
              )
            })}
          </div>
        </div>
        <div className="hidden md:block w-[50%] z-[3]">
          <Image src={image?.url || ''} alt={image?.alternativeText || ''} width={1440} height={306} />
        </div>
      </div>
    </Container>
  )
}

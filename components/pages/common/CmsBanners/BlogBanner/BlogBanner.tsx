import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BlogBannerData } from '../../../../../lib/cms/types/page'
import { Container } from '../../UI/Container'
import Arrow from '../../../../icons/arrow-right.png'

type BlogBannerProps = {
  data: BlogBannerData
}

export const BlogBanner: React.FC<BlogBannerProps> = ({ data }) => {
  const { items } = data
  return (
    <Container>
      <div className="flex flex-col justify-center md:flex-row md:justify-evenly mb-12 gap-8">
        {items.map(({ description, image, link, title }, index) => (
          <div
            key={index}
            className={`md:w-[calc(33.3%-2rem)] shadow-[0_0_15px_rgba(0,0,0,.1)] max-w-[440px] flex flex-col self-stretch justify-start w-[${
              100 / items.length
            }%] bg-white`}
          >
            <Link href={link?.href || ''}>
              <div>
                <Image src={image?.url || ''} alt={image?.alternativeText || ''} width={440} height={306} />
              </div>
            </Link>
            <Link className="font-bold text-2xl pl-6 pt-4 pr-1 pb-4" href={link?.href || ''}>
              {title}
            </Link>
            <div className="pb-8 pl-6 text-heading flex-auto">{description}</div>
            <Link className="uppercase pl-6 flex gap-2 items-center pb-4" href={link?.href || ''}>
              <div>{link?.label || ''}</div>
              <div>
                <Image src={Arrow} alt="arrow" width={16} height={16} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  )
}

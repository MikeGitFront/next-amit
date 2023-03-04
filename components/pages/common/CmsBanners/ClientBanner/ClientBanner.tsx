import Image from "next/image"
import React from "react"
import { ClientBannerData } from "../../../../../lib/cms"
import { Container } from "../../UI/Container"

export type ClientBannerProps = {
  data: ClientBannerData
}

export const ClientBanner: React.FC<ClientBannerProps> = ({ data }) => {
  const { items, images } = data
  return (
    <Container>
      <div className='flex flex-col xl:flex-row'>
        <div className='flex flex-col gap-4 xl:w-[33.3%]'>
          {items.map(({ description, image, title }, index) => {
            return (
              <div key={index} className="gap-6 flex items-center mb-4">
                <div className="min-w-[50px] h-[50px]">
                  <Image src={image?.url || ""} alt={image?.alternativeText || ""} width={50} height={50} />
                </div>
                <div className='flex flex-col'>
                  <div className="text-text-primary text-xl font-semibold mb-2">{title}</div>
                  <div className="text-heading xl:max-w-[23rem]">{description}</div>
                </div>
              </div>
            )
          })}
        </div>
        <div className='xl:w-[33.3%] flex flex-col sm:flex-row items-center sm:items-start gap-4 justify-center align-center'>
          {images?.map((image, index) => (
            <div key={index} className='flex items-center'>
              <Image src={image?.url || ""} alt={image?.alternativeText || ""} width={220} height={140} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
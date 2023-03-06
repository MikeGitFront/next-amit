import Image from 'next/image'
import React from 'react'
import { ModelsBannerData } from '../../../../../lib/cms'
import { Container } from '../../UI/Container'

type ModelsBannerProps = {
  data: ModelsBannerData
}

export const ModelsBanner: React.FC<ModelsBannerProps> = ({ data }) => {
  const { description, items, title } = data

  return (
    <Container>
      <div className="flex flex-col md:flex-row md:px-8 py-4">
        <div className="md:w-[50%]">
          <div className="text-4xl md:text-[2.8rem] font-secondary font-bold max-w-[500px] mb-4 md:mb-8">{title}</div>
          <div className="text-heading max-w-[500px]">{description}</div>
        </div>
        <div className="md:w-[50%] my-8 relative flex flex-wrap gap-4">
          {items.map(({ image, title }, index) => {
            return (
              <div key={index} className="w-[calc(50%-0.5rem)] gap-6 flex flex-col md:flex-row items-center mb-4">
                <div className="min-w-[100px] h-[100px] p-5 rounded-full shadow-[0_0_15px_rgba(0,0,0,.1)] flex items-center justify-center">
                  <Image src={image?.url || ''} alt={image?.alternativeText || ''} width={60} height={60} />
                </div>
                <p className="text-xl max-w-[150px] text-center md:text-start break-words">{title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}

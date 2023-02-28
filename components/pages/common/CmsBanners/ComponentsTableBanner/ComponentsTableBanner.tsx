import React from "react"
import { ComponentsTableBannerData } from "../../../../../lib/cms"
import { Container } from "../../UI/Container"
import CheckMark from '../../../../icons/check-mark.png'
import Image from "next/image"
import { Button } from "../../UI/Button"

export type ComponentsTableBannerProps = {
  data: ComponentsTableBannerData
}


export const ComponentsTableBanner: React.FC<ComponentsTableBannerProps> = ({ data }) => {
  const { description, title, headers, rows } = data
  return (
    <Container>
      <div className="flex flex-col my-10">
        <div className="text-text-primary text-[1.75rem] font-semibold pb-2 mb-2">{title}</div>
        <div className="text-text-primary pb-2 mb-2">{description}</div>
        <div className="grid grid-cols-[repeat(4,1fr)] text-text-primary w-full ">
          {headers.map((text, index) => {
            return (
              <div key={index} className="border border-gray-6 px-1 min-h-[3rem] font-semibold fron-bold flex items-center justify-center">{text}</div>
            )
          })}
          {rows.map(({ items }) => items.map((item, index) =>
            <div key={index} className={`border px-1 flex items-center justify-center min-h-[3rem] border-gray-6`}>
              {item}
            </div>))}
        </div>
      </div>
    </Container>
  )
}
import React, { useCallback, useState } from "react"
import { ComponentsTableBannerData } from "../../../../../lib/cms"
import { Container } from "../../UI/Container"
import CheckMark from "../../../../icons/check-mark.png"
import ArrowDown from "../../../../icons/arrow-down.svg"
import Image from "next/image"
import { Button } from "../../UI/Button"

export type ComponentsTableBannerProps = {
  data: ComponentsTableBannerData
}


export const ComponentsTableBanner: React.FC<ComponentsTableBannerProps> = ({ data }) => {
  const { description, title, headers, rows } = data

  const [mobileHeaders, setMobileHeaders] = useState(() => headers.map((item, index) => ({ key: index, isActive: false, name: item })))

  const handleOpen = useCallback((key: number) => {
    setMobileHeaders(prev => {
      const previousData = [...prev]
      const item = prev.find(item => item.key === key)!
      previousData.splice(previousData.indexOf(item), 1, { ...item, isActive: !item.isActive })
      return [...previousData]
    })
  }, [])

  const mobileTabData = useCallback((name: string) => {
    const headerIndex = headers.findIndex(header => header === name)
    const tabData = rows.map(row => {
      return row.items[headerIndex]
    })
    return (
      <div className="grid grid-cols-[1fr] px-4 py-2 border border-gray-6 w-full">
        {tabData.map((text) => (
            <div className="min-h-[3rem] flex justify-start pb-4 pt-3 border-b-[1px] border-gray-6">{text}</div>
        ))}
      </div>
    )
  }, [])

  return (
    <Container>
      <div className="flex flex-col my-1">
        <div className="text-text-primary text-[1.75rem] font-semibold pb-2 mb-2">{title}</div>
        <div className="text-text-primary pb-2 mb-2">{description}</div>
        <div className="hidden md:grid grid-cols-[repeat(4,1fr)] text-text-primary w-full ">
          {headers.map((text, index) => {
            return (
              <div key={index} className="border border-gray-6 px-1 min-h-[3rem] font-semibold fron-bold flex items-center justify-center">{text}</div>
            )
          })}
          {rows.map(({ items }) => items.map((item, index) =>
            <div key={index} className={"border px-1 flex items-center justify-center min-h-[3rem] border-gray-6"}>
              {item}
            </div>))}
        </div>
        <div className="w-full md:hidden">
          {mobileHeaders.map(({ isActive, name, key }, index) => {
            return (
              <div key={index} className="flex flex-col items-center justify-center mb-[0.6rem]">
                <button onClick={() => handleOpen(key)} className="border border-[#e5e7eb] w-full min-h-[3.75rem] shadow-[0_0_20px_rgba(0,0,0,.05)] flex text-2xl text-text-primary justify-between items-center cursor-pointer">
                  <div className="ml-4 max-w-[75%] sm:ml-6">{name}</div>
                  <div className="w-12"><Image src={ArrowDown} className={` ${isActive ? "rotate-180" : ""}`} alt="check mark icon" width={18} height={14} /></div>
                </button>
                {isActive && (
                  mobileTabData(name)
                )}
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}
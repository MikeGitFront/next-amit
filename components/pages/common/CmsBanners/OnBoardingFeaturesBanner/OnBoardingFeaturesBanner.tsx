import React, { useCallback, useState } from 'react'
import { OnBoardingFeaturesBannerData } from '../../../../../lib/cms'
import { Container } from '../../UI/Container'
import CheckMark from '../../../../icons/check-mark.png'
import ArrowDown from '../../../../icons/arrow-down.svg'
import Image from 'next/image'
import { Button } from '../../UI/Button'

export type OnBoardingFeaturesBannerProps = {
  data: OnBoardingFeaturesBannerData
}

const BUTTONS_AMOUNT = ['0', '0', '0'].fill('GET A QUOTE' as never, 0, 3) as string[]
const getBgColor = ['#fff4cc', '#e9f5ff', '#def4e4']

export const OnBoardingFeaturesBanner: React.FC<OnBoardingFeaturesBannerProps> = ({ data }) => {
  const { description, title, headers, rows } = data

  const [mobileHeaders, setMobileHeaders] = useState(() =>
    headers.map((item, index) => ({ key: index, isActive: false, name: item, bgColor: getBgColor[index] }))
  )
  const handleOpen = useCallback((key: number) => {
    setMobileHeaders((prev) => {
      const previousData = [...prev]
      const item = prev.find((item) => item.key === key)!
      previousData.splice(previousData.indexOf(item), 1, { ...item, isActive: !item.isActive })
      return [...previousData]
    })
  }, [])

  const mobileTabData = useCallback((name: string) => {
    const headerIndex = headers.findIndex((header) => header === name)
    const tabData = rows
      .map((row) => {
        return row.items.map((item, index) => [index === 0 && item, row.items[headerIndex + 1]])
      })
      .map((item) => item[0])
    return (
      <div className="grid grid-cols-[150px_1fr] px-4 py-2 border border-gray-6 w-full">
        {tabData.map(([title, text]) => (
          <>
            <div className="min-h-[3rem] flex justify-start pb-4 pt-3 border-b-[1px] border-gray-6">{title}</div>
            <div className="min-h-[3rem] flex items-center justify-end text-right border-b-[1px] border-gray-6">
              {text === 'yes' ? <Image src={CheckMark} alt="check mark icon" width={18} height={14} /> : text}
            </div>
          </>
        ))}
        <div className="flex items-center col-span-2 justify-center mt-4 min-h-[3rem]">
          <Button href="/contact-us" type="primary">
            GET A QUOTE
          </Button>
        </div>
      </div>
    )
  }, [])
  return (
    <Container>
      <div className="flex flex-col items-center mb-16">
        <div className="text-text-primary text-4xl md:text-[2.8rem] font-bold font-secondary pb-2 mb-2">{title}</div>
        <div className="text-heading pb-2 mb-2">{description}</div>
        <div className="hidden md:grid grid-cols-[repeat(4,1fr)] text-text-primary w-full max-w-[72rem]">
          <div className="col-span-1 min-h-[3rem]"></div>
          {headers.map((text, index) => {
            return (
              <div key={index} className="min-h-[3rem] text-[20px] fron-bold flex items-center justify-center">
                {text}
              </div>
            )
          })}
          {rows.map(({ items }) =>
            items.map((item, index) => (
              <div
                key={index}
                className={`border px-1 flex items-center ${index % 4 === 0 && 'font-semibold'} justify-${
                  index % 4 !== 0 ? 'center' : 'start'
                } min-h-[3rem] border-gray-6`}
              >
                {item === 'yes' ? <Image src={CheckMark} alt="check mark icon" width={18} height={14} /> : item}
              </div>
            ))
          )}
          <div className="col-span-1 min-h-[3rem]"></div>
          {BUTTONS_AMOUNT.map((text, index) => (
            <div key={index} className="flex items-center justify-center mt-4 col-span-1 min-h-[3rem]">
              <Button href="/contact-us" type="primary">
                {text}
              </Button>
            </div>
          ))}
        </div>
        <div className="w-full md:hidden">
          {mobileHeaders.map(({ isActive, name, key, bgColor }, index) => {
            console.log(index, bgColor)
            return (
              <div key={index} className="flex flex-col items-center justify-center mb-[0.6rem]">
                <button
                  onClick={() => handleOpen(key)}
                  className="border border-[#e5e7eb] w-full min-h-[3.75rem] shadow-[0_0_20px_rgba(0,0,0,.05)] flex text-2xl text-text-primary justify-between items-center cursor-pointer relative transition-all"
                >
                  <div className={`absolute bg-[${bgColor}] left-0 top-0 h-full transition-all duration-700 -z-10 ${isActive ? 'w-full' : 'w-[19%]'} `}></div>
                  <div className="ml-6">{name}</div>
                  <div className="w-12">
                    <Image
                      src={ArrowDown}
                      className={` ${isActive ? 'rotate-180' : ''}`}
                      alt="check mark icon"
                      width={18}
                      height={14}
                    />
                  </div>
                </button>
                {isActive && mobileTabData(name)}
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}

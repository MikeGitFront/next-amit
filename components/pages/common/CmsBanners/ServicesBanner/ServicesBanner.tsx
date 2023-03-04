import Image from "next/image"
import React, { useCallback, useMemo, useState } from "react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import { ServicesBannerData } from "../../../../../lib/cms/types/page"
import cn from "clsx"
import s from "./ServicesBanner.module.css"
import { Container } from "../../UI/Container"
import { useScreenWidth } from "../../../../hooks/useScreenWidth"

type ServicesBannerProps = {
  data: ServicesBannerData
}

export const ServicesBanner: React.FC<ServicesBannerProps> = ({ data }) => {
  const { md } = useScreenWidth()
  const { tabs } = data

  const [selectedTab, setSelectedTab] = useState(tabs[0].title)

  const headings = useMemo(() => tabs.map(tab => ({ title: tab.title, image: tab.image })), [tabs])

  const content = useCallback((tabId: string) => {
    if (!tabId) {
      return null
    }
    const tabsContent = tabs.reduce((acc, tab) => ({ ...acc, [tab.title]: tab.content }), {} as Record<string, ServicesBannerData["tabs"][0]["content"]>)
    const { description, title, image } = tabsContent[tabId]

    return (
      <div className="px-10 pt-10 shadow-[0_0_15px_rgba(0,0,0,.15)] mb-4 border-0 flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full md:w-[50%]">
          <div className="text-3xl font-bold pb-8 md:pb-0">{title}</div>
          {!md && <div className="w-full md:w-[50%]">
            <Image src={image?.url || ""} alt={image?.alternativeText || ""} width={image?.width} height={image?.height} />
          </div>}
          <div className={s.text}><ReactMarkdown rehypePlugins={[rehypeRaw]}>{description}</ReactMarkdown></div>
        </div>
        {md && <div className="w-full md:w-[50%]">
          <Image src={image?.url || ""} alt={image?.alternativeText || ""} width={image?.width} height={image?.height} />
        </div>}                
      </div>
    )
  }, [tabs, md])

  const handleOpenTab = useCallback((title: string) => {
    if (selectedTab === title && !md) {
      setSelectedTab("")
      return
    }
    setSelectedTab(title)
  }, [md, selectedTab])

  return (
    <Container className="flex flex-col">
      <div className="flex flex-col flex-wrap md:flex-nowrap md:flex-row gap-8 mb-14">
        {headings.map(({ title, image }, index) => {
          return (
            <>
              <button key={index} className={cn(s.headingItem, `${selectedTab === title ? "bg-[#dbd8d7] before:content-[\"\"]" : "bg-[#fff]"}`)} onClick={() => handleOpenTab(title)}>
                <div>
                  <Image style={{ "objectFit": "contain" }} src={image?.url || ""} alt={image?.alternativeText || ""} width={image?.width} height={image?.height} />
                </div>
                <div className={`text-xl font-medium w-[70%] ${selectedTab === title ? "text-[#fff]" : "text-text-primary"}`}>{title}</div>
              </button>
              {!md && title === selectedTab && (
                content(title)
              )}
            </>
          )
        })}

      </div>
      {md && <div>
        {content(selectedTab)}
      </div>}
    </Container>
  )
}
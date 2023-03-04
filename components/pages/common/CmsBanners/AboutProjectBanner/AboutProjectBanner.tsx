import React from "react"
import rehypeRaw from "rehype-raw"
import ReactMarkdown from "react-markdown"
import { AboutProjectBannerData } from "../../../../../lib/cms"
import { Container } from "../../UI/Container"
import s from "./AboutProjectBanner.module.css"

export type AboutProjectBannerProps = {
  data: AboutProjectBannerData
}

export const AboutProjectBanner: React.FC<AboutProjectBannerProps> = ({ data }) => {
  const { title, description } = data
  return (
    <Container>
      <div className='py-8'>
        <div className='text-2xl font-semibold text-text-primary mb-5'>{title}</div>
        <div className={s.desc}><ReactMarkdown rehypePlugins={[rehypeRaw]}>{description}</ReactMarkdown></div>
      </div>
    </Container>
  )
}
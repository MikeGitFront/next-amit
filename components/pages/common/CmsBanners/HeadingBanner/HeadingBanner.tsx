import React from "react"
import rehypeRaw from "rehype-raw"
import ReactMarkdown from "react-markdown"
import { HeadingBannerData } from "../../../../../lib/cms"
import { Container } from "../../UI/Container"
import s from "./HeadingBanner.module.css"

export type HeadingBannerProps = {
  data: HeadingBannerData
}

export const HeadingBanner: React.FC<HeadingBannerProps> = ({ data }) => {
  const { text } = data
  return (
    <Container className='flex justify-center'>
      <div className={s.heading}><ReactMarkdown rehypePlugins={[rehypeRaw]}>{text}</ReactMarkdown></div>
    </Container>
  )
}
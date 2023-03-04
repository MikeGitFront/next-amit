import React from "react"
import rehypeRaw from "rehype-raw"
import ReactMarkdown from "react-markdown"
import { RichTextBannerData } from "../../../../../lib/cms"
import { Container } from "../../UI/Container"
import s from "./RichTextBanner.module.css"

export type RichTextBannerPropa = {
  data: RichTextBannerData
}

export const RichTextBanner: React.FC<RichTextBannerPropa> = ({ data }) => {
  const { text } = data
  return (
    <Container>
      <div className={s.text}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{text}</ReactMarkdown>
      </div>
    </Container>
  )
}
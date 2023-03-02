import Image from "next/image"
import React from "react"
import { ProjectsBannerData } from "../../../../../lib/cms/types/page"
import ReactMarkdown from 'react-markdown'
import rehypeRaw from "rehype-raw"
import s from './ProjectsBanner.module.css'
import { Container } from "../../UI/Container"

type ProjectsBannerProps = {
  data: ProjectsBannerData
}

export const ProjectsBanner: React.FC<ProjectsBannerProps> = ({ data }) => {
  const { image, mainDescription, text, title, projects } = data
  return (
    <Container>
      <div className="flex flex-col items-center relative">
        <div className={s.descriptionWrapper}>
          <span className={s.mainDescription}>{mainDescription}</span>
        </div>
        <div className={s.projects}>
          {projects.map(({ description, image, title }, index) => {
            return (
              <div className={s.blogItem} key={index}>
                <div className="flex justify-center mt-8 "><Image style={{ "objectFit": 'contain' }} src={image?.url || ''} alt={image?.alternativeText || ''} width={image?.width} height={image?.height} /></div>
                <span className="text-lg md:text-xl text-text-primary font-bold my-4 pb-4 text-center">{title}</span>
                <span className="text-[13px] md:text-base uppercase text-heading pb-4">{description}</span>
              </div>)
          })}
        </div>
        <div className={s.blog}>
          <div className="hidden md:block md:w-[50%]">
            <Image src={image?.url || ''} alt={image?.alternativeText || ''} width={680} height={500} />
          </div>
          <div className="w-full md:w-[50%] flex flex-col md:pl-36">
            <span className="font-secondary text-3xl md:text-5xl font-bold text-[#fff] mb-2">{title}</span>
            <div className="md:hidden block">
              <Image src={image?.url || ''} alt={image?.alternativeText || ''} width={680} height={500} />
            </div>
            <span className="text-heading text-[1.125rem] max-w-xl mb-8">{text[0]}</span>
            <span className="text-[#fff] border-l-2 border-primary pl-4 text-base">{<ReactMarkdown rehypePlugins={[rehypeRaw]}>{text[1]}</ReactMarkdown>}</span>
          </div>
        </div>
      </div>
    </Container>
  )
}
import React from "react"
import { PageBlock } from '../../../lib/cms/types/page'
import { Blocks } from "../common/Blocks"
import s from './CaseStudies.module.css'

type CaseStudiesPageProps = {
  blocks: PageBlock[]
  title: string
}

const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ blocks, title }) => {
  console.log('caseStudiesBlocks', blocks, title)
  return (
    <>
      <Blocks blocks={blocks} />
      <div className={s.bgBlock} />
    </>
  )
}

export default CaseStudiesPage
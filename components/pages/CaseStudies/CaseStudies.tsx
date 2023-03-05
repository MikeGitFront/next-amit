import { useRouter } from 'next/router'
import React from 'react'
import { PageBlock } from '../../../lib/cms/types/page'
import { Blocks } from '../common/Blocks'
import s from './CaseStudies.module.css'

type CaseStudiesPageProps = {
  blocks: PageBlock[]
  title: string
}

const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ blocks }) => {
  const { asPath } = useRouter()

  return (
    <>
      <Blocks blocks={blocks} />
      {asPath === '/case-studies' && <div className={s.bgBlock} />}
    </>
  )
}

export default CaseStudiesPage

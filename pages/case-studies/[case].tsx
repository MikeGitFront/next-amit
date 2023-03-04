import { getPageData } from "../../lib/page-data"
import { getPageContentOperation } from "../../lib/cms/operations/get-page-content"
import { CaseStudiesPage } from "../../components/pages"
import { getStaticPagePathsOperation } from "../../lib/cms/operations/get-static-page-paths"

export async function getStaticPaths() {
  const { paths } = await getStaticPagePathsOperation("/case-studies")
  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: { params: { case: string } }) {
  const { header, footer } = await getPageData()
  const { blocks, title } = await getPageContentOperation(`/case-studies/${params.case}`)

  return {
    props: {
      header,
      footer,
      blocks,
      title,
    }
  }
}

export default CaseStudiesPage

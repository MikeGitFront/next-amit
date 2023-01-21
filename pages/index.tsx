import { getPageData } from '../lib/page-data'
import { getPageContentOperation } from '../lib/cms/operations/get-page-content'
import { HomePage } from '../components/pages'

export async function getStaticProps() {
  const { header } = await getPageData()

  const { blocks } = await getPageContentOperation()

  return {
    props: {
      header,
      blocks,
    }
  }
}

export default HomePage

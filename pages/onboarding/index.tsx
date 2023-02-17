import { getPageData } from '../../lib/page-data'
import { getPageContentOperation } from '../../lib/cms/operations/get-page-content'
import { OnBoardingPage } from '../../components/pages'

export async function getStaticProps() {
  const { header, footer } = await getPageData()

  const { blocks, title } = await getPageContentOperation('/onboarding')

  return {
    props: {
      header,
      footer,
      blocks,
      title,
    }
  }
}

export default OnBoardingPage

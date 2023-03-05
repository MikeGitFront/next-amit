import { getPageData } from '../../../lib/page-data'
import { OnBoardingStartPage } from '../../../components/pages'

export async function getStaticProps() {
  const { header, footer } = await getPageData()


  return {
    props: {
      header,
      footer,
    },
  }
}

export default OnBoardingStartPage

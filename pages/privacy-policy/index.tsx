import { getPageData } from '../../lib/page-data'
import { PrivacyPolicyPage } from '../../components'
import { getPrivacyPolicyOpertion } from '../../lib/cms/operations/get-privacy-policy'

export async function getStaticProps() {
  const { header, footer } = await getPageData()

  const { blocks, title } = await getPrivacyPolicyOpertion('/privacy-policy')

  return {
    props: {
      header,
      footer,
      blocks,
      title,
    },
  }
}

export default PrivacyPolicyPage

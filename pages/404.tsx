import { GetStaticPropsContext } from 'next'
import { getPageData } from '../lib/page-data'

export async function getStaticProps(context: GetStaticPropsContext) {
  const { header, footer } = await getPageData()
  return {
    props: {
      header,
      footer,
    },
    revalidate: 200,
  }
}

export default function NotFount() {
  return <div className="flex items-center justify-center py-20 mx-8">Page Not Found</div>
}

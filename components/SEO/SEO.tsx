import Head from 'next/head'

import config from './seo_meta.json'

const SEO = () => {
  /**
   * @see https://nextjs.org/docs/api-reference/next/head
   *
   * meta or any other elements need to be contained as direct children of the Head element,
   * or wrapped into maximum one level of <React.Fragment> or arrays
   * otherwise the tags won't be correctly picked up on client-side navigations.
   *
   * The key property makes the tag is only rendered once,
   */
  return (
    <Head>
      <title key="title">{config.title}</title>
      <meta key="description" name="description" content={config.description} />
      <meta key="og:type" property="og:type" content={config.openGraph.type} />
      <meta key="og:title" property="og:title" content={config.openGraph.title} />
      <meta key="og:description" property="og:description" content={config.openGraph.description} />
      <meta key="og:site_name" property="og:site_name" content={config.openGraph.site_name} />
    </Head>
  )
}

export default SEO
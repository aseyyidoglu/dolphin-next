/* 
Generate metadata for every page by default, and allow page-specific meta tags for SEO
Reference: https://www.oncrawl.com/technical-seo/top-5-meta-tags-improve-seo/
*/

import Head from 'next/head'

export default function Meta( props ) {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      
      // Custom meta tags
      {props.tags.map((tag) => {
        return (<meta name={tag.name} content={tag.content} />)
      })}

    </Head>
  )
}
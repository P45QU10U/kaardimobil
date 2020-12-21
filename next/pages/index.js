import Head from 'next/head'
import Link from 'next/link'
import Img from 'next/image'

import { groq } from 'next-sanity'
import Layout, { siteTitle } from '../components/layout'

import Typo from '../components/typography'

// import { getSortedPostsData } from '../lib/posts'
import InterventionPlace from '../screens/interventionPlace'

import { getClient, usePreviewSubscription, urlFor, PortableText } from '../lib/sanity'

const postQuery = groq`*[_type == 'storeSettings'][0]{
  name,
  address,
  openinghours,
  phonenumber,
  interventiondistance,
  geocoords,
  "socialnetworks": *[_type == "socialnetwork"]
}`

export async function getStaticProps({ preview = false }) {
  const donnees = await getClient(preview).fetch(postQuery)

  return {
    props: {
      preview,
      data: donnees,
    },
  }
}

export default function Home({ data, preview }) {
  const { data: paramsEnterprise } = usePreviewSubscription(postQuery, {
    initialData: data,
    enabled: preview,
  })

  const { address, name } = paramsEnterprise

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="min-h-screen ">
      <h2 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
        Un technicien automobile qui vient à vous !
      </h2>
  <div className="md:flex">
    <div className="md:flex-shrink-0">
      <img className="h-48 w-full object-cover md:w-48" src="" alt="Man looking at item at a store" />
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>

      </section>
      <section>Prestations</section>
      <section>Prestations</section>
      <Img
        width={400}
        height={300}
        alt="car"
        src="https://images-na.ssl-images-amazon.com/images/I/71fcXUoSyXL._AC_SL1500_.jpg"
        className="detourage"
      />
      <div>{name}</div>
      <Typo />
      <InterventionPlace center={paramsEnterprise.geocoords} distanceMax={paramsEnterprise.interventiondistance} />
    </Layout>
  )
}

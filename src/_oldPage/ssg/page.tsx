import { NextPage, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const SSG: NextPage<Props> = ({ message }) => {
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはSSGされています</p>
        <p>{message}</p>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const timestamp = new Date().toLocaleDateString()
  const message = `${timestamp}にgetStaticPropsが実行されました`
  console.log(message)
  return {
    props: {
      message,
    },
  }
}

export default SSG

import {
  NextPage,
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Post: NextPage<Props> = ({ id }) => {
  const router = useRouter()

  if (router.isFallback) return <div>Loading...</div>

  return (
    <div>
      <Head>
        <title>SSG & getStaticPaths</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはSSGとgetStaticPathsが利用されています</p>
        <p>`/posts/${id}に対応するページです`</p>
      </main>
    </div>
  )
}

type Params = {
  id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        id: '1',
      },
    },
    {
      params: {
        id: '2',
      },
    },
    {
      params: {
        id: '3',
      },
    },
  ]

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (
  context: GetStaticPropsContext<Params>
) => {
  const id = context.params?.id

  return {
    props: {
      id,
    },
  }
}

export default Post

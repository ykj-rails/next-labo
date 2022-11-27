import { UserList } from '@/components/UserList'
import { Suspense, use } from 'react'
import Loading from './loading'

type Hello = {
  name: string
}

const fetchHello: () => Promise<Hello> = async () => {
  // データをキャッシュしない（getServerSidePropsと同様）
  const res = await fetch('http://localhost:3000/api/hello', {
    cache: 'no-cache',
  })
  return res.json()
}

const Page = () => {
  const hello = use(fetchHello())
  console.log(hello)

  return (
    <div>
      <h1>GitHub Users!</h1>
      <p>{`Hello: ${hello.name}`}</p>
      <Suspense fallback={<Loading />}>
        <UserList />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <UserList />
      </Suspense>
    </div>
  )
}

export default Page

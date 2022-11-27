import { use } from 'react'
import styles from './UserList.module.css'

type User = {
  id: number
  login: string
}

const fetchUsers: () => Promise<User[]> = async () => {
  // fetch() によるデータ取得は、デフォルトで cache: 'force-cache' となる
  // 手動で無効化されるまでリクエストデータをキャッシュする（getStaticPropsと同様）
  const res = await fetch('https://api.github.com/users')
  return res.json()
}

export const UserList = () => {
  const users = use(fetchUsers())

  return (
    <ul className={styles.list}>
      {users.map((user) => {
        return (
          <li key={user.id}>
            {user.id}: {user.login}
          </li>
        )
      })}
    </ul>
  )
}

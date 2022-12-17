import Head from 'next/head'
import LoginPage from '../components/Login'
import UserDashboard from '../components/UserDashboard'
import { useAuth } from '../context/AuthContext'

export default function Home() {
  const { currentUser } = useAuth()
  return (
    <>
      <Head>
        <title>Todo list</title>
        <meta name="description" content="Todo list app with firebase" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      {!currentUser && <LoginPage />}
      {currentUser && <UserDashboard/>}
    </>
  )
}

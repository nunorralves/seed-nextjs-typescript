import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next App Homepage</title>
      </Head>

      <main>
        <h1>Welcome to our new Next.js App Homepage</h1>
      </main>

      <footer>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          myCompany
        </a>
      </footer>
    </div>
  )
}

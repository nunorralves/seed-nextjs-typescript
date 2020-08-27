import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Next App Homepage</title>
      </Head>

      <main>
        <h1>Welcome to our new Next.js App Homepage</h1>
      </main>

      <footer>
        <a href="" target="_blank" rel="noopener noreferrer">
          Powered by myCompany
        </a>
      </footer>
    </div>
  );
};

export default Home;

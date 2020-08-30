import Head from 'next/head';

import Logo from '../assets/next-js.svg';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Next App Homepage</title>
      </Head>

      <main>
        <h1>Welcome to our new Next.js App Homepage</h1>
        <Logo />
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

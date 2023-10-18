import Head from 'next/head';

function Saludar() {
  return "Saludar";
}

function Amigos() {
  return (
    <div>
      <Head>
        <title>Vista de amigos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Vista de amigos
        </h1>
        
      </main>
    </div>
  );
}


export default Amigos
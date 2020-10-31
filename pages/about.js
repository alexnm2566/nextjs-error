import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const About = () => {
  const [state, setstate] = useState({ a: 5 });
  console.log("aa", state.a.toString());
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>ABOUT</h1>
      <Link href='/'>TO INDEX</Link>
      <button
        onClick={() => {
          setstate([]);
        }}
      >
        Check
      </button>
    </div>
  );
};

export default About;

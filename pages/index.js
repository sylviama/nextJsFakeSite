import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import React from 'react'
import { useState, useEffect } from 'react'
import { gql } from 'graphql-request';
import { request } from 'graphql-request';

function Home({ post, imageSize}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Fake Site Homework</title>
      </Head>

      <main>
        <h1 className={styles.title}>
          The world's greatest fake site
        </h1>
        <div style={{width:500}}>
          <p className={styles.description}>
            Create the world's greatest fake site and enjoy the breeze of fresh air when you complete it
          </p>
        </div>
        <button className={styles.button}>Do something awesome</button>

        <div className={styles.container} style={{ display: 'flex', justifyContent: 'space-between', padding: '50px'  }}>
          <div>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
          <div>
            <div className={styles.container} style={imageSize}>
              <img src="/assets/stockimage.png" className={styles.image} />
              <div className={styles.gradient}  style={imageSize}/>
              <img src="/assets/playbtn.png" className={styles.overlay} />
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
export default Home;




  export const GET_POSTS = gql`
      query {
        getVideo(id:811936442) {
          id
          title
          description
          thumbnail_small
          url
        }
      }
    `

const GRAPHQL_ENDPOINT = 'http://localhost:3000/api/graphql';

export async function getStaticProps() {
    const data = await request(GRAPHQL_ENDPOINT, GET_POSTS);
    return {
        props: {
            post: data.getVideo,
        },
    };
}

function FindImageSize() {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const image = new Image()
    image.onload = () => {
      setImageSize({ width: image.width, height: image.height })
    }
    image.src = '/assets/stockimage.jpg'
  }, [])
}

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react'
import { gql } from 'graphql-request';
import { request } from 'graphql-request';

function Home({ post}) {
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

        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '50px'  }}>
          <div style={{margin:'50px'}}>
            <h2>{post.title}</h2>
            <p style={{color:'#4C4C51'}}>{post.description}</p>
          </div>
          <div style={{margin:'50px'}}>
            <div className={styles.videocontainer}>
              <a href={post.url}>
                <img src="/assets/playbtn.png" className={styles.overlay} />
                <img src="/assets/stockimage.png" className={styles.image} />
                <div className={styles.gradient}/>
              </a>
            </div>
          </div>
        </div>

        <h2>Ready to have your cake and eat it too?</h2>
        <div style={{width:500, color:'#4C4C51'}}>
          <p>Start by designing the experience you have in mind. We'll guide you through each step. 
          If your experience meet the quality standards, you will hear more about what's next</p>
        </div>

        <div style={{ width:'1000px',display: 'flex', justifyContent: 'left', padding: '50px'}}>
          <div style={{ margin:'50px' }}>
            <li style={{listStyle:'none', color:'red', marginBottom:'5px', fontweight: 'bold'}}>Fakesite</li>
            <li style={{listStyle:'none', color:'grey'}}>About us</li>
            <li style={{listStyle:'none', color:'grey'}}>Press</li>
            <li style={{listStyle:'none', color:'grey'}}>Policies</li>
            <li style={{listStyle:'none', color:'grey'}}>Help</li>
          </div>

          <div style={{ margin:'50px' }}>
            <li style={{listStyle:'none', color:'red', marginBottom:'5px', fontweight: 'bold'}}>Account</li>
            <li style={{listStyle:'none', color:'grey'}}>Edit Profile</li>
            <li style={{listStyle:'none', color:'grey'}}>Friends</li>
            <li style={{listStyle:'none', color:'grey'}}>Social</li>
            <li style={{listStyle:'none', color:'grey'}}>Delete Profile</li>
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
      getVideo(id:804672860) {
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


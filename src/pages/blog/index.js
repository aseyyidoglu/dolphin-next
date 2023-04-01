import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/parts/header'
import Footer from '@/components/parts/footer'
import styles from './blog.module.css'

export default function Home() {
  const [posts, setPosts] = useState(
    [
      {
        title: "",
        body: "",
        userId: "",
      }
    ]
  )
  const [page, setPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)
  const [upperLimit, setUpperLimit] = useState(10)
  const [lowerLimit, setLowerLimit] = useState(1)
  
  useEffect(() => {
    const getPosts = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setPosts(json)
      })
    }
    return getPosts();
  }, []);

  useEffect(() => {
    const paginate = () => {
      const total_pages = Math.ceil(posts.length / {postPerPage}) + 1;
      console.log("total pages: "+{postPerPage})
      for (let i = 1; i < total_pages; i++) {
        return (
          <button type="button" onClick="">{i}</button>
        )
        //page_buttons = page_buttons+'<button type="button" onclick="paginateSetPage(`#blog`,'+i+')">'+i+'</button>';
      };
    }
    return paginate();
  }, [posts,page]);

  return (
    <>
      <Head>
        <title>All posts</title>
        <meta name="description" content="List of all blog posts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div id="left-sidebar">
        </div>
        <div id="main-content">
          <div id="blog" className="">
            {posts.map((post) => {
              return (<p>{post.title}</p>)
            })}
            {/*{() => paginate(postPerPage)}*/}
          </div>
        </div>
        <div id="right-sidebar">

        </div>
      </main>
      <Footer />
    </>
  )
}
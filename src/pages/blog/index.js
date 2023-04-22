import React, { useState, useEffect, useRef } from 'react';
import Layout from '@/components/layouts/default'

import styles from './blog.module.css'

export default function Page() {
  const [posts, setPosts] = useState(
    [
      {
        title: "",
        body: "",
        userId: "",
      }
    ]
  )
  const [isLoading, setIsLoading] = useState(true)
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
      .then(setIsLoading(false))}
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
      <main>
        <div id="left-sidebar">
        </div>
        <div id="main-content">
          <div id="blog" className="">
            {isLoading 
              ? "Loading..." 
              : posts.map((post) => {return (<p>{post.title}</p>)})
            }
            {/*{() => paginate(postPerPage)}*/}
          </div>
        </div>
        <div id="right-sidebar">
        </div>
      </main>
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout
      title="All posts"
      description="List of all posts"
      tags={[
        {name: "country", content: "australia"},
        {name: "field", content: "field-content"}
      ]}
    >
      {page}
    </Layout>
  )
}
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id="left-sidebar">
        </div>
        <div id="main-content">
          <div id="blog">
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <hr></hr>
          <div id="chatbot">
            <form id="form">
              <fieldset>
                <div><h3>Chatbot</h3></div>
                <div>
                  <label>Ask a question</label>
                  <textarea type="input"></textarea>
                </div>
                <div>
                  <button id="send-button" type="submit" onclick="askAI()">Send</button>
                </div>
              </fieldset>
            </form>
          </div>
          <hr></hr>
          <form id="form">
            <fieldset>
              <div><h3>User form</h3></div>
              <div>
                <label for="name">Name</label>
                <input id="name" type="text"></input>
              </div><div>
                <label for="phone">Phone</label>
                <input id="phone" type="text"></input>
              </div><div>
                <label for="email">Email</label>
                <input id="email" type="text"></input>
              </div><div>
                <label for="comment">Comments</label>
                <textarea id="comment" type="text"></textarea>
              </div><div>
                <button type="submit">Send</button></div>
            </fieldset>
          </form>
        </div>
        <div id="right-sidebar">

        </div>
      </main>
    </>
  )
}

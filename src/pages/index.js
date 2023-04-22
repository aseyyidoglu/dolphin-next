import Layout from '@/components/layouts/default'

import Button from '@/components/button/button'
import Form from '@/components/form/form'

export default function Page() {
  return (
    <>
      <main>
        <div id="left-sidebar">
        </div>
        <div id="main-content">
          <div id="blog">
            <h1>This is a sample blog text</h1>
            <p>Lorem ipsum dolor sit amet, <a href="">consecteturconsectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <strong>incididunt ut</strong> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, <a href="">consectetur</a> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul>
              <li>sesame</li>
              <li>beans</li>
              <li>yoghurt</li>
            </ul>
            <ol>
              <li>new york</li>
              <li>los angeles</li>
              <li>san francisco</li>
            </ol>
          </div>
          <hr></hr>
          <pre>
            <code>asds
              asdsasd
            </code>
          </pre>
          <Form
            id={'chatbot'}
            title={'Chatbot'}
            fields={[
              { name: 'Ask a question', type: 'textarea' },
              { name: 'Send', type: 'button' }
            ]}
            onClick={'#'} >
          </Form>
          <Form
            id={'123'}
            title={'Login Form'}
            fields={[
              { name: 'Username', type: 'text' },
              { name: 'Password', type: 'password' },
              { name: 'Comments', type: 'textarea' },
              { name: 'Send', type: 'button' }
            ]}
            onClick={'#'} >
          </Form>
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
      title="Welcome to the homepage"
      description="This is the homepage description"
      tags={[
        {name: "country", content: "australia"},
        {name: "field", content: "field-content"}
      ]}
    >
      {page}
    </Layout>
  )
}
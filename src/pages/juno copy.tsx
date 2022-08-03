import React from 'react'
// import Label from '../components/elements/label'
import Layout from '../components/layout'

const HEADER_1 = 'Why it is built'
const BODY_1_1 =
  'The application is built as open-source to enable developers, project managers, and other people to go through their list of emails in the most efficient way possible.'
const BODY_1_2 =
  'The system is based on the core principles of the Tempo Email client, consider the project an hommage - unfortunately, the Tempo project is no longer actively developed.'
const HEADER_2 = 'What to solve'
const BODY_2_1 =
  'The goal of Juno is to spend as little time as possible in the mailbox.'
const BODY_2_2 =
  'A clear list of to-dos will serve as a focus for your email processing. Going through the list of to-do or inbox items should be easy for both regular users and power users.'
const BODY_2_3 =
  'Files sent via email are considered as valuable as the email text, both the text and files should never be lost and presented clearly.'
const HEADER_3 = 'The development'

const Juno = () => {
  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <h1>Juno</h1>
        <h4 className="text-gray-500">
          The open-source Email Manager for Gmail.
        </h4>
        {/* <Label>
          <p>
            Juno is now in <span className="font-semibold">Private Beta</span>
          </p>
        </Label> */}
        <div className="max-w-prose my-10">
          <h2 className="text-center my-8">{HEADER_1}</h2>
          <p className="my-6">{BODY_1_1}</p>
          <p className="my-6">{BODY_1_2}</p>
        </div>
        <div className="max-w-prose my-10">
          <h2 className="text-center my-8">{HEADER_2}</h2>
          <p className="my-6">{BODY_2_1}</p>
          <p className="my-6">{BODY_2_2}</p>
          <p className="my-6">{BODY_2_3}</p>
        </div>
        <div className="max-w-prose my-10">
          <h2 className="text-center my-8">{HEADER_3}</h2>
          <p className="my-6">{BODY_2_1}</p>
          <p className="my-6">{BODY_2_2}</p>
          <p className="my-6">{BODY_2_3}</p>
        </div>
      </div>
    </Layout>
  )
}

export default Juno

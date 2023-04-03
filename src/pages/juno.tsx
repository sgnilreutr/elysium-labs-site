import BetaAccessForm from '@/components/BetaAccessForm'
import Header from '@/components/elements/Header'
import InlineLink from '@/components/elements/InlineLink'
import Stack from '@/components/elements/Stack'
import GoogleButton from '@/components/googleButton/GoogleButton'
import Docs from '@/components/infoBlocks/Docs'
import Feedback from '@/components/infoBlocks/Feedback'
import Layout from '@/components/Layout'
import SectionList from '@/components/SectionList'
import SEO from '@/components/Seo'
import UspGrid from '@/components/UspGrid'
import UspGridTwo from '@/components/UspGridJuno/UspGridTwo'

const sectionsData = [
  {
    title: 'Why we build it',
    content: (
      <>
        <p>
          The application is built as open-source to enable developers, project
          managers, and other people to go through their list of emails in the
          most efficient way possible.
        </p>
        <p>
          The system is based on the core principles of the Tempo Email client,
          consider the project an hommage - unfortunately, the Tempo project is
          no longer actively developed.
        </p>
      </>
    ),
  },
  {
    title: 'Development',
    content: (
      <>
        <p>
          Juno is developed as an open-source application. All the{' '}
          <InlineLink href="https://github.com/Elysium-Labs-EU/juno-core/tree/main">
            source code
          </InlineLink>{' '}
          is open and available to be read by anyone. You can start contributing
          right away, follow the instructions on the{' '}
          <InlineLink href="https://github.com/Elysium-Labs-EU/juno-core/tree/main#readme">
            README.md
          </InlineLink>{' '}
          file on the source code.
        </p>
        <p>
          More information can be found in the Development docs{' '}
          <InlineLink href="https://docs.elysiumlabs.io/docs/juno/development/">
            here.
          </InlineLink>
        </p>
        <p>
          On its turn Juno is applying the great work of other people who create
          the dependencies to make it all run smoothly. The current version of
          Juno contains these dependencies.
        </p>
      </>
    ),
  },
]

const Seo = {
  title: 'Juno',
  description: 'Redefining managing emails for Gmail on the Mac',
}

const JUNO_HEADER = 'Juno'
const JUNO_SUB_HEADER = 'Email efficiency redefined'

const JUNO_PROMOTION_HEADER = 'Coming soon on macOS, already on the web.'
const JUNO_PROMOTION_SUB_HEADER = 'Completely free. Open source.'

const Juno = () => {
  return (
    <Layout>
      <SEO title={Seo.title} description={Seo.description} />
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center w-full py-32 mx-auto max-w-7xl md:justify-center">
          <Header type="h1" className="md:text-8xl">
            {JUNO_HEADER}
          </Header>
          <Header
            type="h2"
            weight="font-regular"
            className="text-center md:text-4xl"
          >
            {JUNO_SUB_HEADER}
          </Header>
          <div className="flex flex-col items-center my-12">
            <p className="mt-4 text-xl text-gray-500">
              {JUNO_PROMOTION_HEADER}
            </p>
            <p className="mb-4 text-gray-500 ">{JUNO_PROMOTION_SUB_HEADER}</p>
            <div className="relative flex flex-col items-center gap-3 md:flex-row">
              <BetaAccessForm />
              <GoogleButton />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mx-4 max-w-7xl sm:mx-auto sm:w-full">
        <Stack align="center" direction="vertical" className="pb-24">
          <UspGridTwo />
          {/* <UspGrid /> */}
          <p>
            More information can be found in the Usage docs {''}
            <InlineLink href="https://docs.elysiumlabs.io/docs/juno/usage/">
              here.
            </InlineLink>
          </p>
        </Stack>
        <SectionList sectionsData={sectionsData} />
      </div>
      <Stack className="flex flex-row flex-1 pt-24 mx-auto max-w-7xl max-h-max">
        <Feedback />
        <Docs />
      </Stack>
    </Layout>
  )
}

export default Juno

export async function getStaticProps() {
  return {
    props: {},
  }
}

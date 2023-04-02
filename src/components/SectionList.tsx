import classNames from '@/lib/classNames'
import Stack from './elements/Stack'
import Section from './Section'

interface ISectionData {
  title: string
  icon?: JSX.Element
  content: JSX.Element
}

interface ISectionList extends React.HTMLAttributes<HTMLDivElement> {
  sectionsData: Array<ISectionData>
}

const SectionList = ({ sectionsData, ...rest }: ISectionList) => (
  <Stack
    direction="vertical"
    className={classNames('!gap-24', rest.className)}
    align="center"
  >
    {sectionsData.map(({ title, icon, content }, index) => (
      <Section
        key={index}
        header={
          <>
            {title}
            {icon ? (
              <span className="flex justify-center pt-2">{icon}</span>
            ) : null}
          </>
        }
      >
        <Stack direction="vertical" className="max-w-prose">
          {content}
        </Stack>
      </Section>
    ))}
  </Stack>
)

export default SectionList

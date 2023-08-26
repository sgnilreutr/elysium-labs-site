import type { ComponentPropsWithoutRef } from 'react'

import classNames from '@/lib/classNames'

import Stack from './elements/Stack'
import Section from './Section'

interface SectionData {
  content: JSX.Element
  icon?: JSX.Element
  title: string
}

interface SectionListProps extends ComponentPropsWithoutRef<'div'> {
  sectionsData: Array<SectionData>
}

const SectionList = ({ sectionsData, ...rest }: SectionListProps) => (
  <Stack
    direction="vertical"
    className={classNames('!gap-48', rest.className)}
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

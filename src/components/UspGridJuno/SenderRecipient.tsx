import Stack from '../elements/Stack'

interface SenderRecipientProps {
  body: string
  label: string
}

const SenderRecipient = ({ body, label }: SenderRecipientProps) => {
  return (
    <Stack spacing="mini" className="text-sm" align="start">
      <span className="text-neutral-300">{label}</span>
      <span className="text-neutral-400">{body}</span>
    </Stack>
  )
}

export default SenderRecipient

interface CopyToClipboardProps {
  toCopyItem: string
}

export default async function copyToClipboard({
  toCopyItem,
}: CopyToClipboardProps) {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!navigator.clipboard) {
    alert('Copy functionality not supported')
    return false
  }
  try {
    await navigator.clipboard.writeText(toCopyItem)
    return true
  } catch (err) {
    console.error('ERROR', err)
    return false
  }
}

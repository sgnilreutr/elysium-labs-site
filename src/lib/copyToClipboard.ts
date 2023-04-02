interface ICopyToClipboard {
  toCopyItem: string
}

export default async function copyToClipboard({
  toCopyItem,
}: ICopyToClipboard) {
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

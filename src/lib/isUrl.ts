/**
 * Checks whether the passed string is a valid URL that starts with http:// or https://.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} Returns `true` if the string is a valid URL that starts with http:// or https://, and `false` otherwise.
 *
 * @example
 *
 * console.log(isUrl('https://example.com')); // true
 * console.log(isUrl('http://example.com')); // true
 * console.log(isUrl('example.com')); // false
 * console.log(isUrl('not a url')); // false
 */

export default function isUrl(str: string): boolean {
  return /^https?:\/\//.test(str)
}

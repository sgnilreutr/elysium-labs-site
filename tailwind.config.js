/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{tsx,mdx}', './src/components/**/*.tsx'],
  theme: {
    extend: {
      extend: {
        keyframes: {
          hide: {
            from: { opacity: 1 },
            to: { opacity: 0 },
          },
          slideIn: {
            from: {
              maxWidth: 0,
              opacity: 0,
            },
            to: { maxWidth: 100, opacity: 1 },
          },
        },
        animation: {
          hide: 'hide 100ms ease-in',
          slideIn: 'slideIn 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        },
      },
    },
  },
  safelist: [
    {
      pattern: /gap-/,
    },
    {
      pattern: /items-/,
    },
    {
      pattern: /justify-/,
    },
  ],
  plugins: [],
}

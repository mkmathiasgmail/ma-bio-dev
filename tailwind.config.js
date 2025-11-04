/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
        'light-text': '#6b7280',
        'light-bg': '#f3f4f6',
      },
    },
  },
  plugins: [],
}

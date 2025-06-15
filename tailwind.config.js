// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/images/main.jpg')",  // 👈 correct path for public
        'logo-bg': "url('/images/logo.jpg')",
        'app-logo-bg': "url('/images/app_logo.png')",
      },
    },
  },
  plugins: [],
}


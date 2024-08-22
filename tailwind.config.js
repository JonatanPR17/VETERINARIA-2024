/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./*.html",
  ],
  theme: {
    extend: {
      colors:{
        'color-main':'#1f2b6c',
        'color-secundary':'#159be7',
        'color-terciario':'#bbcef3',
        'color-cuarto':'#f7f9f9',
        'color-letter':'#202023',
        'color-red':'#FE5F55',
        'color-green':'#35FF69',
        'color-fondo':'#f7f8fd',
        'whatsapp': '#25D366',
      },
      backgroundImage:{
        'image-page-main':"url('./assets/image/logo-page-main.jpg')"
      }
    },
    fontFamily:{
      'sans':'"Inter", sans-serif"'
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0F172A',   // Azul escuro para confiança/corporativo
          blue: '#2563EB',   // Azul primário para ações (buttons)
          green: '#10B981',  // Verde para sucesso/dinheiro
          light: '#F8FAFC',  // Fundo claro
          gray: '#64748B',   // Texto secundário
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        // Degradê mais sóbrio e profissional
        'corporate-gradient': 'linear-gradient(to right, #0F172A, #1E293B)',
      }
    },
  },
  plugins: [],
}
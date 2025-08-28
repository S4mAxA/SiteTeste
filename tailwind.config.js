/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette Luna client - thème sombre premium
        'luna': {
          'bg': '#0B0F1A',
          'bg-secondary': '#111827',
          'card': 'rgba(17, 24, 39, 0.8)',
          'border': 'rgba(91, 140, 255, 0.2)',
          'accent': '#5B8CFF',
          'accent-secondary': '#A45CFF',
          'text': '#F9FAFB',
          'text-secondary': '#D1D5DB',
          'muted': '#6B7280'
        },
        // Dégradés néon
        'neon': {
          'blue': '#5B8CFF',
          'violet': '#A45CFF',
          'cyan': '#06B6D4',
          'pink': '#EC4899'
        }
      },
      fontFamily: {
        'display': ['Outfit', 'Inter', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'luna-gradient': 'linear-gradient(135deg, #5B8CFF 0%, #A45CFF 100%)',
        'luna-gradient-horizontal': 'linear-gradient(90deg, #5B8CFF 0%, #A45CFF 100%)',
        'starfield': 'radial-gradient(2px 2px at 20px 30px, #eee, transparent), radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent), radial-gradient(2px 2px at 50px 160px, #ddd, transparent), radial-gradient(2px 2px at 90px 40px, #fff, transparent), radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.6), transparent), radial-gradient(2px 2px at 160px 30px, #ddd, transparent)'
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'gradient-shift': 'gradient-shift 20s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'starfield': 'starfield 50s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-down': 'fade-in-down 0.6s ease-out',
        'scale-in': 'scale-in 0.3s ease-out'
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'glow': {
          '0%': { 'box-shadow': '0 0 20px rgba(91, 140, 255, 0.5)' },
          '100%': { 'box-shadow': '0 0 30px rgba(91, 140, 255, 0.8)' }
        },
        'starfield': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-2000px)' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      boxShadow: {
        'luna': '0 8px 32px rgba(91, 140, 255, 0.15)',
        'luna-hover': '0 12px 40px rgba(91, 140, 255, 0.25)',
        'neon-blue': '0 0 20px rgba(91, 140, 255, 0.5)',
        'neon-violet': '0 0 20px rgba(164, 92, 255, 0.5)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}

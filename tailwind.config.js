export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '0.5rem',
    },
    extend: {
      colors: {
        'martian-red': '#EF4059',
        'martian-dark': '#3D3D3D',
        'martian-darkgray': '#8E8E8E',
        'martian-gray': '#C7C7C7',
        'martian-lightgray': '#F5F5F5',
      },
    },
  },
  plugins: [],
};

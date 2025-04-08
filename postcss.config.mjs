export default {
  plugins: {
    'postcss-import': {
      path: ['node_modules', 'src/style'],
      root: process.cwd(),
    },
    '@tailwindcss/postcss': {
      config: './tailwind.config.js',
    },
    autoprefixer: {},
  },
};

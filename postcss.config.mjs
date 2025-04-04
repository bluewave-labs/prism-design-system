export default {
  plugins: {
    'postcss-import': {
      path: ['node_modules', 'src/style'],
      root: process.cwd(),
    },
    tailwindcss: {
      config: './tailwind.config.js',
    },
    autoprefixer: {},
  },
};

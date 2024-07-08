module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // Remove 'plugin:react/jsx-runtime' unless specifically required
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest', // Latest ECMAScript version
    sourceType: 'module', // Supports ES modules
  },
  settings: {
    react: {
      version: '18.2', // Ensure this matches your React version
    },
  },
  plugins: ['react-hooks'], // React Hooks plugin should be 'react-hooks', not 'react-refresh'
  rules: {
    'react/jsx-no-target-blank': 'off', // Example rule override
    'react-hooks/rules-of-hooks': 'error', // Example React Hooks rule
    'react-hooks/exhaustive-deps': 'warn', // Example React Hooks rule
  },
};

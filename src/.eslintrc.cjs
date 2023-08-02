module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',

    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'object', 'type', 'index'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {
            pattern: '{react,react/**,react-dom/**,next,next/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: './**.module.css',
            group: 'index',
            position: 'after',
          },
        ],
      },
    ],
  },
  root: true,
}

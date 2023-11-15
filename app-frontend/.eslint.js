module.exports = {
  extends: [
    'airbnb',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/no-duplicates': 'error',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal'],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'class-methods-use-this': 'off',
    'no-restricted-exports': 'off',
    'id-length': ['error', { min: 1, exceptions: ['_'] }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['accumulator', 'draft'],
      },
    ],
    camelcase: 'off',
    'react/state-in-constructor': ['error', 'never'],
    'react/static-property-placement': ['error', 'static public field'],
    'react/style-prop-object': [
      'error',
      {
        allow: ['FormattedNumber', 'FormattedRelativeTime'],
      },
    ],
    'react/sort-comp': 'off',
    'react/prefer-es6-class': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-bind': 'off',
    'no-void': 'off',
    'react/require-default-props': 'off',
    'no-unused-vars': 'off',
    'no-console': 2,
  },
  overrides: [
    {
      files: ['*.test.ts'],
      plugins: ['jest'],
      rules: {
        'jest/no-test-return-statement': 'error',
        'jest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
        'jest/no-duplicate-hooks': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-lowercase-title': [
          'error',
          {
            ignore: ['describe'],
          },
        ],
        'jest/prefer-spy-on': 'error',
        'jest/no-if': 'error',
        'linebreak-style': ['off', 'unix'],
        'jest/expect-expect': [
          'error',
          {
            assertFunctionNames: ['expect', 'expectSaga', 'testSaga', 'waitForElementToBeRemoved'],
          },
        ],
        'jest/require-top-level-describe': 'error',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      extends: [
        'plugin:prettier/recommended',
      ],
    },
  ],
}
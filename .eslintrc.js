/*
 * @Author: Antony vic19910108@gmail.com
 * @Date: 2022-12-10 12:49:52
 * @LastEditors: Antony vic19910108@gmail.com
 * @LastEditTime: 2022-12-11 00:01:47
 * @FilePath: /fire-ui/.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12, // javascript的版本
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'unused-imports',
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': 0,
    'react/no-children-prop': 0,
    'react/function-component-definition': 0,
    'import/prefer-default-export': 0,
    'no-use-before-define': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'react/button-has-type': 0,
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    'no-multi-assign': 0, // 禁止连续赋值
    'no-cond-assign': 0, // 禁止条件表达式出现赋值操作符
  },
}

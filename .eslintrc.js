/*
 * @Author: Antony vic19910108@gmail.com
 * @Date: 2022-12-10 12:49:52
 * @LastEditors: Antony vic19910108@gmail.com
 * @LastEditTime: 2022-12-10 14:07:58
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
    ecmaVersion: 12,
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
    'react/button-has-type': 0,
    'no-multi-assign': 0, // 禁止连续赋值
    'no-cond-assign': 0, // 禁止条件表达式出现赋值操作符
  },
}

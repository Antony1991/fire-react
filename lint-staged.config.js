/*
 * @Author: Antony vic19910108@gmail.com
 * @Date: 2022-12-10 12:14:30
 * @LastEditors: Antony vic19910108@gmail.com
 * @LastEditTime: 2022-12-10 12:15:07
 * @FilePath: /fire-ui/lint-staged.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  "src/*.{js, jsx, ts, tsx}": ["eslint --fix", "prettier --write"]
}
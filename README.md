## 安装

> ```bash
> $ npm i generation-random-character
> ```

## 引入方式

> const { generateRandomPassword } = require('generation-random-character')
>
> import { generateRandomPassword } from 'generation-random-character'
>
> import allRandomlyGenerated from 'generation-random-character'

## 使用

### generateRandomPassword 生成随机字符

> 该函数接收五个参数 分别对应
>
> - {number} length 密码长度
>
> - {boolean} includeUpperCase 是否包含大写字母
>
> - {boolean} includeLowerCase 是否包含小写字母
>
> - {boolean} includeNumbers 是否包含数字
>
> - {boolean} includeSymbols 是否包含特殊字符

```javascript
const { generateRandomPassword } = require('generation-random-character')
generateRandomPassword(10,true,true,true,true) // qkz07>*g;R
allRandomlyGenerated.generateRandomPassword(10, true, true, true, true) // UO?Sh55#B2
```

## customCharacters 生成自定义字符的随机字符

> 该函数接收两个参数 分别对应
>
> - {number} length 密码长度
> - {string} characters 自定义字符集合

```javascript
const { customCharacters } = require('generation-random-character')
customCharacters(10, 'abcd123456+') //d522136a35
```

## shuffleCharacterOrder 打乱字符顺序

> 该函数接收两个参数 分别对应
>
> {string} password 字符

```javascript
const { shuffleCharacterOrder } = require('generation-random-character')
shuffleCharacterOrder('abcd123456+') //a4b1+d2c563
```

## generateSecret 生成自定义的随机密码

> 该函数接收接受一个对象
>
> - {string} customUpperCase 自定义大写字母集合
>
> - {number} upperCaseLength 大写字母长度
>
> - {string} customLowerCase 自定义小写字母集合
>
> - {number} lowerCaseLength 小写字母长度
>
> - {string} customNumbers 自定义数字集合
>
> - {number} numbersLength 数字长度
>
> - {string} customSymbols 自定义特殊字符集合
>
> - {number} symbolsLength 特殊字符长度
>
> - {boolean} isDisruption 是否打乱字符顺序

```javascript
const { generateSecret } = require('generation-random-character')
// 示例一 生成5个大写字母
generateSecret({ upperCaseLength: 5 }) // DDJKQ
// 示例二 生成5个数字
generateSecret({ numbersLength: 7 }) // 3055753
// 示例三 生成5个数字 5个小写字母
generateSecret({ numbersLength: 5, lowerCaseLength: 5 }) //df298o4r4c
// 示例四 生成5个自定义数字 5个自定义小写字母
generateSecret({customNumbers: '7536941', numbersLength: 5, customLowerCase: 'abcdfr', lowerCaseLength: 5 }) // 6bd659ff3d
// ...其余可根据需求自行配置
```






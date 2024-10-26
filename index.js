/**
 @name  生成随机密码
 @param {number} length 密码长度
 @param {boolean} includeUpperCase 是否包含大写字母
 @param {boolean} includeLowerCase 是否包含小写字母
 @param {boolean} includeNumbers 是否包含数字
 @param {boolean} includeSymbols 是否包含特殊字符
 @return {string} 生成的随机密码
*/
export function generateRandomPassword(length=10, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols) {
  if (length <= 0) {
    console.error('密码长度必须大于0');
    return null;
  }
  // 定义字符集合
  let charset = '';
  if (includeUpperCase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeLowerCase) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (includeNumbers) charset += '0123456789';
  if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
  if (charset.length === 0) {
      console.error('请至少选择一种字符类型。');
      return null;
  }
  let password = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
  }
  return password;
}
/**
 @name  生成自定义字符的随机密码
 @param {number} length 密码长度
 @param {string} characters 自定义字符集合
 @return {string} 生成的随机密码
*/
export function customCharacters(length=10, characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?') {
  if (length <= 0) {
    console.error('密码长度必须大于0');
    return null;
  }
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;

}
/**
 * @name  打乱密码中字符的顺序
 * @param {string} password 密码
 * @return {string} 打乱顺序后的密码
*/
export function shuffleCharacterOrder(password) {
  if (password.length === 0) {
    console.error('字符不存在');
    return null;
  }
  return password.split('').sort(function(){return 0.5-Math.random()}).join('')
}
/**
 @param {object} option
 @param {string} customUpperCase 自定义大写字母集合
 @param {number} upperCaseLength 大写字母长度
 @param {string} customLowerCase 自定义小写字母集合
 @param {number} lowerCaseLength 小写字母长度
 @param {string} customNumbers 自定义数字集合
 @param {number} numbersLength 数字长度
 @param {string} customSymbols 自定义特殊字符集合
 @param {number} symbolsLength 特殊字符长度
 @param {boolean} isDisruption 是否打乱字符顺序
 @return {string} 生成的随机密码
*/
export function generateSecret(option) {
  const options = {
    customUpperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    upperCaseLength: 0,
    customLowerCase: 'abcdefghijklmnopqrstuvwxyz',
    lowerCaseLength: 0,
    customNumbers: '0123456789',
    numbersLength: 0,
    customSymbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
    symbolsLength: 0,
    isDisruption: true,
    ...option
  }
  try {
    let password = '';
    if (options.upperCaseLength > 0 && options.customUpperCase.length > 0) {
      password = password + customCharacters(options.upperCaseLength, options.customUpperCase);
    }
    if (options.lowerCaseLength > 0 && options.customLowerCase.length > 0) {
      password = password + customCharacters(options.lowerCaseLength, options.customLowerCase);
    }
    if (options.numbersLength > 0 && options.customNumbers.length > 0) {
      password = password + customCharacters(options.numbersLength, options.customNumbers);
    }
    if (options.symbolsLength > 0 && options.customSymbols.length > 0) {
      password = password + customCharacters(options.symbolsLength, options.customSymbols);
    }
    if (password.length > 0) {
      if(options.isDisruption) {
        return shuffleCharacterOrder(password)
      } else {
        return password
      }
    } else {
      console.error('请检查参数,生成失败');
      return null;
    }
  } catch (error) {
    console.error('生成失败');
  }
}


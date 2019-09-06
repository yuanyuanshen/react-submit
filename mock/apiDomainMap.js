let urls = {
  // 'https://api.github.com': ['/search/repositories*', '/use/repositories*']
}

// key为请求域名前缀，value为请求地址数组
let apiDomainMap = {
  // '/search/repositories*': 'https://api.github.com'
}

for (let key of Object.keys(urls)) {
  for (let item of urls[key]) {
      apiDomainMap[item] = key
  }
}
console.log(apiDomainMap)

module.exports = apiDomainMap

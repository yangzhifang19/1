let baseUrl = "";   //这里是一个默认的url，可以没有
// 此处的 NODE_ENV 是在 .env.* 中配置的
// NODE_ENV的值和文件名相对应
// 此处是 baseUrl 区分与 build/config.js 中的 host, 此处配置的是后端接口的。 build/config.js配置的是前端开发环境的
switch (process.env.NODE_ENV) {
    case 'development':
        baseUrl = "http://localhost:8081/"  // 开发环境 后端接口服务的地址 此处的 http://localhost:8081 仅为参考 各项目组请根据自己的开发环境实际情况配置
        break
    case 'beta':
        baseUrl = "http://172.30.254.65:8090"  //测试环境中后端接口服务的地址
        break
    case 'production':
        baseUrl = "http://172.30.254.65:8090"   //生产环境中后端接口服务的地址
        break
}
export default baseUrl;


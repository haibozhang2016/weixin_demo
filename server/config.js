const CONF = {
    port: '5757',
    rootPathname: '/etc/nginx/server',

    // 微信小程序 App ID
    appId: 'wxa6083fde9580de7b',

    // 微信小程序 App Secret
    appSecret: 'b95fa968f3f55e175c2d1fe80f728061',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: 'haibo918116',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
	
	// 其他配置
    serverHost: 'www.iopenai.cn',
    tunnelServerUrl: 'http://tunnel.ws.qcloud.la',
    tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
    // 可以注册一个腾讯云账号，获取一下配置。腾讯云相关配置可以查看云API秘钥控制台：https://console.cloud.tencent.com/capi
    qcloudAppId: '1257665527',
    qcloudSecretId: 'AKIDKWkpnbimnfP9kC6da9Ymz64qiOYaw4Wq',
    qcloudSecretKey: 'AORMSIAvWnuERTREtOwU894tbGlCHIBt',
    wxMessageToken: 'weixinmsgtoken',
    networkTimeout: 30000
}

module.exports = CONF

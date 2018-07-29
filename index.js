module.exports.platform = {
  config: {
    nodes : {
      native : ['sign','verify']
    },
    aliases: {
      '/token/sign': '/jwt/sign',
      '/token/verify': '/jwt/verify',
    }
  }
}

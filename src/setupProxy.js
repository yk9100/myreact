const proxy = require('http-proxy-middleware');

module.exports = (app) =>{
	app.use('/recommend',
			proxy({
				target:'https://m.wowdsgn.com',
				changeOrigin:true
			})
		),
	app.use('/itemdetail',
			proxy({
				target:'https://m.wowdsgn.com',
				changeOrigin:true
			})
		)
}
const proxy = require('http-proxy-middleware');

module.exports = (app) => {
	app.use('/v2',
		proxy({
			target: 'https://m.wowdsgn.com',
			changeOrigin: true
		})
	)
}
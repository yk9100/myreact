const proxy = require('http-proxy-middleware');


module.exports = (app) => {
    app.use('/pages', proxy({
        target: "https://m.wowdsgn.com",
        changeOrigin:true
    }));

    app.use('/itemdetail', proxy({
        target: "https://m.wowdsgn.com",
        changeOrigin: true
    }));

    app.use('/recommend', proxy({
        target: "https://m.wowdsgn.com",
        changeOrigin: true
    }));
    app.use('/message', proxy({
        target: "https://m.wowdsgn.com",
        changeOrigin: true
	}));
	
	app.use('/v2',
		proxy({
			target: 'https://m.wowdsgn.com',
			changeOrigin: true
		})
	)
}
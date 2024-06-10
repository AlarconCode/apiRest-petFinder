if (process.env.NODE_ENV !== 'production') require('dotenv').config()
    const express = require('express')
    const app = express()
    const cors = require('cors')
    const errorHandling = require('./error/errorHandling');
    const userRouter = require('./routers/user-router');
    const postRouter = require('./routers/post-router');
    const emailRouter = require('./routers/email-router');
    // Origins
    const corsWhiteList = ["https://pet-finder-livid.vercel.app", "http://localhost:4200"]
    const corsConfig = {
      credentials: true,
      optionsSuccessStatus: 200,
      origin: function(origin, callback) {
        const isOriginInWhiteList = origin && corsWhiteList.includes(origin);
        callback(null, isOriginInWhiteList);
      }
    }
    
    
    // MiddleWares
    app.set('port', process.env.PORT || 3000)
    app.use(express.urlencoded({extended:false}))
    app.use(express.json());
    app.use(cors(corsConfig));
    app.options('*', cors(corsConfig));
    // app.use(function (req, res, next) {
    //     res.status(404).json({
    //         error: true,
    //         codigo: 404,
    //         message: "Endpoint doesn't found"
    //     })
    // })
    app.use(errorHandling);
    
    app.use(userRouter, postRouter, emailRouter)
    
    module.exports = app;
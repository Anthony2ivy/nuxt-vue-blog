const express = require('express')
const app = express()
const blogRouter = require('./router/blogRouter')
const session = require("express-session")
const bodyParser = require("body-parser");
const middlewareUtil = require("./middlewares/middlewareUtil");
const passport = middlewareUtil.passport;

let router=express.Router();
router.use(express.static("public"));
router.use(session({secret: "cats"}));
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json())
router.use(passport.initialize());
router.use(passport.session());

router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Credentials','true');
    res.header('Access-Control-Allow-Headers','content-type');
    next();
});
router.post('/login',(req,res,next)=>{
    if(req.isAuthenticated()){
        return res.json({status:'success'});
    }else{
        next();
    }
},passport.authenticate('local'),(req,res) =>{
    res.json({status:'success'});
});
router.get('/logout',function (req,res) {
    req.logout();
    res.json({status:'success'});
})

router.use('/blog', blogRouter);

module.exports=router;

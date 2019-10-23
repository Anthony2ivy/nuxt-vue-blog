const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {check, validationResult} = require('express-validator/check');
const {errorMiddleware} =require('../middlewares/middlewareUtil');
const objectUtil = require('../util/objectUtil');
const {passport,isLoggedIn} =require('../middlewares/middlewareUtil');
const config =require('../../server.config');
const multer= require('multer');
const uploadImgPath =config.uploadImgPath;
const storage =multer.diskStorage({
  destination:function (req,file,cb) {
    cb(null,uploadImgPath);
  },
  filename:function (req,file,cb) {
    cb(null,file.fieldname+'-'+Date.now())
  }
});
const upload=multer({storage:storage});
router.post('*',isLoggedIn);
router.put('*',isLoggedIn);
router.delete('*',isLoggedIn);
router.use(bodyParser.json());
router.use(errorMiddleware);
router.post('/img',function (req,res) {
  upload.any()(req, res, function (err) {
    if (err){
      res.send({
        success:0,
        message:err.message
      });
    }else{
      res.send({
        success:1,
        message:'success',
        url:`/rest/static/img/${req.files[0].filename}`
      })
    }
  })
});

router.use('/img',express.static(uploadImgPath));



module.exports = router;

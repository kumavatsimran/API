const apiModel=require("../model/schema")
const jwt=require('jsonwebtoken')

const isAuthjwt = (req, res, next) => {
    let { token } = req.cookies;
    let User=jwt.verify(token,'priveat-key')
    if (User.role=="adim") {
      return next();
    } else {
      return res.redirect("/login");
    }
  };
  module.exports={isAuthjwt}
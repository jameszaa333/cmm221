
exports.isLogin = function(req, res, next) {
if(req.session.user) next()
else res.redirect('/login')  //ถ้า user ยังมี session บนเว็บอยู่ให้ไปหน้าถัดไป ถ้าไม่ใช่ให้ไปหน้าล็อกอิน
}

exports.isNotLogin = function(req, res, next) {
if(!req.session.user) next()
else res.redirect('/') 
}
const users = {
    profile : function (req, res) {
        return res.render('profile')
   },
   profileEdit : function (req, res) {
       return res.render('profile-edit')
   },
   register : function (req, res) {
       return res.render('register')
   },
   login : function (req, res) {
       return res.render('login')
   },
};

module.exports = users;
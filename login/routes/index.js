var router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

router.get('/', function (req, res, next) {
  if (req.oidc.isAuthenticated()) {
    console.log("ha");
   const  title= 'Auth0 Webapp sample Nodejs'
   const isAuthenticated= true
    res.redirect(`http://localhost:5173/`); // Redirect to the home page after authentication
  } else {
    console.log("naaaa");
    const  title= 'Auth0 Webapp sample Nodejs'
   const isAuthenticated= false
   req.oidc.user=null;
    res.redirect(`http://localhost:5173/`);
  }
});


router.get('/profile', requiresAuth(), function (req, res, next) {
  // res.render('profile', {
  //   userProfile: JSON.stringify(req.oidc.user, null, 2),
  //   title: 'Profile page'
  // });
  res.send({
    title:"jayesh",
    userProfile: JSON.stringify(req.oidc.user, null, 2)
  });
});

module.exports = router;

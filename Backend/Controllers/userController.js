const User = require('..models/userModel.js');

const userController = {}

// CREATE USER MIDDLEWARE - for creating a new user
userController.createUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.locals.userId = newUser._id;
    return next();
  } catch (err) {
    return res.render('./../frontend/index.js', {'error when signing up, please try again': err});
  }
};

// VERIFY USER MIDDLEWARE - for login purposes
userController.verifyUser = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({username: req.body.username}).exec()
    res.locals.userId = existingUser._id;
    if (existingUser.password === req.body.password) {
      return next();
    } else {
      return res.render('/', 'sorry, username/pasword combo does not match')
    }
  } catch (err) {
    return res.render('/', {error: err});
  }
}

// export
module.exports = userController;
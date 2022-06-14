const User = require('../../models/user');
const { successResponse, errorResponse } = require('../../helpers/index');

const addUser = async (req, res) => {
  const payload = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailId: req.body.emailId,
    password: req.body.password,
    contactNo: req.body.contactNo,
  });
  console.log(payload);
  await payload.save().then((result) => {
    successResponse(req, res, result, 200);
  }).catch((error) => {
    errorResponse(req, res, error.message, 500, error);
  });
};

module.exports = addUser;

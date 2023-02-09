exports.getUsers = function getUsers() {
  return 'Get Users';
};

exports.updateUserPhoto = function updateUserPhoto({ req }) {
  return req.file;
};

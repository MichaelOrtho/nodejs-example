module.exports = (req, res, next) => {
  const t = {
    name: 'Petar',
    dob: '2010-01-05',
    currentUser: req.user.name
  };
  res.send(t);
};
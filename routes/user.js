module.exports = (req, res, next) => {
  req.user = {
    id: 123,
    name: 'Marko Davidovic'
  };
  next();
};
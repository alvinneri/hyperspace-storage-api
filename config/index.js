module.exports = Object.freeze({
  port: process.env.PORT || 9000,
  mongo: {
    uri: process.env.MONGO_URI,
  },
  jwtSecret: process.env.JWT_SECRET,
});

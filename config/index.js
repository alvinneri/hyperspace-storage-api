module.exports = Object.freeze({
  port: process.env.PORT || 9000,
  mongo: {
    uri: process.env.MONGO_URI,
  },
  userRoles: ["user", "admin", "lessor"],
});

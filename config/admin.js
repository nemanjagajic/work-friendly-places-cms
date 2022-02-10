module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '76be4e4a15073a2f38a39482af4c633d'),
  },
});

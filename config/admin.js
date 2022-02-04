module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e689b6121a44db215c02808f4c47f86e'),
  },
});

const appJson = require('./app.json');

const datoApiToken = process.env.DATO_API_TOKEN || '';

module.exports = ({ config }) => ({
  ...config,
  ...appJson.expo,
  extra: {
    ...((appJson.expo && appJson.expo.extra) || {}),
    datoApiToken,
  },
});

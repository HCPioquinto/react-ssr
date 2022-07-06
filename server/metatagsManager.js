const metatags = require('./metatags.json');
const axios = require('axios');

const defaultMetatags = metatags.index;

module.exports = async (url) => {
  const routeMetaTagsKey = url ? url : 'index';

  if (mainLinksMetaTagKeys.includes(url)) {
    return metatags[routeMetaTagsKey];
  }

  return defaultMetatags;
};

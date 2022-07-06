const metatags = require('./metatags');

const defaultMetatags = metatags.index;

const getCatTags = async (slug) => {
  const { type, petName, id, owner } = metatags.ANIMALS_DATA[slug];
  return {
    title: `${type} - ${petName}`,
    image: `http://placekitten.com/${id * 10}/${id * 10}`,
    description: `Donate to a ${type} named ${petName} owned by ${owner}`,
  };
};

module.exports = async (url) => {
  const routeMetaTagsKey = url ? url : 'index';
  
  if (routeMetaTagsKey.split('/')[0] === 'cat') {
    const tags = getCatTags(routeMetaTagsKey.split('/')[1]);
    return tags;
  }

  return defaultMetatags;
};

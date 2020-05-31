const { getData } = require('./httpAPI');

const baseUrl = 'https://pixabay.com/api/';

const getImageUrl = async (imageTopic) => {
    const result = await getData(`${baseUrl}?key=${process.env.PIXABAY_API_KEY}&category=places&image_type=photo&q=${imageTopic}`);
    // If images available, get first one or return undefined 
    const imageUrl = result.totalHits > 0 ? result.hits[0].imageUrl : undefined;
    return {
        'imageUrl': imageUrl,
    };
};

module.exports = { getImageUrl };
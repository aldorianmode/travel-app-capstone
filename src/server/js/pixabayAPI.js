const { getData } = require('./httpAPI');

const baseUrl = 'https://pixabay.com/api/';

const getImageUrl = async (imageTopic) => {
    const result = await getData(`${baseUrl}?key=${process.env.PIXABAY_API_KEY}
        &category=places
        &image_type=photo
        &q=${imageTopic}`);
    const firstResult = result.hits[0];
    return {
        'imageUrl': firstResult.imageUrl,
    };
};

module.exports = { getImageUrl };
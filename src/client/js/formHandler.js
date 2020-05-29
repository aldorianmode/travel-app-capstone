import { getCityData } from './httpAPI';

async function handleSubmit(event) {
    event.preventDefault();

    const destination = document.getElementById('destination').value;
    const cityInfo = await getCityData(destination);
    console.log(`City info received = ${JSON.stringify(cityInfo)}`);
}

export { handleSubmit };
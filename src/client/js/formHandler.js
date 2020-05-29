import { getDestinationData } from './httpAPI';

async function handleSubmit(event) {
    event.preventDefault();

    const destination = document.getElementById('destination').value;
    const destinationInfo = await getDestinationData(destination);
    console.log(`Destination info received = ${JSON.stringify(destinationInfo)}`);
}

export { handleSubmit };
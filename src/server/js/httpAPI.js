const getData = async (url='') => { 
    const response = await fetch(url, {
        method: 'GET', 
        mode: 'cors'
    });
    try {
        // Do request
        const data = await response.json();
        return data;
    }
    catch(error) {
      console.log("error", error);
    }
};

const postData = async ( url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),       
    });
    try { 
      return await response.json();
    }
    catch(error) {
        console.log("error", error);
    }
}

export { getData, postData };
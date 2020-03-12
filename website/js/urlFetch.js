const output = document.querySelector('.response__code');
async function fetchData () {

    output.innerHTML = 'Fetching...';

    try {
        const url = document.querySelector('.fetch__url').innerHTML;
        console.log(url)
        const response = await fetch(url);
        console.log(response)
        const data = await response.json();
        output.innerHTML = JSON.stringify(data, null, 2);
    }

    catch (error) {
        output.innerHTML = 'Error fetching data.'
    }
}

const output = document.querySelector('.code__text--response');
async function fetchData () {

    document.querySelector('.box--response').classList.add('visible');
    output.innerHTML = 'Fetching...';

    try {
        const url = document.querySelector('.fetchInput').innerHTML;
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

document.querySelector('#submit').addEventListener('click', () => {
    const site = document.querySelector('#site').value;
    const page = document.querySelector('#page').value;

    const url = `${site}${page}`;

    fetch(url)
        .then(res => {
            document.querySelector('#content').innerHTML = res;
        })
});

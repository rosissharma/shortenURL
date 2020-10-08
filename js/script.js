function urlShortner() {
    let url = document.getElementById('url').value;
    console.log(url);

    let clipboard = document.getElementById('clipboard');

    fetch("https://api.shrtco.de/v2/shorten?url=" + `${url}`, {
        "method": "POST",
    })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            //get the short url
            let shortURL = response.result.full_short_link;

            //append to html
            document.getElementById('shortURL').innerHTML = `<a href='${shortURL}' target='_blank'>${shortURL}</a>`;
        })
        .catch(err => {
            console.log(err);
        });
}
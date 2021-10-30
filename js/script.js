function getinfo() {
    let charId = document.getElementById("charCapture").value
    document.getElementById("charCapture").value=""

    let url = `https://rickandmortyapi.com/api/character/${charId}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            html = `<img src="${data.image}">
                    <h1>${data.name}</h1>`

            document.getElementById("charContent").innerHTML = html
        })
        .catch(err => console.log(err))
}
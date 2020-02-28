let getItemById = (id) => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://" +location.hostname +":8081/item/" + id);
    request.send();
    request.onload = () => {
        let data = JSON.parse(request.response);
    }
}


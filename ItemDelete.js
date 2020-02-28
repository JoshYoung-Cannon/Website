let modalUpdate = update();

let deleteData = (id) => {
    let request = new XMLHttpRequest();
    request.open("DELETE", "/item" + id);
    request.send();
    request.onload = () => {
        getData();
    }
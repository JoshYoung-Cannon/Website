let getAllItems = () => {
    let request = new XMLHttpRequest();
    request.open("GET","http://" +location.hostname +":8081/item/all");
    request.send();
    let Items = document.getElementById("Items");
    Items.innerHTML="";
    request.onload = () => {
        console.log(request.response);
        let data = JSON.parse(request.response);
        for (let value of data){
            let wrapper = document.createElement("div");
            wrapper.class = " col-sm-9 mx-auto col-md-6 col-lg-5 my-3";
            let card = document.createElement("div");
            card.class = "card";
            let img = document.createElement("img");
            img.style.width = "100%";
            img.class = " card-img-top";
            img.alt="robot";
            console.log(value);
            img.src=value.imageUrl;
            card.appendChild(img);
            let cardBody = document.createElement("div");
            cardBody.class="card-body";
            let itemName = document.createElement("h3");
            itemName.class="card-title text-uppercase title pt-4 mb-3";
            console.log(value.name);
            itemName.innerText = value.name;
            cardBody.appendChild(itemName);
            let price = document.createElement("p");
            console.log(value.price);
            price.innerText="Price: £" + value.price;
            cardBody.appendChild(price);
            card.appendChild(cardBody);
            let cardFooter = document.createElement("div");
            let updateButton = document.createElement("button");
            let delButton = document.createElement("button");
            let addToButton = document.createElement("button");
            updateButton.type="button";
            delButton.type="button";
            addToButton.type="button";
            updateButton.innerText="Update";
            delButton.innerText="Delete";
            addToButton.innerText="Add To Order";
            updateButton.class="btn btn-danger  btn-lg my-4 d-block mx-auto";
            delButton.class="btn btn-danger  btn-lg my-4 d-block mx-auto";
            addToButton.class="btn btn-danger  btn-lg my-4 d-block mx-auto";
            updateButton.style="font-weight: bold";
            delButton.style="font-weight: bold";
            addToButton.style="font-weight: bold";
            cardFooter.appendChild(updateButton);
            cardFooter.appendChild(delButton);
            cardFooter.appendChild(addToButton);
            card.appendChild(cardFooter);
            Items.appendChild(card);
        }
        document.body.appendChild(Items);
    }
}

getAllItems();
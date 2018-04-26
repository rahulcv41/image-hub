// scroll--func//
window.onscroll = function (event) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        for (var i = 0; i < 6; i++) {
            var gridItem = document.createElement("div");
            gridItem.className = 'grid-item';
            var image = document.createElement("img");
            image.setAttribute("src", "img.jpg");
            image.className = 'img-style';
            var imageDetails = document.createElement("h3"); //inside for loop since fragment gets deleted after every itteration//
            imageDetails.innerHTML = "city";
            // grid item --appending//
            gridItem.appendChild(image);
            gridItem.appendChild(imageDetails);
            var fragment = document.createDocumentFragment();
            fragment.appendChild(gridItem);
            var parent = document.querySelector(".grid");
            parent.appendChild(gridItem);
        }
    }
}
//search buttton-hide//
var input = document.querySelector('.input');
var button = document.querySelector('.button');
input.addEventListener('keyup', function () {
    if (input.value.length > 0) {
        button.setAttribute('style', 'display:inline');

    } else {
        button.setAttribute('style', 'display:none');
    }
});

//render initial image//

//     var location = "https://api.unsplash.com";
//     var clientId = '019c29fec2b060eda3b1e84921a800d66d2d84fd4369c54c765a0375517f0dea0';
//     var url = "https://api.unsplash.com/photos?client_id=" + clientId;
//     console.log(url);
//     //makeAjaxCall(url, "GET", initialLoading);

//     function initialLoading(data) {
//         console.log(data);

//     }

// //ajax call
// //function makeAjaxCall(url, methodType, callback) {
//     // var xhr = new XMLHttpRequest();
//     // xhr.open(methodType, url, true);
//     // xhr.send();
//     // xhr.onreadystatechange = function () {
//     //     if (xhr.readyState === 4) {
//     //         if (xhr.status === 200) {
//     //             console.log("xhr done successfully");
//     //             var resp = xhr.responseText;
//     //             var respJson = JSON.parse(resp);
//     //             callback(respJson);
//     //         } else {
//     //             console.log("xhr failed");
//     //         }
//     //     } else {
//     //         console.log("xhr processing going on");
//     //     }
//     // }
//     // console.log("request sent succesfully");
// //}
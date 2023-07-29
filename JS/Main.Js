var links = document.querySelectorAll('.nav-item');

console.log(links);

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {


        var country = e.target.getAttribute('Data-co');
        GetData(country);

    })

}

var Data = [];

function GetData(country) {

    var API = new XMLHttpRequest();
    API.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=3020031161744cbeab5cc554a2697e05`);
    API.send();
    API.addEventListener('readystatechange', function () {

        if (API.readyState == 4) {

            Data = JSON.parse(API.response);
            console.log(Data);
            Display();
        }
    })

}




function Display() {
    var box = ''
    for (var i = 0; i < Data.length; i++) {

        box += `
      
            <col-md-4>

                <p>${Data[i].url}</p>

            </col-md-4>
      
      
      `
    }

    document.getElementById('Api2').innerHTML = box;
}



window.onload = function(){
    var sec = document.getElementById('words');
    if(sec.style.display=='block')
    {
        sec.style.display=='none';
    } else {
        var timer = setInterval( function(){
            sec.style.display = 'block';
            sec.className = 'fadeIn';
        }, 1000)
    }
}

var config = {
    url: 'http://api.icndb.com/jokes/random',
    method: 'GET'
};

function loadText (config) {

    var xhr = new XMLHttpRequest();
    var responseSection = document.getElementById("section2");

    xhr.onreadystatechange = function() {

        if (xhr.readyState == 4 && xhr.status == 200) {

            responseSection.innerHTML = JSON.parse(xhr.responseText).value.joke;
            } else {
            responseSection.innerHTML = xhr.statusText;
            responseSection.className = 'error';}

         };
    xhr.open(config.method, config.url, true);
    xhr.send();
}


function showInfo() {

    var promise = new Promise(function (resolve, reject) {

        var config2 = {
            url: 'https://api.github.com/search/repositories',
            method: 'GET',
            data: '?q='
        }


        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {

            if (xhr.readyState == 4 && xhr.status == 200) {
                var arrayRepos = [];
                arrayRepos = JSON.parse(xhr.responseText).items;

                if (arrayRepos !== undefined) {
                    resolve(arrayRepos);
                } else {
                    reject('Something is wrong!');
                }
            }
        }

        var search = document.getElementById('txtSearch').value;

        var url = config2.url + config2.data + search;

        xhr.open(config2.method, url, true);
        xhr.send();
    });

    promise.then(function (arrayRepos) {

        var result = document.getElementById('list');

        arrayRepos.forEach(
            function (repo) {
                var li = document.createElement("li");
                var text = document.createTextNode(repo.full_name);
                li.appendChild(text);
                result.appendChild(li);
            });
    }, function (err) {
        console.log(err);
    });
}

function loadTable() {

     var matrix = [
         ['blue', 'red', 'yellow'],
             ['apple', 'banana', 'peach'],
             ['mouse', 'keyboard', 'usb']
     ];


    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var tbody = document.createElement('tbody');
    var divT = document.getElementById('divTable');

     matrix[0].forEach(function (e) {
         var th = document.createElement('th');
         var node = document.createTextNode(e);
         th.appendChild(node);
         tr.appendChild(th);
     }, tr);

    thead.appendChild(tr);

    table.appendChild(thead);

    var tr = document.createElement('tr');
    matrix[1].forEach(function (e) {
        var td = document.createElement('td');
        var node = document.createTextNode(e);
        td.appendChild(node);
        tr.appendChild(td);
    }, tr);

    tbody.appendChild(tr);

    var tr = document.createElement('tr');
    matrix[2].forEach(function (e) {
        var td = document.createElement('td');
        var node = document.createTextNode(e);
        td.appendChild(node);
        tr.appendChild(td);
    }, tr);

    tbody.appendChild(tr);

    table.appendChild(tbody);

    divT.appendChild(table);
 }
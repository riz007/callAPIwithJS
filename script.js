var xmlhttp = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/posts";

xmlhttp.open("GET", url, true);

xmlhttp.onload = function() {
    if(this.readyState == 4 && this.status == 200) {
        var jsonArr = JSON.parse(this.responseText);
        displayFunction(jsonArr);
    }
};
xmlhttp.send();

function displayFunction(arr) {
    var result = "";
    var pretable = '<tr>' + '<th>Post ID</th>' + '<th>Post Title</th>' +'<th>Description</th>' + '</tr>';
    var i;                    
    for(i=0; i<arr.length; i++) {
        result += '<tr>' + '<td colspan="1">'+ arr[i].id+ '</td>'+ '<td>' + arr[i].title + '</td>' + '<td>' + arr[i].body + '</td>' + '</tr>';
    }
    document.getElementById("demo").innerHTML = pretable + result;
}
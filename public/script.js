fetch('http://imagescraperapi.herokuapp.com/?url=https://en.wikipedia.org/wiki/Thyme')
    .then(response => response.json())
    .then(data => {
        var image_str = "https:" + data["image-url"];
        document.getElementById("thyme").src=image_str;
        console.log(image_str);      
    });

fetch('http://imagescraperapi.herokuapp.com/?url=https://en.wikipedia.org/wiki/Lavender')
    .then(response => response.json())
    .then(data => {
        var image_str = "https:" + data["image-url"];
        document.getElementById("lavender").src=image_str;
        console.log(image_str);      
    });

fetch('http://imagescraperapi.herokuapp.com/?url=https://en.wikipedia.org/wiki/Eucalyptus')
    .then(response => response.json())
    .then(data => {
        var image_str = "https:" + data["image-url"];
        document.getElementById("eucalyptus").src=image_str;
        console.log(image_str);      
    });

fetch('http://imagescraperapi.herokuapp.com/?url=https://en.wikipedia.org/wiki/Ginger')
    .then(response => response.json())
    .then(data => {
        var image_str = "https:" + data["image-url"];
        document.getElementById("ginger").src=image_str;
        console.log(image_str);      
    });

fetch('http://imagescraperapi.herokuapp.com/?url=https://en.wikipedia.org/wiki/Melaleuca')
    .then(response => response.json())
    .then(data => {
        var image_str = "https:" + data["image-url"];
        document.getElementById("tea_tree").src=image_str;
        console.log(image_str);      
    });
console.log("hello");
var data = [
    {
        "name": "Hansi",
        "age": 2,
        "location": "CITY2",
        "hobbies": "HOBBIES0, HOBBIES...",
        "favouriteMusic": "MUSIC0",
        "img": "css/img/man.png",
        "quote": "this is a quote",
        "fav": false
    },
    {
        "name": "Güntine",
        "age": 2,
        "location": "CITY3",
        "hobbies": "HOBBIES0, HOBBIES...",
        "favouriteMusic": "MUSIC0",
        "img": "css/img/woman.png",
        "quote": "this is a quote",
        "fav": false
    },
    {
        "name": "Franzl",
        "age": 2,
        "location": "CITY4",
        "hobbies": "HOBBIES0, HOBBIES...",
        "favouriteMusic": "MUSIC0",
        "img": "css/img/man.png",
        "quote": "this is a quote",
        "fav": false
    },
    {
        "name": "Sabine",
        "age": 2,
        "location": "CITY5",
        "hobbies": "HOBBIES0, HOBBIES...",
        "favouriteMusic": "MUSIC0",
        "img": "css/img/woman.png",
        "quote": "this is a quote",
        "fav": false
    },
    {
        "name": "Caralla",
        "age": 2,
        "location": "CITY6",
        "hobbies": "HOBBIES0, HOBBIES...",
        "favouriteMusic": "MUSIC0",
        "img": "css/img/woman.png",
        "quote": "this is a quote",
        "fav": false
    },
    {
        "name": "Christian",
        "age": 2,
        "location": "CITY0",
        "hobbies": "HOBBIES0, HOBBIES...",
        "favouriteMusic": "MUSIC0",
        "img": "css/img/man.png",
        "quote": "this is a quote",
        "fav": false
    }
];
// console.log(data)
var insertedUsers = [];
var favouriteUsers = [];
//creating users in array with class
var users = /** @class */ (function () {
    function users(name, age, location, hobbies, favouriteMusic, img, quote, userId, imageId, fav) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.hobbies = hobbies;
        this.favouriteMusic = favouriteMusic;
        this.img = img;
        this.quote = quote;
        this.userId = userId;
        this.imageId = imageId;
        this.fav = fav;
    }
    users.prototype.insertUserToArray = function () {
        insertedUsers.push({ "fav": false, "name": this.name, "age": this.age,
            "location": this.location, "hobbies": this.hobbies,
            "favouriteMusic": this.favouriteMusic, "img": this.img, "quote": this.quote,
            "userId": this.userId, "imageId": this.imageId });
    };
    users.prototype.insertUserToPage = function () {
        document.getElementById("contentContainer").innerHTML += ("\n\t\t\t<div id = " + this.userId + " class = \"userdiv col-3 m-3\">\n\t\t\t<div class = \"heartdiv\">\n\t\t\t<img id = " + this.imageId + " class = \"heartimage\" src=\"css/img/norm.png\" alt=\"heart\">\n\t\t\t</div>\t\t\t\n\t\t\t<div class = \"userimagediv\">\t\t\t\t\n\t\t\t<img class = \"userimage\" src=\"" + this.img + "\" alt=\"profilepic\">\n\t\t\t</div>\n\t\t\t<div class = \"userquotediv\">\t\n\t\t\t<p class = \"userquote\">" + this.quote + "</p>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t");
        console.log("div: ", this.userId);
        console.log("image: ", this.imageId);
        //getting users into favavourite
        var intofav = document.getElementsByClassName("userdiv");
        var _loop_1 = function (i) {
            intofav[i].addEventListener("click", function () {
                $("#" + 0 + [i]).attr("src", "css/img/fav.png");
                favouriteUsers.push({ "fav": true, "name": this.name, "age": this.age,
                    "location": this.location, "hobbies": this.hobbies,
                    "favouriteMusic": this.favouriteMusic, "img": this.img, "quote": this.quote,
                    "userId": this.userId, "imageId": this.imageId });
                this.fav = true;
                console.log(this.fav);
                if (this.fav == true) {
                    document.getElementById("favcontentContainer").innerHTML += ("\n\t\t\t\t\t\t<div id = " + this.userId + " class = \"userdiv col-3 m-3\">\n\t\t\t\t\t\t<div class = \"heartdiv\">\n\t\t\t\t\t\t<img id = " + this.imageId + " class = \"heartimage\" src=\"css/img/norm.png\" alt=\"heart\">\n\t\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\t\t<div class = \"userimagediv\">\t\t\t\t\n\t\t\t\t\t\t<img class = \"userimage\" src=\"" + this.img + "\" alt=\"profilepic\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"userquotediv\">\t\n\t\t\t\t\t\t<p class = \"userquote\">" + this.quote + "</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t");
                }
                console.log(favouriteUsers);
            }, false);
        };
        for (var i = 0; i < intofav.length; i++) {
            _loop_1(i);
        }
    };
    return users;
}());
//getting useres in the page
for (var i = 0; i < data.length; i++) {
    var img = 0;
    var user = new users(data[i].name, data[i].age, data[i].location, data[i].hobbies, data[i].favouriteMusic, data[i].img, data[i].quote, [i], 0 + [i], data[i].fav);
    user.insertUserToArray();
    user.insertUserToPage();
}
console.log(insertedUsers);

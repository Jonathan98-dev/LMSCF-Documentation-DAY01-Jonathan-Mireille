console.log("hello")

var data=
[

{
	"name":"Hansi",
	"age":2,
	"location":"CITY2",
	"hobbies":"HOBBIES0, HOBBIES...",
	"favouriteMusic":"MUSIC0",
	"img":"css/img/man.png",
	"quote":"this is a quote",
	"fav":false
	
},
{
	"name":"Güntine",
	"age":2,
	"location":"CITY3",
	"hobbies":"HOBBIES0, HOBBIES...",
	"favouriteMusic":"MUSIC0",
	"img":"css/img/woman.png",
	"quote":"this is a quote",
	"fav":false
	
},
{
	"name":"Franzl",
	"age":2,
	"location":"CITY4",
	"hobbies":"HOBBIES0, HOBBIES...",
	"favouriteMusic":"MUSIC0",
	"img":"css/img/man.png",
	"quote":"this is a quote",
	"fav":false
	
},
{
	"name":"Sabine",
	"age":2,
	"location":"CITY5",
	"hobbies":"HOBBIES0, HOBBIES...",
	"favouriteMusic":"MUSIC0",
	"img":"css/img/woman.png",
	"quote":"this is a quote",
	"fav":false
	
},
{
	"name":"Caralla",
	"age":2,
	"location":"CITY6",
	"hobbies":"HOBBIES0, HOBBIES...",
	"favouriteMusic":"MUSIC0",
	"img":"css/img/woman.png",
	"quote":"this is a quote",
	"fav":false
	
},
{
	"name":"Christian",
	"age":2,
	"location":"CITY0",
	"hobbies":"HOBBIES0, HOBBIES...",
	"favouriteMusic":"MUSIC0",
	"img":"css/img/man.png",
	"quote":"this is a quote",
	"fav":false
	
}
]
// console.log(data)

var insertedUsers=[];
var favouriteUsers=[];

//creating users in array with class

class users
{
	name:string;
	age:number;
	location:string;
	hobbies:string;
	favouriteMusic:string;
	img:string;
	quote:string;
	userId:number;
	imageId:number;
	fav:boolean;


	constructor(name:string,age:number,location:string,hobbies:string,favouriteMusic:string,img:string,quote:string,userId:number,imageId:number,fav:boolean;
		)
	{
		this.name=name;
		this.age=age;
		this.location=location;
		this.hobbies=hobbies;
		this.favouriteMusic=favouriteMusic;
		this.img=img;
		this.quote=quote;
		this.userId=userId;
		this.imageId=imageId;
		this.fav=fav;


	}

	insertUserToArray()
	{
		insertedUsers.push({"fav": false, "name":this.name, "age":this.age, 
			"location":this.location, "hobbies":this.hobbies, 
			"favouriteMusic":this.favouriteMusic,"img":this.img,"quote":this.quote,
			"userId":this.userId, "imageId":this.imageId})
	}

	insertUserToPage()
	{
		document.getElementById("contentContainer").innerHTML += (`
			<div id = ${this.userId} class = "userdiv col-3 m-3">
			<div class = "heartdiv">
			<img id = ${this.imageId} class = "heartimage" src="css/img/norm.png" alt="heart">
			</div>			
			<div class = "userimagediv">				
			<img class = "userimage" src="${this.img}" alt="profilepic">
			</div>
			<div class = "userquotediv">	
			<p class = "userquote">${this.quote}</p>
			</div>
			</div>
			`)


		console.log("div: " this.userId)
		console.log("image: "this.imageId)

		//getting users into favavourite


		let intofav = document.getElementsByClassName("userdiv")

		for(let i = 0; i<intofav.length; i++)
		{
			intofav[i].addEventListener("click",function()
			{
				$("#"+0+[i]).attr("src","css/img/fav.png")

				favouriteUsers.push({"fav": true, "name":this.name, "age":this.age, 
					"location":this.location, "hobbies":this.hobbies, 
					"favouriteMusic":this.favouriteMusic,"img":this.img,"quote":this.quote,
					"userId":this.userId, "imageId":this.imageId})	

				this.fav = true;
				console.log(this.fav)
				
				if(this.fav == true)
				{
					document.getElementById("favcontentContainer").innerHTML += (`
						<div id = ${this.userId} class = "userdiv col-3 m-3">
						<div class = "heartdiv">
						<img id = ${this.imageId} class = "heartimage" src="css/img/norm.png" alt="heart">
						</div>			
						<div class = "userimagediv">				
						<img class = "userimage" src="${this.img}" alt="profilepic">
						</div>
						<div class = "userquotediv">	
						<p class = "userquote">${this.quote}</p>
						</div>
						</div>
						`)
				}


				console.log(favouriteUsers)
			},false)
		}
	}

	

}

//getting useres in the page

for(let i=0; i<data.length; i++)
{	
	let img=0;
	let user = new users(data[i].name,data[i].age,data[i].location,data[i].hobbies,data[i].favouriteMusic,data[i].img,data[i].quote,[i],0+[i],data[i].fav)
	user.insertUserToArray()
	user.insertUserToPage()	
	
}
console.log(insertedUsers)




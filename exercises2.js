//todo1--------------------------------

const users = [
{
id: 1,
first_name: 'Jeanette',
last_name: 'Penddreth',
email: 'jpend@census.gov',
gender: 'Female',
ip_address: '26.58.193.2',
},
{
id: 2,
first_name: 'Petr',
last_name: 'Jackson',
email: 'jkson@census.gov',
gender: 'Male',
ip_address: '229.179.193.2',
},
];


const someFn = function (array){
	let women = [];
  	let men = [];
  array.map(function(item){
  	item.fullName = item.first_name + ' ' + item.last_name;
    delete item.first_name;
    delete item.last_name;
  	if(item.gender === 'Female'){women.push(item);}
    	else {men.push(item);}
  });
  return {women, men};
};

someFn(users);




//todo2---------------------------------------------

const initialData = [
  {
    username: 'Maria',
    age: 25,
  },
  {
    username: 'Alex',
    age: 21,
  },
  {
    username: 'Oleg',
    age: 14,
  },
  {
    username: 'Dmitriy',
    age: 35,
  },
  {
    username: 'Oksana',
    age: 72,
  },
];


const someFn = function (arr) {
  	let sorted = arr.filter(item => item.age >= 21);
   return sorted.sort((a, b) => a.username > b.username ? 1 : -1);
};


console.log(someFn(initialData));


//todo3---------------------------------------------



const users = [
    {
    id:1,
    name:'Alex'
    },
    {
    id:2,
    name:'Tom'
    },
    {
    id:3,
    name:'Max'
    },
];



const removeUser = function (arr1, arr2) {
     arr2.map(function(item){
      arr1.splice(arr1.findIndex(i => i.id === item), 1) 
    return arr1;
  
});
return arr1;


};



console.log(removeUser(users, [1,2]));



//todo4-------------------------------------------

const initialArray = [1, 'Hello', 3];


const someFn = function (array) {
  
 return array.map(function(item, index){
    return {
      elementValue: item,
      elementType: typeof item,
      elementIndex: index
    };
  }
 );

};


console.log(someFn(initialArray));



//todo5

const fn = (str) => str.split('').reverse().join() === str.split('').join();

console.log(fn('saas'));

//todo6


const newReleases = [{
 id: 70111470,
 title: "Die Hard",
 boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
 uri: "http://api.netflix.com/catalog/titles/movies/70111470",
 rating: [4.0],
 bookmark: []
}, {
 id: 654356453,
 title: "Bad Boys",
 boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
 uri: "http://api.netflix.com/catalog/titles/movies/70111470",
 rating: [5.0],
 bookmark: [{ id: 432534, time: 65876586 }]
}, {
 id: 65432445,
 title: "The Chamber",
 boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
 uri: "http://api.netflix.com/catalog/titles/movies/70111470",
 rating: [4.0],
 bookmark: []
}, {
 id: 675465,
 title: "Fracture",
 boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
 uri: "http://api.netflix.com/catalog/titles/movies/70111470",
 rating: [5.0],
 bookmark: [{ id: 432534, time: 65876586 }]
}];



const fn = (array) => array.map(function(item){
return {id: item.id, title: item.title};
});


console.log(fn(newReleases));






//todo7


const newReleases = [{
 id: 70111470,
 title: "Die Hard",
 boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
 uri: "http://api.netflix.com/catalog/titles/movies/70111470",
 rating: [4.0],
 bookmark: []
}, {
 id: 654356453,
 title: "Bad Boys",
 boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
 uri: "http://api.netflix.com/catalog/titles/movies/70111470",
 rating: [5.0],
 bookmark: [{ id: 432534, time: 65876586 }]
}, {
 id: 65432445,
 title: "The Chamber",
 boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
 uri: "http://api.netflix.com/catalog/titles/movies/70111470",
 rating: [4.0],
 bookmark: []
}, {
 id: 675465,
 title: "Fracture",
 boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
 uri: "http://api.netflix.com/catalog/titles/movies/70111470",
 rating: [5.0],
 bookmark: [{ id: 432534, time: 65876586 }]
}];



const fn = function (array) { 

  let ids = [];
 
  ids.push(array.map(function(item){
if(item.rating === 5)
{return item.id;}

}
)
);
 return ids;
};

console.log(fn(newReleases));




//todo8

const videos = [{
 id: 65432445,
 title: "The Chamber"
}, {
 id: 675465,
 title: "Fracture"
}, {
 id: 70111470,
 title: "Die Hard"
}, {
 id: 654356453,
 title: "Bad Boys"
}];


const someFn = function(arr){
    let obj = {}
return arr.reduce(function(previousValue, item){
    obj[item.id] = item.title;
    return obj;
}, obj);

};


console.log(someFn(videos));





//todo9

const boxarts = [
  {
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
  }, 
  {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
  }, 
  {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
}, 
  {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
  }
];



const someFn = function(arr){
        
        let result = arr.map(function(i){
            if(i.width*i.height === arr.reduce(function(sqr,item){
    if(item.width*item.height > sqr){sqr = item.width*item.height;}
    return sqr;
},0)){return i.url }
              
});
   
return result.find(function(item){
    if(typeof item === 'string'){return item}
});
    

};


console.log(someFn(boxarts));








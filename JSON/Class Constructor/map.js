const map = new Map();

map.set('name', 'John Doe');
map.set('email', 'john.doe@example.com');
map.set('gender', 'male');
console.log(map);
console.log(map.get('name'));// accessing value using key
console.log(map.has('email'));// checking if key exists
console.log("Map size:", map.size);
console.log("deleted:", map.delete('gender'));// deleting key   
console.log("after deletion:", map);

//map.forEach((value, key) => console.log(`${key}: ${value}`));// iterating over map

map.forEach((value, key) => console.log(value));// iterate values only

for(let key of map.keys()) {
    console.log(key,": ", map.get(key));
}

//clearing map
map.clear();
console.log("after clearing map:", map);


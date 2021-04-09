var app = new Vue(
{
el: "#app",
data: {
  albums: [],
  categories:[],
  selected: ""
},
mounted: function(){
axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((result) => {

this.albums = result.data.response;

this.albums.sort(function(a,b){
  return a.year - b.year;
}
);
for (var x in this.albums) {
  if (this.categories.includes(this.albums[x].genre) == false) {
    this.categories.push(this.albums[x].genre)
  }
}
console.log(this.albums);
console.log(this.categories);
});

}
});

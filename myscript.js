var app = new Vue(
{
el: "#app",
data: {
  albums: []
},
mounted: function(){
axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((result) => {

this.albums = result.data.response;
this.albums.sort(function(a,b){
  return a.year - b.year;
}
);
console.log(this.albums);

});

}
});

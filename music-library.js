
//----------------------------------------------------------------------------
function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlist(name) {
  this.name = name;
  this.trackList = [];
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.duration = length;
}


//----------------------------------------------------------------------------
Playlist.prototype.overallRating = function() {
  let sumRating = 0;
  for(let i in this.trackList){
    sumRating += this.trackList[i].rating;
  }
  return sumRating / this.trackList.length;
}

Playlist.prototype.totalDuration = function(){
  let sumDuration = 0;
  for(let i in this.trackList){
    sumDuration += this.trackList[i].duration;
  }
  return sumDuration;
}


//----------------------------------------------------------------------------

function addTackToPlaylist(playlist, track) {
  playlist.trackList.push(track);
};

function addPlaylistToLibrary(library, playlist){
  library.playlists.push(playlist);
};

//----------------------------------------------------------------------------

const library = new Library("country", "me");

const playlist = new Playlist("country");

const track = new Track("Woohoo", 5, 180);
const track2 = new Track("OhNo", 4, 300);


addTackToPlaylist(playlist, track);
addTackToPlaylist(playlist, track2);

addPlaylistToLibrary(library, playlist);

console.log(library);
console.log("total duration", playlist.totalDuration());
console.log("overall rating", playlist.overallRating());











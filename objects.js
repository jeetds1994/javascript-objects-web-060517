
var playlist = new Object;


playlist['eminem'] = 'stan'

function updatePlaylist(playlist, artistName, artistSong){
  playlist[artistName] = artistSong
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}

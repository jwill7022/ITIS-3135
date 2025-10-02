'use strict';

const albumCollection = [
    {
        id: 2125,
        title: 'Use Your Illusion',
        artist: "Guns N' Roses",
        tracks: ['November Rain', "Don't Cry"]
    },

    {
        id: 1678,
        title: 'A Night at the Opera',
        artist: 'Queen',
        tracks: []
    },

    {
        id: 2975,
        title: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },

    {
        id: 1458,
        title: 'Appetite for Destruction', 
        artist: "Guns N' Roses"
    },

    {
        id: 3590,
        title: "School's Out",
    },

    {
        id: 3257,
        title: 'Space Oddity',
    },

    {
        id: 1257,
        title: 'Transformer',
        artist: 'Lou Reed',
        tracks: ['Vicious', 'Perfect Day', 'Walking on the Wild Side']
    },

    {
        id: 1234,
        title: 'trust issues',
        artist: 'Human',
        tracks: ['song one', 'song two']
    },
    
    {
        id: 5678,
        title: 'Stuff and Things',
        artist: 'Person',
        tracks: ['Track One', 'Track Two']
    },
    

];

/**
 * Returns an array of titles of all the albums in albumCollection
 * @returns {array} - an array of titles of all the albums in albumCollection
 */
function getAllTitles() {
    return albumCollection.map(album => album.title);
}
//uncomment following test code after implementing the function
console.log(getAllTitles());


/**
 * Returns albums of the artist in albumCollection
 * @param {string} artist - name of an artist
 * @returns an array of albums of the specified artist in albumCollection
 */
function getAlbumsByArtist(artist) {
    return albumCollection.filter(album => album.artist === artist);
}
//uncomment following test code after implementing the function
console.log(getAlbumsByArtist('Queen'));
console.log(getAlbumsByArtist("Guns N' Roses"));
console.log(getAlbumsByArtist("ABBA"));

/**
 * Returns the ablum with the specified track
 * @param {string} track - name of a track
 * @returns an album object with the specified track
 */
function getAlbumWithTrack(track) {
    for(let album of albumCollection){
        if(album.hasOwnProperty('tracks')){
            if(album.tracks.find(target => target === track)){
                return album;
            }
        }
    }
}
//uncomment following test code after implementing the function
console.log(getAlbumWithTrack('Little Red Corvette'));
console.log(getAlbumWithTrack('November Rain'));
console.log(getAlbumWithTrack('perfect day'));

/**
 * Updates the album with the specified id. 
 * @param {*} id - id of an album
 * @param {*} prop - name of a property
 * @param {*} value - new value for the property
 */
function updateAlbum(id, prop, value) {
    let target  = albumCollection.find(album => album.id === id);
    if(value === ''){
            delete target[`${prop}`];
    } else {
        if(target.hasOwnProperty(prop) && prop === 'tracks'){
                target.tracks.push(value);
        } else {
            target[`${prop}`] = value;
        }
    }
    return target;
}

//uncomment following test code after implementing the function
updateAlbum(3590, 'artist', 'Alice Cooper');
updateAlbum(3590, 'tracks', "School's Out");
updateAlbum(2125, 'artist', '');
updateAlbum(1678, 'tracks', 'Bohemian Rhapsody');
updateAlbum(2975, 'tracks', 'Free');
updateAlbum(1257, 'tracks', '');
updateAlbum(3257, 'artist', 'David Bowie');
console.log(albumCollection);








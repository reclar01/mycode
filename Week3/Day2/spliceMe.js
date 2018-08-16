let a = ['classical','rock','hiphop','country','reggae'];

function myFavs (arr){

    fav1 = 0;
    fav2 = 0;
    console.log('out of the following, what are your two favorites?');
    console.log(a);
    fav1 = prompt('First Fav: ','');
    fav2 = prompt('second Fav: ','');

    let favs = [];
    favs.push(arr.splice(0,1));
    favs.push(arr.splice(2,1));

    return favs.join();
}



console.log(myFavs(a));
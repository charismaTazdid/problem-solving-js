// Get a Random Element using One-Liner in javascript

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)]

const FabouriteSongs = ["Feel Invincible", "Beliver", "Nothing Else Matters", "Hall of Fame", "Highway to Hell", "In The End", "The Resistance", "Hail to The King", "Ecce Ghuri", "Nisup Adhare"];

const playSong = getRandomItem(FabouriteSongs);
console.log(playSong)
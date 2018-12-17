var players = [
    { name: 'Pablo', age: 32, gameL: 'KoisiTI' },
    { name: 'Pablo1', age: 22, gameL: 'KoisiTI' },
    { name: 'Pablo2', age: 12, gameL: 'KoisiTI' }
]

// for (let i = 0; i < players.length; i++) {
//     console.log(players[i]);
// }

// players.forEach(function (item) {
//     console.log(item.name + " " + item.age +  " " + item.gameL);
// });


var player = {
    name: 'Pablo',
    points: '33',
    game: 'newGame',

    combination: function(){
        return this.name + ' ' + this.points + ' ' + this.game;
    }
};

console.log(player.combination())
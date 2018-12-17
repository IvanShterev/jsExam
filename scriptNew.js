// function game(start, end){

//     for(let i = start; i < end; i ++){
//         if(i % 2 === 0){
//             console.log(i);
//         }
//     }
// }

// game(1,100);

// function facebookProfile(name, age, school) {
//     console.log(`My name is ${name}.` + `I am on ${age} years old.`)
// }
// facebookProfile('Ivan', '18', 'Hristo Botev High School.')

// vsichki prosti chisla v interval ot a do b koito sa parametri na nekva funciq 


// function isPrime(num) {
//     if (num < 2) {
//         return false;
//     }
//     for (var j = 2; j < num; j++) {
//         if (num % j == 0) {
//             return false;
//         }
//     }
//     return true;
// }

// for (var i = 0; i <= 100; i++){
//     if (isPrime(i)){
//         console.log(i);
//     }
// }

// primeNums(1, 100)

// function isPrime(num) {

//     if (num === 2) {
//       return true;
//     }
//     else if(num > 1){
//       for (var i = 2;  i < num; i++) {

//         if (num % i !== 0 ) {
//           return true;
//         }

//         else if (num === i * i) {
//           return false
//         }

//         else {
//           return false;
//         }
//       }
//     }
//     else {
//       return false;
//     }

//   }
//   console.log(isPrime(32));

// function test2(str) {
//     console.log(str.split('').join('-'));
// }

// test2(['P', 'l', 'a', 'y', 'e', 'r']);
// test2('Player');


// function test3(array) {

//     for (var i = 0; i < array.length; i++) {
//         if (array[i] >= 100) {
//             array[i] += 50;
//         }
//         else if (array[i] > 1 && array[i] <= 50) {
//             array[i] += 10;
//         }
//         else if (array[i] < 100 && array[i] > 50) {
//             array[i] += 30;
//         }
//         console.log(array[i]);

//     }

//     console.log(array);

// }
// // 1-50 - 10 points
// // 51-100 - 30 points
// // nad 100 - 50 points
// test3([2, 100, 30, 50, 200, 75, 80])

// let count = 100;

// let otherCount = count;

// console.log(otherCount == count);

// console.log(Number.MAX_VALUE);



// function getGames() {
//     let games = ['Monopoly', 'game of thrones', 'FunnyBunny'];
//     let allowedUsers = ['Pablo', 'Maria', 'Gosho'];

//     return function getMyGames(user) {

//         for (let i = 0; i < allowedUsers.length; i++) {
//             if (allowedUsers[i] === user) {
//                 return games;
//             }
//         }
//         return 'Wrong User'
//     }

// }

// let p = getGames();
// console.log(p('Marias'));


// function checkPalidrome(strNew) {

//     let isPalindrome = true;

//     for (let i = 0; i < strNew.length / 2; i++) {
//     let end = strNew.length -1 -i;
//     let start = i;
//     if (strNew[start] !== strNew[end]) {
//     isPalindrome = false;
//     break;
//     }
//     }

//     if (strNew.length === 0) {
//         console.log('The string is empty');
//         return;
//         }
//     if (isPalindrome === true) {
//     console.log('The string is Palindrome');
//     }
//     else {
//     console.log('The string is NOT Palindrome');
//     }


//     }

//     checkPalidrome('ABPPLBA');
//     checkPalidrome('abscdefg');
//     checkPalidrome('1534351');
//     checkPalidrome('05860');
//     checkPalidrome('');


// function rand() {
//     for (i = 1; i <= 10; i++) {
//         console.log(`${i}:${Math.floor((Math.random() * 50) + 1)}`);
//     }
// }

// rand();


var facebookProfile = {

    name: "Plamena ",
    friends: 3,
    messages: ["super cool", "you have a bee in your pocket", "this message is not so cool"],

    postMessage: function postMessage(message) {
        for (let index = 0; index < this.messages.length; index++) {
            if (this.messages[index] == message) {
                console.log('This messages is not new');
                break;
            }
            else {
                this.messages.push(message);
                console.log(`To messages is added ${message}`);
                break;
            }
        };
        //методът трябва да проверява дали съобщението е вече налично в messages
        //Ако е налично-да изпише съобщение - "This messages is not new"
        //Ако не е налично, да добави съобщението в списъка messages 
        // и да изпише `To messages is added ${message}`

    },

    deleteMessage: function deleteMessage(index) {
        for (let i = 0; i < this.messages.length; i++) {
            delete this.messages[index];
        }
        //методът трябва да изтрие съобщение по индекс
        //като е желателна проверка за съществуване на този индекс

    },

    addFriend: function addFriend(num) {
        //методът трябва да добавя приятел като брой към friends number
        this.friends += num;
    },

    removeFriend: function removeFriend(bul) {
        if (this.friends > 0) {
            this.friends -= bul;
        } else {
            console.log('The number of friends is already equals to zero');
        }
        //методът трябва да изважда от броя на приялителите, ако броя е > 0
        //ако броят  = 0 -> "The number of friends is already equals to zero;"

    },

    sayGender: function check() {
        //ако името на профила (name) завършва на 'а' да изпише "This person is female."
        if (this.name.substr(-1) == 'a') {
            console.log('This person is female');
        } else {
            console.log('This person is male');
        }

        //else -> "This person is male."

    }
};
console.log(facebookProfile.deleteMessage(2));
console.log(facebookProfile.messages);
console.log(facebookProfile.addFriend(2));
console.log(facebookProfile.friends);
console.log(facebookProfile.removeFriend(1));
console.log(facebookProfile.friends);
console.log(facebookProfile.sayGender());
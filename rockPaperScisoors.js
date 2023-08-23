"use strict";
// בנו תכנית שמדמה את המשחק אבן נייר ומספריים
// התכנית תגדיר מי המנצח לפי חוקיות המשחק
// אבן מנצח מספריים שמנצחות נייר שמנצח אבן
// דגשים
// שחקן יכול לבחור בין אבן נייר ומספרים בלבד! אך שחקן יכול שלא תהיה לו בחירה
// התכנית יכולה להחזיר את המחרוזות
// 'tie', 'player1', 'player2' 
// התשובה חייבת להכיל
// ENUM
// type/interface
// union
// במידה ולשחקן אין בחירה הצג זרקו שגיאה
// ממשו את הפונקציה הוסיפו טיפוסים לפרמטרים ולערך החזרה של הפונקציה
var Choise;
(function (Choise) {
    Choise[Choise["rock"] = 0] = "rock";
    Choise[Choise["pepper"] = 1] = "pepper";
    Choise[Choise["Scissors"] = 2] = "Scissors";
    Choise[Choise["undefined"] = 3] = "undefined";
})(Choise || (Choise = {}));
function playGame(player1, player2) {
    if (player1.choise === player2.choise) {
        return 'tie';
    }
    else if (player1.choise === Choise.rock && player2.choise === Choise.Scissors
        || player1.choise === Choise.Scissors && player2.choise === Choise.pepper
        || player1.choise === Choise.pepper && player2.choise === Choise.rock) {
        return 'player1';
    }
    else if (player2.choise === Choise.rock && player1.choise === Choise.Scissors
        || player2.choise === Choise.Scissors && player1.choise === Choise.pepper
        || player2.choise === Choise.pepper && player1.choise === Choise.rock) {
        return 'player2';
    }
    throw new Error('you need to choose!');
}
let player1 = {};
let player2 = {};
player1.choise = Choise.pepper;
player1.name = 'dany';
player2.choise = Choise.pepper;
player2.name = 'mice';
const play = playGame(player1, player2);
console.log(play);
//Output: player1 or player2 or tie

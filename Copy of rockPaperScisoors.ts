
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
enum Choise {
    rock,
    pepper,
    Scissors,
    undefined
}
type player = {
    choise: Choise,
    name: string
}



function playGame(player1: player, player2: player): string {
    if (player1.choise === player2.choise) {
        return 'tie';
    } else if (player1.choise === Choise.rock && player2.choise === Choise.Scissors
        || player1.choise === Choise.Scissors && player2.choise === Choise.pepper
        || player1.choise === Choise.pepper && player2.choise === Choise.rock) {
        return 'player1';
    } else if (player2.choise === Choise.rock && player1.choise === Choise.Scissors
        || player2.choise === Choise.Scissors && player1.choise === Choise.pepper
        || player2.choise === Choise.pepper && player1.choise === Choise.rock) {
        return 'player2';
    } throw new Error('you need to choose!');
}

let player1 = {} as player;
let player2 = {} as player;
player1.choise = Choise.rock;
player1.name = 'dany';
player2.choise = Choise.pepper;
player2.name = 'mice';

const play = playGame(player1, player2);
console.log(play);
//Output: player1 or player2 or tie


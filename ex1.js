"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemType = void 0;
// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
var ItemType;
(function (ItemType) {
    ItemType["Book"] = "book";
    ItemType["DVD"] = "dvd";
})(ItemType || (exports.ItemType = ItemType = {}));
// type Items = Book | DVD;
// Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים
function filterItems(items, filterFn) {
    return items.filter(filterFn);
}
// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
function printItemsData(items) {
    for (let item of items) {
        if (item.type === ItemType.Book) {
            console.log(`${item.type} + item.title + item.author`);
        }
        else if (item.type === ItemType.DVD) {
            console.log(`${item.type} ${item.title} ${item.duration}`);
        }
    }
}
// Test data
const libraryItems = [
    { type: ItemType.Book, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { type: ItemType.DVD, title: 'Inception', duration: 148 },
    { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { type: ItemType.DVD, title: 'Avatar', duration: 162 },
    { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];
// Step 5:  הדפיסו את כל המידע הנתון 
printItemsData(libraryItems);
// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך 
const longst = filterItems(libraryItems, (item) => item.type === ItemType.DVD && item.duration > 120);
longst.forEach(movie => console.log(movie));
// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של
filterItems(libraryItems, (item) => item.type === ItemType.Book && item.author === 'Harper Lee');

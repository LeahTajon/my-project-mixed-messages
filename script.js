function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

const collection = {
    today: ['fantastic', 'beautiful', 'wonderful', 'fascinating'],
    task: ['go for a walk', 'learn a new skill', 'exercise at home', 'find a way to serve', 'start a garden', 'read a book', 'meditate', 'bond with family'],
    affirmation: ['I know you will be great!', "I can't wait to celebrate your success", "You're going to feel so great about this accomplishment", "I know this will be easy for you"]
};

let message = [];

for (let word in collection) {
    let wordIdx = generateRandomNumber(collection[word].length);

    switch (word) {
        case 'today':
            message.push(`Today is a ${collection[word][wordIdx]} day.`);
            break;
        case 'task':
            message.push(`It's time to ${collection[word][wordIdx]}.`);
            break;
        case 'affirmation':
            message.push(`${collection[word][wordIdx]}.`);
            break;
        default:
            message.push('There is not enough info.')
    }
}

function formatMessage(message) {
    const format = message.join('\n');
    console.log(format);
}

formatMessage(message);
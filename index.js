/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const dog = {
   species: "dog",
   name: "Toby",
   gender: "male",
   legs: 4,
   hands: 0,
   saying: "woof-woof!",
};

const cat = {
   species: "cat",
   name: "Lily",
   gender: "female",
   legs: 4,
   hands: 0,
   saying: "meow!",
};

const woman = {
   species: "human",
   name: "Linda",
   gender: "female",
   legs: 2,
   hands: 2,
   saying: "What a pretty kitten!",
};

const man = {
   species: "human",
   name: "Jim",
   gender: "male",
   legs: 2,
   hands: 2,
   saying: "Heyyo!",
};

const catWoman = {
   species: "cat",
   name: "Ro",
   gender: "female",
   legs: 2,
   hands: 2,
   saying: cat.saying,
};

// ======== OUTPUT ========

const inhabitantsArr = [dog, cat, man, woman, catWoman];
inhabitantsArr.forEach((inhabitant) => {
   const inhabitantToArr = Object.values(inhabitant);
   print(inhabitantToArr.map((prop) => prop));
});

/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */

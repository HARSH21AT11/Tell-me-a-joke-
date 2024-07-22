
// Statements (Questions) Array
const  Joke_list = [
    "What do you call a boomerang that won’t come back?",
    "What does a cloud wear under his raincoat?",
    "Two pickles fell out of a jar onto the floor. What did one say to the other?",
    "What time is it when the clock strikes 13?",
    "How does a cucumber become a pickle?",
    "What did one toilet say to the other?",
    "What do you think of that new diner on the moon?",
    "Why did the dinosaur cross the road?",
    "Why can’t Elsa from Frozen have a balloon?",
    "What musical instrument is found in the bathroom?",
    "Why did the kid bring a ladder to school?",
    "What do you call a dog magician?",
    "Where would you find an elephant?",
    "How do you get a squirrel to like you?",
    "What do you call two birds in love?",
    "How does a scientist freshen her breath?",
    "How are false teeth like stars?",
    "What building in your town has the most stories?",
    "What’s worse than finding a worm in your apple?",
    "What is a computer's favorite snack?",
    "What did one volcano say to the other?",
    "How do we know that the ocean is friendly?",
    "What is a tornado’s favorite game to play?",
    "How does the moon cut his hair?",
    "How do you talk to a giant?",
    "What animal is always at a baseball game?",
    "What falls in winter but never gets hurt?",
    "What did the Dalmatian say after lunch?",
    "Why did the kid cross the playground?",
    "What do you call a droid that takes the long way around?",
    "Why did the cookie go to the hospital?",
    "Why was the baby strawberry crying?",
    "What did the little corn say to the mama corn?",
    "How do you make a lemon drop?",
    "What did the limestone say to the geologist?",
    "Why does a seagull fly over the sea?",
    "What kind of water can’t freeze?",
    "What kind of tree fits in your hand?",
    "What do you call a dinosaur that is sleeping?",
    "What is fast, loud and crunchy?",
    "Why did the teddy bear say no to dessert?",
    "What has ears but cannot hear?",
    "What did the left eye say to the right eye?",
    "What did one plate say to the other plate?",
    "Why did the student eat his homework?",
    "When you look for something, why is it always in the last place you look?",
    "What is brown, hairy and wears sunglasses?",
    "What do you say to a rabbit on its birthday?",
    "What’s the one thing will you get every year on your birthday, guaranteed?",
    "Why do candles always go on the top of cakes?"
];

// Answers Array
const answer_list= [
    "A stick.",
    "Thunderwear.",
    "Dill with it.",
    "Time to get a new clock.",
    "It goes through a jarring experience.",
    "You look a bit flushed.",
    "Food was good, but there really wasn’t much atmosphere.",
    "Because the chicken wasn’t born yet.",
    'Because she will "let it go, let it go."',
    "A tuba toothpaste.",
    "Because she wanted to go to high school.",
    "A labracadabrador.",
    "The same place you lost her.",
    "Act like a nut.",
    "Tweethearts",
    "With experi-mints.",
    "They come out at night.",
    "The public library.",
    "Finding half a worm.",
    "Computer chips.",
    "I lava you.",
    "It waves.",
    "Twister.",
    "Eclipse it.",
    "Use big words.",
    "A bat.",
    "Snow.",
    "That hit the spot.",
    "To get to the other slide.",
    "R2 detour.",
    "Because he felt crummy.",
    "Because her mom and dad were in a jam.",
    "Where is pop corn?",
    "Just let it fall.",
    "Don’t take me for granite.",
    "Because if it flew over the bay, it would be a baygull.",
    "Hot water.",
    "A palm tree.",
    "A dino-snore.",
    "A rocket chip.",
    "Because she was stuffed.",
    "A cornfield.",
    "Between us, something smells.",
    "Dinner is on me.",
    "Because the teacher told him it was a piece of cake.",
    "Because when you find it, you stop looking.",
    "A coconut on vacation.",
    "Hoppy Birthday.",
    "A year older.",
    "Because it's hard to light them from the bottom."
];








let sorted_answer=answer_list[0]
let sorted_statement=Joke_list[0]


let statement=document.getElementsByClassName("main-text")[0]

let answer=document.getElementsByClassName("ANS_text")[0]

let next=document.getElementsByClassName("click_me")[0]

var last_value=0
statement.innerHTML=sorted_statement
answer.innerHTML=sorted_answer

i=1
function add_me(){
    sorted_statement=Joke_list[i]
    sorted_answer=answer_list[i]
    
    statement.innerHTML=sorted_statement
    answer.innerHTML=sorted_answer
    i++
    last_value =i    
    
    if(last_value==Joke_list.length){ 
        // next.removeEventListener("click",add_me)
        i=1
        }

    
}


next.addEventListener("click",add_me)



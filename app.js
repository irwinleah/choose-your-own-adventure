const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Hello ${username}, welcome to the multiverse! I would like to learn more about you before we continue...`);


const species = prompt('What is your species? ');
console.log(`You are ${species}`);

if(species === 'elf'){
    console.log('your skills are archery, magic and crafting.')
} else if(species === 'dwarf'){
    console.log('your skills are smithing, foresight and invisibility')
} else if(species === 'wizard'){
    console.log('your skills are magic, animagus and necromancy')
} else if(species === 'ogre'){
    console.log('your skills are super strength, shape shift and trap making')
} else if(species === 'human'){
    console.log('your skills are hope, love and guns')
} else {
    console.log('you are probably a gremlin...good luck out there! stay away from water, do not eat after midnight and avoid bright lights')
}

const weapon = prompt('how do you fight? ');
console.log(`with a ${weapon}`);

if(weapon === 'bow'){
    console.log('you have a longbow and 30 iron arrows')
} else if(weapon === 'dagger'){
    console.log('you have two steel bladed daggers')
} else if(weapon === 'sword'){
    console.log('you have an iron sword')
} else if(weapon === 'staff'){
    console.log('you have a frostbite staff')
} else if(weapon === 'mace'){
    console.log('you have a steel mace')
} else if(weapon === 'crossbow'){
    console.log('you have a wooden crossbow with 30 steel bolts')
} else {
    console.log('no...you have a wet sock on your left foot...good luck!')
}

//introduce movement command keys

const map = prompt('where do you want to explore? Shire, Riften, Hogwarts, Lumbridge, Faron, The Narrows, Sietch Tabr, Dagobah? ');
console.log(`take me to ${map}`);

if(map === 'Shire'){
    console.log('away you go with 20 gold coins')
} else if(map === 'Riften'){
    console.log('au revoir! away you go with 5 gold coins...good luck!')
} else if(map === 'Hogwarts'){
    console.log('hurry the train is leaving! I packed you a chocolate frog in your satchel')
} else if(map === 'Lumbridge'){
    console.log('the magic carpet is gassed up for ya, you have 100 gold coins')
} else if(map === 'Faron'){
    console.log('Spirit Train is ready, you have 30 rupees')
} else if(map === 'The Narrows'){
    console.log('better get to walking! You have 5 cools rocks and 3 unique driftwood pieces')
} else if(map === 'Sietch Tabr'){
    console.log('this stillsuit should work, you have 5 water rings, hope you like sand!')
} else if(map === 'Dagobah'){
    console.log('here are you muckboots, see if you can find Yoda')
} else {
    console.log('I said pick a place on the map!')
}

const action = prompt('what do you want to do first? ');
console.log(`i want to ${action}`);

if(action === 'fight the local punk'){
    console.log('wow someone is great at first impressions')
} else if(action === 'smithing'){
    console.log('the local blacksmith is in the center of the town square')
} else if(action === 'alchemy'){
    console.log('the alchemy lab is located in the library')
} else if(action === 'find yoda'){
    console.log('head to the swamp')
} else if(action === 'gamble'){
    console.log(action === 'you can go play jousting bets at the jousting arena, free beer!')
} else if(action === 'start a quest'){
    console.log('ok well first you gotta recieve a quest. go ask a local person if they need help, they will then give you a quest.')
} else if(action === 'ride'){
    console.log('you have the option to ride horses, moto or pedal bikes, or giant hamsters')
} else if(action === 'i want to swim'){
    console.log('take a snorkle and mask')
} else if(action === 'i am bored'){
    console.log('well then go kick a rock down the road')
} else {
    console.log('feel free to meander around')
}




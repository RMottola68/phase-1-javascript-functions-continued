let saturdayFun = (activity = 'roller-skate') => {
return `This Saturday, I want to ${activity}!`;
}

let mondayWork = (work = 'go to the office') => {
 return `This Monday, I will ${work}.`;
}

let wrapAdjective = (adj = 'special') => {
    return function(str = '*'){
        return `You are ${adj}${str}${adj}!`
    }
}
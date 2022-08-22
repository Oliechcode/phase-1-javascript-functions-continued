// code your solution here
function saturdayFun(defaultActivity = 'roller-skate') {
    return (`This Saturday, I want to ${defaultActivity}!`);
}
saturdayFun(); 

function mondayWork(defaultActivity = 'go to the office') {
    return `This Monday, I will ${defaultActivity}.`;
}
mondayWork();

function wrapAdjective (verb="*") {
    return function(adjective){
    return `You are ${verb}${adjective}${verb}!`
    }  
}
wrapAdjective();


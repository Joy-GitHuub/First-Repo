// 

function seerToMon(seer) {
    const mon = 0.025;
    // input Check 
    if (seer < 0) {
        return console.log('Please Give me a Positive Number');
    }
    const result = mon * seer;
    return result;

}
const mySeer = seerToMon(140);
console.log(mySeer);
import data from './football.json' with {type: 'json'}

//if statement

// let light_switch = ["on", "off"];
// let light = true;

// light_switch ? console.log(light_switch[0]) : console.log(light_switch[1])
// light == "true"? console.log(light_switch[0]) : console.log(light_switch[1])


// if (light == "true") {
//     console.log(light_switch[0])                                        //itenary operators
// } else {
//     console.log(light_switch[1])
// }

//case

// let weekdays =  "tuesday";

// switch(weekdays){
//     case "tuesday":
//         console.log("hello")
//         break;

//     default :
//         console.log("nothingto display")
//         break;
// }


// for loop
// for( let i = 0; i < data.football.clubs.length; i++){
// console.log(data.football.clubs[i])
// }

//mapping

data.football.clubs.map((e,i) => {
    console.log(i,e)
});

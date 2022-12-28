const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
const usersArraySize = users.length;
if(usersArraySize == 0 ) {
    console.log("no one is online");
}
else if(usersArraySize == 1) {
    console.log(users[0])
}
else if(usersArraySize == 2) {
    console.log(users.slice(0,2))
}
else if(usersArraySize > 2) {
    console.log(` ${users.slice(0,2)} and ${usersArraySize - 2} are online`)
}
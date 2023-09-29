const person ={
    firstname: "Nikita",
    lastname:"Mishra",
    age: 22,
    
};
function ageinDays(personObject,callback){
    const fullname=`${personObject.firstname} ${personObject.lastname}`;
    const ageinDays=personObject.age *365;
    callback(fullname,ageinDays);

}
function logResult(fullname,ageinDays){
    console.log(`The person's fullname is ${fullname} and their age in days is ${ageinDays}.`);
}
ageinDays(person,logResult)
const aboutMe = {
    firstName: 'View',
    lastName: 'Super',
    age: 14,
    mail: 'mmmof*.com',
    phone: '07xxx87887',
    idCard: 'xx345xxxx',
    fan: {
        firstName: 'Lisa',
        lastName: 'Mamamoosub',
        age: 15,
        animal:{
            animalType: 'cat',
            color: 'orange'
        }
    },
    myBro: {
    firstName: 'Lisa',
    lastName:'Mamamoosub',
    AKA:'SuperMan',
    }
}
console.log(aboutMe.myBro.AKA)

/////////////////////////////////////////

const myFriend = [{
    firstName: 'Lisa',
    lastName:'Mamamoosub',
    AKA:'SuperMan',
    age:16
}, {
     firstName: 'Rose',
    lastName:'Mamamoosub',
    AKA:'RoseOnPink',
    age: 20
}, {
     firstName: 'Jisoo',
    lastName:'Mamamoosub',
    AKA:'Jinny',
    age: 24
},{
     firstName: 'Jenny',
    lastName:'Mamamoosub',
    AKA:'WonderG',
    age: 17
}]
console.log(myFriend[0].firstName)

const myFriendAKA = myFriend.map(function(element,index){
    return ({
        firstName:element.firstName,
        AKA:element.AKA
    })
})

//  for (let i = 1; i <=10; i++) {
//      console.log(i)
//  }
// let sum: number = 0

//  for (let i = 1; i <= 31; i++) {
//      sum = sum + i
//  }

// console.log('total: ', sum)

// let sum: number = 0 
// let i: number = 1

// while (i <= 31) {
//     sum = sum + i
//     i++
// }

// console.log('Total: ',sum)

// let sum: number = 0
// let i: number = 1

// do {
//     i++
// }   while (i <= 31)

// console.log('Total: ', sum) 

// let count: number = 0

// while (true) {
//     console.log("โสดโว้ย")
//     count++
//     if (count === 10) {
//         break
//     }
// }

// for (let i = 1; i <= 19; i++) {
//     console.log('ฉันอายุ ' + i + ' ปี')
// }

// let i: number = 1
// while (i <= 19) {
//     console.log('ฉันอายุ ' + i + ' ปี')
//     i++
// }

// let i: number = 1

// do {
//     console.log('ฉันอายุ ' + i + ' ปี')
//     i++
// } while (i <= 19)

// let car1: string = 'Toyota'
// let car2: string = 'Honda'
// let car3: string = 'Susuki'
// let car4: string = 'Yamaha'
// let car5: string = 'Mazda'

//  const cars: string[] = ['Toyota', 'Honda', 'Susuki', 'Yamaha', 'Mazda']
// const num: number[] = [1, 2, 3, 4, 5]
// const bool: boolean[] = [true, true, false, false]

// const str: string = 'ชอบก็จัด ประหยัดทำไม'

// console.log(str[2])

// const cars: string[] = ['Toyota', 'Honda', 'Susuki', 'Yamaha', 'Mazda', 'BYD']

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i])
// }

// const cars: string[] = ['Toyota', 'Honda', 'Susuki', 'Yamaha', 'Mazda', ]

// for (let i = 0; i < cars.length; i++) {
//     if (cars[i] === 'Yamaha') {
//         console.log('รถซื้อแกง จะแรงได้ไง')
//     }
// }
  
// console.log(cars.includes('BYD'))
// console.log(cars.indexOf('Susuki'))

// const friend: string[] = ['ป้อง', 'พีท', 'คิว', 'รุจ', 'ศร']

// for (let i = 0; i < friend.length; i++) {
//     if (friend[i] === 'ศร') {
//         console.log('วันนี้ไปกินหมูกะทะกัน')
//     }
// }

const num: number[] =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < num.length; i++) {
    if (num[i] === 3 || num[i] === 5 || num[i] ===7) {
        num[i] = 0
    }
}

console.log (num)
// function sayHi(dayOfWeek: number) {
//        if (dayOfWeek === 1) {
//    console.log('สวัสดีวันอาทิตย์') 
// } else if (dayOfWeek === 2) {
//    console.log('สวัสดีวันจันทร์')
// }else if (dayOfWeek === 3) {
//    console.log('สวัสดีวันอังคาร')
// }else if (dayOfWeek === 4) {
//    console.log('สวัสดีวันพุธ')
// }else if (dayOfWeek === 5) {
//    console.log('สวัสดีวันพฤหัสบดี')
// }else if (dayOfWeek === 6) {
//    console.log('สวัสดีวันศุกร์')
// }else if (dayOfWeek === 7) {
//    console.log('สวัสดีวันเสาร์')
//    }
//}

// sayHi(6)

function sayHi(dayOfWeek: number){
    switch (dayOfWeek) {
        case 1:
             console.log('สวัสดีวันอาทิตย์')
            break
        case 2:
             console.log('สวัสดีวันจันทร์')
            break
        case 3:
             console.log('สวัสดีวันอังคาร')
            break
        case 4:
             console.log('สวัสดีวันพุธ')
            break
        case 5:
             console.log('สวัสดีวันพฤหัสบดี')
            break
        case 6:
             console.log('สวัสดีวันศุกร์')
            break
        case 7:
             console.log('สวัสดีวันเสาร์')
            break
        default:
            console.log('ใส่วันมาผิด')
            break

    }
}

sayHi(6)

function size (shirt: string) {
    switch (shirt) {
        case 's':
             console.log('ผอม')
             break
        case 'm':
             console.log('ผอม')  
             break
        case 'l':
             console.log('ท้วม')  
             break
        case 'xl':
             console.log('ท้วม')  
             break  
        case 'xl':
             console.log('อ้วน')  
             break
    }
}

size ('m')

//  const x: number = 9999999999
//  const y: number = 9999999999

//  console.log('x',x)
//  console.log('x',y)

// const x: number = 0.4
// const y: number = 0.2

//  console.log((x * 10 + y * 10 )/ 10)

//  const x: number = 10000

//  console.log(x.toLocaleString())

//  function fixedDecimal(n: number, digit: number) {
//      const x = n.toFixed(digit)
//      return x
//  }
// console.log(fixedDecimal(40.67676, 10))

//  function sd (o:number) {
//      const g = o. toLocaleString()
//      return g
//  }

//  console.log(sd(1000))

//  const str: string = "Hello"

//  console.log(str.length)

//  const str: string = "ณเดชณ์ คุคิ งุงิ"

//  console.log(str.charAt(8))


//  const str: string = "  ณเดชณ์ คุคิ งุงิ  "

//  console.log(str.trim())


//  const str: string = "Wasitpol"

//  console.log(str.toLowerCase()) // toUpperCase


//  function checkStringLenght(s: string) {
//      const x = s.length
//      return x
//  }

//  console.log(checkStringLenght("wasitpol"))


function getCharByIndex(msg: string, index: number) {
    return msg.charAt(index)
}

console.log(getCharByIndex('ฝนตก', 3))

const str: string = 'ฉันรักเธอ'

console.log(str.includes('เกลียด'))

function checkStrIndex(str: string, search: string) {
    if (str.includes(search)) {
        console.log(str.indexOf(search))
    } else {
        console.log('ไม่พบคำค้นหา')
    }
}

checkStrIndex('อยากลับ Home', 'H')
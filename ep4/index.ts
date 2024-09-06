function sayHi(dayOfWeek: number) {
    if (dayOfWeek === 1) {
        console.log('สวัสดีวันอาทิตย์')
    } else if (dayOfWeek === 2) {
        console.log('สวัสดีวันจันทร์')
    } else if (dayOfWeek === 3) {
        console.log('สวัสดีวันอังคาร')
    } else if (dayOfWeek === 4) {
        console.log('สวัสดีวันพุธ')
    } else if (dayOfWeek === 5) {
        console.log('สวัสดีวันพฤหัสบดี')
    } else if (dayOfWeek === 6) {
        console.log('สวัสดีวันศุกร์')
    } else if (dayOfWeek === 7) {
        console.log('สวัสดีวันเสาร์')
    }
}
sayHi(5)


function sayhello(dayOfWeek: number) {
    switch (dayOfWeek) {
        case 1:
            console.log('สวัสดีวันอาทิตย์')
        case 2:
            console.log('สวัสดีวันจันทร์')
        case 3:
            console.log('สวัสดีวันอังคาร')
        case 4:
            console.log('สวัสดีวันพุธ')
        case 5:
            console.log('สวัสดีวันพฤหัสบดี')
        case 6:
            console.log('สวัสดีวันศุกร์')
        case 7:
            console.log('สวัสดีวันเสาร์')
            break

    }

}
sayhello(6)

function saydamy(site: string) {
    switch (site) {
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
            console.log('อ้วน')
            break
        case '2xl':
            console.log('อ้วน')
            break

    }

}
saydamy('2xl')
const x: number = 46.548912348913

console.log(x.toString(2))

function fixedDecima(n: number, digit: number) {
    const x = n.toFixed(digit)//(ใส่ทศนิยม)
    return x
}

console.log(fixedDecima(40.67676, 10))


function commahahaha(n: number) {
    const d = n.toLocaleString() //(ใส่ลูกน้ำ)
    return d
}
console.log(commahahaha(10000))

const str: string = "hello"//TemplateString
console.log(str.charAt(1))//นับตัวอักษร

const std: string = 'ป๊อป คนคอน คอยรัก คอยดัก กระชาก กระเป๋า'
console.log(std.charAt(1))//CharAt เรียกตัวอักษรออกมา(ใส่ตัวอักษรนับ)


const stp: string = "ป๊อป คนคอน คอยรัก คอยดัก กระชาก กระเป๋า"
console.log(stp.charAt(1))//trim (start,end)เอาวรรคออกเวลาrun


const stk: string = "Surasak"
console.log(stk.toUpperCase())//toUpperCase เป็นตัวใหญ่หมด toLowerCase เป็นตัวเล็กหมด

function checkStringLength(n: string) {
    const p = (n.length)
    return p

}
console.log(checkStringLength('poppy'))//function ของการนับตัวอักษร length

function indexggez(moohahaha: string, index: number) {
    return moohahaha.charAt(index)//CharAt เรียกตัวอักษรออกมา(ใส่ตัวอักษรนับ)

}
console.log(indexggez('บ้าป่าว', 6))//ใส่เลขด้วยไอ้บ้า

function indexggez(moohahaha: string, index: number) {
    return moohahaha.charAt(index)//CharAt เรียกตัวอักษรออกมา(ใส่ตัวอักษรนับ)

}
console.log(indexggez('บ้าป่าว', 6))//ใส่เลขด้วยไอ้บ้า

const str: string = "กูว่ามึงบ้า"

console.log(str.includes('ไม่บ้า'))

function amt(c: string, m: string) {
    if (c.includes(m)) {
        console.log(c.indexOf(m))
    } else {
        console.log('ไม่พบคำที่ค้นหา')
    }
}

amt('อยากกินขนม', 'm')//แบบฝึกในห้อง
const str: string ='ยายมอยขายมี ยายมีขายหอย'

//console.log(str.trim()) // เอา space ออกทั้งคู่
//console.log(str.trimStart()) // เอา space ด้านหน้าออก
//console.log(str.trimEnd()) // เอา space ด้านหลังออก
const str: string ='ยายมอยขายมี ยายมีขายหอย'

console.log(str.indexOf('ขาย')) // index ของคำไหน
//console.log(str.includes('หอย'))

const str: string = 'นายธนภัทร ทดสอบ'

console.log(str.slice(3,9))
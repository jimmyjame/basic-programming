function helloWorld() {
    console.log("สวัสดี")
}

helloWorld() // ไม่มี input ไม่มี output

function helloName(name: string) {
    console.log(name)
} 

helloName('Ohm') // มี input ไม่มี output

function getPi() {
    return 3.14
}

console.log(getPi()) // ไม่มี input มี output

function st(fname: string, sname: string) {
    
    if (fname === 'mix' && sname === "zane") {
        console.log('เริ่มสอน')
    }else {
        console.log('ไม่สอน')
    }
}

st('mix', 'zane')

function sr(oname: string, hname: string, mname: string) {
    if (oname === 'mix' || hname === 'zane' && mname === 'forth') {
        console.log('พร้อมเรียน') 
    }else {
        console.log('ยังไม่พร้อม')
    }
}

sr('mix', 'zane', 'forth')

function qr(g: string, h: number, w: number) {
    if(g === 'เพศชาย' && h > 170 || (w > 50 && w <= 110)) {
        console.log('จับใบดำใบแดง')
    }else {
        console.log('ไม่เข้าเกณฑ์')
    }
}

qr('เพศชาย', 165, 45)

function hk(age: number, pay: number, saving: number) {
    if(age >= 16 && pay < 70000 && saving < 50000) {
        console.log('รับ10000บาท')
    }else {
        console.log('อด.....')
    }
}

hk(18, 9000, 5600)
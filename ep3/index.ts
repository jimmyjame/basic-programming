function helloworld() {
    console.log("สวัสดี");    
}

helloworld()

function helloName(name: string) {
    console.log(name)
}

helloName('Jame')

function getPi() {
    return 3.14
}

console.log(getPi())

function st(fname: string, sname: string) {
    
    if (fname === 'pari' && sname === 'jame') {
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}

function st(fname: string, sname: string, aname: string) {
    
    if ((fname === 'mix' || sname === 'zane') && aname === 'forth') {
        console.log('พร้อมเรียน')
    } else {
        console.log('ยังไม่พร้อม')
    }
}

st('mix' ,'zane' ,'forth')

function st(sex: string, high: number, weight: number) {
    if (sex === 'ชาย' && high > 170 || weight > 50 && weight <= 110) {
        console.log('จับใบดำใบแดง')
    } else {
        console.log('ไม่เข้าเกณฑ์')
    }
}
st('ชาย' ,175 ,80)

function st(age: number, เงินเดือน: number, เงินฝาก: number) {
    if (age >= 16 && เงินเดือน < 70000 && เงินฝาก < 500000) {
        console.log('รับ 10000บาท')
    } else {
        console.log('อด')
    }
}
st(16 ,70000 ,500000)

function st(high: number, )
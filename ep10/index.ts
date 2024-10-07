const database = [
    {
        email: 'user@gmail.com',
        password: 'loveYou3000'
    },
    {
        email: 'max@gmail.com',
        password: '1234567แปด'
    }
]

function  login (email:string,password:string) {
      const user = database.filter(function (element,index){
      return element.email === email
      })
      if(user.length >0){
         if (user[0].password === password){
            alert('เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ')
         }else{
            alert('รหัสผ่านไม่ถูกต้อง โปรดตรวจสอบ')
         }
      } else {
        alert('ไม่พบผู้ใช้งานในระบบ')
      }
}
login('max@gmail.com','1234567แปด')
const database = [
    {
        email: 'user@gmail.com',
        password: 'loveYou3000'
    },
    {
        email: 'max@gmail.com',
        password: '1234567แปด'
    }
]

function decryptPassword(password:string) {
    return password.replaceAll('+','u').replaceAll('*','6').replaceAll('^','0')
}

function  login (email:string,password:string) {
      const user = database.filter(function (element,index){
      return element.email === email
      })
      if(user.length >0){
        const realPassword = decryptPassword(user[0].password)

         if (realPassword === password){
            alert('เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ')
         }else{
            alert('รหัสผ่านไม่ถูกต้อง โปรดตรวจสอบ')
         }
      } else {
        alert('ไม่พบผู้ใช้งานในระบบ')
      }
}
login('max@gmail.com','1234567แปด')


    
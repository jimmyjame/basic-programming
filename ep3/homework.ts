function bmi(height: number, weight: number) { 
    let score: number = weight / (height * height)

    if(score < 18.50) { 
        return 'น้ำหนักน้อย / ผอม' 
    } else if (score < 22.90) { 
        return 'ปกติ' 
    } else if (score < 24.90) { 
        return 'ท้วม / โรคอ้วนระดับ 1' 
    } else if (score < 29.90) { 
        return 'อ้วน / โรคอ้วนระดับ 2' 
    } else { 
        return 'อ้วนมาก / โรคอ้วนระดับ 3' 
    }
}

console.log(bmi(1.7, 45))
function BMI(height: number, weight: number ) {
    let body: number = weight / (height * height)
    if (body <= 18.50) {
        return 'ผอม'
     } else if (body <= 22.90) {
        return 'ปกติ'
     } else if (body <= 24.90) {
        return 'ท้วม'
     } else if (body <= 29.90) {
        return 'อ้วน'
     } else if (body > 30)
        return 'อ้วนมาก'
        
}

console.log(BMI(176, 108))
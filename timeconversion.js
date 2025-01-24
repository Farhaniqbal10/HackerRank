function timeConversion(s) {
    let time = s.slice(0, 8);  
    let period = s.slice(8);    
    
    let [hours, minutes, seconds] = time.split(':');  
    if (period === 'AM') {
    
        if (hours === '12') {
            hours = '00';
        }
    } else if (period === 'PM') {
        
        if (hours !== '12') {
            hours = (parseInt(hours) + 12).toString();  
        }
    }
    
    
    return `${hours}:${minutes}:${seconds}`;

}

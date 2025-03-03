export function insertDecimal(num) {
    return (num / 100).toFixed(2);
 }

export function formattedNumber(number) {
    return (number / 100).toLocaleString('en-US', { 
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2,
    });
}
function convertPoundsToKilogram (pounds: number){
    let kilogram:number = pounds * 0.4535;
    return kilogram;
}
console.log(convertPoundsToKilogram(54))

function convertInchesToCentimeters(inches:number){
    let centimeters : number = inches * 2.54;
    return centimeters;
}
console.log(convertInchesToCentimeters(43))

function convertFahrenheitToCelsius(fahrenheit:number){
    let celsius:number = fahrenheit - 32 * 5/9;
    return celsius;
}
console.log(convertFahrenheitToCelsius(45))

function convertFeetToMeters(feet:number){
    let meters: number = feet * 0.3048;
    return meters;
}
console.log(convertFeetToMeters(5))

//A function that determines whether a number is an odd or even number.
function DetermineOddEven(num:number){

//check if the number is even
if(num % 2 == 0) {
    return "The number is even."
}

// if the number is odd
else {
    return "The number is odd."
}
}

console.log(DetermineOddEven(5))

//Fizz-Buzz

function FizzBuzz (numb:number){
    if(numb % 3 ==0 && numb % 5 ==0){
        return "FizzBuzz"

    }else if(numb % 5 == 0){
            return "Buzz"    

    }else if(numb % 3 ==0){
        return "Fizz" 
    
    }else {}
        return "The number is normal"
    }

console.log(FizzBuzz(5))
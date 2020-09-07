/*class Calculation{
    constructor(w,x,y,z){
        this.w = w;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    opening(){
        if(itemsName == 'Gold')
        open.value = goldOp;
    }
}
*/
inputValue = document.getElementById('celcius');
outputValue = document.getElementById('farenheit');
submitBtn = document.getElementById('submitButton');
kelvin = document.getElementById('kelvin');

//Add Event Listener
submitBtn.addEventListener('click',enter);

function enter(){
    if(inputValue.value == '' && kelvin.value == '' && farenheit.value == ''){
        alert('please Enter a valid number');
        
        
    }else if(kelvin.value !==''){
        inputValue.value = kelvinToCelcius(kelvin.value);
        outputValue.value = kelvinToFarenheit(kelvin.value)

    }else if(farenheit.value !==''){
        inputValue.value = farenheitToCelcius(farenheit.value);
        kelvin.value = farenheitToKelvin(farenheit.value);
    }

    else{
        //outputValue.value = inputValue.value
        outputValue.value = celciusToFarenheit(inputValue.value);
        kelvin.value = celciusToKelvin(inputValue.value);
        
    };
}

function celciusToFarenheit(C){
    return  1.8*C + 32;
        
}

function celciusToKelvin(C){
    return parseInt(273) + parseInt(C);
}


function kelvinToCelcius(K){
    return parseInt(K) - parseInt(273);
}

function kelvinToFarenheit(K){
    return 1.8*K - 459.67;
}

function farenheitToCelcius(F){
    return (F - 32)/1.8;
}

function farenheitToKelvin(F){
    return (parseInt(F) + parseInt(459.67) )*0.556;
}
//Input Fields
class Person{
    constructor(name, sex, department,nationality){
        this.name = name;
        this.sex = sex;
        this.department = department;
        this.nationality = nationality;

    }   
    description(){
        return `hello there, my name is ${this.name} and I am from ${this.nationality}`
    };
    }
    class Records extends Person{
        constructor( name,sex,department,nationality,taxBurden){
        super(name,sex,department,nationality);
        

        this.taxBurden = taxBurden;
        
        }  
        
        taxDebt(){
            return `My tax debt is equal to ${this.taxBurden}`
        }
    }
        
    

    let chadwick = new Person("Chadwick","male","tourism","Canada");
    let jane = new Person("Jane","female","Project Management","Brazil")
    let stone = new Records("John Stones","Male","Administration","USA","$0")
    console.log(stone);


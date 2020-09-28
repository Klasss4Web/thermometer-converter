//UI Input Values
inputValue = document.getElementById('celcius');
outputValue = document.getElementById('farenheit');
submitBtn = document.getElementById('submitButton');
kelvin = document.getElementById('kelvin');

//Add Event Listener
submitBtn.addEventListener('click',enter);

function enter(){
    if(inputValue.value == '' && kelvin.value == '' && farenheit.value == ''){
        messageAlert('please Enter a valid number');
        setTimeout(messageAlert,3000);
        
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

//Fuction to Conver Celcius to Farenheit
function celciusToFarenheit(C){
    return  1.8*C + 32;
        
}

//Function to Convert Celcius to Klvin
function celciusToKelvin(C){
    return parseInt(273) + parseInt(C);
}

//Function to Convert Kelvin to Celcius
function kelvinToCelcius(K){
    return parseInt(K) - parseInt(273);
}
//Function to Conver Kelvin to Farenheit
function kelvinToFarenheit(K){
    return 1.8*K - 459.67;
}

//Function to Conver Farenheit to Celcius
function farenheitToCelcius(F){
    return (F - 32)/1.8;
}

//Function to Convert Farenheit to Kelvin
function farenheitToKelvin(F){
    return (parseInt(F) + parseInt(459.67) )*0.556;
}
        
    
    //Error Message
    function messageAlert(msg){
       let notification = document.getElementById('message')
       
       message.textContent = msg;
      
       
        
    }

    
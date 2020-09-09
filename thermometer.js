
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
        
    

    function messageAlert(msg){
       let notification = document.getElementById('message')
       //message.style.height = "25px";
       message.textContent = msg;
      
       
        
    }

    
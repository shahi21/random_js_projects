

const btnEl=document.getElementById("btn");
    const birthdayEl= document.getElementById("birthday");
    const resultEl=document.getElementById("result");
     

    function calculateAge(){
        const birthdayValue= birthdayEl.value;
        if(birthdayValue===""){
            alert("Please enter your birthday");
        }else{
            const age= getAge(birthdayValue);
            resultEl.innerText= `You are ${age} years old.`;
        }
    }

    function getAge(birthdayValue){
        const currentDate=new Date();
        const birthdayDate=new Date(birthdayValue);
        let age= currentDate.getFullYear()- birthdayDate.getFullYear();
        const monthDiff = (currentDate.getMonth() - birthdayDate.getMonth()) ;

        if(
            monthDiff < 0 ||
            (monthDiff === 0 && currentDate.getDate() < birthdayDate.getDate())){
                age--;
            }
            return age;
        
    }

    btnEl.addEventListener("click", calculateAge);

   
const form=document.querySelector('form');
        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            const height=parseInt(document.querySelector('#h').value);
            const weight=parseInt(document.querySelector('#w').value);
            const result=document.querySelector('#result');
            if(height === '' || height < 0){
                result.innerHTML=`Please give valid height`;
            }else if(weight === '' || weight < 0){
                result.innerHTML=`Please give valid weight`;
            }else{
                const bmi=(weight/(height/100)**2).toFixed(2);
                if(bmi < 18.6){
                    const msg=`Underweight`;
                    result.innerHTML=`Your Body Mass Index is ${bmi}. You're ${msg}`;
                }else if(bmi > 18.6 && bmi < 24.9){
                    const msg='Absolutely normal';
                    result.innerHTML=`Your Body Mass Index is ${bmi}. You're ${msg}`;
                }else if(bmi > 24.9){
                    const msg='Overweight';
                    result.innerHTML=`Your Body Mass Index is ${bmi}. You're ${msg}`;
                }
            }
        })
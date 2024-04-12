//event.preventDefault()

           /* let data = "\r amount " + amount.value + " \r\n " + "type1 " + type1.value + " \r\n " + "type2 " + type2.value  ;
            console.log(data); 
            localStorage.setItem('hello', document.getElementById('hello').value);
            const name = localStorage.getItem('hello');

            //
            document.getElementById('whole').addEventListener('submit', function(event) {
                event.preventDefault();
                const amount = document.getElementById("hello").value;
            const type1 = document.getElementById("choose1").value;
            const type2 = document.getElementById("choose2").value;
            let t=amount.getElementById("hello");
            console.log(t.value);
               
            
                const formData = {
                    amount: amount,
                   type1: type1,
                   type2: type2
                };
            
                saveFormData(formData);
            });
            
            function saveFormData(formData) {
                const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
            
                storedFormData.push(formData);
            
                localStorage.setItem('formData', JSON.stringify(storedFormData));
            } */
            function savetostorage(event){
                event.preventDefault();
                const type1=event.target.number1.value;
                const type2=event.target.number2.value;
                const type3=event.target.number3.value;

                const obj={
                    type1,
                    type2,
                    type3
                }
                localStorage.setItem(obj.type2,JSON.stringify(obj))
                showUserOnScreen(obj)
            }
           function showUserOnScreen(obj){
             const parentElem=document.getElementById("listofitems");
             const childElem=document.createElemnet('li') ;
             childElem.textContent=obj.type1+' - '+ obj.type2+' - '+ obj.type3;
             parentElem.appendChild(childElem)  
        }

        

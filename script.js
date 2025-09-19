 let bill;
       let tipPer;
       let tipAmount;
       let  totalAmount;
       let tipAmountResult=0;
       let totalAmountResult=0;
     function calculate(){
      bill= document.getElementById("billAmt").value;
      tipPer= document.getElementById("tipPercentage").value;
     tipAmount = document.getElementById("tipAmt");
     totalAmount = document.getElementById("totalAmount");


      tipAmountResult=bill*(tipPer/100);
      totalAmountResult=bill+tipAmountResult;
      
      tipAmount.append(tipAmountResult);
      totalAmount.append(totalAmountResult);
   
        
    }

     function reset() {
          document.getElementById("billAmt").value=0;
         document.getElementById("tipPercentage").value=0;
          
        document.getElementById("tipAmt").textContent= "Tip Amount: " ;
         totalAmount = document.getElementById("totalAmount").textContent= "Total Amount:";


        }
    




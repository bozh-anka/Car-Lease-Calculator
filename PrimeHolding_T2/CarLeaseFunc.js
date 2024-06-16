		window.onload=function(){
		//onload function ensures that data isn't fetched before the form loads
			
		//FETCHING INPUT if input is given
		var use = window.document.getElementById('use');
		if (use) {use.addEventListener('input', fun, false);}
		//use.addEventListener("input",fun);
		
		var val = window.document.getElementById('val');
		if(val) {val.addEventListener("input",fun);}
		
		var Carval = document.getElementById('Cval');
		if(Carval){Carval.addEventListener("input", fun);}
			
		var leaseI = document.getElementById('L');
		if(leaseI){leaseI.addEventListener("input",fun);}
			
		var DP = document.getElementById('Dp');
		if(leaseI){DP.addEventListener("input",fun);}
			
		var DPR =document.getElementById('down');
		if(DPR){DPR.addEventListener("input",fun)}
			
		
		//Fun fuunction is called to asses and calculate on ever input
		//This makes the calculator dynamic, values are recalculated with every change
		function fun (){
			//alert("In function"); DEBUG
			
			// or 0 value is set for no nulls to be passed
			var state = use.value || 0;
			//console.log(state);  DEBUG
			
			var Cval = parseFloat(val.value) || 0;
			//console.log(Cval);   DEBUG
			
			var Car = parseFloat(Carval.value)||0;
			//console.log(Car);    DEBUG
			
			var LP = parseFloat(leaseI.value) ||0;
			//console.log(LP);     DEBUG
			
			var DownP = parseFloat(DP.value)||0;
			//console.log(DownP);  DEBUG
			
			//Setting interest rate precentage based on car state 
			var interestRate;
			if (state == "New"){
				interestRate = 2.99;
			}else{
				interestRate = 3.7;
			}
			
			// Updating the on screen value
			var interestUpdate = document.getElementById('interest');
			interestUpdate.innerHTML = 'Interest Rate: ' + interestRate + '%';
			
			
			//Calculating down payment based on value and percentage
			var DownPayment = Cval*(DownP/100);
			
			//Declaring the other updatable text values on screen
			var MR = document.getElementById('monthly');
			var DpUpdate = document.getElementById('downP');
			var tot = document.getElementById('total');
			
			//Ensuring no incorrect math is displayed
			if (Cval < 10000 || Car < 10000 || Cval > 2000000 || Car > 200000
			    )
			{
			  Cval = 0;
			  Car = 0;
				
			  //Alert for illegal car value 
			  DpUpdate.innerText = 'Down Payment: Illegal Value';
			  MR.innerText = 'Monthly installment: Invalid Input';
			  tot.innerText = 'Total Leasing Cost: Invalid Input';
			} else if (DownP > 50 || DownP < 10 )
			{
			  Cval = 0;
			  Car = 0;
			  //Alert for illegal down payment percent
			  DpUpdate.innerText = 'Down Payment: Illegal Payment';
			  MR.innerText = 'Monthly installment: Invalid Input';
			  tot.innerText = 'Total Leasing Cost: Invalid Input';
			}
			else 
			{
			//Show down payment result
			DpUpdate.innerText= 'Down Payment: \u20ac' + parseFloat(DownPayment).toFixed(2);
			
			
			
			var term = LP/12; // lease period in years
			
			var P = Cval - DownPayment; //money left to pay after DP
			
			// Monthly purchase payment calculation with given annual interest
			var monthly = (P*((interestRate/100)/12)*(1+(interestRate/100)/12)**(LP))/(((1+(interestRate/100)/12)**LP)-1); 
			
			//Update result on screen
		
			MR.innerText = 'Monthly installment: \u20ac' + parseFloat(monthly).toFixed(2);
			
			
			
			//console.log(monthly); DEBUG
			
			//Calculate total by multiplying monthly payments to the months selected + down payment
			var total = DownPayment + LP*monthly;
			
			//Update on screen
			tot.innerText = 'Total Leasing Cost: \u20ac' + parseFloat(total).toFixed(2);}
		};}
		
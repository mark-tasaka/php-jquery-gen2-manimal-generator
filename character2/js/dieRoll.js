	  /*
	  rollDice (numberOfSides, numberOfDiceRolled, numberOfDiceRemoved, baseValue)
	  */
	  	function rollDice(numberOfSides, numberOfDiceRolled, numberOfDiceRemoved, baseValue) {
		
		if(numberOfSides === undefined || typeof numberOfSides !== 'number'||numberOfSides <=2 || numberOfSides >=30){
			numberOfSides = 6;
		}
		
		if(numberOfDiceRolled < 0){
			numberOfDiceRolled =2;
		}
		
		if(numberOfDiceRemoved === undefined || typeof numberOfDiceRemoved !== 'number'||numberOfDiceRemoved >= numberOfDiceRolled){
			numberOfDiceRemoved =0;
		}
		
		if(baseValue === undefined || typeof baseValue !== 'number'||baseValue < 0){
			baseValue = 0;
		}
		
		let numbers = [];
		

		for(let i = 0; i < numberOfDiceRolled; i++){
			numbers[i] = Math.floor((Math.random() * 6) + 1);
		}
		
        numbers.sort();
        
		let sum = baseValue;
			
		for(let i = numberOfDiceRemoved; i < numberOfDiceRolled; i++){
			sum += numbers[i];
		}
			
		return sum ;
	}

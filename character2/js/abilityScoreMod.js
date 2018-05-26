     
    /*
     getStrengthModifier(strength) - returns the Strength Modifier, which is based on the Strength Score
    */
    function getStrengthModifier(strength){
        if(strength === undefined || typeof strength !== 'number'|| strength <=2 || strength >=51){
            //invalid
            return -3;
        }
		if(strength >=4 && strength <=5){
			return -2;
		}
		else if(strength >=6 && strength <=8){
			return -1;
		}
		else if(strength >=9 && strength <=12){
			return 0;
		}
		else if(strength >=13 && strength <=15){
			return 1;
		}	
		else if(strength >=16 && strength <=17){
			return 2;
		}	
		else if(strength >=18 && strength <=19){
			return 3;
		}	
		else if(strength >=20 && strength <=21){
			return 4;
		}	
		else if(strength >=22 && strength <=23){
			return 5;
		}		
		else if(strength >=24 && strength <=25){
			return 6;
		}		
		else if(strength >=26 && strength <=27){
			return 7;
		}		
		else if(strength >=28 && strength <=29){
			return 8;
		}		
		else if(strength >=30 && strength <=31){
			return 9;
		}		
		else if(strength >=32 && strength <=33){
			return 10;
		}		
		else if(strength >=34 && strength <=35){
			return 11;
		}			
		else if(strength >=36 && strength <=37){
			return 12;
		}			
		else if(strength >=38 && strength <=39){
			return 13;
		}		
		else if(strength >=40 && strength <=41){
			return 14;
		}			
		else if(strength >=42 && strength <=43){
			return 15;
		}			
		else if(strength >=44 && strength <=45){
			return 16;
		}			
		else if(strength >=46 && strength <=47){
			return 17;
		}			
		else if(strength >=48 && strength <=49){
			return 18;
		}										
		else if(strength >=50){
			return 19;
		}
        else{ 
		  return -3;
        }
	}


    /*
    getAgilityModifier(agility) - returns the Agility Modifier, which is based on the Agility Score
    */
    function getAgilityModifier(agility){
        if(agility === undefined || typeof agility !== 'number'|| agility <=2 || agility >=25){
            //invalid
            return -3;
        }
		if(agility >=4 && agility <=5){
			return -2;
		}
		else if(agility >=6 && agility <=8){
			return -1;
		}
		else if(agility >=9 && agility <=12){
			return 0;
		}
		else if(agility >=13 && agility <=15){
			return 1;
		}	
		else if(agility >=16 && agility <=17){
			return 2;
		}
		else if(agility >=18 && agility <=19){
			return 3;
		}	
		else if(agility >=20 && agility <=21){
			return 4;
		}	
		else if(agility >=22 && agility <=23){
			return 5;
		}		
		else if(agility ==24){
			return 6;
		}	
		return -3;
	}
	  
	/*
    getStaminaModifier(stamina) - returns the Stamina Modifier, which is based on the Stamina Score
    */
	function getStaminaModifier(stamina){
        if(stamina === undefined || typeof stamina !== 'number'|| stamina <=2 || stamina >=25){
            //invalid
            return -3;
        }
		if(stamina >=4 && stamina <=5){
			return -2;
		}
		else if(stamina >=6 && stamina <=8){
			return -1;
		}
		else if(stamina >=9 && stamina <=12){
			return 0;
		}
		else if(stamina >=13 && stamina <=15){
			return 1;
		}	
		else if(stamina >=16 && stamina <=17){
			return 2;
		}
		else if(stamina >=18 && stamina <=19){
			return 3;
		}	
		else if(stamina >=20 && stamina <=21){
			return 4;
		}	
		else if(stamina >=22 && stamina <=23){
			return 5;
		}		
		else if(stamina ==24){
			return 6;
		}	
		return -3;
	}

    /*
    getPersonalityModifier(personality) - returns the Personality Modifier, which is based on the Personality Score
    */
	function getPersonalityModifier(personality){
        if(personality === undefined || typeof personality !== 'number'|| personality <=2 || personality >=25){
            //invalid
            return -3;
        }
		if(personality >=4 && personality <=5){
			return -2;
		}
		else if(personality >=6 && personality <=8){
			return -1;
		}
		else if(personality >=9 && personality <=12){
			return 0;
		}
		else if(personality >=13 && personality <=15){
			return 1;
		}	
		else if(personality >=16 && personality <=17){
			return 2;
		}
		else if(personality >=18 && personality <=19){
			return 3;
		}	
		else if(personality >=20 && personality <=21){
			return 4;
		}	
		else if(personality >=22 && personality <=23){
			return 5;
		}		
		else if(personality ==24){
			return 6;
		}	
		return -3;
	}

    /*
    getIntelligenceModifier(intelligence) - returns the Intelligence Modifier, which is based on the Intelligence Score 
    */
	function getIntelligenceModifier(intelligence){
        if(intelligence === undefined || typeof intelligence !== 'number'|| intelligence <=2 || intelligence >=25){
            //invalid
            return -3;
        }
		if(intelligence >=4 && intelligence <=5){
			return -2;
		}
		else if(intelligence >=6 && intelligence <=8){
			return -1;
		}
		else if(intelligence >=9 && intelligence <=12){
			return 0;
		}
		else if(intelligence >=13 && intelligence <=15){
			return 1;
		}	
		else if(intelligence >=16 && intelligence <=17){
			return 2;
		}
		else if(intelligence >=18 && intelligence <=19){
			return 3;
		}	
		else if(intelligence >=20 && intelligence <=21){
			return 4;
		}	
		else if(intelligence >=22 && intelligence <=23){
			return 5;
		}		
		else if(intelligence ==24){
			return 6;
		}	
		return -3;
	}

    /*
    getLuckModifier(luck) - returns the luck Modifier, which is based on the luck Score
    */
    function getLuckModifier(luck){
        if(luck === undefined || typeof luck !== 'number'|| luck <=2 || luck >=25){
            //invalid
            return -3;
        }
		if(luck >=4 && luck <=5){
			return -2;
		}
		else if(luck >=6 && luck <=8){
			return -1;
		}
		else if(luck >=9 && luck <=12){
			return 0;
		}
		else if(luck >=13 && luck <=15){
			return 1;
		}	
		else if(luck >=16 && luck <=17){
			return 2;
		}
		else if(luck >=18 && luck <=19){
			return 3;
		}	
		else if(luck >=20 && luck <=21){
			return 4;
		}	
		else if(luck >=22 && luck <=23){
			return 5;
		}		
		else if(luck ==24){
			return 6;
		}	
		return -3;
	}
      
      
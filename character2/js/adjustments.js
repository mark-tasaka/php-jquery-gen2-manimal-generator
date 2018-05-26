      function getDialectTonue(intelligence){
          
          let dialect = "";
          
          if(intelligence >= 8){
              dialect = ", Genotype dialect language";
          }
          
          return dialect;
          
      }


      /*additional languages*/
   let fnAddLanguages = function(intelligenceModifier, luckySign, luckModifier) {
          let bonusLanguages = intelligenceModifier;
          let additionalLanguages ="";

    if (luckySign.luckySign != undefined && luckySign.luckySign === "The Universal Translator"){
          bonusLanguages += luckModifier;
        }
          if(bonusLanguages < 1){
            additionalLanguages = "";
        }
        else if(bonusLanguages === 1){
            additionalLanguages = " & " + bonusLanguages + " additional language";
        }
        else{
            additionalLanguages = " & " + bonusLanguages + " additional languages";
        }
          return additionalLanguages;
      }
   

      
/* getMaxTechLevel() gets the maximum tech level based on Intelligence
*/
    
      function getMaxTechLevel(intelligence) {
          let techLevel = 0;
          
          if(intelligence >= 3 && intelligence <=7)
              {
                  techLevel = 1;
              }
          else if(intelligence >= 8 && intelligence <=9)
              {
                  techLevel = 2;
              }
          else if(intelligence >= 10 && intelligence <=11)
              {
                  techLevel = 3;
              }
          else if(intelligence >= 12 && intelligence <=14)
              {
                  techLevel = 4;
              }
          else if(intelligence >= 15 && intelligence <=17)
              {
                  techLevel = 5;
              }
          else if(intelligence >= 18 && intelligence <=23)
              {
                  techLevel = 6;
              }
          else{
                techLevel = 7;
          }
          
          return techLevel;
      }
      
      
	 	
/*
hitPointAdjustPerLevel (luckySign, luckModifier) - returns the additional/minus hit points
the character received per level from their Stamina modifier and whether they have the Lucky Sign "The Ecobot".
*/
	  
function hitPointAdjustPerLevel (luckySign, luckModifier) {
   let adjust = 0;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "The Ecobot"){
        adjust = luckModifier;
     }
	return adjust;
}

/*
 getBaseArmourClass(agilityModifier)- returns the base armour class of the character
*/
function getBaseArmourClass(agilityModifier){
	let armourClass = 10;
	baseArmourClass = armourClass + agilityModifier;
	return baseArmourClass;
}	  



/*
addModifierSign (modifier) adds a + sign to positive integers; use for ability modifiers, saving throws, etc.
*/
function addModifierSign (modifier) {
	if(modifier >= 0 ) {
		return "+" + modifier;
	}
	else {
		return modifier;
	}
}
	  


/*
meleeAdjust (luckySign, luckModifier) - adds bonus/penality to Melee attack based on whether the character possesses specific Lucky Signs
*/
function meleeAdjust (luckySign, luckModifier) {
   let adjust = 0;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "Nuclear Winter"){
        adjust = luckModifier;
     }
	else if (luckySign.luckySign != undefined && luckySign.luckySign === "The Roxen") {
		adjust = luckModifier;
	}
	return adjust;
}

/*
rangeAdjust (luckySign, luckModifier) - adds bonus/penality to Range attack based on whether the character possesses specific Lucky Signs
*/	  
function rangeAdjust (luckySign, luckModifier) {
   let adjust = 0;
    if (luckySign.luckySign != undefined && (luckySign.luckySign === "Nuclear Winter" || luckySign.luckySign === "The Triffid")){
        adjust = luckModifier;
     }
	return adjust;
}


/*
 addLuckToSpeed (luckySign, luckModifier) adds bonuses to the character's speed if they have a positive Luck Modifier and the Lucky Sign of The Accelerant
*/
function addLuckToSpeed (luckySign, luckModifier) {
	let addSpeed = 0;
	if (luckySign.luckySign != undefined && luckySign.luckySign === "The Accelerant" && luckModifier == 1){
		addSpeed = 5;
	}
	else if (luckySign.luckySign != undefined && luckySign.luckySign === "The Accelerant" && luckModifier == 2){
		addSpeed = 10;
	}
	else if (luckySign.luckySign != undefined && luckySign.luckySign === "The Accelerant" && luckModifier == 3){
		addSpeed = 15;
	}
	return addSpeed;
}



/*
adjustRef (luckySign, luckModifier) - add bonus/penality to Saving Throw based on Lucky Sign
*/
function adjustRef (luckySign, luckModifier) {
   let adjust = 0;
    if (luckySign.luckySign != undefined && (luckySign.luckySign === "The Survivor" || luckySign.luckySign === "The Scientist")){
        adjust = luckModifier;
     }
	return adjust;
}
	 
/*
adjustFort (luckySign, luckModifier) - add bonus/penality to Saving Throw based on Lucky Sign
*/
function adjustFort (luckySign, luckModifier) {
   let adjust = 0;
    if (luckySign.luckySign != undefined && (luckySign.luckySign === "The Survivor" || luckySign.luckySign === "The Glow")){
        adjust = luckModifier;
     }
	return adjust;
}
	  
/*
adjustWill (luckySign, luckModifier) - add bonus/penality to Saving Throw based on Lucky Sign
*/
function adjustWill (luckySign, luckModifier) {
   let adjust = 0;
    if (luckySign.luckySign != undefined && (luckySign.luckySign === "The Survivor" || luckySign.luckySign === "The Esper")){
        adjust = luckModifier;
     }
	return adjust;
}	 

/*adjustMeleeDamage (luckySign, luckModifier) adds luck mod to melee damage rolls if character has specific Luck sign
*/
function adjustMeleeDamage (luckySign, luckModifier){          
    let adjust = 0;        
    if (luckySign.luckySign != undefined && (luckySign.luckySign === "The Apocalypse" || luckySign.luckySign === "Ragnarok")){
        adjust = luckModifier;
     }
	return adjust;
}

      
/*adjustRangeDamage (luckySign, luckModifier) adds luck mod to range damage rolls if character has specific Luck sign
*/
function adjustRangeDamage (luckySign, luckModifier){          
    let adjust = 0;        
    if (luckySign.luckySign != undefined && (luckySign.luckySign === "The Apocalypse" || luckySign.luckySign === "Revelations")){
        adjust = luckModifier;
     }
	return adjust;
}


/*
adjustInit (luckySign, luckModifier) - add bonus/penality to Initiative based on Lucky Sign
*/
function adjustInit (luckySign, luckModifier) {
   let adjust = 0;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "The CPU"){
        adjust = luckModifier;
     }
	return adjust;
}	


	  
/*
adjustAC (luckySign, luckModifier) - add bonus/penality to AC based on Lucky Sign
*/
function adjustAC (luckySign, luckModifier) {
   let adjust = 0;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "The Bunker"){
        adjust = luckModifier;
     }
	return adjust;
}
      

/*
adjustCrit (luckySign, luckModifier) - add bonus/penality to Crit based on Lucky Sign
*/
function adjustCrit (luckySign, luckModifier) {
   let adjust = luckModifier * 1;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "The War-Bot"){
        adjust = luckModifier * 2;
     }
	return adjust;
}	
	  
/*
adjustFumble (luckySign, luckModifier) - add bonus/penality to Fumble based on Lucky Sign
*/
function adjustFumble  (luckySign, luckModifier) {
   let adjust = luckModifier * -1;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "The Backup Disk"){
        adjust = luckModifier * -2;
     }
	return adjust;
}	


	  
/*addSign (modifier) Adds a + sign to value if value is 1 or greater.  If value is 0, then a empty String "" is returned.
*/
function addSign (modifier) {
	if(modifier > 0 ) {
		return "+" + modifier;
	}
	else if(modifier === 0) {
		return "";
	}
	else {
		return modifier;
	}
}
      
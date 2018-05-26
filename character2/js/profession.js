
/*	  
  getprofession() - returns the Randomly Generated profession
*/
function getProfession(){
	let profession = [
        
        {"role": "Hunter", "weapon": "Wood spear<br />", "damage": "1d5<br />", "equipment": ""},
        {"role": "Gatherer", "weapon": "", "damage": "", "equipment": "Large leather sack<br />"}
        
		];
	
		return profession[Math.floor(Math.random() * 2)]; 
		
}
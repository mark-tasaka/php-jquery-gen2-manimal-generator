

/*	  
getLuckySign() - returns a randomly generated Lucky Sign 
*/
function getLuckySign(){
    let luckySign = [
        {"luckySign": "Nuclear Winter", "luckyRoll": "All attack rolls"},
        {"luckySign": "The Roxen", "luckyRoll": "All melee attack rolls"},
        {"luckySign": "The Triffid", "luckyRoll": "Missle fire attack rolls"},
        {"luckySign": "The Beast", "luckyRoll": "Unarmed attack rolls"},
        {"luckySign": "The Millisteed", "luckyRoll": "Mounted attack rolls"},
        {"luckySign": "The Apocalypse", "luckyRoll": "All damage rolls"},
        {"luckySign": "Ragnarok", "luckyRoll": "Melee damage rolls"},
        {"luckySign": "Revelations", "luckyRoll": "Missle damage rolls"},
        {"luckySign": "The Hunter", "luckyRoll": "Attack & damage rolls 0-level starting weapons"},
        {"luckySign": "The Gatherer", "luckyRoll": "Stealth/hiding rolls"},
        {"luckySign": "The Outsider", "luckyRoll": "Find/disable traps"},
        {"luckySign": "The Sensor", "luckyRoll": "Find secret doors"},
        {"luckySign": "The Genomorph", "luckyRoll": "Mutation checks"},
        {"luckySign": "The Alpha Striker", "luckyRoll": "Mutation damage rolls"},
        {"luckySign": "The Programmer", "luckyRoll": "AI recognition rolls"},
        {"luckySign": "The Hypospray", "luckyRoll": "Healing rolls"},
        {"luckySign": "The Survivor", "luckyRoll": "All Saving throws"},
        {"luckySign": "The Multitool", "luckyRoll": "Escape traps"},
        {"luckySign": "The Healer", "luckyRoll": "Saving throws against poison"},
        {"luckySign": "The Scientist", "luckyRoll": "Reflex saving throws"},
        {"luckySign": "The Glow", "luckyRoll": "Fortitude saving throws"},
        {"luckySign": "The Esper", "luckyRoll": "Willpower saving throws"},
        {"luckySign": "The Bunker", "luckyRoll": "Armour class"},
        {"luckySign": "The CPU", "luckyRoll": "Initiative"},
        {"luckySign": "The Ecobot", "luckyRoll": "Hits points/each level"},
        {"luckySign": "The War-Bot", "luckyRoll": "Critical hit tables (double luck mod)"},
        {"luckySign": "The Unchanging", "luckyRoll": "Defect rolls"},
        {"luckySign": "The Backup Disk", "luckyRoll": "Fumbles (double luck mod)"},
        {"luckySign": "The Universal Translator", "luckyRoll": "Number of Languages"},
        {"luckySign": "The Accelerant", "luckyRoll": "Speed"}
    ];
	
     return luckySign[Math.floor(Math.random() * 30)]; 
}
/*	  
JSON to hold artifacts
*/
function selectArtifact(index){
    let artifact = [
        {"id": 1, "artifact": "", "check": "", "effect": ""},
        {"id": 2, "artifact": "DAZER PISTOL", "check": "4", "effect": "Damage: Stun (pg 172)"},
        {"id": 3, "artifact": "FAZER PISTOL", "check": "6", "effect": "Variable: Stun, Disintegrate (pg 172)"},
        {"id": 4, "artifact": "GAUZER PISTOL", "check": "3", "effect": "Damage: 1d6 (pg 172)"},
        {"id": 5, "artifact": "LAZER PISTOL", "check": "4", "effect": "Damage: Heat 3d6 (pg 172)"},
        {"id": 6, "artifact": "MAZER PISTOL", "check": "5", "effect": "Damage: Variable Heat; Special: Disregards armor & force fields (pg 172)"},
        {"id": 7, "artifact": "FAZER RIFLE", "check": "6", "effect": "Variable: Stun, Disintegrate (pg 173)"},
        {"id": 8, "artifact": "GAUZER RIFLE", "check": "3", "effect": "Damage: 1d6 (pg 173)"},
        {"id": 9, "artifact": "LAZER RIFLE", "check": "4", "effect": "Damage: Heat 6d6 (pg 173)"},
        {"id": 10, "artifact": "MAZER RIFLE", "check": "5", "effect": "Damage: Heat 2d6/3d6/6d6/; Special: Disregards armor & force fields (pg 173)"},
        {"id": 11, "artifact": "NEUTRON RIFLE", "check": "7", "effect": "Damage: Instant Death (pg 173)"},
        {"id": 12, "artifact": "EMP GRENADE", "check": "6", "effect": "Damage: Stun AIs; Special: Shuts down all tech devices for 1d10 rounds (pg 174)"},
        {"id": 13, "artifact": "PHOTON GRENADE", "check": "4", "effect": "Damage: 6d6 (pg 174)"},
        {"id": 14, "artifact": "STUN GRENADE", "check": "5", "effect": "Damage: Stun (pg 174)"},
        {"id": 15, "artifact": "QUANTUM GRENADE", "check": "6", "effect": "Damage: Disintegrate (DC 12 Reflex save to resist) (pg 174)"},
        {"id": 16, "artifact": "FORCE BATON", "check": "3", "effect": "Damage: 2d8 (pg 174)"},
        {"id": 17, "artifact": "PLASMA SWORD", "check": "6", "effect": "Damage: 2d12; Special: Attack +4 (pg 175)"}
    ];
	
     return artifact[index]; 
}
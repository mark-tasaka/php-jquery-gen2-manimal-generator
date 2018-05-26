<?php
    
    function getArtifact1($inputA)
    {
        $a01 = array("", "", "");
        $a02 = array("DAZER PISTOL", "4", "Damage: Stun (pg 172)");
        $a03 = array("FAZER PISTOL", "6", "Variable: Stun, Disintegrate (pg 172)");
        $a04 = array("GAUZER PISTOL", "3", "Damage: 1d6 (pg 172)");
        $a05 = array("LAZER PISTOL", "4", "Damage: Heat 3d6 (pg 172)");
        $a06 = array("MAZER PISTOL", "5", "Damage: Variable Heat; Special: Disregards armour & force fields (pg 172)");
        $a07 = array("FAZER RIFLE", "6", "Variable: Stun, Disintegrate (pg 173");
        $a08 = array("GAUZER RIFLE", "3", "Damage: 1d6 (pg 173)");
        $a09 = array("LAZER RIFLE", "4", "Damage: Heat 6d6 (pg 173)");
        $a10 = array("MAZER RIFLE", "5", "Damage: Heat 2d6/3d6/6d6/; Special: Disregards armour & force fields (pg 173)");
        $a11 = array("NEUTRON RIFLE", "7", "Damage: Instant Death (pg 173)");
        $a12 = array("EMP GRENADE", "6", "Damage: Stun AIs; Special: Shuts down all tech devices for 1d10 rounds (pg 174)");
        $a13 = array("PHOTON GRENADE", "4", "Damage: 6d6 (pg 174)");
        $a14 = array("STUN GRENADE", "5", "Damage: Stun (pg 174)");
        $a15 = array("QUANTUM GRENADE", "6", "Damage: Disintegrate (DC 12 Reflex save to resist) (pg 174)");
        $a16 = array("FORCE BATON", "3", "Damage: 2d8 (pg 174)");
        $a17 = array("PLASMA SWORD", "6", "Damage: 2d12; Special: Attack +4 (pg 175)");
        $a18 = array("ZAPPER GLOVE", "3", "Stun DC 18 (every other round) (pg 175)");
        $a19 = array("BUBBLE HELMET", "4", " 24 hour oxygen supply (pg 175)");
        $a20 = array("ENVIRO BELT", "3", "+1 AC; Shields against radiation, gaseous attacks, and physical damage (up to 15 hp) (pg 175)");
        $a21 = array("FORCE FIELD BELT", "4", "+3 AC; Shields against radiation, gaseous attacks, and physical damage (up to 25 hp) (pg 176)");
        $a22 = array("PLASTEEL MESH", "2", "+5 AC (pg 176)");
        $a23 = array("POWER ARMOUR, SCOUT", "8", "+8 AC; +3 Strength, Force Screen absorbs 25 hp of damage, Flight 50’ (pg 176)");
        $a24 = array("POWER ARMOUR, ATTACK", "10", "+10 AC; +6 Strength, Force Screen absorbs 50 hp of damage, Flight 75’, Rebreather (pg 177)");
        $a25 = array("POWER ARMOUR, ASSAULT", "12", "+12 AC; +8 Strength, Force Screen absorbs 75 hp of damage, Flight 150’, Life-Support (pg 177)");
        $a26 = array("ACCELERSHOT", "3", "+1d4 Agility/1 hour (pg 177)");
        $a27 = array("CURESHOT", "3", "Cure disease/poison (pg 177)");
        $a28 = array("CYBERNETIC IMPLANT", "6", "Variable (pg 178)");
        $a29 = array("MEDIPAC", "6", "Heal 3d8 hp; cure poison/radiation (pg 178)");
        $a30 = array("MEDISHOT", "3", "Heal 2d8 hp  (pg 178)");
        $a31 = array("NEUROSHOT", "3", "+1d4 Intelligence/1 hour (pg 179)");
        $a32 = array("RADSHOT", "3", "Heal 1d6 radiation damage; radiation protection for 24 hours (pg 179)");        
        $a33 = array("STIMSHOT", "3", "+1d4 Strength/1 hour (pg 179)");        
        $a34 = array("CARBON NANO-CORD", "1", "see pg 179");
        $a35 = array("COM-BADGE", "3", "see pg 179");
        $a36 = array("FUSION TORCH", "4", "3d6 vs. duralloy, plasteel, permaglass; 6d6 versus mundane substances (pg 180)");
        $a37 = array("ENERGY CLOAK", "4", "+1 AC; Protects against lasers and light-based attacks; 1/2 damage from other EM attacks (pg 180)");
        $a38 = array("GRAV CLAMP", "3", "see pg 180");
        $a39 = array("HOLO-CLOAK", "4", "+1 AC; Grants invisibility (pg 180)");
        $a40 = array("MULTITOOL", "5", "+5 artifact repairs  (pg 181)");
        $a41 = array("REJUV-CHAMBER", "5", "Cleanses body inside and out, eliminates all biological waste products, heals 1d4 damage per hour spent inside (pg 181)");
        $a42 = array("SENSOR PAD", "7", "Grants user equivalent of infravision, x-ray vision, ultravision, echo location, motion detection (pg 181)");
        $a43 = array("SONIC SPANNER", "2", "Manipulates and rotates metal parts with sonic waves; cuts light materials such as cloth and rope (pg 181)");
        $a44 = array("C-CELL", "2", "Chemical power cell (pg 182)");
        $a45 = array("F-CELL", "2", "Fusion power cell (pg 182)");
        $a46 = array("F-PACK", "4", "Fusion power pack (pg 182)");
        $a47 = array("Q-CELL", "3", "Quantum power cell (pg 182)");
        $a48 = array("SOLAR CELL", "3", "Solar power cell (pg 182)");
        $a49 = array("SOLAR RECHARGER", "4", "see page 182");
        $a50 = array("Q-PACK", "3", "Quantum power pack (pg 182)");
        $a51 = array("BUBBLE CAR", "8", "see pg 183");
        $a52 = array("GRAV PED", "4", "see pg 183");
        $a53 = array("GRAV SLED", "4", "see pg 183");
        $a54 = array("CORTEXIN CYLINDER", "4", "see pg 183");
        $a55 = array("FORCE FIELD PROJECTOR", "6", "+5 AC; Shields against radiation, gases, and physical attacks (150 hp) (pg 184)");
        $a56 = array("GENE RESEQUENCER", "20", "see pg 184");
        $a57 = array("STASIS BOOTH", "6", "see pg 184");


        
        $arr= array($a01, $a02, $a03, $a04, $a05, $a06, $a07, $a08, $a09, $a10, $a11, $a12, $a13, $a14, $a15, $a16, $a17, $a18, $a19, $a20, $a21, $a22, $a23, $a24, $a25, $a26, $a27, $a28, $a29, $a30, $a31, $a32, $a33, $a34, $a35, $a36, $a37, $a38, $a39, $a40, $a41, $a42, $a43, $a44, $a45, $a46, $a47, $a48, $a49, $a50, $a51, $a52, $a53, $a54, $a55, $a56, $a57);
        
        return $arr[$inputA];
        
    }

    function artifactAcBonus ($input, $acBonusArtifact)
    {
    
        if($input === "ENVIRO BELT")
        {
            $acBonusArtifact += 1;
        }
        else if($input === "FORCE FIELD BELT")
        {
            $acBonusArtifact += 3;
        }
        else if($input === "PLASTEEL MESH")
        {
            $acBonusArtifact += 5;
        }
        else if($input === "POWER ARMOUR, SCOUT")
        {
            $acBonusArtifact += 8;
        }
        else if($input === "POWER ARMOUR, ATTACK")
        {
            $acBonusArtifact += 10;
        }
        else if($input === "POWER ARMOUR, ASSAULT")
        {
            $acBonusArtifact += 12;
        }
        else if($input === "ENERGY CLOAK")
        {
            $acBonusArtifact += 1;
        }
        else if($input === "HOLO-CLOAK")
        {
            $acBonusArtifact += 1;
        }
        else if($input === "FORCE FIELD PROJECTOR")
        {
            $acBonusArtifact += 5;
        }
        else
        {
            $acBonusArtifact += 0;
        }

        return $acBonusArtifact;
    
    }

    function artifactStrengthBonus ($input, $strengthBonusFromArtifact)
    {
    
        if($input === "POWER ARMOUR, SCOUT")
        {
            $strengthBonusFromArtifact += 3;
        }
        else if($input === "POWER ARMOUR, ATTACK")
        {
            $strengthBonusFromArtifact += 6;
        }
        else if($input === "POWER ARMOUR, ASSAULT")
        {
            $strengthBonusFromArtifact += 8;
        }
        else
        {
            $strengthBonusFromArtifact += 0;
        }

        return $strengthBonusFromArtifact;
    
    }



?>
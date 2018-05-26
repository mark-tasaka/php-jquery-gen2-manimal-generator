<?php

function speedAdjustment ($input)
{
    $speedReduction = 0;
    
    if($input === "-5")
    {
        $speedReduction = 5;   
    }
    else if($input === "-10")
    {
        $speedReduction = 10; 
    }
    else if($input === "-15")
    {
        $speedReduction = 15; 
    }
    
    return $speedReduction;
}


function armourBonusToAC ($input)
{
    $acBonus = 0;
    
    if($input === "+1")
    {
        $acBonus = 1;   
    }
    else if($input === "+2")
    {
        $acBonus = 2; 
    }
    else if($input === "+3")
    {
        $acBonus = 3; 
    }
    else if($input === "+4")
    {
        $acBonus = 4; 
    }
    else if($input === "+5")
    {
        $acBonus = 5; 
    }
    else if($input === "+6")
    {
        $acBonus = 6; 
    }
    else if($input === "+7")
    {
        $acBonus = 7; 
    }
    else if($input === "+8")
    {
        $acBonus = 8; 
    }
    else if($input === "+9")
    {
        $acBonus = 9; 
    }
    else if($input === "+10")
    {
        $acBonus = 10; 
    }
    else if($input === "+11")
    {
        $acBonus = 11; 
    }
    else if($input === "+12")
    {
        $acBonus = 12; 
    }
    
    
    return $acBonus;
}



?>
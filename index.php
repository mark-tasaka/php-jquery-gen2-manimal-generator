<!DOCTYPE html>
<html>
<head>
<title>Launch Page: MCC Manimal Character Generator</title>
    
	<meta charset="UTF-8">
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta name="author" content="Mark Tasaka 2018">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>  
    
	<link rel="stylesheet" href="css/githubMCC.css"/> 

	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta charset="utf-8" />
	

	</head>
	
	
<body>
    

	
	<section>
		
		<h1><img src="images/title.png" alt="Manimal Character Generator" class="image" /></h1>
		
				
			
		
                                
                
            <br/>
            <br/>
        
        <p>The MCC Manimal Character Generator (Generation 2) has been designed primarily with PHP and jQuery.  The Launch Page has a series of forms, where the user has the option of adding additional information to their randomly generated character (via drop down menus and text input fields).  When the user generates their character, the information (variable) the user enters is collected through POST methods and added to the character sheet.  Several of the variables POSTED modify the values on the character sheet; therefore, jQuery or PHP functions have been created to make these adjustments possible.</p>

        <p>Several of the jQuery/JavaScript functions are stored in external files, as a means of creating greater design efficiency, with the goal of writing a program with high cohesion and low coupling.  In this way, this program simulates Object-Oriented design.  JSON is used to store multi-column variables, with jQuery functions used to retrieve these variables.</p>    

        <br/>
        <br/>
            

            
	      
		<form action="" id ="manimalForm2"  target="_blank" method="post">
            
            <div class="content9">
  
            <span class="formIputDescription">Character's Name:</span>
            <input type="text" id="characterName" name="theCharacterName" value="" class="nameBox">

            <br/>
            <br/>
            
            
            <span class="formIputDescription">Player's Name:</span>
            <input type="text" id="playerName" name="thePlayerName" value="" class="nameBox">
            
            <br/>
            <br/>
                
                
            
            <span class="formIputDescription">Archaic Alignment:</span>	
			  <select id="archaicAlignment" name="theArchaicAlignment" class="alignmentBox">			
                <option value="The Clan of the Cog" selected>The Clan of the Cog</option>
				<option value="The Chosen Zuu">The Chosen Zuu</option>
			  </select>
            
            <br/>
            <br/>
            
                        
            <span class="formIputDescription8">Artifact #1:</span>	
			  <select id="artifact1" name="theArtifact1" class="arifactBox">			
                <option value="0" selected></option>
				<option value="1">Dazer Pistol</option>
				<option value="2">Fazer Pistol</option>
				<option value="3">Gauzer Pistol</option>
				<option value="4">Lazer Pistol</option>
				<option value="5">Mazer Pistol</option>
				<option value="6">Fazer Rifle</option>
				<option value="7">Gauzer Rifle</option>
				<option value="8">Lazer Rifle</option>
				<option value="9">Mazer Rifle</option>
				<option value="10">Neutron Rifle</option>
				<option value="11">EMP Grenade</option>
				<option value="12">Photon Grenade</option>
				<option value="13">Stun Grenade</option>
				<option value="14">Quantum Grenade</option>
				<option value="15">Force Baton</option>
				<option value="16">Plasma Sword</option>
				<option value="17">Zapper Glove</option>
				<option value="18">Bubble Helmet</option>
				<option value="19">Enviro Belt</option>
				<option value="20">Force Field Belt</option>
				<option value="21">Plasteel Mesh</option>
				<option value="22">Power Armour, Scout</option>
				<option value="23">Power Armour, Attack</option>
				<option value="24">Power Armour, Assault</option>
				<option value="25">Accelershot</option>
				<option value="26">Cureshot</option>
				<option value="27">Cybernetic Implant</option>
				<option value="28">Medipac</option>
				<option value="29">Medishot</option>
				<option value="30">Neuroshot</option>
				<option value="31">Radshot</option>
				<option value="32">Stimshot</option>
				<option value="33">Carbon Nano-Cord</option>
				<option value="34">Com-Badge</option>
				<option value="35">Fusion Torch</option>
				<option value="36">Energy Cloak</option>
				<option value="37">Grav Clamp</option>
				<option value="38">Holo Cloak</option>
				<option value="39">Multitool</option>
				<option value="40">Rejuv Chamber</option>
				<option value="41">Sensor Pad</option>
				<option value="42">Sonic Spanner</option>
				<option value="43">C-Cell</option>
				<option value="44">F-Cell</option>
				<option value="45">F-Pack</option>
				<option value="46">Q-Cell</option>
				<option value="47">Solar Cell</option>
				<option value="48">Solar Recharger</option>
				<option value="49">Q-Pack</option>
				<option value="50">Bubble Car</option>
				<option value="51">Grav Ped</option>
				<option value="52">Grav Sled</option>
				<option value="53">Cortexin Cylinder</option>
				<option value="54">Force Field Projector</option>
				<option value="55">Gene Resequencer</option>
				<option value="56">Stasis Booth</option>
			  </select>
                
                <br/>
                            
            <span class="formIputDescription8">Artifact #2:</span>	
			  <select id="artifact2" name="theArtifact2" class="arifactBox">			
                <option value="0" selected></option>
				<option value="1">Dazer Pistol</option>
				<option value="2">Fazer Pistol</option>
				<option value="3">Gauzer Pistol</option>
				<option value="4">Lazer Pistol</option>
				<option value="5">Mazer Pistol</option>
				<option value="6">Fazer Rifle</option>
				<option value="7">Gauzer Rifle</option>
				<option value="8">Lazer Rifle</option>
				<option value="9">Mazer Rifle</option>
				<option value="10">Neutron Rifle</option>
				<option value="11">EMP Grenade</option>
				<option value="12">Photon Grenade</option>
				<option value="13">Stun Grenade</option>
				<option value="14">Quantum Grenade</option>
				<option value="15">Force Baton</option>
				<option value="16">Plasma Sword</option>
				<option value="17">Zapper Glove</option>
				<option value="18">Bubble Helmet</option>
				<option value="19">Enviro Belt</option>
				<option value="20">Force Field Belt</option>
				<option value="21">Plasteel Mesh</option>
				<option value="22">Power Armour, Scout</option>
				<option value="23">Power Armour, Attack</option>
				<option value="24">Power Armour, Assault</option>
				<option value="25">Accelershot</option>
				<option value="26">Cureshot</option>
				<option value="27">Cybernetic Implant</option>
				<option value="28">Medipac</option>
				<option value="29">Medishot</option>
				<option value="30">Neuroshot</option>
				<option value="31">Radshot</option>
				<option value="32">Stimshot</option>
				<option value="33">Carbon Nano-Cord</option>
				<option value="34">Com-Badge</option>
				<option value="35">Fusion Torch</option>
				<option value="36">Energy Cloak</option>
				<option value="37">Grav Clamp</option>
				<option value="38">Holo Cloak</option>
				<option value="39">Multitool</option>
				<option value="40">Rejuv Chamber</option>
				<option value="41">Sensor Pad</option>
				<option value="42">Sonic Spanner</option>
				<option value="43">C-Cell</option>
				<option value="44">F-Cell</option>
				<option value="45">F-Pack</option>
				<option value="46">Q-Cell</option>
				<option value="47">Solar Cell</option>
				<option value="48">Solar Recharger</option>
				<option value="49">Q-Pack</option>
				<option value="50">Bubble Car</option>
				<option value="51">Grav Ped</option>
				<option value="52">Grav Sled</option>
				<option value="53">Cortexin Cylinder</option>
				<option value="54">Force Field Projector</option>
				<option value="55">Gene Resequencer</option>
				<option value="56">Stasis Booth</option>
			  </select>
            
                                
                <br/>
                            
            <span class="formIputDescription8">Artifact #3:</span>	
			  <select id="artifact3" name="theArtifact3" class="arifactBox">			
                <option value="0" selected></option>
				<option value="1">Dazer Pistol</option>
				<option value="2">Fazer Pistol</option>
				<option value="3">Gauzer Pistol</option>
				<option value="4">Lazer Pistol</option>
				<option value="5">Mazer Pistol</option>
				<option value="6">Fazer Rifle</option>
				<option value="7">Gauzer Rifle</option>
				<option value="8">Lazer Rifle</option>
				<option value="9">Mazer Rifle</option>
				<option value="10">Neutron Rifle</option>
				<option value="11">EMP Grenade</option>
				<option value="12">Photon Grenade</option>
				<option value="13">Stun Grenade</option>
				<option value="14">Quantum Grenade</option>
				<option value="15">Force Baton</option>
				<option value="16">Plasma Sword</option>
				<option value="17">Zapper Glove</option>
				<option value="18">Bubble Helmet</option>
				<option value="19">Enviro Belt</option>
				<option value="20">Force Field Belt</option>
				<option value="21">Plasteel Mesh</option>
				<option value="22">Power Armour, Scout</option>
				<option value="23">Power Armour, Attack</option>
				<option value="24">Power Armour, Assault</option>
				<option value="25">Accelershot</option>
				<option value="26">Cureshot</option>
				<option value="27">Cybernetic Implant</option>
				<option value="28">Medipac</option>
				<option value="29">Medishot</option>
				<option value="30">Neuroshot</option>
				<option value="31">Radshot</option>
				<option value="32">Stimshot</option>
				<option value="33">Carbon Nano-Cord</option>
				<option value="34">Com-Badge</option>
				<option value="35">Fusion Torch</option>
				<option value="36">Energy Cloak</option>
				<option value="37">Grav Clamp</option>
				<option value="38">Holo Cloak</option>
				<option value="39">Multitool</option>
				<option value="40">Rejuv Chamber</option>
				<option value="41">Sensor Pad</option>
				<option value="42">Sonic Spanner</option>
				<option value="43">C-Cell</option>
				<option value="44">F-Cell</option>
				<option value="45">F-Pack</option>
				<option value="46">Q-Cell</option>
				<option value="47">Solar Cell</option>
				<option value="48">Solar Recharger</option>
				<option value="49">Q-Pack</option>
				<option value="50">Bubble Car</option>
				<option value="51">Grav Ped</option>
				<option value="52">Grav Sled</option>
				<option value="53">Cortexin Cylinder</option>
				<option value="54">Force Field Projector</option>
				<option value="55">Gene Resequencer</option>
				<option value="56">Stasis Booth</option>
			  </select>
                

            <br/>
            <br/>
            
                
                
            <span class="formIputDescription2">Weapon #1:</span>
            <input type="text" id="weaponName1" name="theWeaponName1" value="" class="weaponNameBox">
                
                
            <span class="formIputDescription3">Dmg:</span>
                			  
                <select id="weaponDamage1" name="theWeaponDamage1" class="weaponsDamageBox">			
                <option value="" selected></option>
				<option value="1d3">1d3</option>
				<option value="1d4">1d4</option>
				<option value="1d5">1d5</option>
				<option value="1d6">1d6</option>
				<option value="1d7">1d7</option>
				<option value="1d8">1d8</option>
				<option value="1d10">1d10</option>
				<option value="1d12">1d12</option>
				<option value="2d6">2d6</option>
				<option value="3d4">3d4</option>
				<option value="4d4">4d4</option>
				<option value="3d6">3d6</option>
				<option value="1d20">1d20</option>
			  </select>
            
                
            <br/>
                
                            
            <span class="formIputDescription2">Weapon #2:</span>
            <input type="text" id="weaponName2"  name="theWeaponName2" value="" class="weaponNameBox">
                
                
            <span class="formIputDescription3">Dmg:</span>
                			  
                <select id="weaponDamage2"  name="theWeaponDamage2" class="weaponsDamageBox">			
                <option value="" selected></option>
				<option value="1d3">1d3</option>
				<option value="1d4">1d4</option>
				<option value="1d5">1d5</option>
				<option value="1d6">1d6</option>
				<option value="1d7">1d7</option>
				<option value="1d8">1d8</option>
				<option value="1d10">1d10</option>
				<option value="1d12">1d12</option>
				<option value="2d6">2d6</option>
				<option value="3d4">3d4</option>
				<option value="4d4">4d4</option>
				<option value="3d6">3d6</option>
				<option value="1d20">1d20</option>
			  </select>
            
      
            
                
            <br/>
            <br/>
                
                
                                                                            
            <span class="formIputDescription4">Armour:</span>
            <input type="text" id="armour" name="theArmour" value="" class="armourNameBox">
                
                
            <span class="formIputDescription5">+AC:</span>
                			  
                <select id="armourClassBonus" name="theArmourClassBonus" class="armourProtectionBox">			
                <option value="" selected></option>
				<option value="+1">+1</option>
				<option value="+2">+2</option>
				<option value="+3">+3</option>
				<option value="+4">+4</option>
				<option value="+5">+5</option>
				<option value="+6">+6</option>
				<option value="+7">+7</option>
				<option value="+8">+8</option>
				<option value="+9">+9</option>
				<option value="+10">+10</option>
				<option value="+11">+11</option>
				<option value="+12">+12</option>
			  </select>
            
                <br/>
                <br/>
                
                            
                <span class="formIputDescription6">Check Pen:</span>
                			  
                <select id="checkPenArmour" name="theCheckPenArmour" class="armourCheckPen">			
                <option value="" selected></option>
				<option value="-1">-1</option>
				<option value="-2">-2</option>
				<option value="-3">-3</option>
				<option value="-4">-4</option>
				<option value="-5">-5</option>
				<option value="-6">-6</option>
				<option value="-7">-7</option>
				<option value="-8">-8</option>
				<option value="-9">-9</option>
				<option value="-10">-10</option>
				<option value="-11">-11</option>
				<option value="-12">-12</option>
			  </select>
                
                
                                            
                <span class="formIputDescription7">Speed Pen:</span>
                			  
                <select id="speedPenArmour" name="theSpeedPenArmour" class="armourCheckPen">			
                <option value="" selected></option>
				<option value="-5">-5</option>
				<option value="-10">-10</option>
				<option value="-15">-15</option>
			  </select>
                                
                
                <span class="formIputDescription7">Fumble:</span>
                			  
                <select id="fumbleArmour" name="theFumbleArmour" class="armourCheckPen">
				<option value="d4" selected>d4</option>
				<option value="d8">d8</option>
				<option value="d12">d12</option>
				<option value="d16">d16</option>
				<option value="d20">d20</option>
			  </select>

            <br/>
            <br/>
                
                
            <span class="formIputDescription">Equipment/Treasure:</span>
                <br/>
                

                <textarea rows="4" cols="50" id="equipmentTreasureBox" name="theEquipmentTreasureBox"></textarea>

                
            
		</div>
            
            
            <br/>
            <br/>
            
            
            
		<div class="content8">
            
                
			  <select id="abilityScores" class="dropdownmenuD1">
				<option value="1" selected>3d6</option>
				<option value="2">4d6&#42;</option>
			  </select>
			
			  <select id="level" class="dropdownmenuF1">
				<option value="01" selected>Level 1</option>
				<option value="02">Level 2</option>
				<option value="03">Level 3</option>
				<option value="04">Level 4</option>
				<option value="05">Level 5</option>
				<option value="06">Level 6</option>
				<option value="07">Level 7</option>
				<option value="08">Level 8</option>
				<option value="09">Level 9</option>
				<option value="10">Level 10</option>
			  </select>
                        
            <select id="mutations" class="dropdownmenuE1">
				<option value="1"  selected>d3 PM, d2 MM&#42;&#42;</option>
				<option value="2">d4 PM, d3 MM&#42;&#42;</option>
				<option value="3">d4 PM, d3 MM, d2 D&#42;&#42;</option>
			  </select>
            			  
			<div class="generatorButtonA2">
			
			     <span class="generatorbuttons">

				
                    <input type="submit" value="" id="generate_characters2"/>
			     
                </span>
				
			     <span class="generatorbuttons">
				
                     <input type="reset"  value="" id="reset_generator2"/>
		
				</span>
                
		
                <p><span class="footnote">&#42;Rolling 4d6, and dropping the lowest die.</span></p>
		<p><span class="footnote">&#42;&#42;PM = physical mutations, MM = mental mutations,<br/> D = defects.</span></p>
            
            </div>
            
               
            </div>
            </form>
            
            
            
            
            
                
                
        
                <br/>
                <br/>
                
                
            
    </section>
    
    	<script>
     
        $("#generate_characters2").click(function(){
         
            $("#manimalForm2").attr('action', "character2/mcc_manimal_"+ $("#level").val() + $("#abilityScores").val() +  $("#mutations").val() + ".php");
        });
        
		
        
            
        
    </script>
            
	


</body>
</html>
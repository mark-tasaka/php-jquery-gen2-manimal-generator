    /*getPhysicalDescription() returns the manimal appearance and subtypes
      */
      function getPhysicalDescription(){
          
         // var appearanceRoll = 28;
          var appearanceRoll = Math.floor(Math.random() * 30);
          var appearance = "";
          
          if(appearanceRoll <= 27){
              appearance = getManimalType().features;
          }
          else{
              appearance = getManimalType().features + "<br />" + getManimalAppearance().mutation;
          }
          
          return appearance;
      }
      
      
      
      /*getManimalType() returns the sub-type of manimal
      */
      function getManimalType(){
          
          var subType = [
              {"features": "Primate: gorilla"},
              {"features": "Primate: chimpanzee"},
              {"features": "Primate: orangutan"},
              {"features": "Primate: gibbon"},
              {"features": "Canine: dog"},
              {"features": "Canine: wolf"},
              {"features": "Canine: coyote"},
              {"features": "Canine: fox"},
              {"features": "Feline: lion"},
              {"features": "Feline: tiger"},
              {"features": "Feline: cheetah"},
              {"features": "Feline: panther"},
              {"features": "Ursine: brown bear"},
              {"features": "Ursine: grizzly bear"},
              {"features": "Ursine: polar bear"},
              {"features": "Bovine: cow"},
              {"features": "Bovine: bison"},
              {"features": "Bovine: buffalo"},
              {"features": "Bovine: antelope"},
              {"features": "Bovine: yak"},
              {"features": "Suidae: pig"},
              {"features": "Suidae: hog"},
              {"features": "Suidae: wartog"},
              {"features": "Rodentia: mouse"},
              {"features": "Rodentia: rat"},
              {"features": "Rodentia: squirrel"},
              {"features": "Rodentia: porcupine"},
              {"features": "Rodentia: beaver"},
              {"features": "Rodentia: rabbit"},
              {"features": "Amphibia: frog"},
              {"features": "Amphibia: toad"},
              {"features": "Amphibia: salamander"},
              {"features": "Avian: hawk"},
              {"features": "Avian: eagle"},
              {"features": "Avian: crow"},
              {"features": "Avian: owl"},
              {"features": "Avian: vulture"},
              {"features": "Avian: seagull"},
              {"features": "Insecta: roach"},
              {"features": "Insecta: ant"},
              {"features": "Insecta: fly"},
              {"features": "Insecta: grasshopper"},
              {"features": "Insecta: beetle"},
              {"features": "Insecta: moth"}
          ]
		return subType[Math.floor(Math.random() * 44)]; 
      }
                       
          

      /*getManimalAppearance() gets the random manimal appearance
*/
      function getManimalAppearance(){
          var appearance = [
              {"mutation": "Skin colour: bright red"},
              {"mutation": "Skin colour: snow white"},
              {"mutation": "Skin colour: lemon yellow"},
              {"mutation": "Skin colour: purple"},
              {"mutation": "Skin colour: green"},
              {"mutation": "Skin colour: translucent"},
              {"mutation": "Skin texture: is mottled"},
              {"mutation": "Skin texture: is reptilian"},
              {"mutation": "Skin texture: is chitinous"},
              {"mutation": "Skin texture: is rocky"},//10
              {"mutation": "Skin texture: is metallic"},
              {"mutation": "Skin texture: is invisible"},
              {"mutation": "Eyes: have slitted pupils"},
              {"mutation": "Eyes: have no pupils"},
              {"mutation": "Eyes: glow in the dark"},
              {"mutation": "Eyes: are a single eye"},
              {"mutation": "Eyes: have compound insect eyes"},
              {"mutation": "Eyes: are covered by semi-transparent skin"},
              {"mutation": "Mouth: is fanged"},
              {"mutation": "Mouth: a featureless slit"},//20
              {"mutation": "Mouth: a break or bill"},
              {"mutation": "Mouth: is insectoid"},
              {"mutation": "Mouth: located in belly"},
              {"mutation": "Mouth: absent, replaced by porous skin"},
              {"mutation": "Head: is larger than normal"},
              {"mutation": "Head: is smaller than normal"},
              {"mutation": "Head: has craggy brow and ridged skull"},
              {"mutation": "Head: has small horns"},
              {"mutation": "Head: has antenna"},
              {"mutation": "Head: retreats into body"},//30
              {"mutation": "Hair: stands on end"},
              {"mutation": "Hair: grows into a lion's mane"},
              {"mutation": "Hair: grows over entire body"},
              {"mutation": "Hair: drips oil"},
              {"mutation": "Hair: is made of organic metal"},
              {"mutation": "Hair: is comprised of small leaves"},
              {"mutation": "Hands: have no nails"},
              {"mutation": "Hands: have only three fingers"},
              {"mutation": "Hands: have six fingers"},
              {"mutation": "Hands: are prehensile claws"},//40
              {"mutation": "Hands: are comprised of tentacles"},
              {"mutation": "Hands: absent, replaced with tentacle fingers"},
              {"mutation": "Feet: are overlarge and padded"},
              {"mutation": "Feet: have 12 toes"},
              {"mutation": "Feet: have claws"},
              {"mutation": "Feet: are bird talons"},
              {"mutation": "Feet: are hooves"},
              {"mutation": "Feet: absent, replaced with cilia clumps"},
              {"mutation": "Body: has a tail"},
              {"mutation": "Body: has four arms"},//50
              {"mutation": "Body: has four legs"},
              {"mutation": "Body: has ridged back"},
              {"mutation": "Body: has symbiotic twin in stomach"},
              {"mutation": "Body: is segmented like a worm"},
              {"mutation": "Form: is tripedal"},
              {"mutation": "Form: is quadrapedal"},
              {"mutation": "Form: is serpentine"},
              {"mutation": "Form: is insectoid"},
              {"mutation": "Form: is globular"},
              {"mutation": "Form: is a condensed ball of plasma that must inhabit clothes to maintain form"}//60
          ];
		return appearance[Math.floor(Math.random() * appearance.length)]; 
      }
      
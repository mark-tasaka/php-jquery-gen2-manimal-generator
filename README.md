# php-jquery-gen2-manimal-generator
PHP, jQuery, JavaScript, JSON, CSS

The MCC Manimal Character Generator (Generation 2) has been designed primarily with PHP and jQuery.  The Launch Page has a series of forms, where the user has the option of adding additional information to their randomly generated character (via drop down menus and text input fields).  When the user generates their character, the information (variable) the user enters is collected through POST methods and added to the character sheet.  Several of the variables POSTED modify the values on the character sheet; therefore, jQuery or PHP functions have been created to make these adjustments possible.

Several of the jQuery/JavaScript functions are stored in external files, as a means of creating greater design efficiency, with the goal of writing a program with high cohesion and low coupling.  In this way, this program simulates Object-Oriented design.  JSON is used to store multi-column variables, with jQuery functions used to retrieve these variables.    

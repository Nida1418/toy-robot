Instructions
------------

- To launch the application, open index.html file in a browser (or host the files on a web server and access the index.html using a url)
- Enter the desired sequence of commands in the text area (each command in the sequence should be in a new line)
e.g.   
PLACE 1,2,EAST  
MOVE  
MOVE  
LEFT  
MOVE  
REPORT  

- To issue the commands, hit "Issue Command" button
- Results of any "REPORT" command in the supplied sequence will appear below the "Issue Command" button
- No output will be generated for any command other than "REPORT", so if commands are issued one by one (i.e.entire sequence is not submitted as a whole)
 then issue "REPORT" command at the end to see the result.
- Check browser console for any validation related error.
- Robot.js file contains the application logic for problem defined in the supplied PROBLEM.md file
- index.html file is just a user interface to interact with the application logic


Running the Test Suite
----------------------

- Open TestRunner.html file in a browser
- All tests will run automatically and results will appear on the page itself
- Reloading the page will run the tests again
- Test definitions are available inside RobotSpec.js file


Assumptions And Exceptions
--------------------------

- Exhaustive validations related to user input have not been done, only key validations have been performed.
- Minification and bundling etc. have not been done.
- Clicking the "Issue Command" button produces an output (on the page) only for "REPORT" command, so if other commands are issued individually 
then rely on your click of the button, and ultimately issue "REPORT" command to see the result, else, issue entire sequence of commands as a whole.
- Tests related to user input validation have not been written.
- console.log() has been used in some cases to display a message etc.

console.log('Welcome to the code learning library');

<bold>Java Script</bold>
Use file main.js in webpage.
To output perform= console.log(….);
  Strings can be added like toUpperCase() at end of string ‘…….’  
  Math can be used like Math.floor() to round a number and Math.random() to get a random number
  Setting variables
let X= 1;
Or
let X= ‘string value’;
Defining Variables
Const x=’y’ here x is being defines as y
Writing out Functions
Let x=’value’;
console.log(‘variable insert ${x}.’) Insert variables in x prints to display
Const satellite = ‘orbitor’       const stars= ‘light’       const galaxy=’swirl’
const callMyNightSky = () => {return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;};
The function calls out the constants and reads them out with the return function
console.log(callMyNightSky()); reads out the function onto the screen

Arrays and data sorting
Const or let x = [‘1’,’2’,’3’];setting a variable to 3 arrays in a string (let can be reassigned where const cannot be reassigned)
X[0]= ‘value’; another way to set a variable to an array (can rewrite previous code)
x.push(‘4’,’5’); adds more items to array
x.pop(); removes last item in array
<Mozilla Developer Network (MDN) array documentation.> to find more array editing methods 
Console.log(x[0]); Outputs the first array (‘1’) to the display.
Console.log(x.length); outputs how many items in an array (for example it would be 3 for previous code)
Using a function with array editing
function x(y){    here the function x is given the parameter y
  y.pop();         the parameter y is given the .pop(); code
}
x(variable);       the function is then outputted using the array name as the parameter
console.log(variable);    outputs edited array
Array nesting
const x = [[1, 2], [3, 4], [5, 6]];  sets multiple items as a chart

const y = x[2][1]; creates a variable that stores the third array in the second part of [] so the number 6.
Looping
for (let counter=5; counter < 11; counter++) This sets the counter variable at 5, adds plus 1 to 10 (counter--goes backwards)
  {console.log(counter); the function being displayed to screen
}
for (let i=0; i < vacationSpots.length; i++)  use I variable to set as array in vacationSpots
  {console.log(vacationSpots[i]); }
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin']; variables and arrays for comparison loop
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];  empty array to compare to

for (let i = 0; i < bobsFollowers.length; i++) { 
  for (let j = 0; j < tinasFollowers.length; j++) {  the nested for loops
    if (bobsFollowers[i] === tinasFollowers[j]) {  if statement to push bobsFollowers into array
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
const cards = ['diamond', 'spade', 'heart', 'club']; variables for options
let currentCard;

while ( currentCard != 'spade') {  while variable doesn’t equal a value
  currentCard = cards[Math.floor(Math.random() * 4)]; random math operation 
	console.log(currentCard); outputs card
}
Saving Iterations
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(num => { saves array numbers into another
  return num < 250;      returns function to other varriable
})
console.log(smallNumbers);  logs to computer
cities.forEach(city => console.log('Have you visited ' + city + '?')); simple output for cities variable


Iteration Methods


























Objects
  let fasterShip = {  identify variable to have characteristics
  color: 'silver',  using color code to assign an object 
  'Fuel Type':'Turbo Fuel' using an object to assign an object
Speed:{  
Value=’fast’;  nested funcion
};
fastership.Speed.Value value of ‘fast’.
let colorValue= fasterShip.color; assigns an outside variable to the properties
let colorRange=fasterShip[color]; assigns an outside variable to the properties
let value = color;  sets property to variable
console.log(fasterShip[value]); outputs property from variable to monitor
fasterShip.engine=’quantum’; assigns a new property to the object

let message=’take off’;
let flight{  sets object
 fly(){  assigns function
  console.log(message);  action of function is to display varriable 
}
};
flight.fly();  displays function from object






const x={  sets up object
value: ‘push’,  determines variable
provideInfo(){  sets up function within object
return ‘don’t ${this.value} the button.’  Returns variable from function 
}
};
Console.log(x.provideInfo); displays 

Const value={
_x: ‘value1’,
_y:  ‘value2’,
Get x(){   returns what value x should be
If(this._x ===’value’){
Return this._x;}
Else{
Return “wrong data”;}
}};
Console.log(value.x);









Full set up with classes
let halley = {  sets object
  _name: 'Halley',  sets attribute with _variance (it can be changed)
  _behavior: 0,
get name() {  calls out the name atribute
    return this._name;  returns the name as varriable
  },
get behavior() 
{   return this._behavior;
  },
  incrementBehavior() {
    this._behavior++;
  }
}



Out putting
Console.log(x);
If else statements
let steps=[‘starting’, ‘next’, ‘then’, ‘last’]; An array that holds data inside the variable steps in example.
 let isSoccerFan= true;
if(isSoccerFan == true)
  {console.log('Goal!');
  }
else{console.log('AWWWW!');}

let moonPhase = 'mostly new';

if (moonPhase === 'full') {
  console.log('Howl!');}
  else if (moonPhase === 'mostly full')
  {console.log('Arms and legs are getting hairier');}
else if(moonPhase === 'mostly new')
  {console.log('back on two feet');}
else
  {console.log('invalis response');}






greater and less signs
let hungerLevel= 10;
if(hungerLevel > 7)
{console.log('ur huuuuungry');
                   }
else{console.log('yall can wait');}
Simple if else with defined let variable. 

Functions
const volumeOfSphere = (diameter) => {(1/6) * Math.PI * diameter * diameter * diameter;}
Diameter is input parameter. Console.log calls the parameter’s value.
console.log(volumeOfSphere(10));
For Loops
const startCount = () => {
  let i = 1;
  let n = i*2;
  console.log(i);
  for (let i = 0; i < 12; i++) {
    if (i !== 0) {
    console.log(i*n); 
    }
    else {
      console.log('i is 0');
    }
  }
};
startCount();
A function for loop code using an if else check. 
startCount() outside of loop with no value means they cancel each other out and all values are outputted inside the {}. 

Internet Settings
How to find internet data: use (CMD prompt) - in window type ipconfig,  As default gateway code is the web search IP address
https://support.microsoft.com/en-us/help/10741/windows-fix-network-connection-issues fix internet problems by command prompt 




HTML WEB DESIGN
Element= tags that contain written words to be put on a web page.
Header element = <h1>………..</h1>
Head element with title in it= <head> <title>……………….</title></head>
Body element= <body>…………….</body>
Paragraph element within body= <body> <p>……………</p> </body>
Division element= <div>……………</div>, used to group child elements like <h> and <p>.
Headers= level of header elements from largest to smallest, <h1>, <h2>, <h3>, <h4> and <h5>.
Attribute= Used at the beginning of an element to specify an element in <div> element.
 Id attribute= <div =id “DIVISION ID”>, to identify an element
~To go to division from directory use # as tag to division with (href = web link)
First the ID
<p id="top">This is the top of the page!</p>
Then the tag
<li><a href="#top">Top</a></li>
<ul>
<li><a href=”#DIVISION ID”> DIVISION ID </a> </li>
</ul>

Alt attribute=<p>  alt “……………” </p> , to give alternate text to an image or text.
Link other websites <a href=”…………………….”> …………..</a>
Opening a new tab from site <a href=”……………………….” target=”_blank”>……………………………..</a>
Stylizing text= change style of text.
Space away from style = <p><span>…………</span>
Italic style= <p><em>……………</em>
Bold style= <p> <strong>……………..</strong>
Indenting= move next line down like using enter key.
Indent text= <p>…………<br>………..</p>
Listing text= used to list items in text format outputs as bullet points. Ordered list outputs numerical.
Unordered list= <ul>
                               <li>…………..</li>
                                <li>……………</li>
                               </ul>
Ordered list= <ol>
                          <li>………………</li>
                           <li>……………….</li>
                           </ol>




Adding source images= can add an image from another website or video.
Image from a source= <img src=”URL SOURCE” />~self –closing   (from: Imgur.com) > search images then right click and view source
<IMG SRC="image.gif" ALT="some text"  WIDTH=32 HEIGHT=32> used to get text image in a .gif
title="A T-Rex on display in the Manchester University Museum">

~can wrap img by wrapping in <a><img src=”URL SOURCE” /> </a>
Video from a source= <video src=”URL SOURCE” width=”300” Height= “500” controls> </video>~not self-closing
<video controls>
  <source src="rabbit320.mp4" type="video/mp4"> covers search browser using mp4
  <source src="rabbit320.webm" type="video/webm"> covers search browser using webm
  <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
</video>
Linking to Relative Page
Using from from folder, 
project-folder/
|—— about.html
|—— contact.html
|—— index.html
 Jumping to a new section=<a href =”./index.html”>SECTION TITLE</a>. IF going to a new window= <a href=”./index.html” target=”_blank”>SECTION TITLE</a>
FORM
A command to sends information the action, is where it’s sent the method is how it’s sent by POST. 
EX
<form action="/example.html" method="POST">  </form>~skeleton to all forms.
  <h1>Creating a form</h1>
  <p>Looks like you want to learn how to create an HTML form. Well, the best way to learn is to play around with it.</p>
</form>
Ceating log in, inputs inside a form: type, is the search bar as text. Name is what is being sent like username. Value is what is going into the search bar.
Password log in, inputs inside a form: type, is the “password. Name is what is being sent “user-pw”.  Value is the input “password.”
User numbers login, for type, use “number”. 
Making Labels, are for putting a heading above the search bar. Making it for an input id.
Input labels, type is “range”. With other attributes min=”0”, max=”100”, step=”1”.
Check box labels, type is “checkbox”. 
When done create a submit button. 
Radio labels, type=”radio”
For dropdown use instead of <input>, <select>. In then options with values.
Using a <datalist> is using label and input, in then using a data list id with otpins having a value.
<textarea> uses a bigger text box that can be used.  
<form>


<form action="/example.html" method="POST">  </form>~skeleton for all forms

Password log in, inputs inside a form: type, is the “password. Name is what is being sent “user-pw”.  Value is the input “password.”
<Label for= “number”> “TITLE OF SEARCH BAR”</label> 
<input type="text" name="first-text-field" id=”number”  value="already pre-filled">
<input type=”password” name =”user-pw” id=”user-pw”>

Input labels, type is “range”. With other attributes min=”0”, max=”100”, step=”1”.
<input id="years" name="years" type="number" step="1">
<input id="volume" name="volume" type="range" min="0" max="100" step="1">

Check box labels, type is “checkbox”.
<label for="pepperoni">Pepperoni</label>
 <input id="pepperoni" name="topping" type="checkbox"
Radio labels, type=”radio”
<input type="radio" id="two" name="answer" value="2">
 <label for="two">2</label>





For dropdown use instead of <input>, <select>. In then options with values.
<label for= “bun”>”bun”</label>
<select id="bun" name="bun">
            <option value="sesame">Sesame</option>
            <option value="potato">Potato</option>
            <option value="pretzel">Pretzel</option>

<textarea> uses a bigger text box that can be used.  
<textarea id="extra" name="extra" rows="3" cols="40">vevrrg
  </textarea>
When done create a submit button.
<form>
  <input type="submit" value="Send">
</form>
Using critrea
for requirement use <input requirement>
<input min=”0” max=”10”> 
Or for specific criteria pattern= "[0-9]{14,16}"

Using a <datalist> is using label and input, in then using a data list id with otpins having a value.
<label for="city">Ideal city to visit?</label>
  <input type="text" list="cities" id="city" name="city">
  <datalist id="cities">
    <option value="New York City"></option>
    <option value="Tokyo"></option>
    <option value="Barcelona"></option>
    <option value="Mexico City"></option>
    <option value="Melbourne"></option>
    <option value="Other"></option>  
  </datalist>


</form>



</form>
Tables and Charts
Create table element with rows <tr> and columns <td> =
Including Column Heading in previous row <th>=
Can add width to columns and rows with attribute <td colspan=”NUMBER”> and <td rowspan=”NUMBER”>
Put table in table body <tbody>  </tbody>
Las row in a table foot <tfoot>………..</tfoot>



EX
 <table>
<thead>
<tr>………………<th>CLUMN 1 TITLE</th>…………<th>COLUMN 2 TITLE</th>………………</tr>
</thead>
<tbody>
<tr>…..ROW1…<td>COLUMN 1 </td>……..<td>COLUMN 2 </td>..……ROW1………</tr>
<tfoot>
<tr>………ROW2…………</tr>
</tfoot>
</tbody>
   </table>

Setting up html
Start with html version= <!DOCTYPE html>
Then close content within html= <html>…………………………………………….</html>
Add html title= <head><title>…………….</title> </head>
Comments
To add a personal comment = <!--COMMENT-->


E.X.
  <!DOCTYPE html>
<html>
<head><title> TITLE OF WEBSITE </title></head>
<ul>
<li><a href=”#DIVISION ID”> DIVISION ID </a> </li>
</ul>
<Body>
  <div =id “DIVISION ID”> 
    <p> the first starter of things to say with image
    <a><img src=”www.example.com”/></a>
    <video src=”www.video example.com” width=”300” height= “500” controls/></video> 
    </p>
  </div>
<div =id “from”>
<label for= “clip”>”rate your experience 1-10”</label>
<input type=”range” id=”clip” name=”clip” min=”0” max=”10”>
<input type=”submit” value=”send”>
</div>
</body>
</html>


Bootstrap website styling features
 HTML:  HTML stands for Hyper Text Markup Language. It is used to give websites structure with text, links, images, and other fundamental elements.
CSS: CSS stands for Cascading Style Sheets. It is used to change the appearance of HTML elements.
Files:  index.html used for all html main.css used for all styling and formatting  <link rel="stylesheet" type="text/css" href="main.css"/> use in head after title to connect .html file to main.css 
Tells which character set to use, in example utf-8 in the head element after the title =<meta charset="utf-8"/>
Connects the html file to the CSS file <link href='https://fonts.googleapis.com/css?family=Lato:400,300,100,700,900' rel='stylesheet' type='text/css'>
Connects the bootstap tools to the index.html in the head element after the title= <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>
  <header class="container">
  <div class="row">
    <h1 class="col-sm-4">Skillfair</h1>
    <nav class="col-sm-8 text-right">
      <p>newest</p>
      <p>catalogue</p>
      <p>contact</p>
    </nav>
  </div>
</header> Setting up a navigation bar using  bootstrap href
<section class="jumbotron">
  <div class="container">
    <div class="row text-center">
      <h2>Homemade Goods</h2>
      <h3>This Year's Best</h3>
      <a class="btn btn-primary" href="#" role="button">See all</a>
    </div>
  </div>
</section>  front page set up using the bootstrap href
<section class="container">
  <div class="row">
    <figure class="col-sm-6">
    ...
    </figure>
    <figure class="col-sm-6">
    ...
    </figure>
  </div>
  <div class="row">
    <figure class="col-sm-6">
    ...
    </figure>
    <figure class="col-sm-6">
    ...
    </figure>
  </div>
</section> setting up categories for the main webpage set-up
<footer class="container">
  <div class="row">
    <p class="col-sm-4">...</p>
    <ul class="col-sm-8">
      <li class="col-sm-1">...</li> 
      <li class="col-sm-1">...</li>
      <li class="col-sm-1">...</li>
    </ul>
  </div>
</footer> used for bootstrap href at and of webpage add references and sources









h1 { selects the  <h1>………</h1> in html file
	font-size: 32px; used to get font size
  font-family: Palatino, 'Palatino Linotype', serif; used to get font stlye
color: red; changes color to red
background-image:
 url("https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-2/bg.jpg"); changes background image
background-size: cover; has background image cover entire image 
border: 2px solid black; creates a border that is solid black at 2 thickness
padding: 30px; puts 30px empty space in between the border and the element
margin: 2px; puts 2px between the different HTML elements
margin-top: Sets the top margin.
margin-bottom: Sets the bottom margin.
margin-left: Sets the left margin.
margin-right: Sets the right margin.
display: inline; puts elements in a line instead of underneath each other
float: right; moves element across page to the right (can also be used for left)
display: flex; spreads elements across page
 flex-wrap: wrap; keeps elements in the page
justify-content: center; centers the elements 


} 

<div id=”title2”>
</div>
#title2{……………………..} used for selectin instead of an <h1>……………….</h1> parrnet


<div class=”title1>
</div>
.title1{…………………..} used for selecting a div instead of an <h1>……………</h1> parrent
Or use h1 for <h1>…………</h1>


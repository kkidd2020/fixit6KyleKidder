let petNames= ['Darcy', ' Jack', ' Jerry', ' Marty', ' Vito', ' Vinny', ' Riley', ' Saddie', ' Marge', ' Sam'];
console.log(`${petNames}`)

let withMarmaduke= petNames.push('Marmaduke');

let selection = prompt("Please choose what action you want to take:\n 1 Remove Vinny from the array \n 2 Remove Marty from the array \n 3 Add Nancy \n 4 Add your name to the end of the array \n 5 Find out where Riley is located \n 6 Find out where Cindy is located \n 7 Show the Marmaduke array")
switch(selection) {
case(selection="1"):
  let removeVinny=petNames.splice([5])
  alert(`The action taken was: Remove Vinny from the array \n The remaining data are: ${petNames}.`);
  break;

case(selection="2"):
  let removeMarty= petNames.splice([3])
  alert(`The action taken was: Remove Marty from the array \n The remaining data are: ${petNames}.`);
  break;

case(selection="3"):
  let addNancy= petNames.unshift('Nancy')
  alert(`The action taken was: Add Nancy to the front of the array \n The remaining data are: ${petNames}.`);
  break;

case(selection="4"):
let userName=prompt("Enter your name: ")
alert(`The action taken was: Add user name ${petNames.push((userName))} to the end of the array \n The remaining data are: ${petNames}.`);
break;

case(selection="5"):
let rileyIndex= petNames.indexOf('Riley')
alert(`The action taken was: Riley is located at ${rileyIndex} in the array \n The remaining data are: ${petNames}.`);
break;

case(selection="6"):
let cindyIndex= petNames.indexOf('Cindy')
alert(`The action taken was: Cindy is located at ${cindyIndex} in the array \n The remaining data are: ${petNames}.`);
break;

case(selection="7"):
alert(`The action taken was: You chose the array ${withMarmaduke} \n The remaining data are: ${petNames}.`);
break;

default:
alert('Be well and God Bless');
}
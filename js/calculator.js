/**
 * calculator.js
 *
 * simple javascript calculator tutorial javascript
 */

// #TODO:hurst : add overflow hidden to display and fix text-indent to (-) to respond to increasing txt
// and add padding to right hand side 

function init() {

    // get all the keys from the DOM
    var keys = document.querySelectorAll('#calculator .key');
    var operators = ['+', '-', 'x', '÷'];

    console.log(keys);

    // the keys have to click when you do something to them.
    // you have to add an onclick event
    // this for loop loops (lol) through the array of keys you just retreived from the DOM
    // and will add an event listener to them.

    // break down loop basics here, three parts, 
    // initialize loop control var, condition to check, and post loop execution
    for (var i = 0; i < keys.length; i++) {

        // all the keys have been placed in an array, here we attach a click event and 
        // and anonymous handler function to each key, based on it's position in the array
        // defined by our beloved iterator, 'i'
        keys[i].onclick = function (e) {

            console.log(e);

            // get the display element from the dom and dump it's reference in a variable
            // for handy-dandy repeat access. 
            var input = document.querySelector('.display');
            var inputVal = input.innerHTML;         // this can be moved out of this function and loop.
            var btnVal = this.innerHTML; // append the key values to the input string             console.log(btnVal);

            // If 'C' is pressed, erase everything
            // just replace the inputs html w/ nothing.
            if (btnVal == 'C') {
                input.innerHTML = '';
            }

            // if eval key is pressed, calculate and display the result
            else if (btnVal == '=') {
                var equation = inputVal;

                // use javascript's eval function to get the result.
                var answer = eval(equation);
                input.innerHTML = answer;

            } else {

                // otherwise just keep adding stuff to the display based on whatever the user pressed. 
                input.innerHTML += btnVal;

            }

        } // end keys[i].onclick    // comments are commenty!

    }

}


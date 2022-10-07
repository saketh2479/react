var h = document.getElementById("h-value");
var w = document.getElementById("w-value");
var r = document.getElementById("b-value");
var sw = document.getElementById("sw");
var uw = document.getElementById("uw");
var nw = document.getElementById("nw");
var ow = document.getElementById("ow");
var ob = document.getElementById("ob");
var see = document.getElementById("see");


function wfun()
{
    w.innerHTML = document.getElementById("ww").value; 
}

function hfun()
{
    h.innerHTML = document.getElementById("hh").value; 
}

function cfun()
{
    var a = Number(document.getElementById("ww").value); 
    var b = Number(document.getElementById("hh").value); 
    var rkg = a/((b/3.281)*(b/3.281));
    r.innerHTML = rkg;
     

  //  document.getElementById("ww").setAttribute("disable");
  //  document.getElementById("hh").setAttribute("style", "background-color:red");

    if(rkg<16)
    {
        sw.style.display = "block";
        see.style.display = "block";
    }
    
    else if(rkg<19)
    {
        uw.style.display = "block";
        see.style.display = "block";
    }
    
    else if(rkg<25)
    {
        nw.style.display = "block";
        see.style.display = "block";
    }
    
    else if(rkg<30)
    {
        ow.style.display = "block";
        see.style.display = "block";
    }
    
    else
    {
        ob.style.display = "block";
        see.style.display = "block";
    }
}
    // Get button element by it's ID
    var btn = document.querySelector('#calculate');

// Bind a 'click' event to the button.
btn.addEventListener ('click', function () {
	// Number(<value>): Convert any <value> into Number (Float or Integer):
	// see also: parseInt (<value>) => Convert any <value> into integer.
	// 					 parseFloat (<value>) => Convert any <value> into float.
	var num1 = Number ( document.querySelector('#num1').value ),
			num2 = Number ( document.querySelector('#num2').value ),
			// The Element to show result in
			rlt = document.querySelector('p.answer');
	
	// Get a checked radio/option button's value.
	// input => tag name.
	// [name="method"] => tag's attribte name and value.
	// :checked => pseudo rule, only find element with checked state.
	// .value => to get a value of that input.
	var method = document.querySelector('input[name="method"]:checked').value;
	var answer = 0;
	
	if ( 'add' === method ) {
		answer = num1 + num2;
	} else if ( 'sub' === method ) {
		answer = num1 - num2;
	} else if ( 'mul' === method ) {
		answer = num1 * num2;
	} else if ( 'div' === method ) {
		answer = num1 / num2;
	}
	
	// Set content of HTML element.
	rlt.innerHTML = answer;
});
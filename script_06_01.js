(function(){
    "use strict";

	let switch_units01 = 0;
	let switch_units02 = 1;
	const units_list01 = ["Miles", "KM"];
	const my_heading01 = document.querySelector("h1");
	const my_intro01 = document.querySelector("p");
	const answer_div01 = document.getElementById("answer");
	const my_form01 = document.getElementById("convert");
	const mile_to_km = 1.60934;

	document.addEventListener("keydown", function (event){
		event.preventDefault();
		const key_pressed01 = event.code;
		switch (key_pressed01){
			case "KeyK":
			    switch_units01 = 1;
			    switch_units02 = 0;
			    my_convertor_text01(units_list01[1], units_list01[0]);
			    break;

			case "KeyM":
				switch_units01 = 0;
				switch_units02 = 1;
				my_convertor_text01(units_list01[0], units_list01[1]);
                break;
			}
		});

		my_form01.addEventListener("submit", function (event){
			event.preventDefault();
			const my_var01 = parseFloat(document.getElementById("distance").value);
			let my_var02;

			if (my_var01){
				if (switch_units01){
					my_var02 = (my_var01 / mile_to_km).toFixed(3);
				}
				else {
					my_var02 = (my_var01 * mile_to_km).toFixed(3);
                }   

			answer_div01.innerHTML = `${my_var01} ${units_list01[switch_units01]} convert to ${my_var02} ${units_list01[switch_units02]}`;
            }
            else{
                answer_div01.innerHTML = `<h2>${my_var01} Error!  Need Number >0 !!! </h2>`; 
            }
	});

	function my_convertor_text01 (a , b){
		my_heading01.innerHTML = `${a} to ${b} Convertor`;
		my_intro01.innerHTML = `Type a number in ${a} and click the button to convert the distance to  ${b}`;
	}

})();
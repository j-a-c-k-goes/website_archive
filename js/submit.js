/* 
    add a submission to the archive
	
	-- create sumbit button
	
	       if input field > 4 characters:

	           toggle visibility of button	
	
	-- create listen event on element

	       on click

	          check submission validity

	          invalid if:
	       
	               input field is "" 
	       
	               input field < 7 characters
	       
	               input does not include "https://"
	          
	          if invalid
	       
	              alert of invalid submission

	              clear input field
	          
	          if valid, add to data

	          	alert of success

	          	store value

	          	clear input field

	-- prepare submission for key/value push

	    input: "https://www.website.com"

	    let slice_point_start = "https://".length

	    let sliced_link = input[slice_point_start:];

	    let final_name = sliced_link.replace("www.", "").replace(".com","");

	    website_data.push({name:final_name, href:current_input})
*/
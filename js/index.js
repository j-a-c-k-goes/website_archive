select_links = document.querySelectorAll("#added_link");
select_contributors = document.querySelectorAll("#contributor");


select_links.forEach((element) => {
	element.addEventListener("mouseover", ()=>{
		element.style.color = "var(--white)";
		element.style.transition = "2s all";
		element.style.border = "1px solid var(--black)";
	});
})

select_links.forEach((element) => {
	element.addEventListener("mouseout", ()=>{
		element.style.background = "none";
		element.style.color = "var(--black)";
		element.style.border = "1px solid var(--black)";
	});
})

// const show_links_logged = document.querySelector("#stats");
// show_links_logged.innerHTML = `there are ${links_logged(website_data)} links logged in the archive`;



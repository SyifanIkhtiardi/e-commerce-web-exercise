var MenuItems = document.getElementById("MenuItems")

MenuItems.style.maxHeight = "0px";

function myFunction(){
	if(MenuItems.style.maxHeight == "0px")
		{MenuItems.style.maxHeight = "200px";}
	else
		{MenuItems.style.maxHeight = "0px";}
}
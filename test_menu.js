
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var text = JSON.parse(this.responseText);
	document.getElementById("test").innerHTML +="<div class='tab'>"
	 
	function removeDuplicates(array, key) {
			let lookup = new Set();
			return array.filter(obj => !lookup.has(obj[key]) && lookup.add(obj[key]));
		}
		//console.log(removeDuplicates(text.pages, 'title'))	 
	var menu=removeDuplicates(text.pages,'title')
	
	//document.getElementById("test").innerHTML += 	
	var id=" id='defaultOpen' "
 
	var yazi="<div class='tab'>"
	for (var sira in menu){
		//var myObj1 = 	  
		yazi +="<button class='tablinks' "+id+" onclick=\"openCity(event, '"+menu[sira].title+"') \">"+menu[sira].title+"</button>"
		id=""
		//yazi +="<button class='tablinks' id='"+id+"'"			
	}
	yazi+= "<div>"	
	document.getElementById("test").innerHTML +=yazi
	//console.log('header:'+yazi)	
	yazi=""
	for (var sira1 in menu){
			 yazi+="<div id='"+menu[sira1].title+"' class='tabcontent'> "		
			 
	 
			 var pagesObj=text.pages
			// pagesObj= pagesObj.filter(function(pages_list){ return pages_list.title=menu[sira1].title})	
			   
			 for (var sira2 in pagesObj) { 	 
				
				var myObj = pagesObj[sira2]
				var title = myObj.title
				var itemsObj= myObj.items	
				if (title!=menu[sira1].title) {
					continue
				}

				for (var items in itemsObj){
					var field = itemsObj[items]
					yazi += "<label for=" + field.name +">" + field.label +"</label> &nbsp;"
					var choises_txt="<select name=" + field.name +"> "
					for (var selopt in field.choices){
						choises_txt += "<option value="+field.choices[selopt]+">"+field.choices[selopt].value+"</option>"
				}
				choises_txt+=" </select>"	
				yazi += choises_txt				 
			 }
			 
				
				
				yazi+= "<br>";		 	
			}
			 
			 yazi+="</div>"
			 
			 
	}
	document.getElementById("test").innerHTML +=yazi
	

	 
	   
	   
  }
};
xmlhttp.open("GET", "https://1dds21470e.execute-api.eu-west-2.amazonaws.com/dev/test/1", true);
xmlhttp.send();
 
  
 


 
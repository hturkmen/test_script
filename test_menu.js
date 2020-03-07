 var xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function () {
 	if (this.readyState == 4 && this.status == 200) {
 		var text = JSON.parse(this.responseText);
 		document.getElementById("test").innerHTML += "<div class='tab'>"

 		function removeDuplicates(array, key) {
 			let lookup = new Set();
 			return array.filter(obj => !lookup.has(obj[key]) && lookup.add(obj[key]));
 		}
 		var menu = removeDuplicates(text.pages, 'title')

 		var id = " id=\"defaultOpen\" "

 		var yazi = "<div class='tab'>"
 		for (var sira in menu) {
 			yazi += "<button class='tablinks' onclick=\"openCity(event, '" + menu[sira].title + "') \"  " + id + ">" + menu[sira].title + "</button>"
 			id = ""
 		}
 		yazi += "<div>"
 		document.getElementById("test").innerHTML += yazi
 		//console.log('header:'+yazi)	
 		yazi = ""


 		for (var sira1 in menu) {
 			yazi += "<div id='" + menu[sira1].title + "' class='tabcontent'> "
 			var pagesObj = text.pages
 			for (var sira2 in pagesObj) {
 				var myObj = pagesObj[sira2]
 				var title = myObj.title
 				var itemsObj = myObj.items
 				if (title != menu[sira1].title) {
 					continue
 				}


 				for (var items in itemsObj) {
 					var field = itemsObj[items]
 					console.log(field.fieldType)
 					switch (field.fieldType) {
 						case "single-choice-input":
 							yazi += "<label for=" + field.name + ">" + field.label + "</label> &nbsp;"
 							var choises_txt = "<select   name=" + field.name + "> "
 							for (var selopt in field.choices) {
 								choises_txt += "<option value=" + field.choices[selopt] + ">" + field.choices[selopt].value + " </option>"
 							}
 							choises_txt += " </select>"
 							break;
 						case "stimulus":
 							yazi += field.content;
 							break;
 						case "multiple-choice-input":
 							yazi += "<label for=" + field.name + ">" + field.label + "</label><br> "
 							var choises_txt = "<select multiple name=" + field.name + "> "
 							for (var selopt in field.choices) {
 								choises_txt += "<option value=" + field.choices[selopt] + "  >" + field.choices[selopt].value + " </option>"
 							}
 							choises_txt += " </select>  Hold down the Ctrl (windows) or Command (Mac) button to select multiple options.<br>"
 							break;
 					}

 					yazi += choises_txt
 					choises_txt = ""
 				}
 				yazi += "<br>";
 			}
 			yazi += "</div>"

 		}
 		document.getElementById("test").innerHTML += yazi

 	}
 };
 xmlhttp.open("GET", "https://1dds21470e.execute-api.eu-west-2.amazonaws.com/dev/test/1", true);
 xmlhttp.send();
$("#sport").click(function(){
	var sports = document.getElementById("sports")
	if (sports.value==="foot"){
  $("#fi").html("<center><ol><li>FiFa 2020</li><li> PES 2020</li></ol></center>");
}
else if(sports.value==="UFC"){
	$("#fi").html("<center><ol><li>UFC 3</li></ol></center>");
}
else if(sports.value==="Basket"){
	$("#fi").html("<center><ol><li>NBA 2K20</li></ol></center>")
}else if (sports.value==="Racing"){
	$("#fi").html("<center><ol><li>Forza Horizon 2020</li><li>Dirt Rally 4</li></ol></center>")
}

});


$("#kill").click(function(){
	var action = document.getElementById("AA")
	if (action.value==="shooter"){
  $("#actionha").html("<center><ol><li>Escape from tarkov</li><li>Battlefield</li><li>Cyberpunk2070</li></ol></center>");
}
else if(action.value==="swords"){
	$("#actionha").html("<center><ol><li>The witcher 3 wild hunt</li><li>Ghost of tsushima</li><li>Dark sools</li></ol></center>");
}
else if(action.value==="fighting"){
	$("#actionha").html("<center><ol><li>Dragon balls z</li><li>tekken</li></ol></center>")
}

});


$("#farm").click(function(){
	var strategies = document.getElementById("stra")
	if (strategies.value==="war"){
  $("#str").html("<center><ol><li>Company of heroes 2</li><li>Crusader kings 2</li><li>Command & Conquer: Red Alert 2</li></ol></center>");
}
else if(strategies.value==="survival"){
	$("#str").html("<center><ol><li>Civilization VI</li><li></li><li>star craft 2</li></ol></center>");
}


});




$("#sim").click(function(){
	var simulators = document.getElementById("simula")
	if (simulators.value==="jobs"){
  $("#sisi").html("<center><ol><li>Surgeon simulator</li><li>weed farmr simulator</li><li>Taxi simulator</li></ol></center>");
}
else if(simulators.value==="driving"){
	$("#sisi").html("<center><ol><li>Train simulator 2020</li><li></li>Microsoft flight simulator<li>City car driving</li></ol></center>");
}
else if(simulators.value==="building"){
	$("#sisi").html("<center><ol><li>Pc building simulator</li><li>Minecraft</li><li>No Man's sky</li></ol></center>");
}


});




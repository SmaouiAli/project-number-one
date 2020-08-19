$("#sport").click(function(){
	var sports = document.getElementById("sports")
	if (sports.value==="foot"){
  $("#fi").html("<center><ol> <a href='https://www.ea.com/fr-fr/games/fifa/fifa-20'><li>FiFa 2020</li></a>   <a href='https://www.konami.com/wepes/2020/eu/fr/ps4/'><li> PES 2020</li></a></ol></center>");
}
else if(sports.value==="UFC"){
	$("#fi").html("<center><ol><a href='https://www.ea.com/fr-fr/games/ufc/ufc-4'><li>UFC 3</li></a></ol></center>");
}
else if(sports.value==="Basket"){
	$("#fi").html("<center><ol><a href='https://www.2k.com/en-US/game/nba-2k20-legend-edition/'><li>NBA 2K20</li></a></ol></center>")
}else if (sports.value==="Racing"){
	$("#fi").html("<center><ol><a href = 'https://forzamotorsport.net/en-us/'><li>Forza Horizon 2020</li></a><a href ='https://dirtgame.com/uk'><li>Dirt Rally 4</li></a></ol></center>")
}

});


$("#kill").click(function(){
	var action = document.getElementById("AA")
	if (action.value==="shooter"){
  $("#actionha").html("<center><ol><a href='https://www.escapefromtarkov.com/'><li>Escape from tarkov</li></a><a href='https://www.ea.com/fr-fr/games/battlefield/news'><li>Battlefield</li></a><a href='https://www.cyberpunk.net/tn/fr/'><li>Cyberpunk2070</li></a></ol></center>");
}
else if(action.value==="swords"){
	$("#actionha").html("<center><ol><a href='https://thewitcher.com/fr/'><li>The witcher 3 wild hunt</li></a><a href='https://www.playstation.com/en-us/games/ghost-of-tsushima-ps4/'><li>Ghost of tsushima</li></a><a href='https://fr.bandainamcoent.eu/dark-souls/dark-souls'><li>Dark sools</li></a></ol></center>");
}
else if(action.value==="fighting"){
	$("#actionha").html("<center><ol><a href'https://www.bandainamcoent.com/games/dragon-ball-z-kakarot'><li>Dragon balls z</li></a><a href=''><li>tekken</li></a>https://tk7.tekken.com/</ol></center>")
}

});


$("#farm").click(function(){
	var strategies = document.getElementById("stra")
	if (strategies.value==="war"){
  $("#str").html("<center><ol><a href='http://www.companyofheroes.com/age-gate'><li>Company of heroes 2</li></a><a href='https://www.paradoxplaza.com/crusader-kings-ii/CKCK02GSK-MASTER.html'><li>Crusader kings 2</li></a><a href='https://www.ea.com/fr-fr/games/command-and-conquer/command-and-conquer-remastered'><li>Command & Conquer: Red Alert 2</li></a></ol></center>");
}
else if(strategies.value==="survival"){
	$("#str").html("<center><ol><a href='https://civilization.com/'><li>Civilization VI</li></a><a href='https://starcraft2.com/fr-fr/'><li>star craft 2</li></a></ol></center>");
}


});




$("#sim").click(function(){
	var simulators = document.getElementById("simula")
	if (simulators.value==="jobs"){
  $("#sisi").html("<center><ol><a href='https://www.surgeonsim.com/'><li>Surgeon simulator</li></a><a href='http://www.weedfarmersimulator.com/'><li>weed farmer simulator</li></a><a href='https://store.steampowered.com/app/1159390/Taxi_Simulator/'><li>Taxi simulator</li></a></ol></center>");
}
else if(simulators.value==="driving"){
	$("#sisi").html("<center><ol><a href='https://live.dovetailgames.com/live/train-simulator'><li>Train simulator 2020</li></a><a href='https://www.xbox.com/fr-FR/games/microsoft-flight-simulator'><li>Microsoft flight simulator</li></a><a href='https://citycardriving.com/'><li>City car driving</li></a></ol></center>");
}
else if(simulators.value==="building"){
	$("#sisi").html("<center><ol><a href='https://store.steampowered.com/app/621060/PC_Building_Simulator/'><li>Pc building simulator</li></a><a href='https://www.minecraft.net/fr-fr/'><li>Minecraft</li></a><a href='https://www.nomanssky.com/'><li>No Man's sky</li></a></ol></center>");
}


});




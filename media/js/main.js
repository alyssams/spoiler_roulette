function GetValue() {

	var spoilers = {
	    "featured": [{
    	"id": "1",
	 		"title":"Game of Thrones", "summary":"The Mountain kills the Red Viper."
	 	},{
	 	"id": "2",
	 		"title":"Moby Dick", "summary":"The whale wins. It is also a metaphor for God."
	 	},{
	 	"id": "3",
	 		"title":"X-Men 3", "summary":"Wolverine kills Jean Grey."
	 	},{
	 	"id": "4",
	 		"title":"Crouching Tiger Hidden Dragon", "summary":"Jen doesn't make it back in time to save Mu Bai."
	 	},{
	 	"id": "5",
	 		"title":"Man of Steel", "summary":"Superman kills Zod. Yeah, I know."
	 	},{
	 	"id": "6",
	 		"title":"Avengers", "summary":"Loki kills Agent Coulson."
	 	},{
	 	"id": "7",
	 		"title":"Daredevil", "summary":"Karen kills Wesley."
	 	},{
	 	"id": "8",
	 		"title":"Jessica Jones", "summary":"Jessica's immune to Killgrave's powers."
	 	},{
	 	"id": "9",
	 		"title":"Game of Thrones", "summary":"Ned Stark is executed by Geoffry."
	 	},{
	 	"id": "10",
	 		"title":"The Flash", "summary":"Dr. Wells killed Barry's mom. Also, he's from the future."
	 	},{
	 	"id": "11",
	 		"title":"Ender's Game", "summary":"Ender commits xenocide by playing what he thinks is a war simulation game."
	 	},{
	 	"id": "12",
	 		"title":"Harry Potter", "summary":"Snape kills Dumbledore, and Harry's carrying a piece of Voldemort's soul."
	 	},{
	 	"id": "13",
	 		"title":"The Wire", "summary":"Omar's killed by a kid."
	 	},{
	 	"id": "14",
	 		"title":"Battlestar Galactica", "summary":"Saul Tigh, Galen, Tori, and Ellen Tigh (not dead!) are cylons."
	 	},{
	 	"id": "15",
	 		"title":"The Wire", "summary":"Avon Barksdale shoots Stringer Bell. Sorry, Idris."
	 	},{
	 	"id": "16",
	 		"title":"Doctor Who", "summary":"Rose Tyler is Bad Wolf."
	 	},{
	 	"id": "17",
	 		"title":"Doctor Who", "summary":"Missy is the Master."
	 	},{
	 	"id": "18",
	 		"title":"Doctor Who", "summary":"Clara Oswald wipes the Doctor's memory of her to stop time from unravelling."
		},{
		"id": "19",
			"title":"Game of Thrones", "summary":"Walder Frey and Roose Bolton kill Rob, his pregnant wife, and his mother at a wedding."
		},{
		"id": "20",
			"title":"Buffy the Vampire Slayer", "summary":"Tara dies to a stray bullet from Warren which drives Willow evil."
		},{
		"id": "21",
			"title":"Boardwalk Empire", "summary":"Nucky's killed by Joe Harper (AKA Tommy Darmody, Jimmy Darmody's son)."
		},{
		"id": "22",
			"title":"True Blood", "summary":"Sookie stakes Bill in the finale."
		},{
		"id": "23",
			"title":"Old Boy", "summary":"Oh Dae-su cuts out his own tongue in desperate atonement. Mi-Do's his daughter. Yeah, ew."
		},{
		"id": "24",
			"title":"Brazil", "summary":"There's no happy ending."
		},{
		"id": "25",
			"title":"House of Cards", "summary":"Doug Stamper runs over Rachel Posner with a van. Vans beat rocks."
		},{
		"id": "26",
			"title":"The Usual Suspects", "summary":"Kint is Soze."
		},{
		"id": "27",
			"title":"The Matrix", "summary":"Neo can use his abilities outside the Matrix. No, it's not explained."
		},{
		"id": "28",
			"title":"Sixth Sense", "summary":"Bruce Willis is dead the whole time! What a twist!"
		},{
		"id": "29",
			"title":"Frozen", "summary":"Sisterly love thaws the town, not romantic love."
		},{
		"id": "30",
			"title":"Terminator 2", "summary":"Arnold sacrifices himself to prevent the sequels. This fails."
		},{
		"id": "31",
			"title":"Code Geass", "summary":"Lelouch has Suzaku assassinate him to ensure world peace."
		},{
		"id": "32",
			"title":"Evangelion (the series)", "summary":"Everyone on the planet turns into goo. Except Shinji and Asuka."
		},{
		"id": "33",
			"title":"Goodnight Mommy", "summary":"One of the boys was dead the whole time."
		},{
		"id": "34",
			"title":"Inside Out", "summary":"Bingbong sacrifices himself so Joy can survive."
		},{
		"id": "35",
			"title":"Ex Machina", "summary":"Ava escapes having killed Nathan and leaving Caleb to die of starvation."
		},{
		"id": "36",
			"title":"The Descent", "summary":"Her escape is a hallucination."
		},{
		"id": "37",
			"title":"Fight Club", "summary":"Tyler Durden's a split personality of the nameless protagonist."
		},{
		"id": "38",
			"title":"A Beautiful Mind", "summary":"Nash's friends are all imaginary."
		},{
		"id": "39",
			"title":"Audition", "summary":"Asami's a psychopath."
		},{
		"id": "40",
			"title":"The Crying Game", "summary":"Dil's got a dong. Transphobia ensues."
		},{
		"id": "41",
			"title":"Twin Peaks", "summary":"Laura Palmer was killed by her dad."
		},{
		"id": "42",
			"title":"Sense and Sensibility", "summary":"John Willoughby dumps Marianne."
		},{
		"id": "43",
			"title":"Signs", "summary":"The aliens are allergic to water. And apparently did no research on our planet."
		},{
		"id": "44",
			"title":"The Village", "summary":"The movie takes place in the present day."
		},{
		"id": "45",
			"title":"The Prestige", "summary":"Borden's got a twin brother who hangs in his place and Angier's got a clone army."
		},{
		"id": "46",
			"title":"Saw", "summary":"Jigsaw's the dead guy in the room with them."
		},{
		"id": "47",
			"title":"The Fault In Our Stars", "summary":"Gus dies, not Hazel."
		},{
		"id": "48",
			"title":"Friends", "summary":"Ross and Rachel end up together in the finale."
		},{
		"id": "49",
			"title":"21 Jump Street", "summary":"The PE coach is the supplier."
		},{
		"id": "50",
			"title":"Bioshock Infinite", "summary":"Comstock and Booker are the same person from different timelines."
		},{
		"id": "51",
			"title":"Dragon Age Inquisition", "summary":"Solas and Flemeth are actually Elven gods."
		},{
		"id": "52",
			"title":"Venture Brothers", "summary":"Hank and Dean are clones."
		},{
		"id": "53",
			"title":"Gone Girl", "summary":"The wife set it all up herself."
		},{
		"id": "54",
			"title":"Soylent Green", "summary":"It's made of people."
		},{
		"id": "55",
			"title":"Planet of the Apes", "summary":"The world of the apes is actually future Earth, not another planet."
		},{
		"id": "56",
			"title":"Psycho", "summary":"Norman Bates dresses as his mother while murdering folks."
		},{
		"id": "57",
			"title":"Star Wars: The Force Awakens", "summary":"Rey's the new Jedi,"
		},{
		"id": "58",
			"title":"Star Wars: The Force Awakens", "summary":"Kylo Ren kills his father, Han Solo."
		},{
		"id": "59",
			"title":"Star Wars: The Empire Strikes Back", "summary":"Vader is Luke's dad. Also Leia's."
		},{
		"id": "60",
			"title":"Friday the 13th", "summary":"The real killer is Jason Vorhees' mother."
		},{
		"id": "61",
			"title":"Cabin in the Woods", "summary":"Ritualistic human sacrifice themed as horror movies keep the world safe from elder gods."
		},{
		"id": "62",
			"title":"Rocky I", "summary":"Rocky loses."
		},{
		"id": "63",
			"title":"Rocky I", "summary":"Rocky loses."
		},{
		"id": "64",
			"title":"Snow Piercer", "summary":"The rebellion is a planned population control."
		},{
		"id": "65",
			"title":"Citizen Kane", "summary":"Rosebud was his sled that represented actual happiness."
		},{
		"id": "66",
			"title":"Million Dollar Baby", "summary":"Maggie's paralyzed in the last fight and Scrap takes her off life support."
		},{
		"id": "67",
			"title":"American Psycho", "summary":"The movie's violence is entirely a fantasy of Patrick Bateman."
		},{
		"id": "68",
			"title":"The Wicker Man", "summary":"The cop was lured there as the sacrifice. There was never a missing girl."
		},{
		"id": "69",
			"title":"Drive", "summary":"Blanche graphically dies within a few scenes, and Bernie kills Shannon."
		},	{
			"title":"The Imitation Game", "summary":"Turing's chemically castrated for homosexuality and dies in obscurity."
		},{
		"id": "70",
			"title":"Mad Max Fury Road", "summary":"The Green Place is now a swamp."
		},{
		"id": "71",
			"title":"A Bug's Life", "summary":"Hopper's eaten by a bird."
		},{
		"id": "72",
			"title":"Toy Story 3", "summary":"The gang's spared the incinerator by the Alien toys."
		},{
		"id": "73",
			"title":"Finding Nemo", "summary":"They find him."
		},{
		"id": "74",
			"title":"Game of Thrones", "summary":"Jonn Snow's a Targeryan."
		},{
		"id": "75",
			"title":"Interstellar", "summary":"Cooper is the poltergeist in Murph's room. It's a closed time loop."
		},{
		"id": "76",
			"title":"Avengers: Age of Ultron", "summary":"Quicksilver dies saving Hawkeye."
		},{
		"id": "77",
			"title":"Ant-Man", "summary":"Ant-Man goes subatomic to defeat Yellowjacket and then escapes."
		},{
		"id": "78",
			"title":"House of Cards", "summary":"Meechum dies protecting Frank from a gunman."
		},{
		"id": "79",
			"title":"Fullmetal Alchemist", "summary":"Alchemy's powered by dead people from World War 2."
		},{
		"id": "80",
			"title":"John Dies at the End", "summary":"See above."
		},{
		"id": "81",
			"title":"The Mist", "summary":"David mercy-kills the other survivors only to be rescued moments later."
		},{
		"id": "82",
			"title":"Shutter Island", "summary":"The protagonist's a delusional mental patient, not a cop."
		},{
		"id": "83",
			"title":"Total Recall", "summary":"Everything was a fake memory."
		},{
		"id": "84",
			"title":"Blade Runner", "summary":"Deckard's a replicant."
		},{
		"id": "85",
			"title":"The Game", "summary":"It was all orchestrated as a birthday gift from his brother. Some family."
		},{
		"id": "86",
			"title":"30 Rock", "summary":"Kenneth is an immortal."
		},{
		"id": "87",
			"title":"How I met Your Mother", "summary":"The mother dies in 2024 and Ted ends up with Robin."
		},{
		"id": "88",
			"title":"The Book of Eli", "summary":"The book's a bible and he's blind."
		},{
		"id": "89",
			"title":"Zardoz", "summary":"The book's the Wizard of Oz."
		},{
		"id": "90",
			"title":"Time Bandits", "summary":"His parents die when they touch the microwave."
		},{
		"id": "91",
			"title":"Final Destination 5", "summary":"It's an immediate prequel to the first movie. Damn you, Heisserer."
		},{
		"id": "92",
			"title":"Cube", "summary":"The autistic dude's the only one to survive."
		},{
		"id": "93",
			"title":"Cube Zero", "summary":"It's a secret prequel to the first movie."
		},{
		"id": "94",
			"title":"Zombie Land", "summary":"Bill Murray's in this movie only to be shot a few scenes later."
		},{
		"id": "95",
			"title":"The Hangover", "summary":"He got locked up on the roof."
		},{
		"id": "96",
			"title":"Sherlock", "summary":"Molly's boyfriend Jim is Moriarty."
		},{
		"id": "97",
			"title":"Sherlock", "summary":"Sherlock fakes his death. Duuuuuuh."
		},{
		"id": "98",
			"title":"Broadchurch", "summary":"Joe Miller, DS Ellie's husband, killed the kid to cover his pederastry."
		},{
		"id": "99",
			"title":"True Detective", "summary":"The groundsman in episode 3's the killer. Cthulhu's involvement not confirmed."
		},{
		"id": "100",
			"title":"Dollhouse", "summary":"Boyd's the big bad evil guy."
		},{
		"id": "101",
			"title":"Persona 4", "summary":"The true villain is the nameless gas station attendant you met 70 hours ago. She is also a god."
		},{
		"id": "102",
			"title":"Persona 3", "summary":"The protagonist dies at the end."
		},{
		"id": "103",
			"title":"A Pup Named Scooby Doo", "summary":"It's NEVER Red Herring. Except that one time."
		},{
		"id": "104",
			"title":"Beneath the Planet of the Apes", "summary":"A dying Charlton Heston nukes the entire planet."
		},{
		"id": "105",
			"title":"Sunshine", "summary":"They reignite the sun, but everyone dies."
		},{
		"id": "106",
			"title":"Dead Snow", "summary":"The zombies win. And then they win in the sequel."
		},{
		"id": "107",
			"title":"Dinosaurs", "summary":"The entire family freezes to death due to industry made climate change."
		},{
		"id": "108",
			"title":"Lost", "summary":"The whole thing's an allegory for purgatory and everyone's reunited in the finale."
		},{
		"id": "109",
			"title":"Warhammer 40000", "summary":"The Golden Throne is failing, and no one knows how to fix it."
		},{
		"id": "110",
			"title":"Drag Me to Hell", "summary":"Unable to overcome the gypsy curse, she's dragged to, you guessed it, hell."
		},{
		"id": "111",
			"title":"The Walking Dead", "summary":"Negan kills Glenn."
		},{
		"id": "112",
			"title":"The Lion King", "summary":"Scar kills Mufasa."
		},{
		"id": "113",
			"title":"Se7en", "summary":"It's his wife's pretty little head in the box."
		},{
		"id": "114",
			"title":"Gurren Lagann", "summary":"Kamina dies in episode 8. BROOOOOOOOOOOO"
		},{
		"id": "115",
			"title":"Portal", "summary":"The cake is a lie, you fat eagle."
		},{
		"id": "116",
			"title":"Puella Magi Madoka Magica", "summary":"Homura's been stuck in a time loop to save Madoka for ages."
		},{
		"id": "117",
			"title":"Serentiy", "summary":"Wash and Book die."
		},{
		"id": "118",
			"title":"Puella Magi Madoka Magica", "summary":"Homura's been stuck in a time loop to save Madoka for ages."
		},{
		"id": "119",
			"title":"Mad Men", "summary":"Don Draper's a dead man impersonated by Dick Whitman."
		},{
		"id": "120",
			"title":"Blackadder Goes Forth", "summary":"They all die during a charge in the finale."
		},{
		"id": "121",
			"title":"Life on Mars", "summary":"Sam gets backs to 2008, but kills himself to return to 1973."
		},{
		"id": "122",
			"title":"Daredevil", "summary":"Bullseye kills Elektra."
		},{
		"id": "123",
			"title":"ER", "summary":"Doctor Green dies of a brain tumor."
		},{
		"id": "124",
			"title":"11.22.63", "summary":"The yellow card is a sanity indicator for a time guardian. King doesn't explain."
		},{
		"id": "125",
			"title":"11.22.63", "summary":"Oswald shoots Sadie instead of JFK."
		},{
		"id": "126",
			"title":"The 100", "summary":"Alie 2.0 is a chip in Lexa's head."
		},{
		"id": "127",
			"title":"Agents of SHIELD", "summary":"Grant Ward becomes the hive-mind Hydra villain Hive. Also, redundant."
		},{
		"id": "128",
			"title":"The Machinist", "summary":"Ivan is a guilt induced hallucination along with most of the creepy stuff in the movie."
		},{
		"id": "129",
			"title":"House", "summary":"Kutner commits suicide. Thanks, Obama."
		},{
		"id": "130",
			"title":"Babylon 5", "summary":"Sinclair IS Valen, not a reincarnation. He took Babylon 4 into the past to do it."
		},{
		"id": "131",
			"title":"Man in the High Castle", "summary":"Tagomi teleports to our reality in the finale."
		},{
		"id": "132",
			"title":"Arrow", "summary":"Thea kills Sara Lance."
		},{
		"id": "133",
			"title":"Star Trek: Deep Space Nine", "summary":"The Changelings are actually running the Dominion."
		},{
		"id": "134",
			"title":"X-Files", "summary":"The Cigarette Smoking Man is probably Mulder's biological father. Season 9's weird like that."
		},{
		"id": "135",
			"title":"Dexter", "summary":"He gets away with it all and becomes a lumberjack."
		},{
		"id": "136",
			"title":"So I Married an Axe Murderer", "summary":"Rose, Harriet's sister, is the axe crazy murderer."
		},{
		"id": "137",
			"title":"Reservoir Dogs", "summary":"Mr.Orange is the rat."
		},{
		"id": "138",
			"title":"Who Framed Roger Rabbit", "summary":"Judge Doom is a toon."
		},	{
		"id": "139",
			"title":"Reservoir Dogs", "summary":"Mr.Orange is the rat."
		},{
		"id": "140",
			"title":"Gravity", "summary":"Clooney dies in the first act, and his reappearance is a hallucination."
		},{
		"id": "141",
			"title":"Attack on Titan", "summary":"Annie, Bertolt, Ymir, and Reiner are all Titan Shifters."
		},{
		"id": "142",
			"title":"Knights of the Old Republic", "summary":"You're Darth Revan. Congratulations, jack ass."
		},{
		"id": "143",
			"title":"System Shock 2", "summary":"Polito's been dead the whole time. There is only Shodan."
		},{
		"id": "144",
			"title":"Undertale", "summary":"Your name is Fisk, and the Fallen Child's an evil spirit trying to control you."
		},{
		"id": "145",
			"title":"Red Dead Redemption", "summary":"John Marston cannot survive the final shootout. Good luck."
		},{
		"id": "146",
			"title":"Adventure Time", "summary":"This isn't a kids show."
		},{
		"id": "147",
			"title":"Steven Universe", "summary":"Garnet's a fusion of Ruby and Sapphire."
		},{
		"id": "148",
			"title":"Legend of Korra", "summary":"Asami and Korra end the series as a couple. Yay inclusion!"
		},{
		"id": "149",
			"title":"BoJack Horseman", "summary":"BoJack only got his show because of how terrible an actor he was. Don't tell him."
		},{
		"id": "150",
			"title":"Heathers", "summary":"JD kills Heather Chandler with drain cleaner."
		},{
		"id": "151",
			"title":"Heathers", "summary":"Veronica shoots JD to prevent the school's explosive end."
		},{
		"id": "152",
			"title":"BoJack Horseman", "summary":"BoJack only got his show because of how terrible an actor he was. Don't tell him."
		}]
	};

	var random = spoilers.featured[Math.floor(Math.random() * spoilers.featured.length)],
		button = document.querySelector('button') // Using a class instead, see note below.
	button.classList.toggle('active');
	document.getElementById("title").innerHTML=random.title;
	document.getElementById("summary").innerHTML=random.summary;

}

// may switch to jquery
// $.getJSON("media/js/spoiler.json", function(json) {
//     console.log(json); 
// });






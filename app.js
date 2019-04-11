new Vue({
	el: '#app-deathpool',
	data: {
		jonName: 'Jon Snow', 
		avatarJon: 'https://tom.imgix.net/jonsnow.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', 
		sansaName: 'Sansa Stark', 
		avatarSansa: 'https://tom.imgix.net/sansastark.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', 
		aryaName: 'Arya Stark', 
		avatarArya: 'https://tom.imgix.net/aryastark.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', 
		branName: 'Bran Stark', 
		avatarBran: 'https://tom.imgix.net/branstark.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', 
		jaimeName: 'Jaime Lannister', 
		avatarJaime: 'https://tom.imgix.net/jaimelannister.png?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', 
		cerseiName: 'Cersei Lannister', 
		avatarCersei: 'https://tom.imgix.net/cersei.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', 
		tyrionName: 'Tyrion Lannister', 
		avatarTyrion: 'https://tom.imgix.net/tyrionlannister.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', 
		mountainName: 'The Mountain', 
		avatarMountain: 'https://tom.imgix.net/mountain.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', 
		daenerysName: 'Daenerys Targaryen', 
		avatarDaenerys: 'https://tom.imgix.net/daenerystargaryen.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', 
		missandeiName: 'Missandei', 
		avatarMissandei: 'https://tom.imgix.net/missandei.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', 
		greywormName: 'Greyworm', 
		avatarGreyworm: 'https://tom.imgix.net/greyworm.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
		euronName: 'Euron Greyjoy',
		avatarEuron: 'https://tom.imgix.net/eurongreyjoy.png?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
		yaraName: 'Yara Greyjoy',
		avatarYara: 'https://tom.imgix.net/yaragreyjoy.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
		theonName: 'Theon Greyjoy',
		avatarTheon: 'https://tom.imgix.net/theongreyjoy.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
		jorahName: 'Jorah Mormont',
		avatarJorah: 'https://tom.imgix.net/jorahmormont.png?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
		melisandreName: 'Melisandre',
		avatarMelisandre: 'https://tom.imgix.net/melisandre.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
		samwellName: 'Samwell Tarly',
		avatarSamwell: 'https://tom.imgix.net/samwelltarly.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
		gillyName: 'Gilly',
		avatarGilly: 'https://tom.imgix.net/gilly.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
		samName: 'Little Sam',
		avatarSam: 'https://tom.imgix.net/sam.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
		bericName: 'Beric Dondarrion',
		avatarBeric: 'https://tom.imgix.net/bericdondarrion.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
		houndName: 'The Hound',
		avatarHound: 'https://tom.imgix.net/sandorclegane.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
		gendryName: 'Gendry',
		avatarGendry: 'https://tom.imgix.net/gendry.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
		varysName: 'Varys',
		avatarVarys: 'https://tom.imgix.net/varys.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
		brienneName: 'Brienne of Tarth',
		avatarBrienne: 'https://tom.imgix.net/briennetarth.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
		davosName: 'Davos Seaworth',
		avatarDavos: 'https://tom.imgix.net/davosseaworth.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
		bronnName: 'Bronn',
		avatarBronn: 'https://tom.imgix.net/bronn.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
		podrickName: 'Podrick Payne',
		avatarPodrick: 'https://tom.imgix.net/podrickpayne.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',


    form: {
    	name: '',
    	code: '',
      jonDeath: '',
      sansaDeath: '',
      aryaDeath: '',
      branDeath: '',
      jaimeDeath: '',
      cerseiDeath: '',
      tyrionDeath: '',
      mountainDeath: '',
      daenerysDeath: '',
      missandeiDeath: '',
      greywormDeath: '',
      euronDeath: '',
      yaraDeath: '',
      theonDeath: '',
      jorahDeath: '',
      melisandreDeath: '',
      samwellDeath: '',
      gillyDeath: '',
      samDeath: '',
      bericDeath: '',
      houndDeath: '',
      varysDeath: '',
      brienneDeath: '',
      podrickDeath: '',
      davosDeath: '',
      bronnDeath: '',
      gendryDeath: ''
    },


methods: {
    	post: function(){
    		var deathpoolData = {
    			name: app-deathpool.name,
    			code: app-deathpool.code,
    			jonDeath: app-deathpool.jonDeath,
    			sansaDeath: app-deathpool.sansaDeath,
    			aryaDeath: app-deathpool.aryaDeath,
    			branDeath: app-deathpool.branDeath,
    			jaimeDeath: app-deathpool.jaimeDeath, 
    			cerseiDeath: app-deathpool.cerseiDeath,
    			tyrionDeath: app-deathpool.tyrionDeath,
    			mountainDeath: app-deathpool.mountainDeath,
    			daenerysDeath: app-deathpool.daenerysDeath,
    			missandeiDeath: app-deathpool.missandeiDeath,
    			greywormDeath: app-deathpool.greywormDeath,
    			euronDeath: app-deathpool.euronDeath,
    			yaraDeath: app-deathpool.yaraDeath,
    			theonDeath: app-deathpool.theonDeath,
    			jorahDeath: app-deathpool.jorahDeath,
    			melisandreDeath: app-deathpool.melisandreDeath,
    			samwellDeath: app-deathpool.samwellDeath,
    			gillyDeath: app-deathpool.gillyDeath,
    			samDeath: app-deathpool.samDeath,
    			bericDeath: app-deathpool.bericDeath,
    			houndDeath: app-deathpool.houndDeath,
    			varysDeath: app-deathpool.varysDeath,
    			brienneDeath: app-deathpool.brienneDeath,
    			podrickDeath: app-deathpool.podrickDeath,
    			davosDeath: app-deathpool.davosDeath,
    			bronnDeath: app-deathpool.bronnDeath,
    			gendryDeath: app-deathpool.gendryDeath
    		};
    		Sheetsu.write("https://sheetsu.com/a/t/42edd873d526", deathpoolData, {}).then(function (data) {
    			console.log(data);
    			app-deathpool.deathpool.push = data;
    			app-deathpool.jonDeath = "";
    			app-deathpool.sansaDeath = "";
    			app-deathpool.aryaDeath = "";
    			app-deathpool.branDeath = "";
    			app-deathpool.jaimeDeath = "";
    			app-deathpool.cerseiDeath = "";
    			app-deathpool.tyrionDeath = "";
    			app-deathpool.mountainDeath = "";
    			app-deathpool.daenerysDeath = "";
    			app-deathpool.missandeiDeath = "";
    			app-deathpool.greywormDeath = "";
    			app-deathpool.euronDeath = "";
    			app-deathpool.yaraDeath = "";
    			app-deathpool.theonDeath = "";
    			app-deathpool.jorahDeath = "";
    			app-deathpool.melisandreDeath = "";
    			app-deathpool.samwellDeath = "";
    			app-deathpool.gillyDeath = "";
    			app-deathpool.samDeath = "";
    			app-deathpool.bericDeath = "";
    			app-deathpool.houndDeath = "";
    			app-deathpool.varysDeath = "";
    			app-deathpool.brienneDeath = "";
    			app-deathpool.podrickDeath = "";
    			app-deathpool.davosDeath = "";
    			app-deathpool.bronnDeath = "";
    			app-deathpool.gendryDeath = "";
    			alert("Thank you for submitting your details.")
    		});
    	}
    }
}

})

new Vue({
	el: '#app_deathpool',
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
    			name: app_deathpool.name,
    			code: app_deathpool.code,
    			jonDeath: app_deathpool.jonDeath,
    			sansaDeath: app_deathpool.sansaDeath,
    			aryaDeath: app_deathpool.aryaDeath,
    			branDeath: app_deathpool.branDeath,
    			jaimeDeath: app_deathpool.jaimeDeath, 
    			cerseiDeath: app_deathpool.cerseiDeath,
    			tyrionDeath: app_deathpool.tyrionDeath,
    			mountainDeath: app_deathpool.mountainDeath,
    			daenerysDeath: app_deathpool.daenerysDeath,
    			missandeiDeath: app_deathpool.missandeiDeath,
    			greywormDeath: app_deathpool.greywormDeath,
    			euronDeath: app_deathpool.euronDeath,
    			yaraDeath: app_deathpool.yaraDeath,
    			theonDeath: app_deathpool.theonDeath,
    			jorahDeath: app_deathpool.jorahDeath,
    			melisandreDeath: app_deathpool.melisandreDeath,
    			samwellDeath: app_deathpool.samwellDeath,
    			gillyDeath: app_deathpool.gillyDeath,
    			samDeath: app_deathpool.samDeath,
    			bericDeath: app_deathpool.bericDeath,
    			houndDeath: app_deathpool.houndDeath,
    			varysDeath: app_deathpool.varysDeath,
    			brienneDeath: app_deathpool.brienneDeath,
    			podrickDeath: app_deathpool.podrickDeath,
    			davosDeath: app_deathpool.davosDeath,
    			bronnDeath: app_deathpool.bronnDeath,
    			gendryDeath: app_deathpool.gendryDeath
    		};
    		Sheetsu.write("https://sheetsu.com/apis/v1.0su/42edd873d526", deathpoolData, {}).then(function (data) {
    			console.log(data);
    			app_deathpool.deathpool.push = data;
    			app_deathpool.jonDeath = "";
    			app_deathpool.sansaDeath = "";
    			app_deathpool.aryaDeath = "";
    			app_deathpool.branDeath = "";
    			app_deathpool.jaimeDeath = "";
    			app_deathpool.cerseiDeath = "";
    			app_deathpool.tyrionDeath = "";
    			app_deathpool.mountainDeath = "";
    			app_deathpool.daenerysDeath = "";
    			app_deathpool.missandeiDeath = "";
    			app_deathpool.greywormDeath = "";
    			app_deathpool.euronDeath = "";
    			app_deathpool.yaraDeath = "";
    			app_deathpool.theonDeath = "";
    			app_deathpool.jorahDeath = "";
    			app_deathpool.melisandreDeath = "";
    			app_deathpool.samwellDeath = "";
    			app_deathpool.gillyDeath = "";
    			app_deathpool.samDeath = "";
    			app_deathpool.bericDeath = "";
    			app_deathpool.houndDeath = "";
    			app_deathpool.varysDeath = "";
    			app_deathpool.brienneDeath = "";
    			app_deathpool.podrickDeath = "";
    			app_deathpool.davosDeath = "";
    			app_deathpool.bronnDeath = "";
    			app_deathpool.gendryDeath = "";
    			alert("Thank you for submitting your details.")
    		});
    	}
    }
}

})

 Vue.component('death', {
 	template:'<p class="tp">They will {{ deathChoice }}. <button class="button" v-on:click="changeDeath">Click to Change</button></p>',
 	data: function(){
 		return {
 			deathChoice: 'live'
 		}
 	},
 	methods: {
 		changeDeath: function(){
 			this.deathChoice = 'die'
 		}
 	}
 });

 new Vue({
	el: '#app-jon',
	data: {
		name: 'Jon Snow', avatar: 'https://tom.imgix.net/jonsnow.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

  new Vue({
	el: '#app-sansa',
	data: {
		name: 'Sansa Stark', avatar: 'https://tom.imgix.net/sansastark.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-arya',
	data: {
		name: 'Arya Stark', avatar: 'https://tom.imgix.net/aryastark.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

        new Vue({
	el: '#app-bran',
	data: {
		name: 'Bran Stark', avatar: 'https://tom.imgix.net/branstark.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

     new Vue({
	el: '#app-jaime',
	data: {
		name: 'Jaime Lannister', avatar: 'https://tom.imgix.net/jaimelannister.png?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

  new Vue({
	el: '#app-cersei',
	data: {
		name: 'Cersei Lannister', avatar: 'https://tom.imgix.net/cersei.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-tyrion',
	data: {
		name: 'Tyrion Lannister', avatar: 'https://tom.imgix.net/tyrionlannister.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-mountain',
	data: {
		name: 'The Mountain', avatar: 'https://tom.imgix.net/mountain.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-daenerys',
	data: {
		name: 'Daenerys Targaryen', avatar: 'https://tom.imgix.net/daenerystargaryen.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-missandei',
	data: {
		name: 'Missandei', avatar: 'https://tom.imgix.net/missandei.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-greyworm',
	data: {
		name: 'Grey Worm', avatar: 'https://tom.imgix.net/greyworm.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-euron',
	data: {
		name: 'Euron Greyjoy', avatar: 'https://tom.imgix.net/eurongreyjoy.png?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-yara',
	data: {
		name: 'Yara Greyjoy', avatar: 'https://tom.imgix.net/yaragreyjoy.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-theon',
	data: {
		name: 'Theon Greyjoy', avatar: 'https://tom.imgix.net/theongreyjoy.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-jorah',
	data: {
		name: 'Jorah Mormont', avatar: 'https://tom.imgix.net/jorahmormont.png?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-melisandre',
	data: {
		name: 'Melisandre', avatar: 'https://tom.imgix.net/melisandre.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-samwell',
	data: {
		name: 'Samwell Tarly', avatar: 'https://tom.imgix.net/samwelltarly.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-gilly',
	data: {
		name: 'Gilly', avatar: 'https://tom.imgix.net/gilly.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-sam',
	data: {
		name: 'Little Sam', avatar: 'https://tom.imgix.net/sam.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-beric',
	data: {
		name: 'Beric Dondarrion', avatar: 'https://tom.imgix.net/bericdondarrion.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-hound',
	data: {
		name: 'The Hound', avatar: 'https://tom.imgix.net/sandorclegane.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-gendri',
	data: {
		name: 'Gendry', avatar: 'https://tom.imgix.net/gendry.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-varys',
	data: {
		name: 'Varys', avatar: 'https://tom.imgix.net/varys.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-brienne',
	data: {
		name: 'Brienne of Tarth', avatar: 'https://tom.imgix.net/briennetarth.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-davos',
	data: {
		name: 'Davos Seaworth', avatar: 'https://tom.imgix.net/davosseaworth.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-bronn',
	data: {
		name: 'Bronn', avatar: 'https://tom.imgix.net/bronn.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

    new Vue({
	el: '#app-podrick',
	data: {
		name: 'Podrick Payne', avatar: 'https://tom.imgix.net/podrickpayne.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

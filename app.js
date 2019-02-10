 Vue.component('death', {
 	template: '<p class="tp">They will {{ deathChoice }}. <button class="button" v-on:click="changeDeath">Click for Death</button></p>',
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
		name: 'Arya Stark', avatar: 'https://tom.imgix.net/aryastark.jpg?w=300&h=33&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

        new Vue({
	el: '#app-bran',
	data: {
		name: 'Bran Stark', avatar: 'https://tom.imgix.net/branstark.jpg?w=300&h=33&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

     new Vue({
	el: '#app-jaime',
	data: {
		name: 'Jaime Lannister', avatar: 'https://tom.imgix.net/jaimelannister.png?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
	}
});

  new Vue({
	el: '#app-cersie',
	data: {
		name: 'Cersie Lannister', avatar: 'https://tom.imgix.net/cersielannister.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse'
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

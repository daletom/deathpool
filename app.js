 Vue.component('death', {
 	template: '<p>They will {{ deathChoice }}. <button v-on:click="changeDeath">Live or Die?</button></p>',
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
		name: 'Jon Snow', avatar: 'https:tom.imgix.net/jonsnow.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress'
	}
});

  new Vue({
	el: '#app-sansa',
	data: {
		name: 'Sansa Stark'
	}
});

    new Vue({
	el: '#app-aya',
	data: {
		name: 'Aya Stark'
	}
});

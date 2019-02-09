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
		name: 'Jon Snow', avatar: 'https://tom.imgix.net/jonsnow.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress'
	}
});

  new Vue({
	el: '#app-sansa',
	data: {
		name: 'Sansa Stark', avatar: 'https://tom.imgix.net/sansastark.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress'
	}
});

    new Vue({
	el: '#app-aya',
	data: {
		name: 'Aya Stark'
	}
});

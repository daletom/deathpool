 Vue.component('death', {
 	template: '<p>{{ name }} will {{ deathChoice }}. <button v-on:click="changeDeath">Live or Die?</button></p>',
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
		name: 'Jon Snow'
	}
});

  new Vue({
	el: '#app-sansa',
	data: {
		name: 'Sansa Stark'
	}
});
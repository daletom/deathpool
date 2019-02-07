 Vue.component('death', {
 	template: '<p>This person will {{ deathChoice }}. <button v-on:click="changeDeath">Live or Die?</button></p>',
 	data: function(){
 		return {
 			deathChoice: 'live'
 		}
 	},
 	methods: {
 		changedeath: function(){
 			this.deathChoice = 'dead'
 		}
 	}
 });

 new Vue({
	el: '#app-jon'
});

  new Vue({
	el: '#app-sansa'
});
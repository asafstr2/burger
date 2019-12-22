


const Anim = new Vue({
	el: '#app',
	data: {
		complete: false,
		toppings: [],
		checked: []
	},

	methods: {
		bounceStart(el) {
			el.style.transform = 'scaleY(0)';
			el.style.height = '0';
		},
		bounceEnter(el, done) {
			let bounce = anime.timeline({
				complete: function() {
					done();
				}
			});
			bounce
				.add({
					targets: el,
					height: parseInt(height)  + 20,
					duration: 800,
				
					elasticity: 100
				})
				.add({
					targets: el,
					scaleY: 1,
					delay: 100
				})
				.add({
					targets: el,
					height: height,
					duration: 600,
					elasticity: 100
				});
		},
		bounceLeave(el, done) {
			let bounce = anime.timeline({
				complete: function() {
					done();
				}
			});
			bounce
				.add({
					targets: el,
					translateY: 10,
					opacity: 0,
					height: 0,
					duration: 300,
					easing: 'linear',
					elasticity: 100
				})

		},
		completeOrder() {
			this.complete = true;

		},




		
	}
});


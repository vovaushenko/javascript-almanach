const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

const isHabitable = (planet) =>
	planet['koi_disposition'] === 'CONFIRMED' &&
	planet['koi_insol'] > 0.36 &&
	planet['koi_insol'] < 1.11 &&
	planet['koi_prad'] < 1.6;

fs.createReadStream('kepler_data.csv')
	.pipe(
		parse({
			comment: '#',
			columns: true,
		})
	)
	.on('data', (planet) => {
		if (isHabitable(planet)) habitablePlanets.push(planet);
	})
	.on('end', () => {
		console.log({
			habitablePlanets: habitablePlanets.map((planet) => planet['kepler_name']),
		});
		console.log(
			`End Parsing. Found ${habitablePlanets.length} habitable planets!`
		);
	})
	.on('error', (err) => {
		console.log(err);
	});

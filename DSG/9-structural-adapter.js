/**
 * @ADAPTER
 *
 * * Wraps initial code and make adaptable and usable without any structural changes to the source code
 *
 * */

class Engine2 {
	simpleIterface() {
		console.log('Engine 2.0 - trrr');
	}
}

class EngineV8 {
	complexIterface() {
		console.log('Engine V8! - wrrrr');
	}
}

class EngineV8Adapter {
	constructor(engine) {
		this.engine = engine;
	}
	simpleIterface() {
		this.engine.complexIterface();
	}
}

class Auto {
	startEngine(engine) {
		engine.simpleIterface();
	}
}

const myCar = new Auto();
const oldEngine = new Engine2();

myCar.startEngine(oldEngine);

const betterCar = new Auto();
const engineAdapter = new EngineV8Adapter(new EngineV8());
betterCar.startEngine(engineAdapter);

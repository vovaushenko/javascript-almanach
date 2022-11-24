type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(c1: ThreeDCoordinate, c2: ThreeDCoordinate) {
	return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

const simpleState = (
	initialState: number
): [() => number, (v: number) => void] => {
	let stateValue = initialState;
	return [
		() => stateValue,
		(v: number) => {
			stateValue = v;
		},
	];
};

console.log(add3DCoordinate([1, 2, 3], [4, 5, 6]));

const [val, setVal] = simpleState(5);
setVal(15);
console.log({ val: val() });

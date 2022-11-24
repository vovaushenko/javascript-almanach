function useState<T>(initialState: T): [() => T, (v: T) => void] {
	let initState = initialState;
	return [
		() => initState,
		(v: T) => {
			initState = v;
		},
	];
}

const [val, setVal] = useState<number | null>(null);

const [name, setName] = useState<string>('John');
console.log({ name: name(), val: val() });

interface Rank<RankItem> {
	item: RankItem;
	rank: number;
}

function ranker<RankItem>(
	items: RankItem[],
	rank: (v: RankItem) => number
): RankItem[] {
	const ranks: Rank<RankItem>[] = items.map((item) => ({
		item,
		rank: rank(item),
	}));

	ranks.sort((a, b) => a.rank - b.rank);

	return ranks.map((rank) => rank.item);
}

interface Pokemon {
	name: string;
	hp: number;
}

const pokemons: Pokemon[] = [
	{ name: 'Pikachu', hp: 207 },
	{ name: 'Charmander', hp: 112 },
	{ name: 'Squirtle', hp: 90 },
	{ name: 'Bulbasaur', hp: 200 },
	{ name: 'Pidgey', hp: 50 },
];

console.log(ranker(pokemons, ({ hp }) => hp));

export {};

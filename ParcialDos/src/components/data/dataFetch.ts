export const getCataas = async () => {
	try {
		const dataCataas = await fetch('https://cataas.com/cat/says/').then((res) => res.json());
		console.log(dataCataas);
		return dataCataas;
	} catch (error) {
		console.log('error', error);
		return error;
	}
};

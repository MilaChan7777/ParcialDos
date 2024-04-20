export const getCats = async (id: any) => {
	try {
		const dataCats = await fetch(`https://catfact.ninja/fact`).then((res) => res.json());
		console.log(dataCats);
		return dataCats;
	} catch (error) {
		console.log('error', error);
		return error;
	}
};

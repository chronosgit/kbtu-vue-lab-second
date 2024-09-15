const getReadableDate = (date) => {
	if (!date || typeof date.getFullYear !== 'function') {
		throw Error('Date must be valid');
	}

	let dateDay = date.getDate().toString();
	let dateMonth = (date.getMonth() + 1).toString();

	if (dateDay.length === 1) dateDay = '0' + dateDay;
	if (dateMonth.length === 1) dateMonth = '0' + dateMonth;

	const dateYear = date.getFullYear();

	const readableDate = `${dateDay}.${dateMonth}.${dateYear}`;

	return readableDate;
};

export default getReadableDate;

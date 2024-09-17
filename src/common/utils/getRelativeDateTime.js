const getRelativeDateTime = (dateTime) => {
	if (!dateTime || dateTime.getDay === 'undefined') {
		throw Error('DateTime must be valid JS Date object');
	}

	const now = new Date();

	const hoursString = dateTime.toTimeString().slice(0, 5);
	const daysDiff = Math.floor((now - dateTime) / (1000 * 60 * 60 * 24));

	let relativeDaysInfo = '';

	switch (daysDiff) {
		case 0:
			relativeDaysInfo = 'Today';
			break;
		case 1:
			relativeDaysInfo = 'Yesterday';
		default:
			relativeDaysInfo = `${daysDiff} days ago`;
	}

	return relativeDaysInfo + ', ' + hoursString;
};

export default getRelativeDateTime;

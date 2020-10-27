function checkPage(input) {
	console.log(input)
    if (input < 605 && input > 0) { // ensures possible page
        if (input % 2 === 0) { // even page can be set directly
			return input
		} else { // odd page processed to facing even page
			return input - -1
		}
	} else {
        //prompt user that page is outside the Quran
	}
}
export default checkPage
function addCommas(num) {
	if (num < 1000 && num > -1000) {
		return num.toString();
	}
	let strNum = num.toString();
	let strNumArr = strNum.split("");
	let remainderStr = createRemainder(strNumArr);
	strNumArr.length = strNumArr.length - remainderStr.length;
	findCommaSpots(strNumArr);
	strNum = strNumArr.join("") + remainderStr;
	return strNum;
}

function createRemainder(strNumArr) {
	if (strNumArr.includes(".")) {
		const dotIdx = strNumArr.indexOf(".");
		let remainderStr = strNumArr.slice(dotIdx, strNumArr.length).join("");
		return remainderStr;
	} else {
		return "";
	}
}

function findCommaSpots(strNumArr) {
	for (let i = strNumArr.length - 1; i >= 0; i--) {
		if (
			(strNumArr.length - i) % 3 === 0 &&
			i !== 0 &&
			strNumArr[i - 1] !== "-"
		) {
			strNumArr[i] = `,${strNumArr[i]}`;
		}
	}
}

module.exports = addCommas;

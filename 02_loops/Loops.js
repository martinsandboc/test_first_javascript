function repeat(str, num) {
	var output = "";
	while (num > 0) {
		output += str;
		num--;
	}
	return output;
}

function join (arr, delim) {
	var output = "";
	var arrLength = arr.length;
	for (i=0; i < arrLength; i++) {
		output += arr[i];
		if ((delim != undefined) && (i != (arrLength -1))) {
			output += delim;
		}
	}
	return output;
}

function sum (arrSum) {
	var sumTotal = 0;
	for (i=0; i < arrSum.length; i++) {
		sumTotal += arrSum[i];
	}
	return sumTotal;
}

function paramify (hash) {
	var output = [];
	for (var key in hash) {
		if(hash.hasOwnProperty(key)) {
			output.push(key + "=" + hash[key]);
		}
	}
	output.sort();
	stringOutput = output.join("&");
	return stringOutput;
}

function factorial (num) {
	if (num == 0 || num == 1) {
		return 1;
	}
	return num * (factorial(num-1));
}

function concat_string () {
	var args = Array.prototype.slice.call(arguments);
	return args.join("");
}
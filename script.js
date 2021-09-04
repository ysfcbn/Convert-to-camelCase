/*
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
document.body.append(document.createElement("button"));
const btn = document.querySelector("button");
const btn1 = document.getElementsByTagName("button")[1];
btn.textContent = "Convert";
btn1.textContent = "Clear";

btn.addEventListener("click", function () {
	let text = document.querySelector("textarea").value;
	const textArr = text.split("\n");
	const resultArr = [];
	const valueArr = [];
	for (const a of textArr) {
		const textArr2 = a.toLowerCase().split("_");
		const result =
			textArr2[0] +
			textArr2[1].replace(textArr2[1][0], textArr2[1][0].toUpperCase());
		resultArr.push(result);
	}
	console.log(
		(document.querySelector("textarea").value = text.replace(
			text,
			resultArr.join("\n")
		))
	);
	for (let i = 0; i < resultArr.length; i++) {
		if (
			document.querySelector("textarea").value.split("\n")[i] === resultArr[i]
		) {
			const value = document
				.querySelector("textarea")
				.value.split("\n")
				[i].padEnd(20, " ")
				.padEnd(i + 21, "✅");
			valueArr.push(value);
		} else console.log("false");
	}
	console.log(valueArr.join("\n"));
	document.querySelector("textarea").value = valueArr.join("\n");
});
btn1.addEventListener("click", function () {
	document.querySelector("textarea").value = "";
});

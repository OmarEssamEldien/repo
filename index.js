console.log('Time', new Date()+"")

console.log('My Name is Omar')

const calc = (date) => {
	let dob = new Date(date)
	let now = Date.now()
	let age = now - dob;
		age = age/1000/3600/24/365.25
	let years = Math.floor(age)
	let months = (age-years)*12
	let days = (months-Math.floor(months))*30
		months = Math.floor(months)
		days = Math.round(days)
	return years+" Years, "+months+" Months, "+days+" Days"
}

console.log('I Have '+calc("2001-02-07"))
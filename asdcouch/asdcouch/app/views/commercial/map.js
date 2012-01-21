function (doc) {
	if (doc._id.substr(0,4) === "com:") {
		emit(doc._id.substr(4), {
			"Account Type": doc.accType
			"First Name": doc.fname
			"Last Name": doc.lname
			"Street": doc.street
			"City": doc.city
			"State": doc.state
			"Zip": doc.zip
			"Phone": doc.phone
			"Email": doc.email);
	}
};
// Takeover

function (doc) {
	if (doc._id.substr(0,4) === "tak:") {
		emit(doc._id.substr(4), {
			"accType": doc.accType,
			"fname": doc.fname,
			"lname": doc.lname,
			"street": doc.street,
			"city": doc.city,
			"state": doc.state,
			"zip": doc.zip,
			"phone": doc.phone,
			"email": doc.email
		});
	}
};
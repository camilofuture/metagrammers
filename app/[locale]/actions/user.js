"use server";

export async function getUserByID(uid) {
	try {
		// Crear la clave de proyección dinámicamente

		// Crear el objeto de proyección
		const projection = {
			name: 1,
		};

		// ==================================================================

		const requestBody = JSON.stringify({
			collection: "users",
			database: "MGS",
			dataSource: "Cluster0",
			projection,
			filter: { id: uid },
		});

		const res = await fetch(`${process.env.NEXT_PUBLIC_MONGODB_API_URI}findOne`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				// Reemplaza 'YOUR_API_KEY' con tu API key real
				"api-key": process.env.NEXT_PUBLIC_MONGODB_API_KEY,
			},
			body: requestBody, // Convierte los datos del cuerpo a una cadena JSON
		});

		const jsonres = await res.json();

		// ==================================================================

		return jsonres.document;
	} catch (error) {
		console.log(error);
	}
}

export async function createUser({ uid, name, tag, email, password }) {
	try {
		// Crear el objeto de usuario
		const user = {
			_id: uid,
			name,
			tag,
			email,
			password,
			date: new Date(),
		};

		// Crear el objeto de solicitud
		const requestBody = JSON.stringify({
			collection: "users",
			database: "MGS",
			dataSource: "Cluster0",
			document: user,
		});

		// Realizar la solicitud para insertar el usuario
		const res = await fetch(`${process.env.NEXT_PUBLIC_MONGODB_API_URI}insertOne`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"api-key": process.env.NEXT_PUBLIC_MONGODB_API_KEY, // Reemplaza 'YOUR_API_KEY' con tu API key real
			},
			body: requestBody, // Convierte los datos del cuerpo a una cadena JSON
		});

		const jsonres = await res.json();

		// ==================================================================
		// Devolver la respuesta del servidor
		return jsonres;
	} catch (error) {
		console.log(error);
	}
}

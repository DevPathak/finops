import { Router } from "express";
import { inputSigninObject } from "../../../../common/dist/index";
import { client } from "../connection";
import Jwt from "jsonwebtoken";

export const Routes = Router();
console.log("inside");

Routes.post("/login", async (req, res) => {
	console.log("hahaha");
	const body = await req.body;
	const { success } = inputSigninObject.safeParse(body);

	if (!success) {
		res.status(411);
		return res.json({
			message: "Invalid Inputs",
		});
	}

	try {
		await client.connect();
		const query =
			"select * from saarathi.tb_sr_user_mst where email_id = $1 and mpin = $2";
		const value = [body.email, body.password];
		const checkUserExist = await client.query(query, value);

		if (checkUserExist.rows.length > 0) {
			const userEmail = checkUserExist.rows[0].email;
			const jwtSecretKey = process.env.JWT_SECRET_KEY || "";
			const token = Jwt.sign(userEmail, jwtSecretKey);
			res.json({
				message: "Logged in Succesfully",
				token: token,
			});
		} else {
			res.json({
				message: "Invalid email or password",
			});
		}
	} catch (err) {
		console.log("Error occured while logging in: ", err);
		throw err;
	} finally {
		await client.end();
	}
});

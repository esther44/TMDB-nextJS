import prisma from "@/utils/prisma";
import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
	try {
		const body = await request.json();

		console.log("Request body:", body);

		const user = await prisma.user.findFirst({
			where: {
				email: body.email,
			},
		});

		console.log("Found user:", user);

		if (user && (await bcrypt.compare(body.password, user.password))) {
			const { password, ...rest } = user;
			return NextResponse.json(rest);
		}

		return NextResponse.json(null);
	} catch (error) {
		console.error("Error during login:", error);
		return NextResponse.json({ error: "An error occurred" });
	}
}

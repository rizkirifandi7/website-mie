"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const SignIn = () => {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<form>
				<Card className="w-[500px] h-auto">
					<CardHeader className="space-y-1">
						<CardTitle className="text-3xl font-bold">Sign In</CardTitle>
						<CardDescription>
							Enter your details to sign in to your account
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="identifier"
								name="identifier"
								type="text"
								placeholder="username or email"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								name="password"
								type="password"
								placeholder="password"
							/>
						</div>
					</CardContent>
					<CardFooter className="flex flex-col">
						<Button className="w-full">Sign In</Button>
					</CardFooter>
				</Card>
				<div className="mt-4 text-center text-sm">
					Dont have an account?
					<Link className="underline ml-2" href="signup">
						Sign Up
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignIn;

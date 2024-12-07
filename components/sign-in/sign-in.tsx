"use client";

/* import { Eye } from 'lucide-react'; */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
/* import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; */
import { signIn } from "next-auth/react";

export function SignInForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Enter your email and password to sign in.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <Button
            className="w-full"
            type="button"
            onClick={() => signIn("google", { redirectTo: "/dashboard" })}
          >
            Sign in with Google
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account? Sign up
        </p>
      </CardFooter>
    </Card>
  );
}

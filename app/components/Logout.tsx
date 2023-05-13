"use client";
import { signOut } from "next-auth/react";

export default function Logout() {
    return (
        <button className="h-10 w-full bg-white" onClick={() => signOut({ callbackUrl: "/auth" })}>
            Logout
        </button>
    );
}

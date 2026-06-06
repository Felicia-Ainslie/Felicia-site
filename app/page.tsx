// Redirects / page to Home page. 
// Prevents 404 error when users navigate to root URL.

import { redirect } from "next/navigation";

export default function Page() {
    redirect("/home");
}
import { z } from "zod/v4";
import { redirect } from "react-router";

const contactSchema = z.object({
    email: z.email(),
    password: z.string().min(6, "Minimum of 6 characters required"),
})

export const handleLogin = async ({ request }) => {

    console.log("handleLogin called");
    console.log("request", request);

    const formData = await request.formData()
    const data = Object.fromEntries(formData.entries())

    const result = contactSchema.safeParse(data)
    if (!result.success) {
        const errors = z.treeifyError(result.error)
        return errors.properties
    }

    console.log("Parsed data:", result.data);
    const response = await fetch("https://hifi-api-pzft.onrender.com/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(result.data)
    })

    if (!response.ok) {
        console.error("Login failed:", response.statusText);
        throw new Error("Could not save data")
    }

    return redirect("/")

}
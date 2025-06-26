import { z } from "zod/v4";
import { redirect } from "react-router";
 
const contactSchema = z.object({
    email: z.email(),
    fullname: z.string().min(2, "Name is required"),
    password: z.string().min(6, "Minimum of 6 characters required"),
    
    address: z.string().min(1, "Address is required"),
    address2: z.string().optional(),
    zipcode: z.string().min(1, "Zip-code is required"),
    city: z.string().min(1, "City is required"),
    country: z.string().optional(),
    phone: z.string().optional(),
    repeatpassword: z.string().min(1, "Confirm password is required"),
}).refine((data) => data.repeatpassword === data.password, {
   message: "Passwords do not match",
    path: ["confirm"],  // fejlbeskeden kobles til confirm-feltet
});
 
export const handleSignUp = async ({ request }) => {
 console.log("handleSignUp called");
     console.log("request", request);
    const formData = await request.formData()
    const data = Object.fromEntries(formData.entries())
 
    const result = contactSchema.safeParse(data)
    if (!result.success) {
        const errors = z.treeifyError(result.error)
        return errors.properties
    }
    delete result.data.repeatpassword; // Remove repeat password from form data
 
    const response = await fetch("https://hifi-api-pzft.onrender.com/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(result.data)
    })
 
    if (!response.ok) {
        throw new Error("Could not save data")
    }
 
    return redirect("/home")
 
}
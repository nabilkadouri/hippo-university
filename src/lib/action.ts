'use server'

import { register } from "@/services/authService"
import { FormState, RegistrationData } from "@/types"
import { redirect } from "next/navigation";

export async function HandleRegistration(_prevState: FormState, formData: FormData): Promise<FormState> {
    try {
        const classroomId = formData.get('classroom') as string;
        const classroomIri = `/api/classrooms/${classroomId}`;

        const data: RegistrationData = {
            name: formData.get('name') as string,
            firstname: formData.get('firstname') as string,
            registeredAt: new Date().toISOString(),
            email: formData.get('email') as string,
            classroom: classroomIri
        };
        
        await register(data); 
       
    } catch(error) {
        console.error("Echec de l'inscription", error);
        return { message: "Une erreur est survenue lors de l'inscription.", success: false };
    }
    redirect('/');
}
import { RegistrationData, RegistrationResponse } from "@/types";
import axios from "axios";

const API_BASE_URL = 'http://localhost/api/students';

export async function register(data: RegistrationData): Promise<RegistrationResponse> {
    try {
        const res = await axios.post<RegistrationResponse>(`${API_BASE_URL}`, data)
        return res.data;

    } catch(error) {
        if (axios.isAxiosError(error) && error.response) {
            console.error("Réponse d'erreur du serveur :", error.response.data);
            throw new Error(error.response.data.message || "Erreur inconnue du serveur.");
        }
        throw error;
    }
} 
import { Classroom } from "@/types";
import axios from "axios";


const API_BASE_URL = 'http://localhost/api/classrooms';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export async function getAllCLassrooms(): Promise<Classroom[] | null > {
    const maxRetries = 3;
    const baseDelay = 1000;

    for (let essay = 0; essay < maxRetries; essay++) {
        try {
            const response = await axios.get(`${API_BASE_URL}`);
            return response.data.member;

        } catch (error) {
            console.error(`Tentative ${essay + 1} échouée.`, error);
            console.error("Erreur lors du chargement des formations")
            
            if (axios.isAxiosError(error) && error.response?.status === 503 && essay < maxRetries - 1) {
                const retryDelay = baseDelay * Math.pow(2, essay);
                console.log(`Nouvel essai dans ${retryDelay / 1000} secondes...`);
                await delay(retryDelay);
            } else {
                return null;
            }
        }
    }
    return null;
}

export async function getClassroomById(id: string): Promise<Classroom | null> {
    const maxRetries = 3;
    const baseDelay = 1000;

    for(let essay = 0; essay < maxRetries; essay ++) {
        try {
            const response = await axios.get(`${API_BASE_URL}/${id}`);
            return response.data;
            
        } catch (error) {
            console.error(`Tentative ${essay + 1} échouée.`, error);
            console.error(`Erreur lors du chargement de la formation ${id}`);
            

            if(axios.isAxiosError(error) && error.response?.status === 503 && essay < maxRetries - 1) {
                const retryDelay = baseDelay * Math.pow(2, essay);
                console.log(`Nouvel essai dans ${retryDelay / 1000} secondes...`);
                await delay(retryDelay);
            }else {
                return null;
            }
        }
    }
    return null;
}
    

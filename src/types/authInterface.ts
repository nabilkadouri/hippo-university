export interface RegistrationData{
    name: string,
    firstname: string,
    registeredAt: string,
    email: string,
    classroom: string
}

export interface RegistrationResponse {
    name: string;
    firstname: string;
    registeredAt: string; 
    email: string;
    classroom: string;
  }

export interface FormState {
    message: string | null;
    success: boolean;
  }
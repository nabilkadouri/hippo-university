'use client'

import { HandleRegistration } from "@/lib/action";
import { FormState } from "@/types";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";


interface RegisterFormProps {
    classroomId: string;
  }

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
    <button
    type="submit"
    disabled={pending}
    className="bg-[#579ACC] w-auto px-4 py-3 text-white transition hover:bg-blue-900 disabled:bg-gray-400 rounded font-semibold flex m-auto"
    >
        {pending ? 'Inscription en cours' : 'S\inscrire'}
    </button>
    )
}

const initialState: FormState = {
    message: null,
    success: false
};

export default function RegisterForm({ classroomId }: RegisterFormProps) {
    const [state, formAction] = useActionState(HandleRegistration, initialState);

    return (
        <form action={formAction} className="space-y-4 ">
            <div className="flex flex-col">
                <label htmlFor="name">Nom</label>
                <input className="border-2 border-gray-100 px-1 py-1 rounded text-gray-500" type="text" id="name" name="name" required />
            </div>
            <div className="flex flex-col" >
                <label htmlFor="firstname">Prénom</label>
                <input className="border-2 border-gray-100 px-1 py-1 rounded text-gray-500" type="text" id="firstname" name="firstname" required />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input className="border-2 border-gray-100 px-1 py-1 rounded text-gray-500" type="email" id="email" name="email" required />
            </div>
            <input type="hidden" name="classroom" value={classroomId} />
            <input type="hidden" name="registeredAt" value={new Date().toISOString()} />

            {state.message && (
                <p className="text-red-500 font-bold">{state.message}</p>
            )}

            <SubmitButton />
        </form>
    );
}
'use client'

import RegisterForm  from "@/components/Forms/RegisterForm";
import { useParams } from "next/navigation";

export default function RegisterPage() {
  
  const params = useParams();
  const classroomId = params.id as string

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
    <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
      <h1 className="mb-6 text-center text-blue-700 text-3xl font-bold">
        Inscription
      </h1>
      <RegisterForm classroomId={classroomId}/>
    </div>
  </div>
  )
}

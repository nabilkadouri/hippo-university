import ClassroomDetails from "@/components/ClassroomDetails";
import { getClassroomById } from "@/services/classroomsService";
import { notFound } from "next/navigation";

// Fonction pour formater la date
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("fr-FR", options);
};

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const classroom = await getClassroomById(id);
  console.log("result :", classroom);

  if (!classroom) {
    notFound();
  }

  return (
    <div className="container mx-auto p-6 lg:p-12">
      <ClassroomDetails classroom={classroom} formatDate={formatDate}/>
    </div>
  );
}

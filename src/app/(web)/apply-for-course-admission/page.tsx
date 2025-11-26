import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <>
      <main className="container-blog my-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Admission Information
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join Churchill’s vibrant community! Discover how to apply for our
            courses as a domestic or international student.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              Onshore International Student and Domestic Student Admission
              Information
            </h2>
            <Link
              className="w-fit block"
              href={"/onshore-international-student-admission-information"}
            >
              <Button>View Page</Button>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              Offshore International Student Admission Information
            </h2>

            <Link
              className="w-fit block"
              href={"/offshore-international-student-information"}
            >
              <Button>View Page</Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;

import FadeUpAnimation from "@/animations/FadeUp";
import ContainerLayout from "@/layouts/container-layout";
const satisfactionData = [
  {
    title:
      "Overall, I was satisfied with the way this subject was taught (with the Lectures / my Lecturer).",
    rating: "4.2",
  },
  {
    title:
      "Overall, I was satisfied with my subjects (content, assessments, learning activities /materials).",
    rating: "4.1",
  },
  {
    title:
      "Overall, I was satisfied with my Tutor (was enthusiastic, used effective teaching techniques, created a positive learning environment)",
    rating: "4.3",
  },
  {
    title:
      "Overall, I was satisfied with my educational experience based on the subjects I studied this semester*",
    rating: "4.2",
  },
];

const StudentSatisfactionSection = () => {
  return (
    <ContainerLayout className="space-y-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-2 text-[36px] font-bold text-[#2C2B4B]">
          Student Satisfaction
        </h2>
        <p className="text-sm text-[#2C2B4B]">
          Another reason to study at Churchill is our high level of student
          satisfaction, as rated by our students. In semester 2/2025 our
          students agreed and strongly agreed that*:
        </p>
      </div>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {satisfactionData.map((item, index) => (
          <FadeUpAnimation key={index} delay={index * 0.1}>
            <div className="h-full rounded-lg border border-gray-200 bg-white p-4 transition-shadow duration-300 hover:shadow-sm">
              <p className="mb-3 text-sm text-[#2C2B4B]">{item.title}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-primary-orange text-[32px] font-bold">
                  {item.rating}
                </span>
                <span className="text-[18px] text-gray-600">/5.0</span>
              </div>
            </div>
          </FadeUpAnimation>
        ))}
      </section>

      <div className="text-center text-xs text-gray-600 italic">
        *1= Strongly Disagree; 2= Disagree; 3= Unsure; 4 = Agree; 5 = Strongly
        Agree
      </div>
    </ContainerLayout>
  );
};

export default StudentSatisfactionSection;

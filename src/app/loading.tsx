import ContainerLayout from "@/layouts/container-layout";
import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="h-screen">
      <ContainerLayout>
        <div className="bg-alt-background mt-8 grid h-72 place-content-center rounded-lg text-center">
          <span className="animate-spin">
            <Loader size={32} className="text-primary-orange" />
          </span>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Loading;

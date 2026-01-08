import { FaArrowRight } from "react-icons/fa";
import Button from "../button";

interface props {
  title: string;
  description?: string;
  BtnALink?: string;
  BtnAText?: string;
  BtnBLink?: string;
  BtnBText?: string;
  children?: string;
}

const PatternBannerCard = ({
  title,
  description,
  BtnALink,
  BtnAText,
  BtnBLink,
  BtnBText,
  children,
}: props) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, white, #00000000, #00000000), url('/assets/hero-vector.svg')`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex min-h-[22vh] flex-col items-center justify-center"
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-3xl font-bold text-[#eb9320] capitalize md:text-5xl">
            {title}
          </h2>

          {description && (
            <p className="mx-auto w-fit text-center text-sm">{description}</p>
          )}

          {(BtnAText || BtnBText) && (
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              {BtnAText && (
                <a href={BtnALink}>
                  <Button
                    btnName={BtnAText}
                    icon={<FaArrowRight />}
                    styleA={"flex items-center gap-1"}
                  />
                </a>
              )}
              {BtnBText && (
                <a href={BtnBLink}>
                  <Button
                    btnName={BtnBText}
                    icon={<FaArrowRight />}
                    styleA={"flex items-center gap-1"}
                  />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default PatternBannerCard;

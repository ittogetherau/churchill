import Link from "next/link";
import Image from "next/image";

const ContactUsCard = ({
  title,
  description,
  iconUrl,
  redirect,
  socialLinks,
}) => {
  return (
    <>
      <div className="bg-[#E9E9E9] h-full p-4 md:p-6 rounded-md flex flex-col gap-4 hover:outline hover:outline-neutral-900/20">
        <Image
          src={iconUrl}
          width={100}
          height={100}
          alt={`Icon for ${description} image`}
        />
        <p className="text-2xl font-bold">{title}</p>
        {redirect ? (
          <span className="font-semibold underline">
            <Link target="_blank" href={redirect}>
              {description}
            </Link>
          </span>
        ) : (
          <p>{description}</p>
        )}

        {socialLinks && (
          <div className="flex gap-3 flex-wrap">
            {socialLinks?.map((item, index) => (
              <Link target="_blank" key={index} href={item.url}>
                <div className=" flex flex-col items-center justify-center p-2 rounded-xl hover:bg-[#E5962310]">
                  <p className="text-4xl text-[#E59623]">{item.icon}</p>
                  <p>{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default ContactUsCard;

import Link from "next/link";
import React from "react";
import Button from "@/components/button";
const SplitHero = ({ image, description, title, cta }) => {
    return (
        <section className="container mx-auto flex flex-col md:flex-row items-center justify-between mb-20 p-5">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <img src={image} alt="Hero" className="w-full h-auto rounded-xl" />
            </div>

            <div className="w-full md:w-1/2 md:pl-10">
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <div className="text-gray-800 prose prose-lg mb-5" dangerouslySetInnerHTML={{ __html: description }} />

                {cta && (
                    <Link href={cta.href} target={cta.external ? "_blank" : "_self"}>
                        <Button
                            btnName={cta.text}
                            icon={cta.icon}
                            styleA={"flex items-center gap-4"}
                            style={
                                "border border-2 border-[#606060] font-semibold text-[14px] rounded-md px-4 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200 ease-in-out hover:scale-105"
                            }
                        />
                    </Link>
                )}
            </div>
        </section>
    );
};

export default SplitHero;

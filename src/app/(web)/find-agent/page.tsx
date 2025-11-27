"use client";

import { FetchAgents } from "@/components/utils/apiQueries";
import { useState, useEffect } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import PatternBannerCard from "@/components/cards/PatternBannerCard";
import { Button } from "@/components/ui/button";
import Loading from "@/components/globals/Loading";
import DataNotFound from "@/components/globals/DataNotFound";
import { TAgentUser } from "@/constDatas/AgentUserData";

interface FilterType {
  addressSearch: string;
  nameSearch: string;
}

function formatText(text: string | undefined | null): string {
  return text ? text.toLowerCase().trim() : "";
}

const defaultFilter = {
  addressSearch: "",
  nameSearch: "",
};

const Page = () => {
  const [pageData, setPageData] = useState<TAgentUser[] | null>(null);
  const [filteredData, setFilteredData] = useState<TAgentUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState<FilterType>(defaultFilter);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const res = await FetchAgents();
        setPageData(res.data);
        setFilteredData(res.data); // Initialize filteredData with all data
      } catch (error) {
        console.error("[E]\t Error while fetching agent data", error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  // Handle general search
  useEffect(() => {
    if (pageData) {
      const filtered = pageData.filter(
        (item) =>
          formatText(item?.BillingStreet).includes(formatText(searchText)) ||
          formatText(item?.Billingcity).includes(formatText(searchText)) ||
          formatText(item?.BillingState).includes(formatText(searchText)) ||
          formatText(item?.Phone).includes(formatText(searchText)) ||
          formatText(item?.RecruitmentAgencyEmail).includes(
            formatText(searchText)
          ) ||
          formatText(item?.RecruitmentAgentName).includes(
            formatText(searchText)
          ) ||
          formatText(item?.RepresentativeContactName).includes(
            formatText(searchText)
          )
      );
      setFilteredData(filtered);
    }
  }, [searchText, pageData]);

  // Apply detailed filters automatically when they change
  useEffect(() => {
    if (!pageData) return;

    // Only apply detailed filtering if either filter field has a value
    if (filter.addressSearch || filter.nameSearch) {
      setIsLoading(true); // Set loading when filtering starts
      const filtered = pageData.filter((agent) => {
        const addressMatch =
          !filter.addressSearch ||
          formatText(agent?.BillingStreet).includes(
            formatText(filter.addressSearch)
          ) ||
          formatText(agent?.Billingcity).includes(
            formatText(filter.addressSearch)
          ) ||
          formatText(agent?.BillingState).includes(
            formatText(filter.addressSearch)
          );

        const nameMatch =
          !filter.nameSearch ||
          formatText(agent?.RecruitmentAgentName).includes(
            formatText(filter.nameSearch)
          ) ||
          formatText(agent?.RepresentativeContactName).includes(
            formatText(filter.nameSearch)
          );
        return addressMatch && nameMatch;
      });

      setFilteredData(filtered);
      setIsLoading(false); // Clear loading after filtering
    } else {
      // If both filters are empty, revert to showing all data (or search text filtered data)
      if (searchText) {
        setIsLoading(true); // Set loading when applying general search
        const filtered = pageData.filter(
          (item) =>
            formatText(item?.BillingStreet).includes(formatText(searchText)) ||
            formatText(item?.Billingcity).includes(formatText(searchText)) ||
            formatText(item?.BillingState).includes(formatText(searchText)) ||
            formatText(item?.Phone).includes(formatText(searchText)) ||
            formatText(item?.RecruitmentAgencyEmail).includes(
              formatText(searchText)
            ) ||
            formatText(item?.RecruitmentAgentName).includes(
              formatText(searchText)
            ) ||
            formatText(item?.RepresentativeContactName).includes(
              formatText(searchText)
            )
        );
        setFilteredData(filtered);
        setIsLoading(false); // Clear loading after filtering
      } else {
        setFilteredData(pageData); // Show all data if no filters are applied
      }
    }
  }, [filter, pageData, searchText]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleClearFilters = () => {
    setFilter(defaultFilter);
    setSearchText("");
  };

  return (
    <div>
      <PatternBannerCard
        title="Find a Churchill Institute of Higher Education AGENT"
        description="Get in touch with one of our official Churchill Institute of Higher Education agents."
        BtnAText="Find an Agent"
        BtnALink="#search-agent"
        BtnBText="Become an Agent"
        BtnBLink="https://zfrmz.com.au/JgLxavLkXBxSFGUch5E6"
      />

      <section
        className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px]"
        id="search-agent"
      >
        <section className="container mx-auto mt-16 px-5">
          <section className="bg-light-grey flex flex-col md:flex-row gap-4 px-4 py-4 rounded-md">
            <input
              type="text"
              name="addressSearch"
              placeholder="Search by street/city"
              value={filter.addressSearch}
              onChange={handleFilterChange}
              className="rounded-md px-4 py-3 outline outline-neutral-900/20 flex-1 w-full lg:w-[280px]"
            />

            <input
              type="text"
              name="nameSearch"
              placeholder="Agent/Representative Name"
              value={filter.nameSearch}
              onChange={handleFilterChange}
              className="rounded-md px-4 py-3 outline outline-neutral-900/20 flex-1 w-full lg:w-[280px]"
            />

            <div className="flex gap-2">
              <Button>
                <FaSearch /> Find an Educational Agent
              </Button>
            </div>
          </section>

          <div className="mt-8">
            {isLoading ? (
              <Loading />
            ) : filteredData && filteredData.length > 0 ? (
              <>
                <p className="mb-6">
                  Showing {filteredData.length} item
                  {filteredData.length > 1 && "s"}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredData.map((item, i) => {
                    const address =
                      `${item.BillingStreet}, ${item.Billingcity}, ${item.BillingState} ${item.BillingCode}`
                        .replace(/,\s*,/g, ",")
                        .replace(/^\s*,\s*|\s*,\s*$/g, "");

                    return (
                      <div
                        key={i}
                        className="p-6 bg-primary-orange/5 rounded-lg shadow-sm border border-gray-200"
                      >
                        <div className="flex flex-col gap-4">
                          {/* Name Section */}
                          <div>
                            <p className="text-lg font-bold text-gray-800">
                              {item.RecruitmentAgentName || "N/A"}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                              <span className="font-semibold">
                                Representative:
                              </span>{" "}
                              {item.RepresentativeContactName || "N/A"}
                            </p>
                          </div>

                          {/* Contact Information Section */}
                          <div className="space-y-3">
                            {/* Phone */}
                            <div className="flex items-center gap-2">
                              <i className="fi fi-rr-phone-flip text-gray-500 text-lg"></i>
                              <div>
                                <p className="text-xs text-gray-500 font-semibold">
                                  Phone
                                </p>
                                <a
                                  href={
                                    item.Phone ? `tel:${item.Phone}` : undefined
                                  }
                                  className={`text-sm ${
                                    item.Phone
                                      ? "text-blue-600 hover:underline"
                                      : "text-gray-500"
                                  }`}
                                >
                                  {item.Phone || "N/A"}
                                </a>
                              </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-2">
                              <i className="fi fi-rr-envelope text-gray-500 text-lg"></i>
                              <div>
                                <p className="text-xs text-gray-500 font-semibold">
                                  Email
                                </p>
                                <a
                                  href={
                                    item.RecruitmentAgencyEmail
                                      ? `mailto:${item.RecruitmentAgencyEmail}`
                                      : undefined
                                  }
                                  className={`text-sm ${
                                    item.RecruitmentAgencyEmail
                                      ? "text-blue-600 hover:underline"
                                      : "text-gray-500"
                                  }`}
                                >
                                  {item.RecruitmentAgencyEmail || "N/A"}
                                </a>
                              </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-2">
                              <i className="fi fi-rr-marker text-gray-500 text-lg"></i>
                              <div>
                                <p className="text-xs text-gray-500 font-semibold">
                                  Address
                                </p>
                                <a
                                  href={
                                    address && address !== ", , "
                                      ? `https://www.google.com/maps/search/${encodeURIComponent(
                                          address
                                        )}`
                                      : undefined
                                  }
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`text-sm ${
                                    address && address !== ", , "
                                      ? "text-blue-600 hover:underline"
                                      : "text-gray-500"
                                  }`}
                                >
                                  {address && address !== ", , "
                                    ? address
                                    : "N/A"}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="grid place-items-center md:w-1/2 mx-auto mt-8">
                <DataNotFound />
              </div>
            )}
          </div>
        </section>
      </section>

      <div className="container px-5 mx-auto mb-[48px] rounded-md mt-10">
        <div className="w-full flex flex-col md:flex-row bg-[#F3E4E4] relative hover-shadow overflow-hidden rounded-md">
          <div className="flex z-[10] flex-1 flex-col gap-6 pt-8 pl-8 md:py-20 md:pl-20">
            <h3 className="relative leading-10 font-bold text-[36px] text-[#2C2B4B]">
              Interested in becoming an agent?
            </h3>
            <p>
              If you would like to become an authorised representative of CIHE
              Sydney, please submit an Expression of Interest. Expression of
              interests will be assessed by the relevant Regional Recruitment
              Manager.
            </p>
            <Link
              href="https://forms.zohopublic.com.au/CIHE/form/duplicatedonottouchAgencyRequestApplicationForm/formperma/Z-cwJzbSBI4l1IJbFvia5ZwzHFxyNw2AoPgQAstZl80"
              target="_blank"
              className="w-max"
            >
              <Button>
                <FaArrowRight /> Fill Up A Quick Form
              </Button>
            </Link>
          </div>
          <div className="flex-1 pb-48 md:flex-0">
            <Image
              width={600}
              height={600}
              className="absolute z-[0] translate-y-1/2 translate-x-1/2 bottom-16 -left-1/2 md:left-auto md:right-48 group-hover:scale-105 transition-all"
              src="/assets/churchil-circle.webp"
              alt="alt image for churchil circle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

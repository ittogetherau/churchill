"use client";

import DataNotFound from "@/components/globals/DataNotFound";
import { Button } from "@/components/ui/button";
import { AgentFieldsFragment } from "@/graphql/generated/graphql";
import ContainerLayout from "@/layouts/container-layout";
import { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import AgentCard from "./agent-card";

interface FilterType {
  addressSearch: string;
  nameSearch: string;
}

const defaultFilter: FilterType = {
  addressSearch: "",
  nameSearch: "",
};

function formatText(text: string | undefined | null): string {
  return text ? text.toLowerCase().trim() : "";
}

const AgentSearch = ({ agents }: { agents: AgentFieldsFragment[] }) => {
  const [filter, setFilter] = useState<FilterType>(defaultFilter);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearFilters = () => {
    setFilter(defaultFilter);
  };

  const filteredAgents = useMemo(() => {
    if (!agents || agents.length === 0) return [];

    const addressQuery = formatText(filter.addressSearch);
    const nameQuery = formatText(filter.nameSearch);

    return agents.filter((agent) => {
      const address = formatText(agent.address);
      const name = formatText(agent.name);
      const representative = formatText(agent.agent_name);

      const addressMatch = !addressQuery || address.includes(addressQuery);

      const nameMatch =
        !nameQuery ||
        name.includes(nameQuery) ||
        representative.includes(nameQuery);

      return addressMatch && nameMatch;
    });
  }, [agents, filter.addressSearch, filter.nameSearch]);

  return (
    <ContainerLayout>
      <section className="bg-alt-background flex flex-col gap-4 rounded-md px-4 py-4 md:flex-row md:items-center">
        <input
          type="text"
          name="addressSearch"
          placeholder="Search by street/city"
          value={filter.addressSearch}
          onChange={handleFilterChange}
          className="w-full flex-1 rounded-md px-4 py-2 outline outline-neutral-900/20 lg:w-[280px]"
        />

        <input
          type="text"
          name="nameSearch"
          placeholder="Agent/Representative Name"
          value={filter.nameSearch}
          onChange={handleFilterChange}
          className="w-full flex-1 rounded-md px-4 py-2 outline outline-neutral-900/20 lg:w-[280px]"
        />

        <div className="flex gap-2">
          <Button type="button">
            <FaSearch /> Find an Educational Agent
          </Button>
          <Button
            type="button"
            variant="destructive-outline"
            onClick={handleClearFilters}
          >
            Clear
          </Button>
        </div>
      </section>

      <div className="mt-8">
        {filteredAgents && filteredAgents.length > 0 ? (
          <>
            <p className="mb-6">
              Showing {filteredAgents.length} item
              {filteredAgents.length > 1 && "s"}
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredAgents.map((agent) => (
                <AgentCard
                  key={agent.zoho_id ?? `${agent.name}-${agent.email}`}
                  agent={agent}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="mx-auto mt-8 grid place-items-center md:w-1/2">
            <DataNotFound />
          </div>
        )}
      </div>
    </ContainerLayout>
  );
};

export default AgentSearch;

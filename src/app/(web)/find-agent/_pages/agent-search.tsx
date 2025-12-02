"use client";

import { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import DataNotFound from "@/components/globals/DataNotFound";
import { IAgentResponse, TAgentUser } from "@/constDatas/AgentUserData";
import AgentCard from "./agent-card";
import ContainerLayout from "@/layouts/container-layout";

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

interface AgentSearchProps {
  agents: IAgentResponse[];
}

const AgentSearch = ({ agents }: AgentSearchProps) => {
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
      <section className="bg-alt-background flex flex-col md:flex-row md:items-center gap-4 px-4 py-4 rounded-md">
        <input
          type="text"
          name="addressSearch"
          placeholder="Search by street/city"
          value={filter.addressSearch}
          onChange={handleFilterChange}
          className="rounded-md px-4 py-2 outline outline-neutral-900/20 flex-1 w-full lg:w-[280px]"
        />

        <input
          type="text"
          name="nameSearch"
          placeholder="Agent/Representative Name"
          value={filter.nameSearch}
          onChange={handleFilterChange}
          className="rounded-md px-4 py-2 outline outline-neutral-900/20 flex-1 w-full lg:w-[280px]"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredAgents.map((agent) => (
                <AgentCard
                  key={agent.zoho_id ?? `${agent.name}-${agent.email}`}
                  agent={agent}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="grid place-items-center md:w-1/2 mx-auto mt-8">
            <DataNotFound />
          </div>
        )}
      </div>
    </ContainerLayout>
  );
};

export default AgentSearch;

"use client";

import { IAgentResponse, TAgentUser } from "@/constDatas/AgentUserData";

interface AgentCardProps {
  agent: IAgentResponse;
}

function hasValidAddress(address?: string | null) {
  if (!address) return false;
  const cleaned = address.replace(/[\s,]/g, "");
  return cleaned.length > 0;
}

const AgentCard = ({ agent }: AgentCardProps) => {
  const title = agent.name ?? "N/A";
  const representative = agent.agent_name ?? "N/A";
  const phone = agent.phone ?? null;
  const email = agent.email ?? null;
  const address = agent.address ?? "";

  const addressValid = hasValidAddress(address);

  return (
    <div className="p-6 bg-primary-orange/5 rounded-lg shadow-sm border border-gray-200">
      <div className="flex flex-col gap-4">
        {/* Name Section */}
        <div>
          <p className="text-lg font-bold text-gray-800">{title}</p>
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-semibold">Representative:</span>{" "}
            {representative}
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="space-y-3">
          {/* Phone */}
          <div className="flex items-center gap-2">
            <i className="fi fi-rr-phone-flip text-gray-500 text-lg" />
            <div>
              <p className="text-xs text-gray-500 font-semibold">Phone</p>
              <a
                href={phone ? `tel:${phone}` : undefined}
                className={`text-sm ${
                  phone ? "text-blue-600 hover:underline" : "text-gray-500"
                }`}
              >
                {phone ?? "N/A"}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <i className="fi fi-rr-envelope text-gray-500 text-lg" />
            <div>
              <p className="text-xs text-gray-500 font-semibold">Email</p>
              <a
                href={email ? `mailto:${email}` : undefined}
                className={`text-sm ${
                  email ? "text-blue-600 hover:underline" : "text-gray-500"
                }`}
              >
                {email ?? "N/A"}
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-2">
            <i className="fi fi-rr-marker text-gray-500 text-lg" />
            <div>
              <p className="text-xs text-gray-500 font-semibold">Address</p>
              <a
                href={
                  addressValid
                    ? `https://www.google.com/maps/search/${encodeURIComponent(
                        address
                      )}`
                    : undefined
                }
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm ${
                  addressValid
                    ? "text-blue-600 hover:underline"
                    : "text-gray-500"
                }`}
              >
                {addressValid ? address : "N/A"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;

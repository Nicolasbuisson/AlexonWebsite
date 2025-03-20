import Link from "next/link";
import "./productionItemServices.css";
import { ServiceType } from "../../types/work";

interface IProductionItemServicesProps {
  services: string[];
}

const SERVICES_LINKS: Record<ServiceType, string> = {
  "Video Production": "/productions",
  "Short-Form Content": "/shortform",
  "Commercial Photograhpy": "",
  "Concert Videography": "",
  "Event Photography": "",
  "Passion Project": "",
};

export const ProductionItemServices = (props: IProductionItemServicesProps) => {
  const { services } = props;

  SERVICES_LINKS["Short-Form Content"];

  return (
    <p>
      {services.map((service, i) => {
        const validLink = SERVICES_LINKS[service as ServiceType];
        if (validLink) {
          return (
            <Link
              className="production-item-service production-item-service-link"
              key={"productionItemService" + service}
              href={validLink}
            >
              {i !== services.length - 1 ? `${service},` : service}
            </Link>
          );
        }
        return (
          <span
            key={"productionItemService" + service}
            className="production-item-service"
          >
            {i !== services.length - 1 ? `${service},` : service}
          </span>
        );
      })}
    </p>
  );
};

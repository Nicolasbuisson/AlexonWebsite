import nextConfig from "../../../../next.config";
import { Navigation } from "../../../components/navigation/navigation";
import { WorkItemProps } from "../../../types/work";
import "./productionsItem.css";
import projectsJSON from "../../../resources/projects.json";
import type { Metadata } from "next";
import { ProductionItemDetails } from "../../../components/productionItemDetails/productionItemDetails";
import { ProductionsCarousel } from "../../../components/productionsCarousel/productionsCarousel";

interface productionsStaticParams {
  productionsRoute: string;
}

export async function generateStaticParams(): Promise<
  productionsStaticParams[]
> {
  const staticRoutes = projectsJSON.projects.map((project: WorkItemProps) => ({
    productionsRoute: project.route,
  }));
  return staticRoutes;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<productionsStaticParams>;
}): Promise<Metadata> {
  const { productionsRoute } = await params;
  const productionItem = projectsJSON.projects.find(
    (project: WorkItemProps) => project.route === productionsRoute
  )!;
  return {
    title: `Alexon Media - ${productionItem.title}`,
    description: productionItem.description,
    keywords: ["video production", "Alexon Media"],
  };
}

export default async function productionsItem({
  params,
}: {
  params: Promise<productionsStaticParams>;
}) {
  const { productionsRoute } = await params;
  const productionItem = projectsJSON.projects.find(
    (project: WorkItemProps) => project.route === productionsRoute
  )!;
  if (!productionItem) {
    return (
      <div>{`Error 404: content for page productions/${productionsRoute} not found`}</div>
    );
  }
  const { title, client, description, videoUrl, gridImage, services, stills } =
    productionItem;

  return (
    <div className="productionsItem-container">
      <Navigation transparent></Navigation>
      <section className="productionsItem-section">
        <div
          className="productionsItem-title-background"
          style={{
            backgroundImage: `url(${nextConfig.basePath}/assets/${gridImage})`,
          }}
        >
          <h2>{title}</h2>
        </div>

        <div className="video-container">
          <iframe
            src={videoUrl}
            allow="autoplay; fullscreen"
            allowFullScreen
            className="video"
          ></iframe>
          <div className="video-details">
            <h4>
              Client: <span>{client}</span>
            </h4>
            <p>{description}</p>
            <h4>Services:</h4>
            <p>{services}</p>
          </div>
        </div>
      </section>
      <section className="productions-item-details-section">
        <ProductionItemDetails stills={stills} />
      </section>
      <section className="productions-item-carousel-section">
        <ProductionsCarousel productionToExclude={productionItem.title} />
      </section>
    </div>
  );
}

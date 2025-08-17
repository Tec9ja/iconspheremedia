// app/page.tsx

import { client } from "@/lib/sanity";
import { PageData } from "@/lib/types";
import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Services from "@/components/sections/Services";
import WhyIconSphere from "@/components/sections/WhyIconSphere";
import CreatorPods from "@/components/sections/CreatorPods";
import CampaignProcess from "@/components/sections/CampaignProcess";
import ContactForms from "@/components/sections/ContactForms";

// The master GROQ query to fetch all page data
async function getPageData(): Promise<PageData> {
  const query = `*[_type == "pageContent"][0]{
    title,
    heroHeadline,
    heroSubheadline,
    heroSupportiveLine,
    whoWeAreHeadline,
    whoWeAreSubheadline,
    whoWeAreTrustLine,
    servicesSection {
      headline,
      subheadline,
      "services": services[]->{
        _id,
        title,
        shortDescription,
        ctaText
      }
    },
    whyUsSection {
      headline,
      subheadline,
      "points": points[]->{
        _id,
        title,
        description
      },
      trustStatement
    },
    creatorPodsSection {
      headline,
      subheadline,
      "creators": creators[]->{
        _id,
        name,
        category,
        image
      }
    },
    campaignProcessSection {
      headline,
      subheadline,
      "steps": steps[]->{
        _id,
        title,
        description
      }
    }
  }`;
  
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const pageData = await getPageData();

  // If no data is found, you can render a fallback or loading state
  if (!pageData) {
    return <div>Loading content...</div>;
  }

  return (
    <>
      <Hero data={pageData} />
      <WhoWeAre data={pageData} />
      <Services data={pageData.servicesSection} />
      <WhyIconSphere data={pageData.whyUsSection} />
      <CreatorPods data={pageData.creatorPodsSection} />
      <CampaignProcess data={pageData.campaignProcessSection} />
      <ContactForms />
    </>
  );
}
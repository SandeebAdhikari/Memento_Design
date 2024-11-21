"use client";
import HeaderCard from "@/components/HeaderCard";
import BodyCard from "@/components/BodyCard";
import { HEADER_CARDS, BODY_CARDS } from "@/constants/constant";
import { usePathname } from "next/navigation";
import NextPageCard from "@/components/NextPageCard";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  let headerData;
  let bodyData: {
    folder: string;
    imageKey: string;
    title: string;
    description: string;
  }[];
  let nextPageCards: { title: string; imageKey: string }[] = [];

  switch (pathname) {
    case "/web_design":
      headerData = HEADER_CARDS[0];
      bodyData = BODY_CARDS.WEB_DESIGN;
      nextPageCards = [
        { title: "APP DESIGN", imageKey: "appDesign", path: "/app_design" },
        {
          title: "GRAPHIC DESIGN",
          imageKey: "graphicDesign",
          path: "/graphic_design",
        },
      ];
      break;
    case "/app_design":
      headerData = HEADER_CARDS[1];
      bodyData = BODY_CARDS.APP_DESIGN;
      nextPageCards = [
        { title: "WEB DESIGN", imageKey: "webDesign", path: "/web_design" },
        {
          title: "GRAPHIC DESIGN",
          imageKey: "graphicDesign",
          path: "/graphic_design",
        },
      ];
      break;
    case "/graphic_design":
      headerData = HEADER_CARDS[2];
      bodyData = BODY_CARDS.GRAPHIC_DESIGN;
      nextPageCards = [
        { title: "WEB DESIGN", imageKey: "webDesign", path: "/web_design" },
        { title: "APP DESIGN", imageKey: "appDesign", path: "/app_design" },
      ];
      break;
    default:
      headerData = null;
      bodyData = [];
      nextPageCards = [];
  }

  return (
    <main className="mx-[164px]">
      {headerData && (
        <div className="mt-[64px]">
          <HeaderCard
            title={headerData.title}
            description1={headerData.description1}
            description2={headerData.description2}
          />
        </div>
      )}
      <div className="mt-[64px] grid grid-cols-3 gap-8">
        {bodyData.map((card, index) => (
          <BodyCard
            key={index}
            folder={card.folder}
            imageKey={card.imageKey}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className="mt-40 grid grid-cols-2 gap-8">
        {nextPageCards.map((card, index) => (
          <NextPageCard
            key={index}
            title={card.title}
            imageKey={card.imageKey}
            path={card.path}
          />
        ))}
      </div>
      {children}
    </main>
  );
}

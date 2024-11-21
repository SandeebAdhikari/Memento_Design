"use client";
import HeaderCard from "@/components/HeaderCard";
import BodyCard from "@/components/BodyCard";
import { HEADER_CARDS, BODY_CARDS } from "@/constants/constant";
import { usePathname } from "next/navigation";

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

  switch (pathname) {
    case "/web_page":
      headerData = HEADER_CARDS[0]; // Web Design header
      bodyData = BODY_CARDS.WEB_DESIGN;
      break;
    case "/app_design":
      headerData = HEADER_CARDS[1]; // App Design header
      bodyData = BODY_CARDS.APP_DESIGN;
      break;
    case "/graphic_design":
      headerData = HEADER_CARDS[2]; // Graphic Design header
      bodyData = BODY_CARDS.GRAPHIC_DESIGN;
      break;
    default:
      headerData = null;
      bodyData = [];
  }

  return (
    <main className="mx-[164px] ">
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
      {children}
    </main>
  );
}

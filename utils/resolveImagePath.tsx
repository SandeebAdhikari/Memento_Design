import data from "../public/data/data.json";

type DataType = {
  [key: string]: {
    desktop: { [key: string]: string };
    mobile?: { [key: string]: string };
    tablet?: { [key: string]: string };
  };
};

const resolveImagePath = (path: string): string => {
  const [folder, imageKey] = path.split(" > ");
  return (data as DataType)[folder]?.desktop?.[imageKey] || ""; // Adjust for mobile or tablet if needed
};

export default resolveImagePath;

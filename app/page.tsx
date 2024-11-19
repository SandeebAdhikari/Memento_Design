import ResponsiveImage from "@/components/ResponsiveImage";

export default function Home() {
  return (
    <div>
      <h1>Dynamic Responsive Images</h1>

      {/* Display the "realDeal" image from the "about" folder */}
      <ResponsiveImage folder="about" imageKey="realDeal" />

      {/* Display the "hero" image from the "webDesign" folder */}
      <ResponsiveImage folder="webDesign" imageKey="intro" />

      {/* Display the "about" image from the "about" folder */}
      <ResponsiveImage folder="about" imageKey="about" />
    </div>
  );
}

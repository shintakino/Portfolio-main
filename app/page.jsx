import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between 
        xl:pt-8 xl:pb-24">
          {/*text area*/}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Joshua Jay Javier</span>
            </h1>
            <p>I exel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            {/*Button Socials area*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
              <span>Download CV</span>
              <FiDownload className="text-xl"/>
            </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          {/*profile area*/}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home
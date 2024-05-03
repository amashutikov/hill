import thumb1 from "../assets/thumb1.png";
import thumb2 from "../assets/thumb2.png";
import thumb3 from "../assets/thumb3.png";
import { Hero } from "./components/hero";
import { Section } from "./components/section";

const data = [
  {
    index: "01",
    title: "What level of  hiker are you?",
    subtitle: "GEt Started",
    text: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?",
    img: thumb1,
  },
  {
    index: "02",
    title: "Picking the right Hiking Gear!",
    subtitle: "Hiking Essentials",
    text: "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.",
    img: thumb2,
  },
  {
    index: "03",
    title: "Understand Your Map & Timing",
    subtitle: "where you go is the key",
    text: "To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..",
    img: thumb3,
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex px-[230px] max-[1100px]:px-[140px] max-lg:px-[120px] items-center justify-center flex-col gap-[200px] mt-[300px] max-sm:mt-[70px] max-sm:px-[33px] relative z-[27]">
        {data.map((item, index) => (
          <Section
            key={item.index}
            {...item}
            align={index % 2 === 0 ? "left" : "right"}
            index={item.index}
          />
        ))}
      </div>
    </main>
  );
}

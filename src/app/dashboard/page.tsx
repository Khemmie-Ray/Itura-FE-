import AICards from "@/components/dashboard/AiCards";
import Slider from "@/components/dashboard/Slider";
import MobileSlider from "@/components/dashboard/MobileSlider";
import MoodBoard from "@/components/dashboard/MoodBoard";
import MobileAiCards from "@/components/dashboard/MobileAiCards";
import DemoCard from "@/components/dashboard/DemoCard";
import Profile from "@/components/dashboard/Profile";

const Dashboard = () => {

  return (
    <main>
      <Profile />
      <DemoCard />
      <section className="lg:w-[80%] md:w-[80%] w-[90%] mx-auto">
        <h2 className="lg:text-[30px] md:text-[30px] text-[20px] text-center mt-24 lg:w-[70%] mx-auto md:w-[70%] w-[90%]">
          Hi <span className="font-instrumentSerif italic"> John</span>, Your
          mood this week leans toward calm with creative bursts
        </h2>
        <MoodBoard />
      </section>
      <Slider />
      <MobileSlider />
      <section className="lg:w-[80%] md:w-[80%] w-[90%] mx-auto">
        <h2 className="lg:text-[41px] md:text-[36px] text-center font-[500] my-10 text-[20px]">
          Would you like to reflect in your{" "}
          <span className="font-instrumentSerif italic"> journal</span>?
        </h2>
        <AICards />
        <MobileAiCards />
      </section>
    </main>
  );
};

export default Dashboard;

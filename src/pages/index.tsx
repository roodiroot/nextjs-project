import Container from "@/components/Container";
import Advantages from "@/components/hello-page/Advantages";
import FeedbackForm from "@/components/hello-page/FeedbackForm";
import Gallery from "@/components/hello-page/Gallery";
import MainBlock from "@/components/hello-page/MainBlock";
import Owerviews from "@/components/hello-page/Owerviews";
import { Golos_Text } from "next/font/google";

const golos = Golos_Text({ subsets: ["cyrillic"] });

export default function Home() {
  return (
    <div className="py-12">
      <Container>
        <MainBlock />
        <Advantages />
        <Gallery />
        <Owerviews />
        <FeedbackForm />
      </Container>
    </div>
  );
}

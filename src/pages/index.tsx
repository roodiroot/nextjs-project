import Container from "@/components/Container";
import Advantages from "@/components/hello-page/Advantages";
import FeedbackForm from "@/components/hello-page/FeedbackForm";
import MainBlock from "@/components/hello-page/MainBlock";
import { Golos_Text } from "next/font/google";

const golos = Golos_Text({ subsets: ["cyrillic"] });

export default function Home() {
  return (
    <div className="py-4">
      <Container>
        <MainBlock />
        <Advantages />
        <FeedbackForm />
      </Container>
    </div>
  );
}

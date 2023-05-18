import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Advantages from "@/components/hello-page/Advantages";
import FeedbackForm from "@/components/hello-page/FeedbackForm";
import Path from "@/components/utils-component/Path";
import Image from "next/image";

const About = () => {
  console.log();
  return (
    <div>
      <Container>
        <Path />
        <Heading title="О компании" className="mb-8" />
        <div className="relative w-full overflow-hidden rounded-md pt-[30%] mb-8">
          <Image
            width={1500}
            height={300}
            src="/image/about/about.jpeg"
            alt="img"
            className="absolute top-0"
          />
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-6 mb-8">
          <p className="flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            modi dolor illo quis illum, quae nulla omnis blanditiis ipsam sed
            perspiciatis suscipit aperiam voluptates tempore maxime accusamus
            minima voluptatibus ducimus saepe animi laboriosam accusantium?
            Harum alias, cupiditate molestiae reiciendis hic maxime excepturi
            quos et, commodi vero dicta aspernatur quasi consequatur ipsa, est
            sint laborum. Sint atque culpa recusandae enim iusto delectus. Culpa
            laboriosam ab repellendus nesciunt sunt dolore quibusdam, molestiae
          </p>
          <p className="flex-1">
            Crupti possimus animi suscipit ut eligendi, assumenda facere
            similique! Velit rem consequuntur dolores, eos aspernatur, ratione
            inventore quos sunt ipsa maxime maiores, commodi odio ipsum.
            Inventore culpa accusamus ipsa non laborum reiciendis? Sequi
            quisquam delectus laudantium fugiat amet, dolorum sit nam officiis
            nulla omnis placeat et qui aliquid a dolore, adipisci consequatur
            aut ut corrupti in temporibus. Commodi sed fugit rem dolores sequi
            numquam reprehenderit delectus, non impedit necessitatibus expedita
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="font-bold text-2xl mb-4">
              Мы являемся надежным поставщиком систем кондиционирования
            </div>
            <div className="text-lg mb-4">
              При всем при этом мы всегда рекомендуем нашим клиентам только ту
              технику которая проявляет себя наилучшим образом, с безупречной
              стороны
            </div>
            minima voluptatibus ducimus saepe animi laboriosam accusantium?
            Harum alias, cupiditate molestiae reiciendis hic maxime excepturi
            quos et, commodi vero dicta aspernatur quasi consequatur ipsa, est
            sint laborum. Sint atque culpa recusandae enim iusto delectus. Culpa
            laboriosam ab repellendus nesciunt sunt dolore quibusdam, molestiae
          </div>
          <div className="flex-1 relative overflow-hidden rounded-md">
            <Image
              width={500}
              height={300}
              src="/image/about/about.jpeg"
              alt="img"
              className="absolute w-full h-full object-cover"
            />
          </div>
        </div>
        <Advantages />
        <FeedbackForm className="mb-8" />
      </Container>
    </div>
  );
};

export default About;

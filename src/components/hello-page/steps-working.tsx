import { RefObject } from "react";
import Container from "../Container";
import Heading from "../Heading";
import BlockSlider from "./components/steps-working/block-slider";
import { proj_slider_1, proj_slider_2, proj_slider_3 } from "@/constans";
import Button from "../navbar/Button";
import { useRouter } from "next/router";
import useSubmitOrder from "@/hooks/useSubmitOrder";

const StepsWorking: React.FC<{ element?: RefObject<HTMLInputElement> }> = ({
  element,
}) => {
  const router = useRouter();
  const { onOpen } = useSubmitOrder();
  return (
    <div className='mt-60' ref={element}>
      <Container>
        <Heading title='Наши работы' />
      </Container>
      <div className='space-y-4'>
        <BlockSlider
          title='Монтаж объекта на улице Ломаносова'
          steps_list={proj_slider_1}
        />
        <BlockSlider
          title='Истринский район частный дом'
          steps_list={proj_slider_2}
        />
        <BlockSlider
          title='Новостройка от застройщика ПИК'
          steps_list={proj_slider_3}
        />
        <Container>
          <div className='flex flex-col sm:flex-row gap-3'>
            <Button
              className='max-w-[200px]'
              label='Еще работы'
              onClick={() => router.push("/about")}
            />
            <Button
              className='max-w-[200px]'
              label='Заказать установку'
              outline
              onClick={onOpen}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default StepsWorking;

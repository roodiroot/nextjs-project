import Container from "@/components/Container";
import StepsSlider from "./steps-slider";
import { ProjectSliderType } from "@/types";

const BlockSlider: React.FC<{
  steps_list: ProjectSliderType[];
  title: string;
}> = ({ steps_list, title }) => {
  return (
    <div className=''>
      <Container>
        <div className='text-2xl mb-4'>{title}</div>
      </Container>
      <StepsSlider steps_list={steps_list} />
    </div>
  );
};

export default BlockSlider;

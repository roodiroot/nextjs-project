import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardProductForHero from "../CardProductForHero";

// import CardProductForHero from "./CardProductForHero";

interface ProductsSaleCarouselProps {
  products?: any[];
  submitHaveBasket: any;
  addBasket: any;
  remooveElement: any;
  basketStore: any;
}

const ProductsSaleCarousel: React.FC<ProductsSaleCarouselProps> = ({
  products,
  submitHaveBasket,
  addBasket,
  remooveElement,
  basketStore,
}) => {
  // console.log(products);
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full "
    >
      {/* <div className=""> */}
      <CarouselContent>
        {products
          ? products.map((i, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 lg:basis-1/4 pl-2"
              >
                <div className="p-1 h-full">
                  <CardProductForHero
                    id={i?.id}
                    srcImg={`${process.env.NEXT_PUBLIC_SERVER_URI}/prod/${i?.logo}.png`}
                    name={i?.name}
                    type={i?.type?.typeName}
                    brand={i?.brand?.name}
                    price={i?.price}
                    key={i?.id}
                    square={
                      i?.descriptions?.filter(
                        (l: any) => l.title === "Площадь помещения: м²."
                      )[0].description
                    }
                    compressor={
                      i?.descriptions?.filter(
                        (l: any) => l.title === "Тип компрессора:"
                      )[0]?.description
                    }
                    disabled={submitHaveBasket(i?.id, basketStore?.basketList)}
                    addBasket={() => addBasket(i)}
                    remooveElement={() => remooveElement(i?.id)}
                    hit={i?.hit}
                    vendorcode={i?.vendorcode}
                  />
                </div>
              </CarouselItem>
            ))
          : null}
      </CarouselContent>
      {/* </div> */}
      <CarouselPrevious className="left-3 border-orange-500 text-white bg-orange-500 hover:bg-orange-400 hover:text-white/70" />
      <CarouselNext className="right-3 border-orange-500 text-white bg-orange-500 hover:bg-orange-400 hover:text-white/70" />
    </Carousel>
  );
};

export default ProductsSaleCarousel;

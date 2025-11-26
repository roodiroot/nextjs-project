import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardProductForHero from "../CardProductForHero";
import { Product } from "@/lib/api/products";

interface ProductsSaleCarouselProps {
  products?: Product[];
  submitHaveBasket: any;
  addBasket: any;
  remooveElement: any;
  basketStore: any;
}

const ProductsSaleCarousel: React.FC<ProductsSaleCarouselProps> = ({
  products,
  submitHaveBasket,
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
                key={i.documentId}
                className="basis-1/2 sm:basis-1/3 lg:basis-1/4 pl-2"
              >
                <div className="p-1 h-full">
                  <CardProductForHero
                    slug={i?.slug}
                    srcImg={
                      i.images?.length
                        ? i?.images[0]?.formats?.small?.url
                        : undefined
                    }
                    wifi={i.wifi_availability}
                    name={i.brand?.name + " " + i?.name}
                    type={i.category?.name}
                    brand={i?.brand?.name}
                    price={i?.price || "0"}
                    key={i?.id}
                    square={i.area_of_room}
                    compressor={i.compressor_type}
                    disabled={submitHaveBasket(i?.id, basketStore?.basketList)}
                    hit={i?.hit}
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

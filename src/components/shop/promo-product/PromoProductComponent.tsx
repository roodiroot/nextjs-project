import Image from "next/image";
import Link from "next/link";

interface PromoProductComponentProps {
  className: string;
}

const promoList = [
  {
    id: 1,
    img: "/image/promo-products/hisense.png",
    imgLogo: "/image/promo-products/hisense_logo_w.png",
    seria: "NEO Classic A",
    link: "/shop/84",
  },
  {
    id: 2,
    img: "/image/promo-products/funai.png",
    imgLogo: "/image/promo-products/funai_logo_w.png",
    seria: "SHOGUN",
    link: "/shop/89",
  },
  {
    id: 3,
    img: "/image/promo-products/rc_fresh.png",
    imgLogo: "/image/promo-products/rc_logo_w.png",
    seria: "ROYAL FRESH Standard",
    link: "/shop/101",
  },
  {
    id: 4,
    img: "/image/promo-products/rc_pandora.png",
    imgLogo: "/image/promo-products/rc_logo_w.png",
    seria: "PANDORA",
    link: "/shop/44",
  },
  {
    id: 5,
    img: "/image/promo-products/rc_vela.png",
    imgLogo: "/image/promo-products/rc_logo_w.png",
    seria: "VELA NUOVO",
    link: "/shop/68",
  },
  {
    id: 6,
    img: "/image/promo-products/rc_gloria.png",
    imgLogo: "/image/promo-products/rc_logo_w.png",
    seria: "GLORIA Upgrade",
    link: "/shop/25",
  },
];
const PromoProductComponent: React.FC<PromoProductComponentProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-full grid justify-items-center grid-cols-auto gap-6 ${className}`}
    >
      {promoList.map((i) => (
        <Link
          key={i.id}
          href={i.link}
          className='
          cursor-pointer min-w-[270px] w-full h-[200px] rounded-3xl 
          flex flex-col shadow-lg overflow-hidden relative bg-gradient-to-br 
          from-blue-700 to-blue-500 scale-1 hover:scale-105 transition'
        >
          <Image
            alt='img'
            loading='lazy'
            width='550'
            height='300'
            decoding='async'
            data-nimg='1'
            src={i.img}
            className='absolute w-full h-full object-contain left-16'
          />
          <div className='p-8 w-full h-full relatie flex flex-col justify-between'>
            <Image
              alt='img'
              loading='lazy'
              width='100'
              height='100'
              decoding='async'
              data-nimg='1'
              src={i.imgLogo}
              className='w-20'
            />
            <div className='text-sm font-bold text-white'>{i.seria}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PromoProductComponent;

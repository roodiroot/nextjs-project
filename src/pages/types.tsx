import Container from "@/components/Container";
import Path from "@/components/utils-component/Path";
import useTypeAndBrand from "@/hooks/useTypeAndBrand";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Types = () => {
  const router = useRouter()
  const {fetchTypes, types} = useTypeAndBrand()
  useEffect(() => {
    if(!types.length){
      fetchTypes()
    }
  }, [])
  return (
    <Container>
      <Path />
      <div className="w-full grid grid-cols-auto gap-10 mb-20">
        {
          types?.map((i: any) => (
            <div 
            onClick={() => router.push(`/shop?type=${i.id}`)}
            key={i.id} 
            className="
            shadow-sm
            hover:shadow-md
            w-full 
            h-40 
            rounded-md 
            border 
            text-slate-400
            hover:text-orange-500 
            cursor-pointer
            flex
            justify-center
            items-center
            transition
            "
            >
              <div className="flex flex-col p-6">
              <span className="
                          cursor-pointer 
                          text-[24px]  
                          uppercase 
                          font-bold
              ">
                {i.typeName}
              </span>
              </div>
            </div>
          ))
        }
      </div>
    </Container>
  );
};

export default Types;

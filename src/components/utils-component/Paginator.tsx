import { useCallback, useEffect } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

interface PaginatorProps {
  count: number;
  page: number;
  setPage: (page: number) => void;
  limit: number;
}

const Paginator: React.FC<PaginatorProps> = ({
  count,
  page,
  setPage,
  limit,
}) => {
  const arr: number[] = [];
  const c = Math.ceil(count / limit);
  for (let i = 0; i < c; i++) {
    arr.push(i + 1);
  }
  const bascPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const prewPage = useCallback(() => {
    if (page < arr.length || arr.length === 0) {
      setPage(page + 1);
    }
  }, [page]);
  let firstPage = false;
  let lastPage = false;
  let paginArr: number[] = [];
  if (arr.length >= 6) {
    if (page >= 3 && page <= arr.length - 2) {
      paginArr = arr.slice(page - 2, page + 1);
      firstPage = false;
      lastPage = false;
    }
    if (page > 0 && page < 3) {
      paginArr = arr.slice(0, 3);
      firstPage = true;
    }
    if (page > arr.length - 2) {
      paginArr = arr.slice(arr.length - 3, arr.length);
      lastPage = true;
    }
  } else {
    firstPage = true;
    lastPage = true;
    paginArr = arr;
  }

  return (
    <div className="text-lg">
      <ul className="flex gap-2 items-center">
        {arr.length > 1 && (
          <li onClick={bascPage} className={"arrowPagination back"}>
            <HiArrowNarrowLeft
              size={24}
              className="text-slate-700 cursor-pointer"
            />
          </li>
        )}
        {!firstPage && (
          <>
            <li
              className={`w-8  h-8 rounded-md  p-2 cursor-pointer border-2 flex justify-center items-center 
              ${page === 1 ? "border-orange-500" : "border-slate-700"}
              ${page === 1 ? "bg-orange-500" : "bg-white"}
              ${page === 1 ? "text-white" : "text-slate-800"}
                  hover:border-orange-500 
                  hover:bg-orange-500 
                  hover:text-white
                  transition
              `}
              onClick={(e) => setPage(1)}
            >
              <span>{1}</span>
            </li>
            <span>...</span>
          </>
        )}
        {paginArr.map((i, index) => (
          <li
            key={`${i}_${index}`}
            className={`w-8 h-8 rounded-md  p-2 cursor-pointer border-2  flex justify-center items-center 
            ${page === i ? "border-orange-500" : "border-slate-700"}
            ${page === i ? "bg-orange-500" : "bg-white"}
            ${page === i ? "text-white" : "text-slate-800"}
            hover:border-orange-500 
            hover:bg-orange-500 
            hover:text-white
            transition
            `}
            onClick={(e) => setPage(i)}
          >
            <span>{i}</span>
          </li>
        ))}
        {!lastPage && (
          <>
            <span className={"dotdotdot"}>...</span>
            <li
              className={`w-8 h-8 rounded-md  p-2 cursor-pointer border-2  flex justify-center items-center
              ${page === arr.length ? "border-orange-500" : "border-slate-700"}
              ${page === arr.length ? "bg-orange-500" : "bg-white"}
              ${page === arr.length ? "text-white" : "text-slate-800"}
              hover:border-orange-500 
              hover:bg-orange-500 
              hover:text-white
              transition
              `}
              onClick={(e) => setPage(arr.length)}
            >
              <span>{arr.length}</span>
            </li>
          </>
        )}
        {arr.length > 1 && (
          <li onClick={prewPage} className={"arrowPagination prev"}>
            <HiArrowNarrowRight
              size={24}
              className="text-slate-700 cursor-pointer"
            />
          </li>
        )}
      </ul>
    </div>
  );
};

export default Paginator;

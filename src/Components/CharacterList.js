import React, { useEffect, useState, useRef } from "react";
import CharacterCard from "./CharacterCard";
import { getCharacterList } from "./getList";


const CharacterList = () => {
  /** States */
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  /** Refs */
  const ref = useRef(null);

  const callApi = async (page) => {
    const data = await getCharacterList(page);
    setData((prev) => [...prev, ...data.results]);
  };

  useEffect(() => {
    callApi(currentPage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handleOnScroll = () => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrentPage((prev) => prev + 1);
      }
    }
  };

  return (
    <div
      className="CharacterList"
      onScroll={handleOnScroll}
      ref={ref}
    >
    <div className="container">
      <div className="row">
        {data.map((character) => (
          <div className="col-md-6 col-sm-12">
            <CharacterCard
              key={data.id}
              name={character.name}
              url={character.url}
              image={character.image}
              status={character.status}
              location={character.location.name}
              origin={character.origin.name}
              species={character.species}
            />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default CharacterList;
import React, { useEffect, useMemo, useState } from "react";
import CardImageContainer from "../CardImageContainer/CardImageConatiner";
import TextBox from "../Text/TextBox";
import { FontSize, FontWeight } from "data/enums";
import CharacterModal from "components/CharacterModal/CharacterModal";
import { TDataResp } from "data/types";
import { genPokeUrl, getResp } from "utils/pokeApiQuery";
import { AxiosError } from "axios";
import { PoketmonProps } from "interface/PoketmonProps";

export interface CardProps {
  imgPath?: string;
  title?: string;
  index: number;
  uniqueId: number;
}

const Card: React.FC<CardProps> = ({
  imgPath,
  title = "",
  index,
  uniqueId,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [props, setProps] = useState<PoketmonProps>({ name: title });

  const indexMemo = useMemo(() => {
    let value = index.toString();
    while (value.length < 3) {
      value = `0${value}`;
    }

    value = `#${value}`;

    return value;
  }, [index]);

  useEffect(() => {
    let tempProps: PoketmonProps = { name: title };
    tempProps.id = uniqueId;

    const fetchDefaultInfo = async () => {
      const url = genPokeUrl(tempProps.id!);
      const data: TDataResp = await getResp(url);

      if (data instanceof AxiosError) {
        return;
      }

      props.speciesUrl = data.data.species.url;

      const stats = data.data.stats;
      if (!stats) {
        return;
      }
      tempProps.hp = stats[0].base_stat;
      tempProps.attack = stats[1].base_stat;
      tempProps.defense = stats[2].base_stat;
      tempProps.speed = stats[3].base_stat;
      tempProps.specialAttack = stats[4].base_stat;
      tempProps.specialDefense = stats[5].base_stat;

      const types: any[] = data.data.types;
      if (!types) {
        return;
      }

      tempProps.types = types
        .map((type) => type.type.name)
        .reduce((a: string, b: string) => a.concat(`, ${b}`));
    };

    const fetchDesc = async () => {
      const url = props.speciesUrl!;
      const data: TDataResp = await getResp(url);

      if (data instanceof AxiosError) {
        return;
      }

      tempProps.species = data.data.name ? data.data.name : "";

      const descs: any[] = data.data.flavor_text_entries;
      if (!descs) {
        return;
      }

      const en_desc: string[] = descs
        .filter((desc) => desc.language.name === "en")
        .map((desc) => desc.flavor_text);
      const kr_desc: string[] = descs
        .filter((desc) => desc.language.name === "ko")
        .map((desc) => desc.flavor_text);

      if (kr_desc.length) {
        tempProps.desc = kr_desc.at(kr_desc.length - 1)!.replaceAll("\n", " ");
      } else if (en_desc.length) {
        tempProps.desc = en_desc.at(en_desc.length - 1)!.replaceAll("\n", " ");
      } else {
        return;
      }
    };

    const doJobs = async () => {
      await fetchDefaultInfo();
      await fetchDesc();
      setProps({...tempProps});
    };

    doJobs();
  }, []);

  return (
    <>
      <button
        className="bg-transparent w-full h-fit"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="my-[1.35rem] select-none">
          <div className="flex min-w-[30rem] w-full h-[8.2rem] ps-3 py-4 rounded-[0.75rem] shadow-[0rem_0rem_2rem_-0.8rem_rgba(0,0,0,1.0)] hover:bg-gray-200 hover:bg-opacity-30 active:bg-gray-200 active:bg-opacity-90 bg-opacity-30 overflow-visible">
            <CardImageContainer imgPath={imgPath} />
            <div className="flex items-center content-center ps-7 opacity-70">
              <TextBox
                content={title}
                fontSize={FontSize.XL}
                fontWeight={FontWeight.MEDIUM}
                fontColor="text-[#394250]"
              />
            </div>
            <div className="ml-auto mt-auto pe-4 pb-1 select-none">
              <TextBox
                content={`${indexMemo}`}
                fontSize={FontSize.XL3}
                fontWeight={FontWeight.BOLD}
                fontColor="text-[#0000001c]"
              />
            </div>
          </div>
        </div>
      </button>
      {isModalOpen && (
        <CharacterModal
          imgPath={imgPath}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          props={props}
        />
      )}
    </>
  );
};

export default Card;

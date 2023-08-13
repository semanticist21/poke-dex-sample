import React, { useState } from "react";
import CardImageContainer from "../CardImageContainer/CardImageConatiner";
import TextBox from "../TextBox/TextBox";
import { FontSize, FontWeight } from "data/enums";
import ModalCharacter from "components/ModalCharacter/ModalCharacter";

export interface CardProps {
  imgPath?: string;
  title?: string;
  uniqueId: number;
}

const Card: React.FC<CardProps> = ({ imgPath, title = "", uniqueId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                content={`${uniqueId}`}
                fontSize={FontSize.XL3}
                fontWeight={FontWeight.BOLD}
                fontColor="text-[#0000001c]"
              />
            </div>
          </div>
        </div>
      </button>
      {isModalOpen && (
        <ModalCharacter
          imgPath={imgPath}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          uniqueId={uniqueId}
        />
      )}
    </>
  );
};

export default Card;

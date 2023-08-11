import { Divider, Modal } from "antd";
import CardImageContainer from "components/CardImageContainer/CardImageConatiner";
import TextBox from "components/TextBox/TextBox";
import { FontSize, FontWeight } from "data/enums";
import { PoketmonProps } from "interface/PoketmonProps";

export interface CharacterModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (v: boolean) => void;
  imgPath?: string;
  pokeProps: PoketmonProps;
}

const config = {
  okButtonProps: { style: { display: "none", className: "scale-120" } },
  cancelText: "OK",
  destroyOnClose: true,
  title: "Pokemon Info",
};

const CharacterModal: React.FC<CharacterModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  imgPath,
  pokeProps,
}) => {
  const onClick = () => setIsModalOpen(false);

  return (
    <>
      <Modal
        {...config}
        open={isModalOpen}
        onCancel={() => onClick()}
        width={800}
      >
        <Divider />
        <div className="h-[27rem] overflow-hidden">
          <div className="flex flex-row">
            <div>
              <div className="flex flex-row justify-start w-full space-x-3 ps-2">
                <div className="flex flex-row justify-start items-center">
                  <TextBox
                    content="No."
                    fontWeight={FontWeight.EXTRABOLD}
                    fontSize={FontSize.XL}
                  />
                  <TextBox
                    content={
                      pokeProps.pokeId ? pokeProps.pokeId.toString() : ""
                    }
                    fontWeight={FontWeight.EXTRABOLD}
                    fontSize={FontSize.LG}
                  />
                </div>
                <TextBox
                  content={
                    pokeProps.pokeName
                      ? pokeProps.pokeName
                          .replace("-female", "")
                          .replace("-male", "")
                      : ""
                  }
                  fontWeight={FontWeight.SEMIBOLD}
                  fontSize={FontSize.XL}
                />
              </div>
              <div className="flex flex-col justify-center content-center space-y-4 w-fit">
                <div className=" p-20 w-max bg-gray-200 rounded-2xl bg-opacity-95 overflow-visible">
                  <CardImageContainer
                    imgPath={imgPath}
                    additionalClass="scale-[180%]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mx-5 mt-2 mb-0 justify-between items-start w-full bg-red-200 space-y-1">
              {/* 단일 로우 영역 */}
              <div className="flex flex-row justify-between w-full pl-5">
                <div className="flex flex-row items-center space-x-3">
                  <TextBox
                    content="TYPE"
                    fontWeight={FontWeight.BOLD}
                    fontSize={FontSize.XL2}
                    fontColor="text-slate-500"
                  />
                  <TextBox
                    content={pokeProps.types ? pokeProps.types : ""}
                    fontWeight={FontWeight.BOLD}
                    fontSize={FontSize.XL}
                  />
                </div>
              </div>
              {/*  */}
              <div className="flex flex-row justify-between w-full pl-5">
                <div className="flex flex-row items-center space-x-3">
                  <TextBox
                    content="SPECIES"
                    fontWeight={FontWeight.BOLD}
                    fontSize={FontSize.XL2}
                    fontColor="text-slate-500"
                  />
                  <TextBox
                    content={pokeProps.species ? pokeProps.species : ""}
                    fontWeight={FontWeight.BOLD}
                    fontSize={FontSize.XL}
                  />
                </div>
              </div>
              {/* 스탯 영역 */}
              <div className="flex flex-col justify-evenly h-[80%] w-full">
                {/* 1번째 줄 */}
                <div className="grid grid-cols-2 gap-0 w-full pl-5">
                  {/* HP */}
                  <div className="flex flex-row items-center space-x-3">
                    <TextBox
                      content="HP"
                      fontWeight={FontWeight.BOLD}
                      fontSize={FontSize.XL2}
                      fontColor="text-red-500"
                      />
                    <TextBox
                      content={pokeProps.hp ? pokeProps.hp.toString() : ""}
                      fontWeight={FontWeight.BOLD}
                      fontSize={FontSize.XL}
                      additionalClass="ps-[4.5rem]"
                    />
                  </div>
                  {/* ATK */}
                  <div className="flex flex-row items-center space-x-3">
                    <TextBox
                      content="ATK"
                      fontWeight={FontWeight.BOLD}
                      fontSize={FontSize.XL2}
                      fontColor="text-red-500 pr-10"
                    />
                    <TextBox
                      content={
                        pokeProps.attack ? pokeProps.attack.toString() : ""
                      }
                      fontWeight={FontWeight.BOLD}
                      fontSize={FontSize.XL}
                      additionalClass="ps-4"
                    />
                  </div>
                </div>
                {/* 2번째 줄 */}
                <div className="grid grid-cols-2 gap-0 w-full pl-5">
                  <div className="flex flex-row items-center space-x-3">
                    <TextBox
                      content="DEF"
                      fontWeight={FontWeight.BOLD}
                      fontSize={FontSize.XL2}
                      fontColor="text-blue-500"
                    />
                    <TextBox
                      content={
                        pokeProps.defense ? pokeProps.defense.toString() : ""
                      }
                      fontWeight={FontWeight.BOLD}
                      fontSize={FontSize.XL}
                      additionalClass="ps-16"
                    />
                  </div>
                  <div className="flex flex-row items-center space-x-3">
                    <TextBox
                      content="SPEED"
                      fontWeight={FontWeight.BOLD}
                      fontSize={FontSize.XL2}
                      fontColor="text-blue-500 pr-2"
                    />
                    <TextBox
                      content={
                        pokeProps.speed ? pokeProps.speed.toString() : ""
                      }
                      fontWeight={FontWeight.BOLD}
                      fontSize={FontSize.XL}
                      additionalClass="ps-6"
                    />
                  </div>
                </div>
                {/* 3번째 줄 */}
                <div className="grid grid-cols-2 gap-0 w-full pl-5">
                  <div className="flex flex-row items-center space-x-3">
                    <TextBox
                      content="SP DEF"
                      fontWeight={FontWeight.BOLD}
                      fontSize={FontSize.XL2}
                      fontColor="text-violet-500"
                    />
                    <TextBox
                      content={
                        pokeProps.specialDefense
                          ? pokeProps.specialDefense.toString()
                          : ""
                      }
                      fontWeight={FontWeight.BOLD}
                      fontSize={FontSize.XL}
                      additionalClass="ps-8"
                    />
                  </div>
                  <div className="flex flex-row items-center space-x-3">
                    <TextBox
                      content="SP ATK"
                      fontWeight={FontWeight.BOLD}
                      fontSize={FontSize.XL2}
                      fontColor="text-violet-500"
                    />
                    <TextBox
                      content={
                        pokeProps.specialAttack
                          ? pokeProps.specialAttack.toString()
                          : ""
                      }
                      fontWeight={FontWeight.BOLD}
                      fontSize={FontSize.XL}
                      additionalClass="ps-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer */}
          <div>
            <Divider orientation="left">
              <TextBox
                content="Comment"
                fontWeight={FontWeight.EXTRABOLD}
                fontSize={FontSize.BASE}
                fontColor="text-[#C4584F]"
              />
            </Divider>
            <div className="flex flex-col h-12 bg-transparent items-start overflow-scroll scrollbar-hide">
              {pokeProps.desc &&
                pokeProps.desc
                  .split(".")
                  .filter((w) => w.length > 1)
                  .map((w, idx) => {
                    return (
                      <TextBox
                        key={idx}
                        content={w.length ? `${w.trim()}.` : ""}
                        fontWeight={FontWeight.SEMIBOLD}
                        fontSize={FontSize.BASE}
                      />
                    );
                  })}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CharacterModal;

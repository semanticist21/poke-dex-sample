import { Divider, Modal, Spin } from "antd";
import CardImageContainer from "components/CardImageContainer/CardImageConatiner";
import ModalDescBox from "components/ModalDescBox/ModalDescBox";
import TextBox from "components/TextBox/TextBox";
import { FontSize, FontWeight } from "data/enums";
import useFetch, { queryTypes } from "hooks/useFetch";
import { GlobalContext } from "provider/globalProvider";
import { useContext, useState } from "react";

export interface ModalCharacterProps {
  isModalOpen: boolean;
  setIsModalOpen: (v: boolean) => void;
  imgPath?: string;
  uniqueId: number;
}

const modalConfig = {
  okButtonProps: { style: { display: "none", className: "scale-120" } },
  cancelText: "OK",
  destroyOnClose: true,
  title: "Pokemon Info",
};

const ModalCharacter: React.FC<ModalCharacterProps> = ({
  isModalOpen,
  setIsModalOpen,
  imgPath,
  uniqueId,
}) => {
  const contextObj = useContext(GlobalContext);
  const [isChildLoading, setIsChildLoading] = useState(true);

  const itemInfo = contextObj.originalItems.find(
    (item) => item.uniqueId === uniqueId
  );
  const [infoObj, isLoading, error] = useFetch(itemInfo!.data.url, uniqueId, queryTypes.CARD);
  const onClick = () => setIsModalOpen(false);

  return (
    <>
      <Modal
        {...modalConfig}
        open={isModalOpen}
        onCancel={() => onClick()}
        width={800}
      >
        <Divider />
        <div className="h-[27rem] overflow-hidden">
          {isChildLoading || isLoading || error ? (
            <div className="flex w-full h-full justify-center items-center">
              <div className="scale-[200%]">
                <Spin size="large" />
              </div>
            </div>
          ) : (
            <div>
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
                        content={uniqueId.toString()}
                        fontWeight={FontWeight.EXTRABOLD}
                        fontSize={FontSize.LG}
                      />
                    </div>
                    <TextBox
                      content={infoObj?.name
                        ?.replace("-female", "")
                        .replace("-male", "")}
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
                <div className="flex flex-col mx-5 mt-2 mb-0 justify-between items-start w-full space-y-1">
                  {/* 단일 로우 영역 */}
                  <div className="flex flex-row justify-between w-full pl-5 pt-5">
                    {/*  */}
                    <div className="flex flex-row items-center space-x-3">
                      <TextBox
                        content="TYPE"
                        fontWeight={FontWeight.BOLD}
                        fontSize={FontSize.XL2}
                        fontColor="text-slate-500"
                      />
                      <TextBox
                        content={`${infoObj?.types[0]?.type?.name}${
                          infoObj?.types[1]
                            ? `, ${infoObj?.types[1].type?.name}`
                            : ""
                        }`}
                        fontWeight={FontWeight.BOLD}
                        fontSize={FontSize.XL}
                      />
                    </div>
                  </div>
                  <div className=" h-1" />
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
                        content={infoObj?.species?.name}
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
                          content={infoObj?.stats?.[0]?.base_stat}
                          fontWeight={FontWeight.BOLD}
                          fontSize={FontSize.XL}
                          additionalClass="ps-[4.9rem]"
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
                          content={infoObj?.stats?.[1]?.base_stat}
                          fontWeight={FontWeight.BOLD}
                          fontSize={FontSize.XL}
                          additionalClass="ps-[1.15rem]"
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
                          content={infoObj?.stats?.[2]?.base_stat}
                          fontWeight={FontWeight.BOLD}
                          fontSize={FontSize.XL}
                          additionalClass="ps-[4.2rem]"
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
                          content={infoObj?.stats?.[3]?.base_stat}
                          fontWeight={FontWeight.BOLD}
                          fontSize={FontSize.XL}
                          additionalClass="ps-[1.3rem]"
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
                          content={infoObj?.stats?.[4]?.base_stat}
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
                          content={infoObj?.stats?.[5]?.base_stat}
                          fontWeight={FontWeight.BOLD}
                          fontSize={FontSize.XL}
                          additionalClass="ps-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Divider orientation="left">
                  <TextBox
                    content="Comment"
                    fontWeight={FontWeight.EXTRABOLD}
                    fontSize={FontSize.BASE}
                    fontColor="text-[#C4584F]"
                  />
                </Divider>
                {/* footer */}
              </div>
            </div>
          )}
          {!isLoading && !error && (
            <div className="flex flex-col h-12 bg-transparent items-start overflow-scroll scrollbar-hide">
              <ModalDescBox
                contentUrl={infoObj?.species?.url}
                uniqueId={uniqueId}
                setIsChildLoading={setIsChildLoading}
              />
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ModalCharacter;

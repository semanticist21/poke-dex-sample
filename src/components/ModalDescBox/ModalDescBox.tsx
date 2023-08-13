import { constants } from "buffer";
import TextBox from "components/TextBox/TextBox";
import { FontSize, FontWeight } from "data/enums";
import useFetch, { queryTypes } from "hooks/useFetch";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export interface ModalDescBoxProps {
  contentUrl: string;
  uniqueId: number;
  setIsChildLoading: Dispatch<SetStateAction<boolean>>;
}

const ModalDescBox: React.FC<ModalDescBoxProps> = ({
  contentUrl,
  uniqueId,
  setIsChildLoading,
}) => {
  const [data, isLoading, error] = useFetch(
    contentUrl,
    uniqueId,
    queryTypes.SPECIES
  );
  const [text, setText] = useState("");

  useEffect(() => {
    if (data) {
      const items: Array<any> = data.flavor_text_entries;
      if (!items) return;

      let kr_items: Array<any> = [];
      let en_items: Array<any> = [];

      kr_items = items.filter((item) => item.language?.name === "ko");
      en_items = items.filter((item) => item.language?.name === "en");

      if (kr_items.length && kr_items[0].flavor_text) {
        setText(kr_items[0].flavor_text);
      } else if (en_items.length) {
        setText(en_items[0].flavor_text);
      }
      setIsChildLoading(false);
    }
  }, [data]);

  return data && !isLoading && !error ? (
    <>
      {text
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
    </>
  ) : (
    <></>
  );
};

export default ModalDescBox;

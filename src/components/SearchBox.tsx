import Search from "antd/es/input/Search";

export interface SerachBoxProps {}

const SearchBox: React.FC<SerachBoxProps> = () => {
  return (
    <>
      <Search
        placeholder="input search text"
        onSearch={() => {}}
        style={{ width: 300 }}
      />
    </>
  );
};

export default SearchBox;

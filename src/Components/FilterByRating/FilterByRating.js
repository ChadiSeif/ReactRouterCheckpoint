import { Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const FilterByRate = ({ value, setValue }) => {
  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <span>
      <Rate tooltips={desc} onChange={handleChange} value={value} />
    </span>
  );
};

export default FilterByRate;

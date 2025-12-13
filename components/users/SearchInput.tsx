type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SearchInput = ({ value, onChange }: Props) => {
  return (
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Search user..."
    />
  );
};

export default SearchInput;
import { withHelloLogger } from '@/components/logger';

interface SelectProps {
  value: number;
  options: {
    value: string | number;
    label: string;
  }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ value, options, onChange }) => {
  return (
    <select
      className="bg-transparent focus:pointer-events-none hover:bg-martian-red rounded-lg text-sm px-1"
      value={value}
      onChange={onChange}
    >
      {options.map(({ value, label }, i) => (
        <option key={i} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default withHelloLogger(Select);

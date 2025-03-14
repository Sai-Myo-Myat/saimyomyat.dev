//No data component
import { cn } from "@/lib/utils";

interface Props {
  text?: string;
}

const NoData: React.FC<Props> = ({ text }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center font-semibold border py-4 rounded-md"
      )}
    >
      <p>No Data</p>
    </div>
  );
};

export default NoData;

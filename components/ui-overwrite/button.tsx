import { ButtonProps, Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props extends ButtonProps {}

const Button: React.FC<Props> = ({ className, ...props }) => {
  return <ShadcnButton className={cn("font-semibold", className)} {...props} />;
};

export default Button;

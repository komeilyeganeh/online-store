type ConditionalPropsType =
  | {
      as: "button" | "submit";
      href?: string;
    }
  | {
      as: "link";
      href: string;
    };

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export type ButtonPropsType = ButtonProps & ConditionalPropsType;

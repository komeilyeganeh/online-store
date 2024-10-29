export type InputProps = {
    type: "text" | "email" | "search" | "number" | "range";
    placeholder?: string;
    className?: string;
    onChange?: () => void;
    name?: string;
}
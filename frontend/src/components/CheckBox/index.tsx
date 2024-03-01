import React from "react";

const shapes = {
  square: "rounded-[0px]",
} as const;
const variants = {
  fill: {
    gray_800: "bg-gray-800 text-gray-800",
  },
  outline: {
    blue_gray_100: "border-blue_gray-100 border-[3px] border-solid text-gray-500",
  },
} as const;
const sizes = {
  xs: "h-[27px] w-[27px] pl-4 text-lg",
} as const;

type CheckboxProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    label: string;
    id: string;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    onClick: () => void;
  }>;
const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className = "",
      name = "",
      children,
      label = "",
      id = "checkbox_id",
      onChange,
      shape = "square",
      variant = "outline",
      size = "xs",
      color = "blue_gray_100",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className + " flex items-center justify-center gap-[5px] cursor-pointer"}>
          <input
            className={` ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            id={id}
            {...restProps}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        {children}
      </>
    );
  },
);

export { CheckBox };

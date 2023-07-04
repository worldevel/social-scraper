import { ReactNode } from "react";

interface Props {
  title?: string;
  description?: string;
  children?: ReactNode;
}

const PageTitle = ({ title, description, children }: Props) => {
  return (
    <>
      <h1 className="text-2xl dark:text-white font-bold">{title}</h1>
      <p className="mt-2 text-gray-500 dark:text-gray-300 text-[15px]">
        {description}
      </p>
      {children}
    </>
  );
};

export default PageTitle;

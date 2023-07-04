import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  key?: number;
  className?: string;
}

export const Table = ({ children }: Props) => {
  return (
    <>
      <table className="min-w-full text-left text-sm font-light dark:text-white">
        {children}
      </table>
    </>
  );
};

export const Thead = ({ children }: Props) => {
  return (
    <>
      <thead className="border-b font-medium dark:border-[#3333] bg-gray-100 dark:bg-dark-600">
        {children}
      </thead>
    </>
  );
};

export const Tr = ({ children, key }: Props) => {
  return (
    <>
      <tr
        key={key}
        className="border-b dark:border-[#3333] odd:bg-white even:bg-slate-50 dark:odd:bg-dark-500 dark:even:bg-[#3333]"
      >
        {children}
      </tr>
    </>
  );
};

export const Th = ({ children }: Props) => {
  return (
    <>
      <th scope="col" className="px-6 py-4">
        {children}
      </th>
    </>
  );
};

export const Tbody = ({ children }: Props) => {
  return (
    <>
      <tbody>{children}</tbody>
    </>
  );
};

export const Td = ({ children, className }: Props) => {
  return (
    <>
      <td className={className + " whitespace-nowrap px-6 py-4"}>{children}</td>
    </>
  );
};

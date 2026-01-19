import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div
      className="
        pt-[156px]
        sm:pt-[167px]
        lg:pt-[215px]

        pb-20
        sm:pb-24
        lg:pb-32

        px-4
        sm:px-6
        md:px-8
        lg:px-12

        max-w-[90rem]
        mx-auto
      "
    >
      {children}
    </div>
  );
}

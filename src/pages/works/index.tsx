import { NavLayout } from "@/layout/NavLayout";
import { ReactNode } from "react";

const Works = () => {
  return <div>Works</div>;
};

Works.getLayout = (page: ReactNode) => <NavLayout>{page}</NavLayout>;

export default Works;

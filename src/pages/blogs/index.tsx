import { NavLayout } from "@/layout/NavLayout";
import { ReactNode } from "react";

const Blogs = () => {
  return <h1 className="text-4xl"> No blogs yet! </h1>;
};
Blogs.getLayout = (page: ReactNode) => <NavLayout>{page}</NavLayout>;

export default Blogs;

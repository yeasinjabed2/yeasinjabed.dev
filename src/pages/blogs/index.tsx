import { NavLayout } from "@/layout/NavLayout";
import { ReactNode } from "react";

const Blogs = () => {
  return <div>Blogs</div>;
};
Blogs.getLayout = (page: ReactNode) => <NavLayout>{page}</NavLayout>;

export default Blogs;

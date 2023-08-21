/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data/projects";
import { NavLayout } from "@/layout/NavLayout";
import { ReactNode } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Works = () => {
  return (
    <div className="flex flex-col gap-14 mt-5 mb-40">
      {projects.map((project) => (
        <div
          className="flex md:flex-row flex-col justify-between gap-6"
          key={project.id}
        >
          <div className="md:w-6/12 w-12/12 h-[240px] md:h-auto md:max-h-[320px] lg:max-h-[250px] bg-[--text-secondary] rounded-lg overflow-hidden">
            <PhotoProvider>
              {project.images.map((image) => (
                <PhotoView
                  key={image}
                  src={`http://localhost:3000/api/images?name=${image}.png`}
                >
                  <img
                    src={`http://localhost:3000/api/images?name=${image}.png`}
                    alt={project.title}
                  />
                </PhotoView>
              ))}
            </PhotoProvider>
          </div>
          <div className="flex flex-col md:w-6/12 w-12/12 pb-5">
            <h1 className="text-2xl font-bold">{project.title}</h1>
            <p className="text-base mt-2">{project.description}</p>

            <div className="flex gap-2 text-sm mt-4 flex-wrap">
              {project.tags.map((tag) => (
                <button className="tech-tag" key={tag}>
                  {tag}
                </button>
              ))}
            </div>

            <div className="flex gap-3 text-sm mt-4">
              {project.links.map((link) => (
                <a
                  className="border border-[--active] rounded-md text-[--active] py-1 px-2 flex items-center"
                  key={link.title}
                  href={link.url}
                  target="_blank"
                >
                  <link.icon size="16px" className="inline mr-1" />
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Works.getLayout = (page: ReactNode) => <NavLayout>{page}</NavLayout>;

export default Works;

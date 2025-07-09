import { useEffect, useState } from "react";
import { type ProjectDetailsProps as ProjectDetails } from "./components/Project/ProjectDetailsTypes";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL;

type Fetching = "fetching" | "idle" | "error" | "finished";

const fetchProjects = async () => {
  const projects = await axios.get<{ data: ProjectDetails[] }>(
    `${BASE_URL}api/projects?populate=image`,
  );
  return projects.data.data;
};

export const useProjects = () => {
  const [fetching, setIsFetching] = useState<Fetching>("idle");
  const [projects, setProjects] = useState<ProjectDetails[]>([]);

  useEffect(() => {
    if (projects.length === 0 && fetching === "idle") {
      setIsFetching("fetching");

      fetchProjects()
        .then((projectsData) => {
          setIsFetching("finished");
          setProjects(projectsData);
        })
        .catch((error) => {
          console.log("An error occured during projects fetching: ", error);
          setIsFetching("error");
        });
    }
  }, []);

  return { projects, fetching };
};

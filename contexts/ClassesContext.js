import { createContext, useState, useEffect } from "react";
// apis
import {
  classesDescriptionsFetcher,
  classesFetcher,
} from "../__apis__/classes";

export const ClassesContext = createContext();

export const ClassesProvider = ({ children }) => {
  const [classes, setClasses] = useState([]);
  const [classesDescriptions, setClassesDescriptions] = useState([]);

  useEffect(async () => {
    await classesFetcher()
      .then((classesResponse) => setClasses(classesResponse))
      .catch((error) => console.log("classes-context", error));

    await classesDescriptionsFetcher()
      .then((classesDescriptionsResponse) =>
        setClassesDescriptions(classesDescriptionsResponse)
      )
      .catch((error) => console.log("classes-descriptions", error));
  }, []);

  return (
    <ClassesContext.Provider
      value={{
        classesState: [classes, setClasses],
        classesDescriptionsState: [classesDescriptions, setClassesDescriptions],
      }}
    >
      {children}
    </ClassesContext.Provider>
  );
};

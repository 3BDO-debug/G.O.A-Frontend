import { createContext, useState, useEffect } from "react";
// apis
import { teachersFetcher } from "../__apis__/teachers";

export const TeachersContext = createContext();

export const TeachersProvider = ({ children }) => {
  const [teachers, setTeachers] = useState([]);

  useEffect(async () => {
    await teachersFetcher()
      .then((teachersResponse) => setTeachers(teachersResponse))
      .catch((error) => console.log("teachers-context", error));
  }, []);

  return (
    <TeachersContext.Provider
      value={{ teachersState: [teachers, setTeachers] }}
    >
      {children}
    </TeachersContext.Provider>
  );
};

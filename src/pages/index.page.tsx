import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import classesJson from "../../classes.js";
import SemesterColumn from "@/components/semesterColumn";
import { ClassItem } from "@/interfaces/classes";
import { useState } from "react";
import { cloneDeep } from "lodash";

type SeenMapType = Record<string, ClassItem>;

const Home: NextPage = () => {
  const [seen, setSeen] = useState<SeenMapType>({
    FACOM49010: {
      name: "Algoritmo e Programação de Computadores",
      code: "FACOM49010",
      classHrs: 3,
      labHrs: 1,
      totalHrs: 4,
    },
  });

  const onClassBoxClick = (classItem: ClassItem) => {
    const temp = cloneDeep(seen);
    if (temp[classItem.code]) delete temp[classItem.code];
    else temp[classItem.code] = classItem;

    setSeen(temp);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Horários</title>
        <meta
          name="description"
          content="Aplicativo para auxiliar na escolha de matérias do curso de Mecatrônica."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SemesterColumn
          onClassBoxClick={onClassBoxClick}
          seen={seen}
          semesterClasses={classesJson[1]}
        />
        <SemesterColumn
          onClassBoxClick={onClassBoxClick}
          seen={seen}
          semesterClasses={classesJson[2]}
        />
        <SemesterColumn
          onClassBoxClick={onClassBoxClick}
          seen={seen}
          semesterClasses={classesJson[3]}
        />
        <SemesterColumn
          onClassBoxClick={onClassBoxClick}
          seen={seen}
          semesterClasses={classesJson[4]}
        />
        <SemesterColumn
          onClassBoxClick={onClassBoxClick}
          seen={seen}
          semesterClasses={classesJson[5]}
        />
        <SemesterColumn
          onClassBoxClick={onClassBoxClick}
          seen={seen}
          semesterClasses={classesJson[6]}
        />
        <SemesterColumn
          onClassBoxClick={onClassBoxClick}
          seen={seen}
          semesterClasses={classesJson[7]}
        />
        <SemesterColumn
          onClassBoxClick={onClassBoxClick}
          seen={seen}
          semesterClasses={classesJson[8]}
        />
        <SemesterColumn
          onClassBoxClick={onClassBoxClick}
          seen={seen}
          semesterClasses={classesJson[9]}
        />
        <SemesterColumn
          onClassBoxClick={onClassBoxClick}
          seen={seen}
          semesterClasses={classesJson[10]}
        />
      </main>
    </div>
  );
};

export default Home;

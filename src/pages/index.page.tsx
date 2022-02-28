import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import classesArray from "../../classes";
import SemesterColumn from "@/components/semesterColumn";
import { useProfile } from "context/Profile";
import NavBar from "@/components/Nav";
import { ClassItem } from "@/interfaces/classes";

const Home: NextPage = () => {
  const { classTaken } = useProfile();

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

      <NavBar />

      <main className={styles.main}>
        {classesArray.map((item: ClassItem[], index) => {
          return (
            <SemesterColumn
              key={index}
              seen={classTaken}
              semesterClasses={item}
            />
          );
        })}
      </main>
    </div>
  );
};

export default Home;

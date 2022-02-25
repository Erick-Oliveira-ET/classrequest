import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import classesJson from "../../classes.js";
import SemesterColumn from "@/components/semesterColumn";
import { useProfile } from "context/Profile";
import NavBar from "@/components/Nav";

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
        <SemesterColumn seen={classTaken} semesterClasses={classesJson[1]} />
        <SemesterColumn seen={classTaken} semesterClasses={classesJson[2]} />
        <SemesterColumn seen={classTaken} semesterClasses={classesJson[3]} />
        <SemesterColumn seen={classTaken} semesterClasses={classesJson[4]} />
        <SemesterColumn seen={classTaken} semesterClasses={classesJson[5]} />
        <SemesterColumn seen={classTaken} semesterClasses={classesJson[6]} />
        <SemesterColumn seen={classTaken} semesterClasses={classesJson[7]} />
        <SemesterColumn seen={classTaken} semesterClasses={classesJson[8]} />
        <SemesterColumn seen={classTaken} semesterClasses={classesJson[9]} />
        <SemesterColumn seen={classTaken} semesterClasses={classesJson[10]} />
      </main>
    </div>
  );
};

export default Home;

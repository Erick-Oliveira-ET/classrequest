import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './styles/Home.module.css'
import classes from "../../classes.json"
  
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Horários</title>
        <meta name="description" content="Aplicativo para auxiliar na escolha de matérias do curso de Mecatrônica." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {
          classes["1"].map((classItem, id) =>
            <div className={styles.classBox}>
              
              <p style={{padding: "0 20px", textAlign: "center"}}>{classItem.name} </p>

              <div className={styles.hoursBoxes}>
                <div>
                  <strong>{classItem.classHrs}</strong>
                </div>
                <div >
                  <strong>{classItem.labHrs}</strong>
                </div>
                <div style={{color: "blue"}}>
                  <strong>{classItem.totalHrs}</strong>
                </div>
              </div>
            </div>
          )
        }
        
      </main>
    </div>
  )
}

export default Home

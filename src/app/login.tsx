import styles from '../styles/login.module.css'


import LoginCard from '../components/loginCard/loginCard'



export default function LoginPage(){
    return (
        <div className={styles.background}> 
            <LoginCard/>
        </div>
    )
}
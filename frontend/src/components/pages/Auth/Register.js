import { useState, useContext } from 'react'

import Input from '../../form/Input'

import styles from '../../form/Form.module.css'
import { Link } from 'react-router-dom'


/* Contexts */
import { Context } from '../../../context/UserContext'

function Register() {

    const [user , setUser] = useState({})
    const { register } = useContext(Context)

    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        // send user to data base
        register(user)
    }

    return(
        <section className={styles.form_container}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <Input  
                    text="Nome"
                    type="text"
                    name="name"
                    placeholder="Digite o seu nome"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Telefone"
                    type="text"
                    name="phone"
                    placeholder="Digite o seu telefone"
                    handleOnChange={handleChange}
                />
                <Input 
                    text="Email"
                    type="email"
                    name="email"
                    placeholder="Digite o seu email"
                    handleOnChange={handleChange}
                />
                <Input 
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite a seu senha"
                    handleOnChange={handleChange}
                />
                <Input 
                    text="Confirmação de senha"
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirme a sua senha"
                    handleOnChange={handleChange}
                />
                <input type="submit" value="Cadastrar"/>
            </form>
            <p>Já tem conta? <Link to='/login'>Clique aqui!</Link></p>
        </section>
    )
}

export default Register
"use client";
import Link from "next/link";

import * as $ from './styles';


export default function LoginPage() {
  return (
    <>
      <title>Fazer login nas Contas do Google</title>

      <section>
      <div>
        <img src="../images/googleimg.png" alt="Google icon" />
        <h1>Fazer login</h1>
        <h3>Use sua Conta do Google</h3>
      </div>

      <form>
      <$.Container>
        <$.Input type="text" placeholder="Email ou telefone"/>
      </$.Container>
      <div>
      <ul>
        <li>
          <Link href='/forgotEmail'>Esqueceu seu e-mail?</Link>
        </li>
      </ul>        
      </div>

      <p>Não está no seu computador? Use uma janela privada para fazer login. Saiba mais</p>

      <div>
        <button type="submit">Avançar</button>
      </div>
      </form>

      </section>

      
    </>
  )
}

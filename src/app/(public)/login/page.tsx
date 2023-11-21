"use client";
import Link from "next/link";

import * as $ from './styles';


export default function LoginPage() {
  return (
    <>
      <title>Fazer login nas Contas do Google</title>

      <$.Body>
      <$.Content>

        <img src="../images/googleimg.png" alt="Google icon" />
        <h1>Fazer login</h1>
        <h3>Use sua Conta do Google</h3>          


      <form>
      <$.Container>
        <$.Input type="text" placeholder="Email ou telefone"/>
      </$.Container>
      <div>
      <button type="button">Esqueceu seu e-mail?</button>
      </div>

    <div>
      Não está no seu computador? Use uma janela privada para fazer login. <a href="https://support.google.com/accounts?p=signin_privatebrowsing&amp;hl=pt-BR" target="_blank" aria-label="Saiba mais sobre como usar o Modo visitante">Saiba mais</a>
    </div>


      <div>
        <Link href='signup'>Criar conta</Link>
        <button type="submit">Próxima</button>
      </div>
      </form>

      </$.Content>

              
      </$.Body>

    </>
  )
}

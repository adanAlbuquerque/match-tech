"use client";
import Link from "next/link";
import * as $ from './styles';

export default function LoginPage() {
  return (
    <>
      <title>Fazer login nas Contas do Google</title>

      <$.Body>
        <$.Section>
        <$.Header>
          <img src="../images/googleimg.png" alt="Google icon" />
          <h1>Fazer login</h1>
          <h3>Use sua Conta do Google</h3>    
        </$.Header>


          <$.Form>
            <div>
              <input type="text" placeholder="Email ou telefone" />
            </div>

            <div>
              <button type="button">Esqueceu seu e-mail?</button>
            </div>

            <p>
              Não está no seu computador? Use uma janela privada para <br/>fazer login. <a href="https://support.google.com/accounts?p=signin_privatebrowsing&amp;hl=pt-BR" target="_blank" aria-label="Saiba mais sobre como usar o Modo visitante">Saiba mais</a>
            </p>


          </$.Form>
            <div>
              <Link href='signup'>Criar conta </Link>
              <input type="submit" value="Avançar"/>
            </div>
        </$.Section>
      </$.Body>
    </>
  );
}

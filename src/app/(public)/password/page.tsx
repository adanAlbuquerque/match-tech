"use client";
import Link from "next/link";
import * as $ from './styles';

export default function PasswordPage() {
  return (
    <>
      <title>Fazer login nas Contas do Google</title>

      <$.Body>
        <$.Section>
        <$.Header>
          <img src="../images/googleimg.png" alt="Google icon" />
          <h1>Olá!</h1>
          <input type="button" value="email.cpm"/>
        </$.Header>


          <$.Form>
            <div>
              <input type="text" placeholder="Digite sua senha" />
            </div>

          </$.Form>
           <div>
            <$.Checkbox type="checkbox" name="scales"/> 
            <span>Mostrar senha </span>
          </div>
            <div>
            <p><Link href='signup'>Esqueceu a senha?</Link></p>

              <Link href='password'><input type="submit" value="Avançar"/></Link>              

            </div>
        </$.Section>
      </$.Body>
    </>
  );
}

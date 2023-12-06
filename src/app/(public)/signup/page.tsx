"use client";
import Link from "next/link";
import * as $ from './style';

export default function Signup() {
  return (
    <>
      <title>Criar Sua conta do Google</title>

      <$.Body>
        <$.Section>
        <$.Header>
          <img src="../images/googleimg.png" alt="Google icon" />
          <h1>Criar uma conta do Google</h1>
          <h3>Insira seu nome</h3>    
        </$.Header>


          <$.Form>
            <div>
              <input type="text" placeholder="Nome" />
            </div>

            <div>
              <input type="text" placeholder="Sobrenome (Opcional)" />
            </div>


          </$.Form>
            <div>
            <Link href='signup2'><input type="submit" value="Avançar"/></Link>
            </div>
        </$.Section>
      </$.Body>
    </>
  );
}

import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <title>Página de Login!</title>

      <form>
      <div>
        <input typeof="text" placeholder="Email ou telefone"/>
      </div>
      <div>
      <ul>
        <li>
          <Link href='/forgotEmail'>Esqueceu seu e-mail?</Link>
        </li>
      </ul>        
      </div>

      <div>
        <button type="submit">Avançar</button>
      </div>
      </form>

      
    </>
  )
}

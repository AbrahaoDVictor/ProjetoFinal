import { use, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

export const Login = () => {
  const {login} = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  async function handleSubmit(e) {
    e.preventDefault()
    setError("");
    try{
      await login(email, password)
      navigate("/home")
    }
    catch{
      setError("Email ou Senha incorreto")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        {error && <p>{error}</p>}
        <label>
          <span>DIGITE SEU EMAIL:</span>
          <input type="email" name="email" id="email" value= {email} onChange={(e)=> setEmail(e.target.value)} placeholder="Digite seu email"/>
        </label><br />
        <label>
          <span>DIGITE SUA SENHA:</span>
          <input type="password" name="password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Digite sua senha"/>
        </label><br />
        <button type="submit" onClick={handleSubmit}>ENTRAR</button>
      </form>
    </div>
  )
}
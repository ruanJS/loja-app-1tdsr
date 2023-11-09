"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
//IMPORTAÇÃO DO REACT E DO HOOK useState.
import {useState} from "react";

export default function CadUsers({params}) {

        //MSG ERRO
        const [msg, setMsg] = useState("");

        //REDIRECIONADOR DE PÁGINAS DO NEXT.
        const navigate = useRouter();

        //ESTRUTURA DE DADOS PARA ARMAZENAR O USUÁRIO.
        const [usuario,setUsuario] = useState({
            "info":"cadastro",
            "id":"",
            "nome":"",
            "email":"",
            "senha":""
        });
        //A FUNÇÃO ABAIXO QUE É RESPONSÁVEL POR PREENCHER O ESTADO COM OS DADOS DO USUÁRIO.
        const handleChange = (e) => {
            //DESESTRUTURANDO OS INPUTS DO FORMULÁRIO DE LOGIN PARA PREENCHER O ESTADO.
            const {name,value} = e.target;
            //ATUALIZANDO O ESTADO DO USUÁRIO.
            setUsuario({...usuario,[name]:value});
        }
        //A FUNÇÃO ABAIXO QUE É RESPONSÁVEL POR VALIDAR O LOGIN DO USUÁRIO E RETORNAR UMA MENSAGEM DE SUCESSO OU ERRO.
        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                
                //Realizando a requisição para o backend.
                const response = await fetch("http://localhost:3000/api/base/base-users",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(usuario)
                });

                //Verificando se a requisição foi bem sucedida.
                if(response.ok){
                    const data = await response.json();

                    //Verificando se o usuário existe.
                    if(data.status){

                        //REDIRECIONANDO O USUÁRIO PARA A PÁGINA DE HOME.
                        setMsg("Cadastro realizado com sucesso!");
                        setTimeout(() => {
                            setMsg("");
                           window.location.href = "/login";
                        }, 5000);
                        
                    }else{
                        //Caso ocorra alguma problema no cadastro, iremos limpar o estado e redirecionar o usuário para a página de cadastro mesmo.
                        setMsg("Ocorreu um erro ao realizar o cadastro!");
                        //REDIRECIONANDO O USUÁRIO PARA A PÁGINA DE LOGIN.
                        setTimeout(() => {
                            setMsg("");
                        }, 5000);
                    }
                }

            } catch (error) {
                //REDIRECIONANDO O USUÁRIO PARA A PÁGINA DE ERRO.
                //IREMOS REDIRECIONAR O USUÁRIO PARA A PÁGINA DE 404
                console.log(error);
                navigate.push("/error");
            }
        }

  return (
    <div>
        <h1>Cadastro de Usuários</h1>
        <h2 className="bg-orange-500 text-4xl">{msg}</h2>
        <div className="forms-login-cad">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>CADASTRO</legend>
                  <div>
                        <label htmlFor="idNome">Nome:</label>
                        <input type="text" name="nome" id="idNome" placeholder="Digite seu Nome." value={usuario.nome} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="idEmail">Email:</label>
                        <input type="email" name="email" id="idEmail" placeholder="Digite seu Email." value={usuario.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="idSenha">Senha:</label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite sua Senha." value={usuario.senha} onChange={handleChange}/>
                    </div>
                    <div>
                        <button>Cadastrar</button>
                    </div>
                    <div>
                        <p>Se você já tem cadastro conosco. <Link href="/login">CLIQUE AQUI</Link></p>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
  )
}

import {promises as fs} from "fs"
import { NextResponse } from "next/server";

const file = await fs.readFile(process.cwd() + "/src/app/api/base/data.json", "utf8");

export async function GET(){

    //PARSEANDO A BASE DE DADOS DOS USUÁRIOS
    const body = JSON.parse(file);

    //RETORNANDO UM STATUS.
    return NextResponse.json(body); 

}


const handleLogin = async (email,senha) => {
    const body = await JSON.parse(file);

    //Sistema de validação de login, retornando um usuário válido, ou undefined caso não encontre.    
    const usuarioValidado = body.usuarios.find((user) => user.email == email && user.senha == senha);

    return usuarioValidado;
}


export async function POST(request,response){

    //RECEBENDO OS DADOS ENVIADOS NA REQUISIÇÃO!
    const {id,nome,email,senha,info} = await request.json();

    if(info == "login"){
        //VALIDANDO O LOGIN
        const uv = await handleLogin(email,senha);

        //CASO O USUÁRIO SEJA VÁLIDO, RETORNA TRUE, CASO CONTRÁRIO, RETORNA FALSE.
        if(uv){
            return NextResponse.json({"status":true,"usuario":uv});
        }
    }else if(info == "cadastro"){
        
    }

    return NextResponse.json({"status":false});
}
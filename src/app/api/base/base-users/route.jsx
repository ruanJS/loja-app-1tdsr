import {promises as fs} from "fs"
import { NextResponse } from "next/server";
import { cwd } from "process";

const file = await fs.readFile(process.cwd() + "/src/app/api/base/data.json", "utf8"); 

export async function GET(){

    //parseando a base de dados dos usuarios
    const body = JSON.parse(file);

    //retornadno um status
    return NextResponse.json(body);

}

export async function POST(request,response){

    //recebendo os dados enviados na requisição
    const usuario = await request.json();

    const body = await JSON.parse(file);

    for (let x = 0; x < body.usuarios.length; x++) {
        const u = body.usuarios[x];


        if(u.email == usuario.email && u.senha == usuario.senha){
            return NextResponse.json({"status":"ok"});
        }
        
    }

    //retorno da requisição!
    return NextResponse.json({"status":"error"});

}
import Link from "next/link"
import React from 'react'

export default function Post(params){
    return(
        <div>
            <h1>POST!</h1>
            <div>
                <ul>
                    <li><Link href="/post">POST</Link></li>
                    <li><Link href="/post/post1">POST</Link></li>
                    <li><Link href="/post/post2">POST</Link></li>
                </ul>
            </div>
        </div>
    )
}
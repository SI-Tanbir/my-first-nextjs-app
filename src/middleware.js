import { NextResponse } from "next/server"

export function middleware(request){
 
    console.log('middleware trigger')
    return NextResponse.redirect(new URL('/', request.url))


}

export const config ={

    // matcher:'/dashboard'
    matcher : ['/dashboard','/service']
    
}
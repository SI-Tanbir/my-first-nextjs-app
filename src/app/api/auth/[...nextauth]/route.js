

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"


export const authOptions={


    secret: process.env.NEXTAUTH_SECRET, //adding secret here

    // first create session
    session:{
        strategy:'jwt'
    },
    //setting up provider
    providers:[

        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" }
            },

            // it recevie the
            async authorize(credentials){
                const {email,password}=credentials
                if(!credentials){
                    return null;
                }
                else{
                    return {...credentials}

                }
            }

        })

    ],
 
    // call back added extra data like admin role
    // callback

    //seetting up pages where the page whill show up
    // page:[

    // ]

}

const handler =NextAuth(authOptions)


export {handler as GET , handler as POST}

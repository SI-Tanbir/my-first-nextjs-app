

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const handler =NextAuth({

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
                if(!credentials){
                    return null;
                }
                else{
                    return true
                }
            }

        })

    ],

    //seetting up pages where the page whill show up
    // page:[

    // ]

})
export {handler as GET , handler as POST}

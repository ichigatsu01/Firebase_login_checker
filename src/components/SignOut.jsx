import { Button } from '@mui/material'
import React from 'react'
import { auth } from '../firebase'
import Message from './Message';

function SignOut({user}) {
    const signOutBtn = () => {
        auth.signOut()
        .then(() => {
            console.log("ログアウト成功！");
        })
        .catch((error) => {
            console.error("ログアウト失敗: ", error);
        });
    }
  return (
        <div>
            <p><Button onClick={signOutBtn} variant="contained">ログアウト</Button></p>
            <Message user={user}/>

        </div>
  )
}

export default SignOut
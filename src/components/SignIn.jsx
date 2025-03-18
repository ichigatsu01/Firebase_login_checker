import { Button } from '@mui/material'
import React from 'react'
import firebase from 'firebase/compat/app';
import { auth } from '../firebase.js';

function SignIn() {
  function signInWithGoogle() {
    
    // firebaseからの情報取得
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);

    // 現在時刻およびメッセージの取得

  }
  return (
    <div>
      <Button onClick={signInWithGoogle} variant="contained" id='google-login'>Googleでログインする</Button>
    </div>
  )
}

export default SignIn
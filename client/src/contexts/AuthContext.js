import React, { useContext, useState, useEffect } from "react"
import { auth } from "../config/firebase-config"
import firebase from "firebase/app"
import { getUserViaThirdParty} from "../api/auth";

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [userProfilePicture, setUserProfilePicture] = useState('');
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
               .then(x => console.log(x)).catch(err => console.log(err));
  }

  function loginWithGMail() {
    return auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  function loginWithFacebook() {
    return auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user == null) {
        setLoading(false);
        return;
      }

      localStorage.setItem('profile_picture', user.photoURL);
      setUserProfilePicture(user.photoURL);

      localStorage.setItem('name', user.displayName);
      setUserName(user.displayName);

      var userObject = {
        name: user.displayName,
        tokenId: user.Aa,
      };

      getUserViaThirdParty(userObject)
            .then((res) => {
              localStorage.setItem('accessToken', res.data.accessToken);
              setCurrentUser(res.data.accessToken);
            })
            .catch(() => {});  
      
      setLoading(false)

    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    setCurrentUser,
    userProfilePicture,
    setUserProfilePicture,
    userName,
    setUserName,
    login,
    loginWithGMail,
    loginWithFacebook,
    signup,
    logout,
    resetPassword,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
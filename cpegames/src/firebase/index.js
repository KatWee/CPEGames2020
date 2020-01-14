import firebase from 'firebase/app'
// import * as firebase from "firebase/app";

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
// require('firebase/auth')
import config from './config'
// require('firebase/database')

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const auth = firebase.auth()
const firestore = firebase.firestore()
const database = firebase.database()
// export default auth
export default database
export {firestore, auth, database}
// export default {auth, firestore}
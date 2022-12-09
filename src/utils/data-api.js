import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../config/firebase/firebase";
import { getDatabase, ref, push, onValue ,set,remove} from "firebase/database";

export const registerPage = (data) => {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        const errorMessage = error.code;
        reject(errorMessage);
      });
  });
};
export const registerPageWithGogle = () => {
  return new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        resolve(user, token);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        reject(errorCode, email, credential);
      });
  });
};

export const loginByEmailPass = (data) => {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        reject(errorCode)
      });
  });
};

export const saveData = (data) => {
    return new Promise((resolve , reject) => {
        const db = getDatabase()
        push(ref(db, 'users/' + data.userId + '/nextUp'),{
            judul: data.judul,
            deadline: data.deadline,
            content: data.content,
            step: "nextUp"
        }).then(() => {
            resolve(true)
        })
        .catch((error => {
            console.log(error);
            reject(false)
        }))
    })
}

export const inProgres = (data,userId) =>  {
    return new Promise((resolve , reject) => {
        const db = getDatabase()
        push(ref(db, `users/${userId}/inProgres`),{
            judul: data.value.judul,
            deadline: data.value.deadline,
            content: data.value.content,
            step: "inProgres"
        }).then(() => {
            resolve(true)
        })
        .catch((error => {
            reject(false)
        }))
    })
}

export const Completed = (data,userId) =>  {
    return new Promise((resolve , reject) => {
        const db = getDatabase()
        push(ref(db, `users/${userId}/Completed`),{
            judul: data.value.judul,
            deadline: data.value.deadline,
            content: data.value.content,
            step: "Completed"
        }).then(() => {
            resolve(true)
        })
        .catch((error => {
            reject(false)
        }))
    })
}

export const getData = (id) => {
    return new Promise((resolve , reject) => {
        const db = getDatabase();
        const starCountRef = ref(db,`users/${id}/nextUp`)
        onValue(starCountRef, (snapshot) => {
            const data = []
            if(snapshot.val() != null){
                Object.keys(snapshot.val()).forEach(e => {
                    data.push({
                        id: e,
                        value: snapshot.val()[e]
                    })
                })
            }
            resolve(data)
        });
    })
}

export const getDataInProgres = (id)  => {
    return new Promise((resolve , reject) => {
        const db = getDatabase();
        const starCountRef = ref(db,`users/${id}/inProgres`)
        onValue(starCountRef, (snapshot) => {
            const data = []
            if(snapshot.val() != null){
                Object.keys(snapshot.val()).forEach(e => {
                    data.push({
                        id: e,
                        value: snapshot.val()[e]
                    })
                })
            }
            resolve(data)
        });
    })
}

export const getDataCompleted = (id) => {
    return new Promise((resolve , reject) => {
        const db = getDatabase();
        const starCountRef = ref(db,`users/${id}/Completed`)
        onValue(starCountRef, (snapshot) => {
            const data = []
            if(snapshot.val() != null){
                Object.keys(snapshot.val()).forEach(e => {
                    data.push({
                        id: e,
                        value: snapshot.val()[e]
                    })
                })
            }
            resolve(data)
        });
    })
}

export const updateData = (data,action,id) => (dispatch) => {
    return new Promise((resolve , reject) => {
        dispatch({type: "LOADING", value: true})
        const db = getDatabase()
        set(ref(db, `users/${id}/${action}/${data.id}`),{
            judul: data.judul,
            deadline: data.deadline,
            content: data.content,
            step:action
        }).then(() => {
            dispatch({type: "LOADING", value: false})
            dispatch({type: "SENDING_SUCCES", value: 'true'})
            resolve(true)
        })
        .catch((error => {
            console.log(error)
            dispatch({type: "SENDING_SUCCES", value: true})
            dispatch({type: "LOADING", value: false})
            reject(false)
        }))
    })
}

export const deleteData = (id,userId,type,action) =>  {
    const db = getDatabase()
    remove(ref(db, `users/${userId}/${action}/${id}` ))
    .then(() => {
        if(type !== 'move'){
            alert('Delete succes')
        }
    })
    .catch(error => {
        console.log(error)
    })
}

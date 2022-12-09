import { loading } from "./customToast";

export const validasiFormRegisLogin = (response) => {
    if (response === "auth/invalid-email") {
      loading(true,"Maff email tidak valid");
    } else if (response === "auth/internal-loading") {
      loading(true,"Password harus terisi");
    } else if (response === "auth/weak-password") {
      loading(true,"Minimal password 6 karacter");
    } else if (response === "auth/email-already-in-use") {
      loading(true,"Email sudah terdaftar");
    } else if (response === "auth/user-not-found") {
      loading(true,"Account belum terdaftar");
    } else if (response === "auth/wrong-password") {
      loading(true,"Password tidak valid");
    } else if (response === "auth/too-many-requests") {
      loading(true,"To many request, please refresh page");
    }
     else if (response.uid !== undefined) {
        loading(false,"Succes");
    }
  };
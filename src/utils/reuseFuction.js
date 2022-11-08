export const validasiFormRegisLogin = (response) => {
  if (response === "auth/invalid-email") {
    alert("Maff email tidak valid");
  } else if (response === "auth/internal-error") {
    alert("Password harus terisi");
  } else if (response === "auth/weak-password") {
    alert("Minimal password 6 karacter");
  } else if (response === "auth/email-already-in-use") {
    alert("Email sudah terdaftar");
  } else if (response === "auth/user-not-found") {
    alert("Account belum terdaftar");
  }
   else if (response.uid !== undefined) {
    console.log("login berhasil");
  }
};

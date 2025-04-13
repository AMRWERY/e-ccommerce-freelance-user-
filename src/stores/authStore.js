import { auth, db } from "@/firebase";
import {
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    error: null,
    role: null,
    isOverlayVisible: false,
  }),

  actions: {
    async init() {
      await setPersistence(auth, browserLocalPersistence);
      const user = auth.currentUser;
      if (user) {
        await this.fetchUserData(user.uid);
        // this.user = user;
      }
    },

    async fetchUserData(uid) {
      try {
        const userDocRef = doc(db, "users", uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (userData.birthDate?.toDate) {
            const date = userData.birthDate.toDate();
            userData.birthDate = `${date.getFullYear()}-${String(
              date.getMonth() + 1
            ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
          }
          this.user = { ...userData };
          this.role = userData.role || "user";
          // console.log('user data:', userData)
        } else {
          throw new Error("User data not found");
        }
      } catch (err) {
        this.error = err.message;
        throw err;
      }
    },

    async loginWithGoogle() {
      this.isOverlayVisible = true;
      try {
        await setPersistence(auth, browserLocalPersistence);
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        this.user = user;
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        let userData;
        if (!userDoc.exists()) {
          userData = {
            uid: user.uid,
            email: user.email,
            firstName: user.displayName?.split(" ")[0] || "FirstName",
            lastName: user.displayName?.split(" ")[1] || "LastName",
            role: "user",
            loginType: "google",
            createdAt: new Date(),
          };
          await setDoc(userDocRef, userData);
        } else {
          userData = userDoc.data();
        }
        const sessionUserData = {
          uid: userData.uid,
          email: userData.email,
          firstName: userData.firstName,
          lastName: userData.lastName,
          role: userData.role,
          loginType: userData.loginType,
        };
        localStorage.setItem("user", JSON.stringify(sessionUserData));
        this.role = userData.role || "user";
        await this.fetchUserData(user.uid);
        setTimeout(() => {
          this.isOverlayVisible = false;
        }, 3000);
        this.error = null;
      } catch (err) {
        this.error = err.message;
        throw err;
      }
    },

    async logoutUser() {
      this.isOverlayVisible = true;
      try {
        await signOut(auth);
        this.user = null;
        this.role = null;
        this.error = null;
        [
          // "cart",
          // "order-summary",
          // "locale",
          "user",
        ].forEach((key) => {
          localStorage.removeItem(key);
        });
        setTimeout(() => {
          this.isOverlayVisible = false;
        }, 3000);
      } catch (err) {
        this.error = err.message;
        throw err;
      }
    },
  },

  getters: {
    isAuthenticated: (state) => !!state.user,
  },
});

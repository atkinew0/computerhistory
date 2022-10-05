import { initializeApp } from "firebase/app";
import { getDatabase, ref, update } from "firebase/database";

const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://computerhistor-default-rtdb.firebaseio.com/",
  };

  const app = initializeApp(firebaseConfig);

  export const db = getDatabase(app);

  

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function uploadFile(file) {
  const storage = getStorage();
  const storageRef = ref(storage, "images/" + file.name);
  return uploadBytes(storageRef, file).then((snapshot) =>
    getDownloadURL(storageRef)
  );
}

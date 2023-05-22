"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = exports.storage = void 0;
const app_1 = require("firebase/app");
const storage_1 = require("firebase/storage");
const uuid_1 = require("uuid");
const firebaseConfig = {
    apiKey: "AIzaSyA5gNSkG5cZiKnoHSA-G4gdGiyp5HlTcl4",
    authDomain: "moviesapi-fe493.firebaseapp.com",
    projectId: "moviesapi-fe493",
    storageBucket: "moviesapi-fe493.appspot.com",
    messagingSenderId: "601216349694",
    appId: "1:601216349694:web:071c32dbed8b46fda37caf"
};
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.storage = (0, storage_1.getStorage)(app);
async function uploadFile(file) {
    const storageRef = (0, storage_1.ref)(exports.storage, (0, uuid_1.v4)());
    const metadata = {
        contentType: 'image/jpeg',
    };
    await (0, storage_1.uploadBytes)(storageRef, file.buffer, metadata);
    const imgUrl = await (0, storage_1.getDownloadURL)(storageRef);
    return imgUrl;
}
exports.uploadFile = uploadFile;
//# sourceMappingURL=fb.config.js.map
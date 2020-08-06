import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyBxoLwtrhT8kD40F-MM-303Dk2dHCt2Qco",
	authDomain: "hezarfen-ucs.firebaseapp.com",
	databaseURL: "https://hezarfen-ucs.firebaseio.com",
	projectId: "hezarfen-ucs",
	storageBucket: "hezarfen-ucs.appspot.com",
	messagingSenderId: "244607225144",
	appId: "1:244607225144:web:fe9976bc62d276f58245cd",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

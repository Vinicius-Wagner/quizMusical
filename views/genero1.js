// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXoOJCzP3pC7z1Sm_x84gWHp1s5fBPPvQ",
  authDomain: "quizmusicalfb.firebaseapp.com",
  projectId: "quizmusicalfb",
  storageBucket: "quizmusicalfb.appspot.com",
  messagingSenderId: "862678532253",
  appId: "1:862678532253:web:d66874d535b17311b11474",
  measurementId: "G-BF35MG0RP4"
};

// Inicialize o Firebase
const app = firebase.initializeApp(firebaseConfig);

// Referência para a coleção 'perguntas'
const db = firebase.firestore();
const perguntasRef = db.collection('perguntas');


window.onload = function() {
    getQuestions();
  };

// Função para obter e exibir os dados na tela
function getQuestions() {
  perguntasRef.get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const versoMusica = data.verso; // Supondo que o campo do Firestore seja 'verso'

        console.log("Verso da música:", versoMusica);
        // Atualize o elemento na tela com o verso da música
        document.getElementById('container__verso').textContent = versoMusica;
        // Adicione outras lógicas conforme necessário para exibir os dados
      });
    })
    .catch((error) => {
      console.log("Erro ao obter perguntas:", error);
    });
}

// Chame a função para carregar as perguntas quando a página carregar

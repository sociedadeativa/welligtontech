/**
 * WelligtonTech - Preparação para futura integração com Firebase
 * 
 * NOTA: De acordo com os requisitos do projeto, este arquivo contém apenas
 * a estrutura arquitetural e tipagens preparatórias para futura ativação
 * do Firebase Authentication e Cloud Firestore sem gerar custos ou dependências
 * ativas no momento atual.
 */

export interface FirebaseClientConfig {
  apiKey?: string;
  authDomain?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
}

export const futureFirebaseConfig: FirebaseClientConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

export const isFirebaseConfigured = (): boolean => {
  return Boolean(futureFirebaseConfig.apiKey && futureFirebaseConfig.projectId);
};

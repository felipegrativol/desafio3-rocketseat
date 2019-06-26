import Reactotron, { overlay } from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import reactotronSaga from "reactotron-redux-saga";

console.tron = console;

const tron = Reactotron.configure({ host: "10.0.0.116" }) // controls connection & communication settings
  .useReactNative()
  .use(reactotronRedux())
  .use(reactotronSaga())
  .connect();

console.tron = tron;

tron.clear(); // Limpa a tela do Reactotron a cada reload

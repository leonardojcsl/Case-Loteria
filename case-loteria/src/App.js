import Header from "./components/Header";
import SelectLotteries from "./components/SelectLotteries";
import Router from "./routes/Router";

function App() {
  return (
    <div>
      <Header />
      <SelectLotteries/>
      <Router />
    </div>
  );
}

export default App;

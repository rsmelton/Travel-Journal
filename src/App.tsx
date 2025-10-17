import Header from "./components/Header";
import Entries from "./components/Entries";
import Entry from "./components/Entry";
import entriesData from "./entriesData";

function App() {
  return (
    <>
      <Header />
      <Entries>
        {entriesData.map((entry) => {
          return <Entry key={entry.id} entry={entry} />
        })}
      </Entries>
    </>
  );
}

export default App;

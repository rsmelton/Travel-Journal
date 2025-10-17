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
          return (
            <Entry
              imageURL={entry.image.src}
              imageAlt={entry.image.alt}
              country={entry.country}
              googleMapsURL={entry.googleMapsURL}
              location={entry.location}
              date={entry.date}
              description={entry.description}
            />
          );
        })}
      </Entries>
    </>
  );
}

export default App;

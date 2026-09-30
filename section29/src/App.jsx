import Accordion from "./components/Accordion/Accordion";
import PLACES from "./components/SearchableList/places";
import SearchableList from "./components/SearchableList/SearchableList";
import Place from "./Place";

function App() {
  return <main>
    <section>
      <h2>HTML</h2>
      <Accordion className="accordion">
        <Accordion.Item id="html"  className="accordion-item">
          <Accordion.Title id="html" className="accordion-item-title">
              Hyper text markup lang
          </Accordion.Title >
          <Accordion.Content id="html" className="accordion-item-content">
            <article>
            <p>Create structure of web page</p>
          </article>
          </Accordion.Content>
          
        </Accordion.Item>

        <Accordion.Item id="css" className="accordion-item">
          <Accordion.Title id="css" className="accordion-item-title">
              cascading style sheets
          </Accordion.Title >
          <Accordion.Content id="css" className="accordion-item-content">
            <article>
            <p>To apply styles</p>
          </article>
          </Accordion.Content>
          
        </Accordion.Item>

        <Accordion.Item id="js" className="accordion-item">
          <Accordion.Title id="js" className="accordion-item-title">
              Javascript
          </Accordion.Title >
          <Accordion.Content id="js" className="accordion-item-content">
            <article>
            <p>To apply interactivity</p>
          </article>
          </Accordion.Content>
          
        </Accordion.Item>
      </Accordion>
    </section>
    <section>
      <SearchableList items={PLACES} itemKeyFn={(item)=> item.id}>
        {(item)=> <Place item={item}/>}
      </SearchableList>
      <SearchableList items={['item1', 'item2']} itemKeyFn={(item)=> item}>
        {(item)=> item}
      </SearchableList>
      
    </section>
  </main>
}

export default App;

import Heading from './components/Heading'
import { Section } from './components/Section'
import Counter from './components/Counter'
import List from './components/List'

function App() {

  return (
    <>
      <Heading title={"hello"}/>
      <Section title={"Different Subheading"}>This is my Section.</Section>
      <Counter />
      <List 
        items={["Coffee", "Gyros", "Pizza", "Code"]} 
        render={(item: string) => <span className='gold'>{item}</span>}
      />
    </>
    )
}

export default App
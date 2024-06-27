import { RegularList } from './RegularList';
import { SplitScreen } from './SplitScreen';
import { SmallPersonListItem } from './people/SmallPersonListItem';
import { LargePersonListItem } from './people/LargePersonListItem';
import { SmallProductListItem } from './products/SmallProductListItem';
import { LargeProductListItem } from './products/LargeProductListItem';
import { NumberedList } from './NumberedList';
import { Modal } from './Modal';

const people = [{
  name: 'Keiru',
  age: 23,
  hairColor: 'black',
  hobbies: ['coding', 'reading', 'gaming']
}, {
  name: 'Kamau',
  age: 25,
  hairColor: 'brown',
  hobbies: ['coding', 'swimming', 'gaming']
}, {
  name: 'kurt',
  age: 25,
  hairColor: 'brown',
  hobbies: ['runninng', 'reading', 'gaming']
}, {
  name: 'clark',
  age: 25,
  hairColor: 'brown',
  hobbies: ['coding', 'reading', 'gaming']
}, {
  name: 'jems',
  age: 25,
  hairColor: 'brown',
  hobbies: ['coding', 'reading', 'gaming']
}, {
  name: 'val',
  age: 25,
  hairColor: 'brown',
  hobbies: ['coding', 'reading', 'gaming']
}, {
  name: 'van',
  age: 25,
  hairColor: 'brown',
  hobbies: ['coding', 'reading', 'gaming']
}];

const products = [{
  name: 'Laptop',
  price: 1200,
  description: 'A laptop computer',
  rating: 4.5
}, {
  name: 'Phone',
  price: 800,
  description: 'A mobile phone',
  rating: 4.0
}, {
  name: 'Tablet',
  price: 500,
  description: 'A tablet computer',
  rating: 3.5
}, {
  name: 'Smartwatch',
  price: 300,
  description: 'A smartwatch',
  rating: 4.2
}, {
  name: 'Desktop',
  price: 1500,
  description: 'A desktop computer',
  rating: 4.7
}, {
  name: 'Monitor',
  price: 400,
  description: 'A computer monitor',
  rating: 4.0
}, {
  name: 'Keyboard',
  price: 100,
  description: 'A computer keyboard',
  rating: 4.1
}];


const LeftHandComponent = ({ name }) => {
  return <p style={{ backgroundColor: 'green'}}>
    {name}
    <RegularList
      items={people}
      resourceName="person"
      itemComponent={SmallPersonListItem} />

      <NumberedList
      items={products}
      resourceName="product"
      itemComponent={SmallProductListItem} />
    </p>;
}

const RightHandComponent = ({ message}) => {
  return <p style={{ backgroundColor: 'red'}}>
    {message}

    <RegularList
      items={people}
      resourceName="person"
      itemComponent={LargePersonListItem} />
    <RegularList
      items={products}
      resourceName="product"
      itemComponent={LargeProductListItem} />
  </p>;
}

function App() {
  return (
      // <SplitScreen 
      // left={LeftHandComponent}
      // right={RightHandComponent}
      // leftWeight={1}
      // rightWeight={3}/>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <Modal>
          <LeftHandComponent name="Keiru"/>
        </Modal>
        <RightHandComponent message="wow"/>
      </SplitScreen>
  );
}

export default App;

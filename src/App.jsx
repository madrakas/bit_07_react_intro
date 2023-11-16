import './App.css';
import { Student } from './components/comp-param/Student';
import { User } from './components/comp-param/User';
import { Item } from './components/component/Item';
import { SimpleList } from './components/list/SimpleList';
import { ListWithMap } from './components/list/ListWithMap';
import { ListWithForLoop } from './components/list/ListWithForLoop';
import { Counter } from './components/counter/Counter';
import { From } from './components/form/Form';
import { Todo } from './components/todo/Todo';
import { Cart } from './components/cart/Cart';

function App() {
  

  return (
    <div className="App">
      <h2>Props from child to parent</h2>
      <Cart />
      
      <h2>useState() hooks'as</h2>
      <Todo/>
      <Counter/>
      <From/>

      <h2>Sąrašų generavimas</h2>
      <SimpleList />
      <ListWithMap/>
      <ListWithForLoop/>
      {/* Komponentnas su parametrais */}

      <User name="Jonas" age={99} />
      <User name="Marytė" age={88} />
      <User name="Petras" age={77} />
      <User name="Ona" age={66} />
      <Student name="Jonas" age={99} />
      <Student name="Marytė" age={88} />
      <Student name="Petras" age={77} />
      <Student name="Ona" age={66} />
      
      
      <h2>Tiesiog komponento panaudojimas</h2>
      <Item/>
      <Item></Item> 
    </div>
  );
}

export default App;

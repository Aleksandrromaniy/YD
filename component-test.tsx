/*
TEST 1
Add functional unit tests for the BaseComponent which should test the following things -
- Changing the props of the component changes the content of the component
- Changing the input updates the component and age is changed and displayed correctly in the component.

You're free to be creative & use any library needed. Please document all scenarios necessary and add useful comments.
*/
import React, {useState, ChangeEvent} from 'react';


type Props = {
  name: string;
}

function BaseComponent(props: Props) {
  const [age, setAge] = useState<number>(18);
  return (
    <div>
      <p id="name">Name: {props.name}</p>
      <br/>
      <p id="age">Age: {age}</p>
      <br/>
      <input type="number" onChange={(event: ChangeEvent<HTMLInputElement>) => setAge(parseInt(event.target.value, 10))} />
    </div>
  )
}
export default BaseComponent;

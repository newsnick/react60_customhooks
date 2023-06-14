// Custom Hooks
// is used to separate business layer and presentation layer
// custom hook is responsible to return some result of certrain business logic.
// so we will never return jsx from our cutom hook
// custom hooks are also used for reusability of functionality.
// custom hook name should start with use keyword.
// custom hook can also costist of predefined hooks
// custom hook component should be return within curly braces

import LoginForm from './LoginForm'
//import UserForm from './UserForm'

function App() {
  return (
    <div>
      {/* <UserForm /> */}
      <LoginForm />
    </div>
  )
}

export default App

import "./App.css";
import ContactUsForm from "./Components/contactUsForm";
import FormGuide from "./Components/formGuide";
import LoginSignUpModal from "./Components/Common/LoginSignUpModal";
function App() {
  return (
    <div className="App">
      {/* <ContactUsForm /> */}
      <LoginSignUpModal />
      <FormGuide />
    </div>
  );
}

export default App;

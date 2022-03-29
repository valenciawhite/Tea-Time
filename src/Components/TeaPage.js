import About from "./About";
import Search from "./Search";
import TeaList from "./TeaList";
import TeaReviewForm from "./TeaReviewForm";

function TeaPage() {
  
    return (
      <div className='TeaPage'>
      <About /> 
      <Search /> 
      <TeaList /> 
      <TeaReviewForm /> 
      </div>
    );
  }
  
  export default TeaPage;
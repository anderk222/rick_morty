import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {

  const location = useLocation();
  const navigate = useNavigate();


  console.log(location.pathname)
  return (
    <div>HomePage</div>
  )
}

export default HomePage;
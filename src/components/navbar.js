
function Navbar(props) {
     return (
          <div>
               <ul>
                    <li>{props.name}</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
               </ul>
          </div>
     );
}

export default Navbar;

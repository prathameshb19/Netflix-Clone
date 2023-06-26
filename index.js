// ReactDOM.render(<h1 className="header">Hello,everyone!!</h1>,document.getElementById("root"))
//ReactDOM.render(<p>Hello this is Prathamesh here</p>,document.getElementById("root"))
//ReactDOM.render(<ul><li>Thing1</li><li>Thing2</li></ul>,document.getElementById("root"))
// function MainContent() {
//     return (
//         <h1>I'm Learning React</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <MainContent/>
//     </div>,
//     document.getElementById("root")
// )

// const h1= document.createElement("h1")
// h1.textContent="This is An imperative Way of Programming"
// h1.className="header"
//document.getElementById("root").append(h1)
// console.log(h1)

// const element=<h1 className="header">This is JSX</h1>
// console.log(element)

//JSX

// const page=(
//     <div>
//     <h1 className="header">This is JSx</h1> ,<p>This is my Paragraph</p>
//     </div>  
// )

// const page=(
//     <nav className="Navbar">
//         <h1 className="header">Website</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>                        
//             <li>Contact</li>        
//         </ul>
//     </nav>
// )
// ReactDOM.render(
//      page, 
//     document.getElementById("root")
// )

const page=(
    <div >
    <h1 className="header">Website</h1>
    <h2>This is My Favourite Website</h2>
    <ol>
        <li>Pricing</li>
        <li>About</li>                        
        <li>Contact</li>        
    </ol>
    </div>
)
// ReactDOM.render(
//     page, 
//     document.getElementById("root")
// )
//document.getElementById("root").append(JSON.stringify(page))

//Ways to render in React18
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(navbar)

ReactDOM.createRoot(document.getElementById("root")).render(page)


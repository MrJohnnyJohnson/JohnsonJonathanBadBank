//<h1>Welcome to the Bad Bank!</h1>
//<h2>Please login or create a new account.</h2>

function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'Johnny',email:'Johnny@mit.edu',password:'secretsauce',balance:1000}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          {/* <Route path="/login/" component={Login} /> */}
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          {/* <Route path="/balance/" component={Balance} /> */}
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);

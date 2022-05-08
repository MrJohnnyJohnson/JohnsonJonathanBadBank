function Home(){
  return (

    <Card
      bgcolor="dark"
      txtcolor="white"
      header="Johnny Johnson's Bad Bank"
      title="Welcome to the least secure bank."
      text="Better check it twice!"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}

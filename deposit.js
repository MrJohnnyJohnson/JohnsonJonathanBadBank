function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit]   = React.useState('');
   const [balance, setBalance]   = React.useState(100);
   const [disabled, setDisabled] = React.useState(true);
  const ctx = React.useContext(UserContext); 
  

  const validate = amount => {
    if(!amount) {
      setStatus('Error: Please enter a value');
      return false;
    }
    if(!Number(amount)) {
      setStatus('Error: Please enter a valid number');
      return false;
    }
    if(amount < 0) {
      setStatus("Error: Cannot deposit a negative amount");
      return false;
    }
    return true;
  }

  const depositMoney = amount => {
    if (!validate(amount)) return;
    setBalance(Number(balance) + Number(amount));
    setShow(false);
    setStatus('');
    ctx.users.push(Number(balance) + Number(amount));
  }


  function clearForm(){
    setDeposit('');
    setShow(true);
  }

  React.useEffect(() => {
		if (!deposit) {
			setDisabled(true);
		}
		else {
			setDisabled(false);
		}
	}, [deposit]);

  return (
    <Card
      bgcolor= "success"
      header="Deposit"
      status={status}
      body={show ? (  
              <>
              <h5>Balance: ${balance}</h5>
              <br/>
              Deposit Amount<br/>
              <input type="deposit" className="form-control" id="deposit" placeholder="Deposit Amount $" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={() => depositMoney(deposit)} disabled={disabled}>Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit?</button>
              </>
            )}
    />
  )
}
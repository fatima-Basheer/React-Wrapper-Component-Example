function Wrapper({children,color="pink"}) {
  return (
    <div style={{color:color, border: "2px solid red" ,padding:"5px" ,margin:"15px"}}>
    {children}
    </div>
  );
}

export default Wrapper;

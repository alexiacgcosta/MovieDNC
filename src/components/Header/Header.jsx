const Header = (props) => {


  function handleSubmit(event) {
    //para n recarregar a página
    event.preventDefault();
    //capturar o valor do input
    const searchValue = event.target[0].value;
    props.onSubmit(searchValue);
    event.target[0].value = "";
  }

  return (
    <div className="Header">
      <h1>DNC Movie List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Pesquise por filmes"/>
      </form>
    </div>
  )
}

export default Header
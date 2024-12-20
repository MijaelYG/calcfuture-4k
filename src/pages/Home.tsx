import "./Home.css";

const Home = () => {
  return (
    <div className="main-home">
      <div className="calculator">
        <form action="">
            <div className="view">
                <input type="text" readOnly placeholder="0"/>
            </div>
            <div className="btn-sets">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>

                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>

                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>x</button>

                <button>0</button>
                <button>=</button>
                <button>3</button>

                <button>+</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Home

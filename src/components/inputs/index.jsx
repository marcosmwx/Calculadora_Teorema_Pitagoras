import { useEffect, useState } from "react";
import Func from "../func";
import { Calculados } from "../post/calculados";

function Receptores() {
  const [h, seth] = useState("");
  const [catum, setcatum] = useState("");
  const [catdois, setcatdois] = useState("");
  const [resultado, setResultado] = useState("");
  const [post, setPost] = useState([]);

  //<Func h={h} catum={catum} catdois={catdois}/> caso necessario usar
  //Rota de requisicao para buscar os dados

  // Função para coletar dados da api
  const baseURL = "http://127.0.0.1:8000";
  const getAllResult = async () => {
    const response = await fetch(`${baseURL}/post/`);

    const data = await response.json();

    if (response.ok) {
      setPost(data);
    } else {
      console.log("Falha na Request");
    }
  };

  useEffect(() => {
    getAllResult();
  }, []);

  //Função para enviar (Method: POST) dados e fazer calculos quando clicar em Submit
  const onSubmit = async (e) => {
    e.preventDefault();
    setResultado(Func(h, catum, catdois));

    const new_request = new Request(`${baseURL}/post/`, {
      body: JSON.stringify({
        hipotenusa: h,
        catetoum: catum,
        catetodois: catdois,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    //Funcao de verificação de envio da Request
    const response = await fetch(new_request);
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      console.log("Respondendo dado enviado");
    } else {
      console.log("Falhou não está enviando a Request");
    }
  };

  return (
    <form className="form" action="submit" onSubmit={onSubmit}>
      <div className="calc">
        <label>
          <h2>Hipotenusa</h2>
          <input
            className="input"
            type={"number"}
            placeholder={"?"}
            min="0"
            value={h}
            onChange={(e) => seth(e.target.value)}
            required
          ></input>
          <h2>Cateto oposto</h2>
          <input
            className="input"
            type={"number"}
            placeholder={"?"}
            min="0"
            value={catum}
            onChange={(e) => setcatum(e.target.value)}
            required
          ></input>
          <h2> Cateto adjacente</h2>
          <input
            className="input"
            type={"number"}
            placeholder={"?"}
            min="0"
            value={catdois}
            onChange={(e) => setcatdois(e.target.value)}
            required
          ></input>
        </label>
        <p></p>
        <button type="submit" value={"Submit"}>
          Resultado
        </button>

        <p>{resultado}</p>
      </div>

      <section>
        <h2>Último Calculado</h2>
        {post.slice(-1).map((item) => (
          <Calculados
            hipotenusa={item.hipotenusa}
            catetoum={item.catetoum}
            catetodois={item.catetodois}
            key={item.id}
          />
        ))}
      </section>
    </form>
  );
}
export default Receptores;

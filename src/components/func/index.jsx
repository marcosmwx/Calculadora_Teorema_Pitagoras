function Func(h, catum, catdois) {
  let log = "";
  let soma = "";
  let total = "";
  let mostra = "";
  let sub = "";
  let raiz = "";

  // Condição para quando a Hipotenusa nao estiver disponível
  if (h == 0 || h == null) {
    log = `h² = ${catum}² + ${catdois}²`;

    // Elevação dos catetos
    catum = Math.pow(catum, 2);
    catdois = Math.pow(catdois, 2);

    // soma dos catetos, motra dos valores catetos e total sendo a raiz dos catetos
    soma = `h = √${catum + catdois}`;
    mostra = `h² = ${catum} + ${catdois}`;
    total = `h = ${Math.sqrt(catum + catdois).toFixed(2)}`;

    // Condição para quando o Cateto Um não estiver dispoível
  } else if (catum == 0 || catum == null) {
    log = `${h}² = c² + ${catdois}²`;

    h = Math.pow(h, 2);
    catdois = Math.pow(catdois, 2);
    mostra = `${h} = c² + ${catdois}`;

    //condição para nao ixibir NAN ou valor negativo no final da resolução
    if (h >= catdois) {
      // subtracao dos catetos, motra dos valores catetos e total sendo a raiz dos catetos
      sub = `${h} - ${catdois} = c²`;
      raiz = `c = ±  √${h - catdois}`;
      total = `c = ${Math.sqrt(h - catdois).toFixed(1)}`;
    } else {
      sub = `${h} - ${catdois} = c²`;
      raiz = `c = ± √${catdois - h}`;
      total = `c = ${Math.sqrt(catdois - h).toFixed(1)}`;
    }

    // Condição para quando o Cateto Dois nao estiver disponível
  } else if (catdois == 0 || catdois == null) {
    log = `${h}² = c² + ${catum}²`;

    // Elevação dos catetos
    h = Math.pow(h, 2);
    catum = Math.pow(catum, 2);
    mostra = `${h} = c² + ${catum}`;

    //condição para nao ixibir NAN ou valor negativo no final da resolução
    if (h >= catum) {
      // subtracao dos catetos, motra dos valores catetos e total sendo a raiz dos catetos
      sub = `${h} - ${catum} = c²`;
      raiz = `c = ±  √${h - catum}`;
      total = `c = ${Math.sqrt(h - catum).toFixed(1)}`;
    } else {
      sub = `${h} - ${catum} = c²`;
      raiz = `c = ± √${catum - h}`;

      total = `c = ${Math.sqrt(catum - h).toFixed(1)}`;
    }
  }
  return (
    <div>
      <p>h² = c² + c²</p>
      <p>{log}</p>
      <p>{mostra}</p>
      <p> {soma}</p>
      <p>{sub}</p>
      <p>{raiz}</p>
      <p>{total}</p>
    </div>
  );
}
export default Func;

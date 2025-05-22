import { Button, FormControl, TextField, Typography } from "@mui/material";
import { useState } from "react";
import imagem from "./assets/image.png";
import gato from "./assets/gato.png";
import gilsons from "./assets/gilson.png";
import stitch from "./assets/stitch.png";

function App() {
  const [renderCry, setRenderCry] = useState(false);
  const [divMain, setDivMain] = useState(true);
  const [divMain2, setDivMain2] = useState(false);
  const [divMain3, setDivMain3] = useState(false);
  const [divMain4, setDivMain4] = useState(false);
  const [divMain5, setDivMain5] = useState(false);
  const [divMain6, setDivMain6] = useState(false);
  const [divMain7, setDivMain7] = useState(false);

  const [respostaEspanhol, setRespostaEspanhol] = useState("");

  const handleSim = () => {
    setDivMain(false);
    setDivMain2(true);
    setRenderCry(false);
  };

  const handleClick2 = () => {
    setDivMain2(false);
    setDivMain3(true);
  };

  const handleSubmitEspanhol = () => {
    if (
      respostaEspanhol &&
      respostaEspanhol.toLocaleLowerCase().trim() === "rato"
    ) {
      setDivMain3(false);
      setDivMain4(true);
    } else {
      alert(
        "Eita você errou. Dica: rato.  Qualquer problema técnico falar com o bruno"
      );
    }
  };

  const handleBonita = () => {
    setDivMain4(false);
    setDivMain5(true);
  };

  const handleFim = () => {
    setDivMain5(false);
    setDivMain6(true);
  };

  const handleDisponibilidade = () => {
    setDivMain6(false);
    setDivMain7(true);
  };

  return (
    <div className="flex justify-center py-4 flex-col items-center ">
      <div>
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          Olá Karla,<span className="text-pink-400"> bem vinda </span>ao site!
        </Typography>
      </div>
      <div className="w-40 mt-3">
        <img src={imagem} />
      </div>
      <div className="mt-16">
        <FormControl>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // centraliza horizontalmente
              justifyContent: "center", // centraliza verticalmente, se necessário
              textAlign: "center", // centraliza texto dentro dos spans
              paddingLeft: 0, // remove o padding-left que atrapalha
            }}
          >
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "1.1rem",
                paddingLeft: 0, // tira paddingLeft aqui
              }}
            >
              Você teria alguns minutos <br />
              para responder, uma pesquisa importante?
            </span>
            <span
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "1.2rem" }}
              className="self-center mt-5"
            >
              Com uma <b>surpresa especial</b> no final!
            </span>
          </div>
          {divMain && (
            <div className="flex justify-center mt-20 gap-8">
              <Button
                variant="contained"
                sx={{
                  width: "120px",
                  height: "50px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  background: "green",
                }}
                onClick={() => handleSim()}
              >
                Sim
              </Button>

              <Button
                variant="contained"
                sx={{
                  width: "120px",
                  height: "50px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  background: "red",
                }}
                onClick={() => setRenderCry(true)}
              >
                Não
              </Button>
            </div>
          )}
          {divMain2 && (
            <div className="flex flex-col items-center mt-20 gap-6">
              <TextField
                label="Como foi seu dia hoje?"
                variant="outlined"
                multiline
                rows={3}
                sx={{
                  width: "300px",
                  fontFamily: "Poppins, sans-serif",
                }}
              />
              <Button
                variant="contained"
                sx={{
                  width: "150px",
                  height: "50px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  backgroundColor: "#ec4899", // Tailwind pink-500
                  fontFamily: "Poppins, sans-serif",
                  ":hover": {
                    backgroundColor: "#db2777", // Tailwind pink-600
                  },
                }}
                onClick={() => handleClick2()}
              >
                Enviar
              </Button>
            </div>
          )}
          {divMain3 && (
            <div className="flex flex-col items-center mt-20 gap-6">
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                }}
              >
                <div className="flex justify-center">
                  Uau! Que bom que seu dia foi legal! (Eu espero) <br />
                </div>

                <br />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // centraliza horizontalmente
                    justifyContent: "center", // centraliza verticalmente, se necessário
                    textAlign: "center", // centraliza texto dentro dos spans
                    paddingLeft: 0, // remove o padding-left que atrapalha
                  }}
                >
                  <span>
                    Outra pergunta. Como se diz
                    <span className="text-pink-400 px-4">"Momento" </span> em
                    espanhol?
                  </span>
                </div>
              </Typography>
              <TextField
                label="Sua resposta"
                variant="outlined"
                sx={{
                  width: "300px",
                  fontFamily: "Poppins, sans-serif",
                }}
                value={respostaEspanhol}
                onChange={(e) => setRespostaEspanhol(e.target.value)}
              />
              <Button
                variant="contained"
                sx={{
                  width: "150px",
                  height: "50px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  backgroundColor: "#ec4899",
                  fontFamily: "Poppins, sans-serif",
                  ":hover": {
                    backgroundColor: "#db2777",
                  },
                }}
                onClick={() => handleSubmitEspanhol()}
              >
                Enviar
              </Button>
            </div>
          )}
          {divMain4 && (
            <div className="flex flex-col items-center mt-20 gap-6">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // centraliza horizontalmente
                  justifyContent: "center", // centraliza verticalmente, se necessário
                  textAlign: "center", // centraliza texto dentro dos spans
                  paddingLeft: 0, // remove o padding-left que atrapalha
                  fontSize: "1.5rem",
                }}
              >
                Parabéns seu espanhol está ótimo! <br />
                Quem é a pessoa mais bonita do mundo?
              </div>
              <div className="flex justify-center gap-8 mt-5">
                <Button
                  variant="contained"
                  sx={{
                    width: "150px",
                    height: "50px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    backgroundColor: "#ec4899", // Tailwind pink-500
                    fontFamily: "Poppins, sans-serif",
                    ":hover": {
                      backgroundColor: "#db2777", // Tailwind pink-600
                    },
                  }}
                  onClick={() => handleBonita()}
                >
                  Karla
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    width: "150px",
                    height: "50px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    backgroundColor: "#ec4899", // Tailwind pink-500
                    fontFamily: "Poppins, sans-serif",
                    ":hover": {
                      backgroundColor: "#db2777", // Tailwind pink-600
                    },
                  }}
                  onClick={() => handleBonita()}
                >
                  Karla
                </Button>
              </div>
            </div>
          )}
          {divMain5 && (
            <div className="flex flex-col items-center mt-20 gap-6">
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                <span className="font-bold">Qual é o nome da banda?</span>
              </Typography>

              <div className="w-60 mt-4">
                <img src={gilsons} alt="Banda" />
              </div>

              {/* Botões para as opções */}
              <div className="flex flex-col items-center gap-4 mt-5">
                <Button
                  variant="contained"
                  sx={{
                    width: "200px",
                    height: "50px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    backgroundColor: "#ec4899", // Tailwind pink-500
                    fontFamily: "Poppins, sans-serif",
                    ":hover": {
                      backgroundColor: "#db2777", // Tailwind pink-600
                    },
                  }}
                  onClick={() => handleFim()}
                >
                  Gilsons
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    width: "200px",
                    height: "50px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    backgroundColor: "#ec4899", // Tailwind pink-500
                    fontFamily: "Poppins, sans-serif",
                    ":hover": {
                      backgroundColor: "#db2777", // Tailwind pink-600
                    },
                  }}
                  onClick={() => {}}
                >
                  Shakira
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    width: "200px",
                    height: "50px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    backgroundColor: "#ec4899", // Tailwind pink-500
                    fontFamily: "Poppins, sans-serif",
                    ":hover": {
                      backgroundColor: "#db2777", // Tailwind pink-600
                    },
                  }}
                  onClick={() => {}}
                >
                  Luan Santana
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    width: "200px",
                    height: "50px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    backgroundColor: "#ec4899", // Tailwind pink-500
                    fontFamily: "Poppins, sans-serif",
                    ":hover": {
                      backgroundColor: "#db2777", // Tailwind pink-600
                    },
                  }}
                  onClick={() => {}}
                >
                  Ferrugem
                </Button>
              </div>
            </div>
          )}
          {divMain6 && (
            <div className="flex flex-col items-center mt-20 gap-6">
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                Estará livre no sábado?
              </Typography>

              {/* Botões para as opções Sim ou Não */}
              <div className="flex justify-center gap-8 mt-5">
                <Button
                  variant="contained"
                  sx={{
                    width: "150px",
                    height: "50px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    backgroundColor: "#ec4899", // Tailwind pink-500
                    fontFamily: "Poppins, sans-serif",
                    ":hover": {
                      backgroundColor: "#db2777", // Tailwind pink-600
                    },
                  }}
                  onClick={() => handleDisponibilidade()}
                >
                  Sim
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    width: "150px",
                    height: "50px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    backgroundColor: "#ec4899", // Tailwind pink-500
                    fontFamily: "Poppins, sans-serif",
                    ":hover": {
                      backgroundColor: "#db2777", // Tailwind pink-600
                    },
                  }}
                  onClick={() => alert("AAAa nãoooo. Sério? Avise o Bruno")}
                >
                  Não
                </Button>
              </div>
            </div>
          )}
          {divMain7 && (
            <div className="flex flex-col items-center mt-20 gap-6">
              <div className="w-40 mt-3">
                <img src={stitch} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // centraliza horizontalmente
                  justifyContent: "center", // centraliza verticalmente, se necessário
                  textAlign: "center", // centraliza texto dentro dos spans
                  paddingLeft: 0, // remove o padding-left que atrapalha
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#ec4899", // Tailwind pink-500
                    textAlign: "center",
                  }}
                >
                  Que show gatinha, passo te buscar ❤️ <br />
                  Você ganhou uma janta grátis com a minha bela companhia!
                  <br />
                  Vamos comer bastante.
                </Typography>
              </div>
            </div>
          )}
        </FormControl>
        <div className="flex justify-center mt-10 flex-col items-center">
          {renderCry && <img src={gato} className="w-48" />}
          {renderCry && <span className="mt-6">:(</span>}
        </div>
      </div>
    </div>
  );
}

export default App;

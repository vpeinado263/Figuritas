import Button from "./Button";

const Card = ({ value }) => {
  //Recivo la propieda value
  return (
    <>
      <figure>
        <img src="https://http2.mlstatic.com/D_NQ_NP_851403-MLA52084968616_102022-O.webp" />
        <figcaption>
          <h3>Lionel Andrés Messi Cuccittini {value}</h3>
        </figcaption>
        <p>
          La figurita difícil es un mito. Se imprime la misma cantidad de todas
          las figuritas que integran un álbum.
        </p>
        <Button />
      </figure>
      <style jsx>{`
        figure {
          width: 200px;
          height: 500px;
          border: 2px solid rgb(52, 131, 250);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        img {
          width: 100%;
          height: 40%;
        }
        h3 {
          font-size: 1rem;
          text-aling: center;
        }
        p {
          font-size: 1rem;
          text-aling: center;
        }
      `}</style>
    </>
  );
};
export default Card;

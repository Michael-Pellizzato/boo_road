import traveler from "../data/travelersArray";

export default function CardTravelers() {
  return traveler.map((t) => {
    return (
      <div key={t.id} className="col-md-4 mb-4">
        <div className="card">
          <p>
            <span>Nome:</span> {t.nome}
          </p>
          <p>
            <span>Cognome:</span> {t.cognome}
          </p>
          <p>
            <span>Data di Nascita:</span> {t.dataNascita}
          </p>
          <p>
            <span>CF:</span> {t.codiceFiscale}
          </p>
          <p>
            <span>Email:</span> {t.email}
          </p>
        </div>
      </div>
    );
  });
}

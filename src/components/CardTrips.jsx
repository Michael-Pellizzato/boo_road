import travelArray from "../data/tripsArray";
import { useState } from "react";

export default function CardTravelers() {
  return travelArray.map((t) => <TripsCard key={t.id} travelArray={t} />);
}

function TripsCard({ travelArray }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        {/* Bottone per aprire l'accordion */}
        <div className="accordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                type="button"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen
                  ? `${travelArray.nome} ${travelArray.cognome}`
                  : `${travelArray.nome} ${travelArray.cognome}`}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
            >
              <div className="accordion-body">
                <p>
                  <strong>Data di Nascita:</strong> {travelArray.dataNascita}
                </p>
                <p>
                  <strong>CF:</strong> {travelArray.codiceFiscale}
                </p>
                <p>
                  <strong>Email:</strong> {travelArray.email}
                </p>
                <p>
                  <strong>Telefono:</strong> {travelArray.telefono}
                </p>
                <p>
                  <strong>Indirizzo:</strong> {travelArray.indirizzo}
                </p>
                <p>
                  <strong>Note:</strong> {travelArray.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

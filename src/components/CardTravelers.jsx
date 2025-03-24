import traveler from "../data/travelersArray";
import { useState } from "react";

export default function CardTravelers() {
  return traveler.map((t) => <TravelerCard key={t.id} traveler={t} />);
}

function TravelerCard({ traveler }) {
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
                  ? `${traveler.nome} ${traveler.cognome}`
                  : `${traveler.nome} ${traveler.cognome}`}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
            >
              <div className="accordion-body">
                <p>
                  <strong>Data di Nascita:</strong> {traveler.dataNascita}
                </p>
                <p>
                  <strong>CF:</strong> {traveler.codiceFiscale}
                </p>
                <p>
                  <strong>Email:</strong> {traveler.email}
                </p>
                <p>
                  <strong>Telefono:</strong> {traveler.telefono}
                </p>
                <p>
                  <strong>Indirizzo:</strong> {traveler.indirizzo}
                </p>
                <p>
                  <strong>Note:</strong> {traveler.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

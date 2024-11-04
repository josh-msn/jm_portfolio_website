import React from "react";
import "../components/Imprint.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Imprint() {
  return (
    <div className="imprint">
      <Header />

      <div className="imprint-content-wrwapper">
        <div className="imprint-content">
          <h1>Impressum</h1>

          <h2>Angaben gemäß §5 TMG</h2>

          <ul>
            <li>Joshua Maurer</li>
            <li>Webentwickler</li>
            <li>Carl-Petersen-Straße 98</li>
            <li>20535 Hamburg</li>
            <li>Germany</li>
          </ul>

          <h2>Kontakt</h2>
          <ul>
            <li>Telefon: +49 178 6817362</li>
            <li>E-Mail: hallo@joshua-maurer.com</li>
            <li>Website: https://joshua-maurer.com</li>
          </ul>
          <h2>HAFTUNGSAUSSCHLUSS</h2>
          <h3>Verantwortlichkeit für den Inhalt</h3>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen. Gemäß den gesetzlichen
            Bestimmungen sind wir darüber hinaus für die eigenen Inhalte auf
            unseren Seiten verantwortlich. Wir weisen in diesem Zusammenhang
            darauf hin, dass wir nicht verpflichtet sind, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben nach den §§ 8
            bis 10 TMG hiervon unberührt.
          </p>
          <h3>Verantwortlichkeit für Links</h3>
          <p>
            Für die Inhalte externer Links (zu Webseiten Dritter) sind
            ausschließlich die Betreiber der verlinkten Seiten verantwortlich.
            Zum Zeitpunkt der Verlinkung waren für uns keine Rechtsverstöße
            ersichtlich. Bei Bekanntwerden von Rechtsverstößen werden wir den
            entsprechenden Link umgehend entfernen.
          </p>
          <h3>Urheberrecht</h3>
          <p>
            Unsere Webseiten und deren Inhalte unterliegen dem deutschen
            Urheberrecht. Jede Form der Verwertung, Vervielfältigung oder
            Bearbeitung urheberrechtlich geschützter Werke auf unseren Webseiten
            bedarf, soweit nicht ausdrücklich gesetzlich erlaubt, der vorherigen
            Zustimmung des jeweiligen Rechteinhabers. Einzelne
            Vervielfältigungen eines Werkes sind nur für den privaten Gebrauch
            gestattet. Die Materialien auf diesen Seiten sind urheberrechtlich
            geschützt und jede unerlaubte Nutzung kann gegen das Urheberrecht
            verstoßen.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

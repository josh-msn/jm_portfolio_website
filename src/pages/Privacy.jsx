import React from "react";
import "../components/Privacy.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <div className="privacy">
      <Header />
      <div>
        <div className="privacy-content">
          <div>
            <h1>Datenschutzerklärung</h1>
            <p>Stand: 3. April 2024</p>
            <h2>Inhaltsübersicht</h2>
            <ul class="index">
              <li>
                <a class="index-link" href="#m3">
                  Verantwortlicher
                </a>
              </li>
              <li>
                <a class="index-link" href="#mOverview">
                  Übersicht der Verarbeitungen
                </a>
              </li>
              <li>
                <a class="index-link" href="#m2427">
                  Maßgebliche Rechtsgrundlagen
                </a>
              </li>
              <li>
                <a class="index-link" href="#m27">
                  Sicherheitsmaßnahmen
                </a>
              </li>
              <li>
                <a class="index-link" href="#m12">
                  Löschung von Daten
                </a>
              </li>
              <li>
                <a class="index-link" href="#m10">
                  Rechte der betroffenen Personen
                </a>
              </li>
              <li>
                <a class="index-link" href="#m225">
                  Bereitstellung des Onlineangebots und Webhosting
                </a>
              </li>
              <li>
                <a class="index-link" href="#m182">
                  Kontakt- und Anfrageverwaltung
                </a>
              </li>
              <li>
                <a class="index-link" href="#m136">
                  Präsenzen in sozialen Netzwerken (Social Media)
                </a>
              </li>
              <li>
                <a class="index-link" href="#m15">
                  Änderung und Aktualisierung der Datenschutzerklärung
                </a>
              </li>
            </ul>

            <h2 id="m3">Verantwortlicher</h2>
            <p>
              Joshua Maurer
              <br />
              Carl-Petersen-Straße 98
              <br />
              20535 Hamburg Deutschland
            </p>
            <p>E-Mail-Adresse: hallo@joshua-maurer.com</p>
            <p>
              Impressum:{" "}
              <a href="https://joshua-maurer.com/imprint" target="_blank">
                https://joshua-maurer.com/imprint
              </a>
            </p>

            <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
            <p>
              Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten
              und die Zwecke ihrer Verarbeitung zusammen und verweist auf die
              betroffenen Personen.
            </p>
            <h3>Arten der verarbeiteten Daten</h3>
            <ul>
              <li>Kontaktdaten.</li>
              <li>Inhaltsdaten.</li>
              <li>Nutzungsdaten.</li>
              <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
            </ul>
            <h3>Kategorien betroffener Personen</h3>
            <ul>
              <li>Kommunikationspartner.</li>
              <li>Nutzer.</li>
            </ul>
            <h3>Zwecke der Verarbeitung</h3>
            <ul>
              <li>Kontaktanfragen und Kommunikation.</li>
              <li>Sicherheitsmaßnahmen.</li>
              <li>Verwaltung und Beantwortung von Anfragen.</li>
              <li>Feedback.</li>
              <li>Marketing.</li>
              <li>
                Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
              </li>
              <li>Informationstechnische Infrastruktur.</li>
            </ul>

            <h2 id="m2427">Maßgebliche Rechtsgrundlagen</h2>
            <p>
              <strong>Maßgebliche Rechtsgrundlagen nach der DSGVO: </strong>Im
              Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der
              DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten.
              Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO
              nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder
              Sitzland gelten können. Sollten ferner im Einzelfall speziellere
              Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der
              Datenschutzerklärung mit.
            </p>
            <ul>
              <li>
                <strong>
                  Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1
                  S. 1 lit. b) DSGVO)
                </strong>{" "}
                - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen
                Vertragspartei die betroffene Person ist, oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
                betroffenen Person erfolgen.
              </li>
              <li>
                <strong>
                  Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)
                </strong>{" "}
                - die Verarbeitung ist zur Wahrung der berechtigten Interessen
                des Verantwortlichen oder eines Dritten notwendig,
                vorausgesetzt, dass die Interessen, Grundrechte und
                Grundfreiheiten der betroffenen Person, die den Schutz
                personenbezogener Daten verlangen, nicht überwiegen.
              </li>
            </ul>
            <p>
              <strong>Nationale Datenschutzregelungen in Deutschland: </strong>
              Zusätzlich zu den Datenschutzregelungen der
              Datenschutz-Grundverordnung gelten nationale Regelungen zum
              Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz
              zum Schutz vor Missbrauch personenbezogener Daten bei der
              Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG
              enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum
              Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung
              besonderer Kategorien personenbezogener Daten, zur Verarbeitung
              für andere Zwecke und zur Übermittlung sowie automatisierten
              Entscheidungsfindung im Einzelfall einschließlich Profiling. Des
              Weiteren regelt es die Datenverarbeitung für Zwecke des
              Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im Hinblick
              auf die Begründung, Durchführung oder Beendigung von
              Beschäftigungsverhältnissen sowie die Einwilligung von
              Beschäftigten. Ferner können Landesdatenschutzgesetze der
              einzelnen Bundesländer zur Anwendung gelangen.
            </p>

            <p>
              <strong>Hinweis auf Geltung DSGVO und Schweizer DSG: </strong>
              Diese Datenschutzhinweise dienen sowohl der Informationserteilung
              nach dem schweizerischen Bundesgesetz über den Datenschutz
              (Schweizer DSG) als auch nach der Datenschutzgrundverordnung
              (DSGVO). Aus diesem Grund bitten wir Sie zu beachten, dass
              aufgrund der breiteren räumlichen Anwendung und Verständlichkeit
              die Begriffe der DSGVO verwendet werden. Insbesondere statt der im
              Schweizer DSG verwendeten Begriffe „Bearbeitung" von
              „Personendaten", "überwiegendes Interesse" und "besonders
              schützenswerte Personendaten" werden die in der DSGVO verwendeten
              Begriffe „Verarbeitung" von „personenbezogenen Daten" sowie
              "berechtigtes Interesse" und "besondere Kategorien von Daten"
              verwendet. Die gesetzliche Bedeutung der Begriffe wird jedoch im
              Rahmen der Geltung des Schweizer DSG weiterhin nach dem Schweizer
              DSG bestimmt.
            </p>

            <h2 id="m27">Sicherheitsmaßnahmen</h2>
            <p>
              Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
              Berücksichtigung des Stands der Technik, der
              Implementierungskosten und der Art, des Umfangs, der Umstände und
              der Zwecke der Verarbeitung sowie der unterschiedlichen
              Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der
              Rechte und Freiheiten natürlicher Personen geeignete technische
              und organisatorische Maßnahmen, um ein dem Risiko angemessenes
              Schutzniveau zu gewährleisten.
            </p>
            <p>
              Zu den Maßnahmen gehören insbesondere die Sicherung der
              Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
              Kontrolle des physischen und elektronischen Zugangs zu den Daten
              als auch des sie betreffenden Zugriffs, der Eingabe, der
              Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung.
              Des Weiteren haben wir Verfahren eingerichtet, die eine
              Wahrnehmung von Betroffenenrechten, die Löschung von Daten und
              Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner
              berücksichtigen wir den Schutz personenbezogener Daten bereits bei
              der Entwicklung bzw. Auswahl von Hardware, Software sowie
              Verfahren entsprechend dem Prinzip des Datenschutzes, durch
              Technikgestaltung und durch datenschutzfreundliche
              Voreinstellungen.
            </p>
            <p>
              Sicherung von Online-Verbindungen durch
              TLS-/SSL-Verschlüsselungstechnologie (HTTPS): Um die Daten der
              Nutzer, die über unsere Online-Dienste übertragen werden, vor
              unerlaubten Zugriffen zu schützen, setzen wir auf die
              TLS-/SSL-Verschlüsselungstechnologie. Secure Sockets Layer (SSL)
              und Transport Layer Security (TLS) sind die Eckpfeiler der
              sicheren Datenübertragung im Internet. Diese Technologien
              verschlüsseln die Informationen, die zwischen der Website oder App
              und dem Browser des Nutzers (oder zwischen zwei Servern)
              übertragen werden, wodurch die Daten vor unbefugtem Zugriff
              geschützt sind. TLS, als die weiterentwickelte und sicherere
              Version von SSL, gewährleistet, dass alle Datenübertragungen den
              höchsten Sicherheitsstandards entsprechen. Wenn eine Website durch
              ein SSL-/TLS-Zertifikat gesichert ist, wird dies durch die Anzeige
              von HTTPS in der URL signalisiert. Dies dient als ein Indikator
              für die Nutzer, dass ihre Daten sicher und verschlüsselt
              übertragen werden.
            </p>

            <h2 id="m12">Löschung von Daten</h2>
            <p>
              Die von uns verarbeiteten Daten werden nach Maßgabe der
              gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung
              erlaubten Einwilligungen widerrufen werden oder sonstige
              Erlaubnisse entfallen (z. B. wenn der Zweck der Verarbeitung
              dieser Daten entfallen ist oder sie für den Zweck nicht
              erforderlich sind). Sofern die Daten nicht gelöscht werden, weil
              sie für andere und gesetzlich zulässige Zwecke erforderlich sind,
              wird deren Verarbeitung auf diese Zwecke beschränkt. D. h., die
              Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das
              gilt z. B. für Daten, die aus handels- oder steuerrechtlichen
              Gründen aufbewahrt werden müssen oder deren Speicherung zur
              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
              oder zum Schutz der Rechte einer anderen natürlichen oder
              juristischen Person erforderlich ist. Unsere Datenschutzhinweise
              können ferner weitere Angaben zu der Aufbewahrung und Löschung von
              Daten beinhalten, die für die jeweiligen Verarbeitungen vorrangig
              gelten.
            </p>

            <h2 id="m10">Rechte der betroffenen Personen</h2>
            <p>
              Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als
              Betroffene nach der DSGVO verschiedene Rechte zu, die sich
              insbesondere aus Art. 15 bis 21 DSGVO ergeben:
            </p>
            <ul>
              <li>
                <strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus
                Gründen, die sich aus Ihrer besonderen Situation ergeben,
                jederzeit gegen die Verarbeitung der Sie betreffenden
                personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e
                oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für
                ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie
                betreffenden personenbezogenen Daten verarbeitet, um
                Direktwerbung zu betreiben, haben Sie das Recht, jederzeit
                Widerspruch gegen die Verarbeitung der Sie betreffenden
                personenbezogenen Daten zum Zwecke derartiger Werbung
                einzulegen; dies gilt auch für das Profiling, soweit es mit
                solcher Direktwerbung in Verbindung steht.
              </li>
              <li>
                <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben
                das Recht, erteilte Einwilligungen jederzeit zu widerrufen.
              </li>
              <li>
                <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine
                Bestätigung darüber zu verlangen, ob betreffende Daten
                verarbeitet werden und auf Auskunft über diese Daten sowie auf
                weitere Informationen und Kopie der Daten entsprechend den
                gesetzlichen Vorgaben.
              </li>
              <li>
                <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend
                den gesetzlichen Vorgaben das Recht, die Vervollständigung der
                Sie betreffenden Daten oder die Berichtigung der Sie
                betreffenden unrichtigen Daten zu verlangen.
              </li>
              <li>
                <strong>
                  Recht auf Löschung und Einschränkung der Verarbeitung:
                </strong>{" "}
                Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu
                verlangen, dass Sie betreffende Daten unverzüglich gelöscht
                werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben
                eine Einschränkung der Verarbeitung der Daten zu verlangen.
              </li>
              <li>
                <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das
                Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben,
                nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten,
                gängigen und maschinenlesbaren Format zu erhalten oder deren
                Übermittlung an einen anderen Verantwortlichen zu fordern.
              </li>
              <li>
                <strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben
                unbeschadet eines anderweitigen verwaltungsrechtlichen oder
                gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer
                Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres
                gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts
                des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die
                Verarbeitung der Sie betreffenden personenbezogenen Daten gegen
                die Vorgaben der DSGVO verstößt.
              </li>
            </ul>

            <h2 id="m225">Bereitstellung des Onlineangebots und Webhosting</h2>
            <p>
              Wir verarbeiten die Daten der Nutzer, um ihnen unsere
              Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck
              verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um
              die Inhalte und Funktionen unserer Online-Dienste an den Browser
              oder das Endgerät der Nutzer zu übermitteln.
            </p>
            <ul class="m-elements">
              <li>
                <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B.
                besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten);
                Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen,
                Zeitangaben, Identifikationsnummern, Einwilligungsstatus).
                Inhaltsdaten (z. B. Eingaben in Onlineformularen).
              </li>
              <li>
                <strong>Betroffene Personen:</strong> Nutzer (z. B.
                Webseitenbesucher, Nutzer von Onlinediensten).
              </li>
              <li>
                <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres
                Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische
                Infrastruktur (Betrieb und Bereitstellung von
                Informationssystemen und technischen Geräten (Computer, Server
                etc.).). Sicherheitsmaßnahmen.
              </li>
              <li class="">
                <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art.
                6 Abs. 1 S. 1 lit. f) DSGVO).
              </li>
            </ul>
            <p>
              <strong>
                Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
                Diensten:
              </strong>
            </p>
            <ul class="m-elements">
              <li>
                <strong>
                  Bereitstellung Onlineangebot auf gemietetem Speicherplatz:{" "}
                </strong>
                Für die Bereitstellung unseres Onlineangebotes nutzen wir
                Speicherplatz, Rechenkapazität und Software, die wir von einem
                entsprechenden Serveranbieter (auch "Webhoster" genannt) mieten
                oder anderweitig beziehen;{" "}
                <span class="">
                  <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen
                  (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                </span>
              </li>
              <li>
                <strong>Erhebung von Zugriffsdaten und Logfiles: </strong>Der
                Zugriff auf unser Onlineangebot wird in Form von so genannten
                "Server-Logfiles" protokolliert. Zu den Serverlogfiles können
                die Adresse und Name der abgerufenen Webseiten und Dateien,
                Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung
                über erfolgreichen Abruf, Browsertyp nebst Version, das
                Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte
                Seite) und im Regelfall IP-Adressen und der anfragende Provider
                gehören. Die Serverlogfiles können zum einen zu Zwecken der
                Sicherheit eingesetzt werden, z. B., um eine Überlastung der
                Server zu vermeiden (insbesondere im Fall von missbräuchlichen
                Angriffen, sogenannten DDoS-Attacken) und zum anderen, um die
                Auslastung der Server und ihre Stabilität sicherzustellen;{" "}
                <span class="">
                  <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen
                  (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).{" "}
                </span>
                <strong>Löschung von Daten:</strong> Logfile-Informationen
                werden für die Dauer von maximal 30 Tagen gespeichert und danach
                gelöscht oder anonymisiert. Daten, deren weitere Aufbewahrung zu
                Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung
                des jeweiligen Vorfalls von der Löschung ausgenommen.
              </li>
              <li>
                <strong>E-Mail-Versand und -Hosting: </strong>Die von uns in
                Anspruch genommenen Webhosting-Leistungen umfassen ebenfalls den
                Versand, den Empfang sowie die Speicherung von E-Mails. Zu
                diesen Zwecken werden die Adressen der Empfänger sowie Absender
                als auch weitere Informationen betreffend den E-Mailversand (z.
                B. die beteiligten Provider) sowie die Inhalte der jeweiligen
                E-Mails verarbeitet. Die vorgenannten Daten können ferner zu
                Zwecken der Erkennung von SPAM verarbeitet werden. Wir bitten
                darum, zu beachten, dass E-Mails im Internet grundsätzlich nicht
                verschlüsselt versendet werden. Im Regelfall werden E-Mails zwar
                auf dem Transportweg verschlüsselt, aber (sofern kein
                sogenanntes Ende-zu-Ende-Verschlüsselungsverfahren eingesetzt
                wird) nicht auf den Servern, von denen sie abgesendet und
                empfangen werden. Wir können daher für den Übertragungsweg der
                E-Mails zwischen dem Absender und dem Empfang auf unserem Server
                keine Verantwortung übernehmen;{" "}
                <span class="">
                  <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen
                  (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                </span>
              </li>
            </ul>
            <h2 id="m182">Kontakt- und Anfrageverwaltung</h2>
            <p>
              Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular,
              E-Mail, Telefon oder via soziale Medien) sowie im Rahmen
              bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben
              der anfragenden Personen verarbeitet soweit dies zur Beantwortung
              der Kontaktanfragen und etwaiger angefragter Maßnahmen
              erforderlich ist.
            </p>
            <ul class="m-elements">
              <li>
                <strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z. B.
                E-Mail, Telefonnummern); Inhaltsdaten (z. B. Eingaben in
                Onlineformularen); Nutzungsdaten (z. B. besuchte Webseiten,
                Interesse an Inhalten, Zugriffszeiten). Meta-, Kommunikations-
                und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben,
                Identifikationsnummern, Einwilligungsstatus).
              </li>
              <li>
                <strong>Betroffene Personen:</strong> Kommunikationspartner.
              </li>
              <li>
                <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und
                Kommunikation; Verwaltung und Beantwortung von Anfragen;
                Feedback (z. B. Sammeln von Feedback via Online-Formular).
                Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
              </li>
              <li class="">
                <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art.
                6 Abs. 1 S. 1 lit. f) DSGVO). Vertragserfüllung und
                vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
              </li>
            </ul>
            <p>
              <strong>
                Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
                Diensten:
              </strong>
            </p>
            <ul class="m-elements">
              <li>
                <strong>Kontaktformular: </strong>Wenn Nutzer über unser
                Kontaktformular, E-Mail oder andere Kommunikationswege mit uns
                in Kontakt treten, verarbeiten wir die uns in diesem
                Zusammenhang mitgeteilten Daten zur Bearbeitung des mitgeteilten
                Anliegens;{" "}
                <span class="">
                  <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und
                  vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO),
                  Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                </span>
              </li>
            </ul>
            <h2 id="m136">Präsenzen in sozialen Netzwerken (Social Media)</h2>
            <p>
              Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und
              verarbeiten in diesem Rahmen Nutzerdaten, um mit den dort aktiven
              Nutzern zu kommunizieren oder um Informationen über uns
              anzubieten.
            </p>
            <ul class="m-elements">
              <li>
                <strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z. B.
                E-Mail, Telefonnummern); Nutzungsdaten (z. B. besuchte
                Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-,
                Kommunikations- und Verfahrensdaten (z. B. IP-Adressen,
                Zeitangaben, Identifikationsnummern).
              </li>
              <li>
                <strong>Betroffene Personen:</strong> Nutzer (z. B.
                Webseitenbesucher, Nutzer von Onlinediensten).
              </li>
              <li>
                <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und
                Kommunikation; Tracking (z. B. interessens-/verhaltensbezogenes
                Profiling, Nutzung von Cookies); Remarketing; Reichweitenmessung
                (z. B. Zugriffsstatistiken, Erkennung wiederkehrender Besucher).
              </li>
              <li class="">
                <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art.
                6 Abs. 1 S. 1 lit. f) DSGVO).
              </li>
            </ul>
            <p>
              <strong>
                Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
                Diensten:
              </strong>
            </p>
            <ul class="m-elements">
              <li>
                <strong>Facebook: </strong>Soziales Netzwerk; Dienstanbieter:
                Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal
                Harbour, Dublin 2, Irland, Mutterunternehmen: Facebook, 1 Hacker
                Way, Menlo Park, CA 94025, USA; Website:{" "}
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com
                </a>
                ; Datenschutzerklärung:{" "}
                <a
                  href="https://www.facebook.com/about/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/about/privacy
                </a>
                ; Privacy Shield (Gewährleistung Datenschutzniveau bei
                Verarbeitung von Daten in den USA):{" "}
                <a
                  href="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active
                </a>
                ; Widerspruchsmöglichkeit (Opt-Out): Einstellungen für
                Werbeanzeigen:{" "}
                <a
                  href="https://www.facebook.com/settings?tab=ads"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/settings?tab=ads
                </a>
                ; Zusätzliche Hinweise zum Datenschutz: Vereinbarung über
                gemeinsame Verarbeitung personenbezogener Daten auf
                Facebook-Seiten:{" "}
                <a
                  href="https://www.facebook.com/legal/terms/page_controller_addendum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/legal/terms/page_controller_addendum
                </a>
                , Datenschutzhinweise für Facebook-Seiten:{" "}
                <a
                  href="https://www.facebook.com/legal/terms/information_about_page_insights_data"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/legal/terms/information_about_page_insights_data
                </a>
                .
              </li>
            </ul>

            <h2 id="m46">
              Änderung und Aktualisierung der Datenschutzerklärung
            </h2>
            <p>
              Wir bitten Sie, sich regelmäßig über den Inhalt unserer
              Datenschutzerklärung zu informieren. Wir passen die
              Datenschutzerklärung an, sobald die Änderungen der von uns
              durchgeführten Datenverarbeitungen dies erforderlich machen. Wir
              informieren Sie, sobald durch die Änderungen eine
              Mitwirkungshandlung Ihrerseits (z. B. Einwilligung) oder eine
              sonstige individuelle Benachrichtigung erforderlich wird.
            </p>
            <p>
              Sofern wir in dieser Datenschutzerklärung Adressen und
              Kontaktinformationen von Unternehmen und Organisationen angeben,
              bitten wir zu beachten, dass die Adressen sich über die Zeit
              ändern können und bitten die Angaben vor Kontaktaufnahme zu
              prüfen.
            </p>

            <h2 id="m15">
              Änderung und Aktualisierung der Datenschutzerklärung
            </h2>
            <p>
              Wir bitten Sie, sich regelmäßig über den Inhalt unserer
              Datenschutzerklärung zu informieren. Wir passen die
              Datenschutzerklärung an, sobald die Änderungen der von uns
              durchgeführten Datenverarbeitungen dies erforderlich machen. Wir
              informieren Sie, sobald durch die Änderungen eine
              Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine
              sonstige individuelle Benachrichtigung erforderlich wird.
            </p>

            <p class="seal">
              Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
              Schwenke
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

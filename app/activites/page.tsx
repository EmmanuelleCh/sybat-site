import Image from "next/image";

export default function BlocsPage() {
  return (
    <main className="container-balanced px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      <header className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-sybat">
          NOS DOMAINES D’EXPERTISE
        </h1>
        <p className="mt-3 opacity-80">
          Simple, pragmatique, orientée résultat.
        </p>
      </header>

      {/* Accessibilité */}
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden card">
          <Image
            src="/imgAccebilite.jpg"
            alt="Accessibilité"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 600px, (min-width: 640px) 50vw, 100vw"
            priority
          />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-sybatDark">
            Accessibilité
          </h2>
          <p className="mt-3 opacity-85">
            Changer la vie en transformant le bâti ! Une personne handicapée
            dans un aménagement accessible est une personne valide, une personne
            valide dans un aménagement non accessible est une personne
            handicapée. Autrement dit, l’architecture crée ou supprime le
            handicap. SYBAT adapte votre ERP (Etablissements Recevant du Public)
             ou habitat  en site occupé afin de les rendre accessible à tous.
            SYBAT vous propose des solutions d’accessibilité à tous les types de
            handicaps Pour la déficience motrice : des exigences spatiales, de
            stationnement et de circulation adaptés, de cheminement extérieur et
            intérieur, de qualité d’usage des portes et équipements. Pour la
            déficience visuelle : des exigences en termes de guidage, de
            repérage et de qualité d’éclairage Pour la déficience auditive : des
            exigences en termes de communication, de qualité sonore et de
            signalisation adaptée Pour la déficience intellectuelle : des
            exigences en termes de repérage et de qualité d’éclairage.
          </p>
        </div>
      </section>

      {/* ENTRETIEN ET RÉNOVATION */}
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div className="md:order-last relative w-full aspect-[4/3] rounded-2xl overflow-hidden card">
          <Image
            src="/sol.jpg"
            alt="ENTRETIEN ET RÉNOVATION"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 600px, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-sybatDark">
            Entretien et Rénovation
          </h2>
          <p className="mt-3 opacity-85">
            Depuis plus de 20 ans, SYBAT propose une activité d’entretient
            courant  et conseille en site occupé qui permettent d’assurer la
            pérennité du patrimoine et de procurer confort aux locataires et 
            bonne gestion pour ses clients Des collaborateurs spécialisés et
            qualifiés dans leur corps de métiers respectif qui répondront à vos
            attentes pour l’ensemble de vos travaux d’entretient de manière
            rapide et efficace. Notre organisation nous permet de prévoir une
            équipe prête à intervenir pour traiter les interventions urgentes en
            simultanées dans un délai extrêmement court. Nous sommes en mesure
            de pratiquer des  d’interventions d’entretien  sur matériaux
            contenant de l’amiante (article R4412-144 du Code du Travail). Nous
            disposons des modes opératoires pour intervenir en toute sécurité
            lors de la présence de matériaux amiantés dans le cadre de la sous
            section 4.
          </p>
          <ul>
            <li>Maçonnerie</li>
            <li>Plomberie - Chauffage</li>
            <li>Carrelage - Faïence</li>
            <li>Ravalement – isolation extérieur</li>
            <li>Plâtrerie – isolation intérieur</li>
            <li>Éléctricité</li>
            <li>Revêtement de sol</li>
            <li>Menuiserie</li>
            <li>Peinture</li>
          </ul>
        </div>
      </section>

      {/* VOIRIE ET RÉSEAUX DIVERS */}
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden card">
          <Image
            src="/exterieur.jpg"
            alt="VOIRIE ET RÉSEAUX DIVERS"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 600px, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-sybatDark">
            Voirie et réseaux divers
          </h2>
          <p className="mt-3 opacity-85">
            Nos multiples compétences nous permettent d’assurer tous les types
            d’ouvrages nécessaires, notamment les travaux de VRD.
          </p>
          <h4>Les travaux de VRD réalisés par SYBAT :</h4>
          <ul>
            <li>Les terrassements généraux des voies et des trottoirs</li>
            <li>
              Remplacement des réseaux d’évacuations EU /EV/EP et alimentations
              EF, EC et chauffage
            </li>
            <li>La pose de bordures béton en limite de voirie</li>
            <li>La réalisation des revêtements de chaussée et de trottoirs</li>
            <li>
              La mise en place de la signalisation verticale (panneaux) et
              horizontale (marquage au sol)
            </li>
          </ul>
        </div>
      </section>

      {/* PMR : Adaptation Personnes à Mobilité Réduite */}
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div className="md:order-last relative w-full aspect-[4/3] rounded-2xl overflow-hidden card">
          <Image
            src="/imgAccessibilite1.jpg"
            alt="PMR : Adaptation Personnes à Mobilité Réduite"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 600px, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-sybatDark">
            PMR : Adaptation Personnes à Mobilité Réduite
          </h2>
          <div>
            <h3 className="font-bold">Adaptation de logement PMR</h3>
            <p className="mt-3 opacity-85">
              Depuis plus de 15 ans,  SYBAT est spécialisé dans l’adaptation de
              logement pour personne à mobilité réduite ou en situation de
              handicap. SYBAT est titulaire du label « HANDIBAT » justifiée par
              une formation et son expérience, s’engage à respecter un règlement
              d’usage de marque et une Charte. Pour tout adaptation, nous
              effectuons une étude gratuite à votre domicile pour détermine la
              meilleure solution d’aménagement possible en fonction de vos
              besoins.
            </p>
            <ul>
              <li>Douche à l’italienne</li>
              <li>WC PMR</li>
              <li>Rampe d’accès</li>
              <li>Élargissement de porte</li>
              <li>Pose de monte escalier</li>
              <li>Installation de cuisine adaptée</li>
              <li>Automatisation de portes, portails et fenêtres</li>
              <li>Amélioration des revêtements de sol</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">
              La législation pour l’accessibilité : Loi “Handicap”
            </h3>
            <p>
              Le volet IV de la « Loi pour l’égalité des droits et des chances,
              la participation et la citoyenneté des personnes handicapées »
              du 11 février 2005 a déterminé les obligations d’accessibilité des
              bâtiments aux handicapés, qu’il s’agisse de l’entrée, de
              l’ascenseur ou des parties communes. La notion
              d’accessibilité concerne de nombreux domaines, la circulation dans
              les bâtiments, l’utilisation des équipements (sanitaires etc…) ou
              les accès. En effet, aujourd’hui encore, beaucoup de bâtiments
              collectifs n’ont pas été mis aux normes et restent inaccessibles
              aux personnes handicapées. La mise aux normes de l’accessibilité
              initialement prévue au 1er janvier 2015 ne pouvant pas être
              respectée, un délai supplémentaire pouvant aller jusqu’à 9 ans a
              été accordé pour l’accessibilité des bâtiments, des voiries, des
              transports … Rendre accessible un immeuble en l’aménageant de
              manière à fournir un accès aisé pour que les personnes à mobilité
              réduite ou mal voyantes puissent garder leur autonomie peut se
              faire de nombreuses manières. Parties communes d’un immeuble
              ou parties privées, les solutions sont nombreuses. Qu’est-ce que
              l’aménagement pour l’accessibilité des personnes handicapées ou
              âgées à mobilité réduite ? Quelles sont les normes à respecter ?
            </p>
          </div>
        </div>
      </section>

      {/* REL : REMISE EN L'ÉTAT */}
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden card">
          <Image
            src="/couloir.jpg"
            alt="REL : REMISE EN L'ÉTAT"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 600px, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-sybatDark">
            REL : Remise en l'état
          </h2>
          <p className="mt-3 opacity-85">
            La remise en état de logements prend des formes très diverses. Les
            opérations de maintenance portent par exemple sur le remplacement
            d’équipements tels que : poignées de portes, serrures, tringles à
            rideaux, faïence et carrelage.
          </p>
          <h3 className="font-bold">
            {" "}
            Pourquoi remettre en état un bien immobilier ?{" "}
          </h3>
          <p>
            Entre 2 locataires, à la suite d’un sinistre ou avant mise en vente,
            le propriétaire d’un actif immobilier (appartement ou maison) a tout
            intérêt à assurer une remise en état de son bien. Cette remise en
            état permet en effet de garantir la pérennité(infiltration d’eau),
            la sécurité (électricité et gaz) et l’hygiène (amiante et plomb) du
            bien. Elle peut aussi faciliter la location ou la vente du bien en
            améliorant sa perception par le futur locataire ou acheteur
            (décoration-embellissement).
          </p>
          <h3 className="font-bold">Comment ça se passe avec Sybat ?</h3>
          <p>
            Que vous soyez un bailleur professionnel, un assureur ou un
            particulier, lorsque vous faites appel à Sybat pour la remise en
            état d’un logement nous vous offrons simplicité, sécurité et
            rapidité :
          </p>
          <ul>
            <li>
              Simplicité : Prenez contact directement avec nos collaborateurs et
              nous vous faisons un retour dans les plus brefs délais.
            </li>
            <li>
              Accompagnement : Nous vous accompagnons sur la durée pour tous vos
              besoins.
            </li>
            <li>
              Rapidité : Vous n’avez pas à coordonner les travaux et vous êtes
              informés en continue de leur avancement, (Espace Mon Compte)
            </li>
            <li>
              Sécurité : Nous garantissons la sécurité de tous vos travaux en
              vous fournissant tous les éléments nécessaires au suivit d’après
              chantier. .
            </li>
          </ul>
          <h3 className="front-bold"></h3>
          <p>
            Techniciens de confiance : Nous maîtrisons en interne tous les corps
            d’état nécessaires à la remise en état de votre logement. Matériels
            de qualité : Les matériels sont de première qualité et conformes à
            ce qui est décrit dans le catalogue des prestations grâce à nos
            partenariats avec les plus grands fabricants.
          </p>
        </div>
      </section>
    </main>
  );
}

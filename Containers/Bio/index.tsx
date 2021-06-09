import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'
import {Icons} from "../../Resources";

const Wrapper = styled.div`

    #navigation{
    
        position : absolute;
        right : 2vw;
        top : 2em;
        
        display : flex;
    }
    
    #navigation > *{
        
        font-size : 1rem;
        
        transition : all 0.5s;
        
        margin-left : 1em;
    }
    
    #navigation > *:hover{    
        color : rgb(0,0,0,0.1);
        transition : all 0.5s;
    }
    
    max-width : 40%;
    
    @media (orientation: portrait) {
        max-width : 100%;
        font-size  0.9em;
    }
`

class Bio extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Wrapper>
                
                <span id="navigation">
                    <a id='exit' href="#"><Icons i={'close'}/></a>
                </span>
                <h3>Parcours</h3>

                <p>Alessia Sanna est née le 22 juillet 1995 à Mulhouse. Sa vocation pour les arts plastiques se dessine
                    très tôt et à 15 ans, elle choisit de s’orienter dans une filière littéraire et artistique. En 2013,
                    elle se rend à Strasbourg où, durant 5 ans, elle suit un cursus universitaire afin de devenir
                    artiste chercheuse.</p>

                <p>Durant cette période, elle développe sa pratique sculpturale, qu’elle hybride au numérique et
                    s’interroge sur un rapport au monde façonné par les technologies de l’information et de la
                    communication. Ces expérimentations transparaissent pour la première fois à travers une série
                    d’œuvres prenant pour laboratoire de recherche Google Trends. S’en suit la création de l’œuvre
                    Screen City_Mockup, récompensée par le Prix Paris 1 Panthéon Sorbonne pour l’art contemporain.</p>

                <p>En 2018, à la suite de l’obtention de son diplôme, elle poursuit ses recherches et intègre en janvier
                    2019 la première promotion de l’incubateur culturel FLUXUS pour y développer le projet Screen
                    City_Mockup. Encadrée au Shadok, cette année représente pour Alessia Sanna un moment charnière dans
                    le lancement de sa carrière.</p>

                <p>Marquée par ces rencontres ; ces moments clefs lui permettent pour la première fois de travailler à
                    partir de données territoriales avec des ambitions techniques plus poussées. L’approfondissement de
                    sa pratique et l’accès à de nouveaux outils transforment alors l’œuvre Screen City_Mockup et donnent
                    lieu à la création de Screen City_Strasbourg dont l’exposition est prévue en septembre 2021 au
                    festival Ososphère.</p>

                <p>Dans la continuité de son projet artistique, elle nourrit aujourd’hui son regard sur l’art numérique
                    qu’elle considère, à son sens, être un art du nombre.</p>

                <h3>Démarche</h3>

                <p>Depuis une approche poétique et critique des Big Data, la pratique artistique d’Alessia Sanna
                    s’affirme par la réappropriation de données extraite de leurs contextes numériques. À ce regard
                    sublimé que pose l’artiste sur les mémoires virtuelles, s’articule une vision consciente, parfois
                    inquiète, sur la traçabilité de nos empreintes numériques.</p>

                <p>Creusant les Open Data, sondant les bases de données, la métaphore et l’analogie occupent une place
                    significative dans les procédés qu’elle met en œuvre lors de fouilles, modélisations et
                    visualisations de données. Hybridant des méthodologies mêlant Science des données et Archéologie,
                    son travail s’empare de nos empreintes numériques pour produire de nouveaux récits sur l’humain à
                    l’heure du digital, en exploitant leurs dimensions temporelles, géographiques et quantitatives.</p>

                <p>Ces différentes dimensions représentent des corpus de traces dématérialisées, composées de propriétés
                    et de valeurs spécifiques dont l’artiste se sert pour établir ses propres mesures du monde, qu’elle
                    fossilise ensuite par le geste artistique. Une fois séquencées et rendues quantifiables par
                    l’artiste, ces unités métriques mémorielles tendent à rendre palpables certains comportements
                    complexes a priori abstraits.</p>

                <p>Cultivant la charge sémantique et sensorielle des données, l’artiste « fouilleuse » s’inspire ainsi
                    de l’ichnologie* et des pratiques d’encodage et de déchiffrage dans les formes discursives qu’elle
                    produit, dont la traduction sensorielle s’opère autour de figures géométriques solides accumulées et
                    définies dans l’espace.</p>

                <p>Cette traduction géométrique des données du réel est pour elle un moyen de convertir des valeurs
                    numériques en formes hiérarchisées dont les caractéristiques esthétiques dépendent d’attributs et
                    d’ordres de grandeur informationnels. À partir de ces grilles de lecture construites par l’artiste,
                    l’organisation et la classification des éléments dans leur ensemble créent des formes déracinées de
                    leur contexte numérique, dont l’accumulation agit comme un filtre à partir duquel se manifestent de
                    nouvelles dimensions sensibles des data.</p>

                <p>Positionnée aux frontières du sculptural et du numérique, l’artiste révèle et dissimule délibérément
                    certaines facettes des données et manipule les chiffres à travers la simulation et la fiction afin
                    d’interroger sur les clés de lectures du monde sensible.</p>


            </Wrapper>
        );
    }
}

export default Bio
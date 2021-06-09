import * as React from 'react'
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

   td{
        padding : 0.5em;
        vertical-align: top;
   }
   td > p {
        margin : 0.2em;
        font-size : 0.9em;
   }
   
   .contact , .contact p{
        font-size : 0.9em;
        display : grid;
        margin : 0rem;
        padding : 0rem;
    }
    
    
@media (orientation: portrait) {
    td {
        min-width : 20vw;
    }
    td p{
    }
}
`

class CV extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <Wrapper>
                
                <span id="navigation">
                    <a id='exit' href="#"><Icons i={'close'}/></a>
                </span>

                <h3>CURRICULUM VITAE </h3>
                <div className={"contact"}>
                    <a href={"mailto:a.sannaprojects@gmail.com"}>
                        a.sannaprojects@gmail.com
                    </a>
                    <a href={"phone:+336 740 025 70"}>
                        +33 6.74.00.25.70
                    </a>
                    <p>
                        Strasbourg 67100
                    </p>
                </div>
                <h3>PARCOURS </h3>

                <h5>EXPOSITIONS PERSONNELLES</h5>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <p>2021</p>
                        </td>
                        <td>
                            <p>
                                <em>Screen City_Strasbourg</em> (à venir)
                            </p>
                            <p>
                                &gt; 09/2021
                            </p>
                            <p>
                                Strasbourg, Festival Ososphère
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>2019</p>
                        </td>
                        <td>
                            <p>
                                <em>Screen City</em> – Étape de recherche
                            </p>
                            <p>
                                &gt; du 18/06 au 03/10
                            </p>
                            <p>
                                Commissariat d’exposition : Yann Toma
                            </p>
                            <p>
                                Paris, Sorbonne Art Gallery
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td><p>2018</p>
                        </td>
                        <td>
                            <p>
                                <em>Screen City </em>– Étape de recherche
                            </p>
                            <p>
                                &gt; du 30/08 au 02/09
                            </p>
                            <p>
                                Strasbourg, AEDAEN Gallery
                            </p>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <h5>EXPOSITIONS COLLECTIVES</h5>
                <table>
                    <tbody>
                    <tr>
                        <td><p>2019</p>
                        </td>
                        <td>
                            <p>
                                <em>Résistances</em>
                            </p>
                            <p>
                                &gt; du 07/03 au 16/03
                            </p>
                            <p>
                                Strasbourg, Palais Universitaire – Cryogénie
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td><p>2017</p>
                        </td>
                        <td>
                            <p>
                                Retour de Bataville – Faire Société
                            </p>
                            <p>
                                &gt; du 27/03 au 30/03
                            </p>
                            <p>
                                Commissariat d’exposition : Le Laboratoire des Hypothèses
                            </p>
                            <p>
                                Metz, Théâtre du Saulcy
                            </p>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <h5>RÉSIDENCE</h5>
                <table>
                    <tbody>
                    <tr>
                        <td><p>2019</p>
                        </td>
                        <td>
                            <p>
                                Résidence de recherche – Ensembles 2.2
                            </p>
                            <p>
                                <em>Screen City_Paris </em>
                                – (Étape de recherche/ Installation)
                            </p>
                            <p>
                                Strasbourg, Le Shadok
                            </p>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <h5>PUBLICATIONS / INTERVENTIONS</h5>
                <table>
                    <tbody>
                    <tr>
                        <td><p>2020</p>
                        </td>
                        <td>
                            <p>
                                <em>Art &amp; Mathématiques </em>
                            </p>
                            <p>
                                <em>
                                    Modélisations mathématiques et transformations artistiques des données
                                    du réel.
                                </em>
                            </p>
                            <p>
                                En coédition avec l'université Paris-I Panthéon-Sorbonne 280 pages (ill.),
                                broché
                            </p>
                            <p>
                                Contribution : <em>Screen City, figure paysagère de la ville intelligente</em>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td><p>2019</p>
                        </td>
                        <td>
                            <p>
                                Intervention – <em>Réaliser des œuvres d’art à partir des données des villes </em>
                            </p>
                            <p>
                                &gt; 17/10
                            </p>
                            <p>
                                Jedi open data BPCE – 89c3
                            </p>
                            <p>
                                Metz, BLIIIDA
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td><p>2019</p>
                        </td>
                        <td>
                            <p>
                                Conférence croisée avec Denise Pumain
                            </p>
                            <p>
                                Géographe et Professeur émérite des universités
                            </p>
                            <p>
                                &gt; 02/10
                            </p>
                            <p>
                                Paris, Université Panthéon Sorbonne
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td><p>2019</p>
                        </td>
                        <td>
                            <p>
                                Membre du jury pour le prix
                                <em>
                                    Paris Panthéon Sorbonne pour l’Art Contemporain (3<sup>e</sup> édition)
                                </em>
                            </p>
                            <p>
                                <em> </em>
                                &gt; 12/01
                            </p>
                            <p>
                                Paris, Bastille Design Center
                            </p>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <h5>PRIX </h5>
                <table>
                    <tbody>
                    <tr>
                        <td><p>2020</p>
                        </td>
                        <td>
                            <p>
                                Soutien de la région Grand Est pour la réalisation de
                                l’œuvre <em>Screen City_Strasbourg</em>
                            </p>
                            <p>
                                (AMI création numérique Strasbourg)
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td><p>2018</p>
                        </td>
                        <td>
                            <p>
                                Lauréate du prix <em>Paris Panthéon Sorbonne pour l’art Contemporain</em>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td><p>2016</p>
                        </td>
                        <td>
                            <p>
                                Lauréate du prix régional CROUS - catégorie peinture (thème lumière)
                            </p>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p>
                    <strong></strong>
                </p>

                <h5>FORMATIONS</h5>

                <table>
                    <tbody>
                    <tr>
                        <td><p>2019</p>
                        </td>
                        <td>
                            <p>
                                Incubateur culturel Fluxus
                            </p>
                            <p>
                                Certification
                            </p>
                            <p>
                                Région Grand Est
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td><p>2018</p>
                        </td>
                        <td>
                            <p>
                                Master recherche Arts Plastiques
                            </p>
                            <p>
                                Mention Bien
                            </p>
                            <p>
                                Palais Universitaire
                            </p>
                            <p>
                                67000 Strasbourg
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td><p>2016</p>
                        </td>
                        <td>
                            <p>
                                Licence Arts Plastiques
                            </p>
                            <p>
                                Mention assez bien
                            </p>
                            <p>
                                Palais Universitaire
                            </p>
                            <p>
                                67000 Strasbourg
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td><p>2013</p>
                        </td>
                        <td>
                            <p>
                                Baccalauréat Littéraire - Option lourde Arts Plastiques
                            </p>
                            <p>
                                Mention Assez bien
                            </p>
                            <p>
                                Lycée Albert Schweitzer
                            </p>
                            <p>
                                68120 Mulhouse
                            </p>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p>
                    <strong></strong>
                </p>
            </Wrapper>
        );
    }
}

export default CV 
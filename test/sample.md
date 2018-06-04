---
equipemoa: cartapus
nomcode: antiseche
groupetd: 2p
guide: http://prodageo.insa-rouen.fr/wiki/pmwiki.php?n=FilRouge.RedigerCdc
---

# I	Fondements du projet
## 1. But du projet

### a. Problème de al’utilisateur ou contexte du projet 
  Nous avons constaté que lorsqu'un étudiant tombe malade, il se retrouve avec tout un tas de choses à faire alors même qu'il n'est pas en état de sortir de son lit. En effet un étudiant malade doit trouver un moyen de récupérer les cours, trouver un médecin, aller chercher les médicament adaptés et enfin se procurer un justificatif qu'il faut ensuite parvenir à transmettre à l'administration. Dans une telle situation il peut facilement se sentir seul tout particulièrement pour les nouveaux arrivants qui ne connaissent ni la ville ni les autres étudiants.
  Actuellement de nombreux étudiants ne gèrent pas bien la situation lorsqu'ils sont malades ce qui mène à des absences injustifiées, des cours mal voir pas rattrapés ou encore des maladies pas traitées correctement.
  
### b. Objectifs du projet
  Considérant ce problème nous voulons mettre en place une application facilitant la prise en charge des absences afin qu'elles soient traîtées correctement.
  
## 2. Personnes et organismes impliqués dans les enjeux du projet 
### a. Maître d’ouvrage
  Le Maître d’ouvrage de ce projet est l’équipe MOA Cartapus
### b. Acheteur
  L’acheteur du service terminé est l’INSA de Rouen.
### c. Autre parties prenantes
  N/A
## 3. Utilisateurs du produit

### a.	Utilisateurs directs du produit
  Les utilisateurs directes de ce produit sont essentiellement les étudiants de l'INSA Rouen. Il s'agit par conséquent de jeunes agés de 18 à 25 ans. Ils sont donc à l'aise avec la technologie et Internet.
  
### b. Priorité assignée aux utilisateurs
N/A
### c. Implication nécessaire de la part des utilisateurs dans le projet
Les utilisateurs devront aider dans la mesure du possible les absents signalés par l'application. Il leur suffira de choisir une action (prendre les cours, aller chercher les médicaments...) et de la signaler grâce à la plateforme fournie.

### d. Utilisateurs concernés par les opérations de maintenance du produit
Les utilisateurs n'auront qu'à s'inscrire et paramètrer leur profil en indiquant quelques informations essentielles : nom, prénom, département, lieu de résidence, etc. Ils auront à mettre à jour ses informations lors d'un changement de situation.
# II	Contraintes sur le projet 
## 4. Contraintes non négociables
### a. Contraintes sur la conception de la solution
  Le produit doit pouvoir fonctionner sous Androïd et IOS.
### b. Environnement de fonctionnement du système actuel
### c. Applications « partenaires » (avec lesquelles le produit doit collaborer)
N/A
### d. « COTS » : Progiciels ou composants commerciaux
N/A
### e. Lieux de fonctionnement prévus
  Le produit pourra être utilisé n'importe où tant qu'une connexion internet est possible. Que ce soit à domicile ou sur le lieu de travail (en l'occurrence, l'INSA), les utilisateurs doivent à tout moment être en mesure d'accéder aux services de l'application.
### f. De combien de temps les développeurs disposent-ils pour le projet ?
  Un délai de 3 mois est acceptable pour une première version de la solution.
### g. Quel est le budget affecté au projet ?
  N/A
## 5. Glossaire et conventions de dénomination
  Aucun acronyme n'est utilisé. N/A
## 6. Faits et hypothèses utiles

### a. Facteurs influençant le produit, mais qui ne sont pas des contraintes imposées sur les exigences
  N/A
### b. Hypothèses que l’équipe fait sur le projet 
  N/A
# III	Exigences fonctionnelles
## 7. Portée du travail
### a. La situation actuelle
  Aujourd'hui il n'existe pas de système automatisé d'aide aux absents tel que celui proposé. Lorsqu'un élève est absent, il est (généralement) signalé par l'enseignant. Cette absence remonte à l'administration qui, ensuite, demande un justificatif à l'élève absent. Un tel processus manuel peut prendre du temps et un élève malade peut avoir d'autres choses à gérer. Il en va de même pour le rattrapage des cours, aucune plateforme n'existe à l'heure actuelle.
### b. Contexte du travail
N/A
### c. Division du travail en événements métier
N/A
## 8. Portée du produit (cas d’utilisations)

### a. Limites du produit : diagramme de cas d’utilisation
  ![diagramme aux limites](./dgm_aux_limites.png)
### b. Description sommaire des cas d’utilisation
  Les cas d'utilisations sont définis dans la [liste d'exigences qualifiées](./112.liste_exigences_qualifiees.md)

## 9. Exigences fonctionnelles et exigences sur les données

### a. Exigences fonctionnelles

*Liste d'exigences qualifiées*


# IV	Exigences non fonctionnelles
Annexe

## 10. Ergonomie et convivialité du produit
### a. L’interface
N/A
### b. Le style du produit (packaging inclus)
N/A

## 11. Facilité d’utilisation et facteurs humains 
### a. Facilité d’utilisation

L'application doit être ergonomique, c'est à dire que l'utilisateur doit être capable d'utiliser l'ensemble des fonctionnalités de celle-ci sans avoir besoin d'un tutoriel. Une session d'utilisation ne doit pas dépasser les 3 minutes pour les fonctionnalités liées à la prise en charge d'un étudiant absent (exigences 2, 3, 4, 5 et 13) et 10 minutes pour les fonctionnalités liées à la notification et justification d'une absence (exigences 9, 10, 11 et 12).
De même un utilisateurs occasionnels doit pouvoir accéder aux fonctionnalités qu'il souhaite sans chercher plus d'une minute. 
Des vérifications sont effectuées de telle sorte que l'utilisateur ne commette pas d'erreur, taux d'erreur inférieur à 1%.
L'application doit signaler à l'utilisateur la prise en compte des actions/demandes qu'il serait amené à effectuer.

_Critères de satisfaction_
* 95% des étudiants de l'INSA seront capables de signaler la prise en charge d'un absent en moins de 3 minutes.
* 95% des étudiants de l'INSA seront capables de signaler et justifier une absence en moins de 10 minutes.
* L'usage de l'application par de nouveaux utilisateurs, c'est à dire avec mois d'une semaine d'expérience, sera l'objet de moins de 1% d'erreur.

### b. Personnalisation et internationalisation
L'application doit être disponible en français, anglais, espagnol et chinois.
L'utilisateur peut configurer des plages horaires pendant lesquels il reçoit ou non des notifications. Il peut aussi renseigner des informations le concernant :
* nom
* prénom
* lieu de résidence
* numéro de téléphone
* photo

### c. Facilité d’apprentissage
La prise en main de l'application doit être immédiate pour un étudiant ingénieur agé de 18 à 25 ans.

### d. Facilité de compréhension et politesse
Le produit doit être précis quant au tâches à effectuer lors de la prise en charge d'un étudiant.

### e. Exigences d’accessibilité
Le produit doit pouvoir être utilisé par une personne malade.

## 12. Fonctionnement du produit
### a. Rapidité d’exécution et temps de latence
* L'interface utilisateur aura un temps de réponse maximale de 1 seconde.
* L'actualisation des données sera instantanée afin d'évter les incohérences (deux étudiants qui s'occupe de la même 'mission')

### b. Exigences critiques de sûreté
N/A

### c. Précision et exactitude
Le scan d'une classe d'étudiant ne pourra pas se tromper :
* Il ne déclarera en aucun cas un élève absent alors que celui ci est bien présent.
* Il repèrera un élève absent dans au moins 98% des cas.

### d. Fiabilité et disponibilité
* Le produit sera disponible 24 heures par jour, pendant les périodes d'ouverture de l'INSA.
* La communication avec le personnel soignant sera disponible du lundi au vendredi, de 8h à 17h.
* La durée maximale admissible entre deux pannes sera de deux semaines.

### e. Robustesse ou tolérance à un emploi erroné
N/A

### f. Capacité de stockage et montée en charge
* Le produit pourra stocker les informations concernant jusqu'à 2500 utilisateurs.
* Le système servira simultanément jusqu'à 350 personnes.
* Les informations concernant un utilisateur pourront faire jusqu'à 3Mo.

### g. Adaptation du produit à une augmentation de volume à traiter
* Le produit pourra servir simultanément 5000 personnes dans les 2 années qui suivront sont lancement.
* Le produit pourra stocker les information concernant jusqu'à 20000 utilisateurs dans les deux années qui suivront sont lancement.
* L'application pourra être étendue à l'ensemble des INSA dans les 2 ans qui suivront son lancement.

### h. Longévité
* L'application devra fonctionner correctement dans les limites du budget alloué pour la maintenance pendant au moins 10 ans.

## 13. Adéquation du produit avec son environnement
### a. Environnement physique prévu
N/A
### b. Environnement technologique prévu
N/A
### c. Applications « partenaires » (avec lesquelles le produit doit collaborer) 
N/A
### d. Approche « produit » prêt à être commercialisé
N/A

## 14. Maintenance, support, portabilité, installation du produit
### a. Maintenance du produit 
N/A
### b. Conditions spéciales concernant la maintenance du produit
N/A
### c. Exigences en matière de support
N/A
### d. Exigences de portabilité
N/A
### e. Installation du système
N/A

## 15. Sécurité
### a. Accès au système
N/A
### b. Intégrité
N/A
### c. Protection des données à caractère personnel
N/A
### d. Audit et traçabilité
N/A
### e. Protection contre les infections
N/A

## 16. Exigences culturelles et politiques 
### a. Exigences culturelles
N/A
### b Exigence politiques
N/A

## 17. Lois et standards influençant le produit
### a. Conformité avec la loi
N/A
### b. Conformité avec des standards
N/A
